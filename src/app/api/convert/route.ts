import { NextRequest, NextResponse } from "next/server";
import { createClient } from "redis"

const redis =  await createClient({ url: process.env.REDIS_URL }).connect();

export async function GET(request: NextRequest) {
  const puppeteerCore = await import("puppeteer-core");
  const puppeteer = await import("puppeteer");
  
  // Check if we're in production (Vercel) or local development
  const isProduction = process.env.NODE_ENV === "production" || process.env.VERCEL;
  
  const { searchParams } = new URL(request.url);
  const urlParam = searchParams.get("url");
  const cacheReset = searchParams.get("cacheReset") === "true";
  const viewportParam = searchParams.get("viewport") || "desktop";
  
  // Log the original and decoded URL for debugging
  console.log("Original URL param:", searchParams.toString());
  console.log("Decoded URL param:", urlParam);
  
  if (!urlParam) {
    return new NextResponse("Please provide a URL.", { status: 400 });
  }

  // Validate viewport parameter
  const validViewports = ["desktop", "mobile"];
  if (!validViewports.includes(viewportParam)) {
    return new NextResponse("Viewport must be 'desktop' or 'mobile'.", { status: 400 });
  }

  // Prepend http:// if missing and handle any additional encoding issues
  let inputUrl = urlParam.trim();
  
  // Additional decode in case of double encoding
  try {
    inputUrl = decodeURIComponent(inputUrl);
  } catch (e) {
    // If decode fails, use the original URL
    console.log("Failed to decode URL, using original:", inputUrl);
  }
  
  if (!/^https?:\/\//i.test(inputUrl)) {
    inputUrl = `http://${inputUrl}`;
  }

  // Validate the URL is a valid HTTP/HTTPS URL
  let parsedUrl: URL;
  try {
    parsedUrl = new URL(inputUrl);
    if (parsedUrl.protocol !== "http:" && parsedUrl.protocol !== "https:") {
      return new NextResponse("URL must start with http:// or https://", {
        status: 400,
      });
    }
  } catch {
    return new NextResponse("Invalid URL provided.", { status: 400 });
  }

  parsedUrl.searchParams.set("skipRender", "true");

  const storageKey = parsedUrl.hostname + parsedUrl.pathname;

  if (cacheReset) {
    await redis.del(storageKey);
  } else {
    const cachedHtml = await redis.get(storageKey);
  
    if (cachedHtml) {
      return new NextResponse(cachedHtml, {
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          "Cache-Control": "no-cache",
        },
      });
    }
  }

  let browser;
  try {
    let launchOptions: any = {};

    if (isProduction) {
      // Use @sparticuz/chromium for production/Vercel
      const chromium = (await import("@sparticuz/chromium")).default;
      launchOptions = {
        args: chromium.args,
        executablePath: await chromium.executablePath(),
      };
      browser = await puppeteerCore.launch(launchOptions);
    } else {
      // Use regular puppeteer for local development
      launchOptions = {
        headless: true,
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage',
          '--disable-accelerated-2d-canvas',
          '--no-first-run',
          '--no-zygote',
          '--disable-gpu'
        ]
      };
      browser = await puppeteer.launch(launchOptions);
    }
    
    const page = await browser.newPage();
    
    // Set viewport based on parameter
    if (viewportParam === "desktop") {
      // Full HD desktop viewport
      await page.setViewport({
        width: 1920,
        height: 1080,
        deviceScaleFactor: 1,
      });
    } else if (viewportParam === "mobile") {
      // Mobile viewport (iPhone 14/15/16 size)
      await page.setViewport({
        width: 390,
        height: 844,
        deviceScaleFactor: 3,
        isMobile: true,
        hasTouch: true,
      });
    }

    console.log("Navigating to the page", parsedUrl.toString());
    
    // Navigate to the page and wait for it to load
    await page.goto(parsedUrl.toString(), {
      waitUntil: "domcontentloaded",
      timeout: 30000,
    });

    console.log("Page loaded");
    
    // Wait a bit more to ensure all dynamic content is loaded
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Inject and execute the text-to-image conversion script
    await page.evaluate(() => {
      function replaceAllTextWithWordImages() {
        function processNode(el: Element) {
          el.childNodes.forEach((child: ChildNode) => {
            if (child.nodeType === Node.TEXT_NODE) {
              const text = child.textContent;
              if (!text?.trim()) return; // skip empty/whitespace

              const parentStyle = window.getComputedStyle(el);
              const font = `${parentStyle.fontStyle} ${parentStyle.fontVariant} ${parentStyle.fontWeight} ${parentStyle.fontSize} ${parentStyle.fontFamily}`;
              const color = parentStyle.color;

              // Split into words (keep spaces separately)
              const parts = text.split(/(\s+)/);

              const frag = document.createDocumentFragment();

              parts.forEach((part: string) => {
                if (part.trim() === "") {
                  // Spaces → keep them as text
                  frag.appendChild(document.createTextNode(part));
                } else {
                  // Word → render into canvas first
                  const canvas = document.createElement("canvas");
                  const ctx = canvas.getContext("2d");

                  if (!ctx) return; // Skip if context is null

                  ctx.font = font;
                  const metrics = ctx.measureText(part);
                  const height = parseInt(parentStyle.fontSize, 10) || 16;

                  canvas.width = Math.ceil(metrics.width);
                  canvas.height = Math.ceil(height * 1.2);

                  ctx.font = font;
                  ctx.fillStyle = color;
                  ctx.textBaseline = "top";
                  ctx.fillText(part, 0, 0);

                  // Convert canvas to image
                  const img = document.createElement("img");
                  img.src = canvas.toDataURL("image/png");
                  img.loading = "eager";

                  // Style like inline text
                  img.style.display = "inline-block";
                  img.style.verticalAlign = "baseline";

                  frag.appendChild(img);
                }
              });

              child.replaceWith(frag);

            } else if (child.nodeType === Node.ELEMENT_NODE) {
              // Skip script/style tags
              if ((child as Element).tagName !== "SCRIPT" && (child as Element).tagName !== "STYLE") {
                processNode(child as Element);
              }
            }
          });
        }

        processNode(document.body);
      }

      // Run it
      replaceAllTextWithWordImages();
    });
    
    // Wait a bit for the conversion to complete
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    // Get the modified HTML content
    const modifiedHtml = await page.content();
    await redis.set(storageKey, modifiedHtml);

    console.log("Modified HTML length:", modifiedHtml.length);
    
    return new NextResponse(modifiedHtml, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "no-cache",
      },
    });
  } catch (error) {
    console.error(error);
    return new NextResponse(
      "An error occurred while converting text to images.",
      { status: 500 }
    );
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}
