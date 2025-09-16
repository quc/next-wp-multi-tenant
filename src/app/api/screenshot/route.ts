import { NextRequest, NextResponse } from "next/server";
const puppeteerCore = await import("puppeteer-core");
const puppeteer = await import("puppeteer");

// Check if we're in production (Vercel) or local development
const isProduction = process.env.NODE_ENV === "production" || process.env.VERCEL;

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const urlParam = searchParams.get("url");
  const viewportParam = searchParams.get("viewport") || "desktop";
  const selectorParam = searchParams.get("selector");
  
  if (!urlParam) {
    return new NextResponse("Please provide a URL.", { status: 400 });
  }

  // Validate viewport parameter
  const validViewports = ["desktop", "mobile"];
  if (!validViewports.includes(viewportParam)) {
    return new NextResponse("Viewport must be 'desktop' or 'mobile'.", { status: 400 });
  }

  // Prepend http:// if missing
  let inputUrl = urlParam.trim();
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
    
    await page.goto(parsedUrl.toString(), { waitUntil: "networkidle2" });
    
    let screenshot;
    
    if (selectorParam && selectorParam.trim()) {
      // Wait for the element to be visible
      try {
        await page.waitForSelector(selectorParam.trim(), { timeout: 10000 });
        const element = await page.$(selectorParam.trim());
        if (element) {
          screenshot = await element.screenshot({ type: "png" });
        } else {
          return new NextResponse("Element not found with the provided selector.", { status: 404 });
        }
      } catch (error) {
        return new NextResponse(`Element not found or selector invalid: ${selectorParam}`, { status: 404 });
      }
    } else {
      // Take full page screenshot
      screenshot = await page.screenshot({ 
        type: "png",
        fullPage: true
      });
    }
    
    const filename = `screenshot-${viewportParam}${selectorParam ? `-${selectorParam.replace(/[^a-zA-Z0-9]/g, '_')}` : ''}.png`;
    return new NextResponse(screenshot, {
      headers: {
        "Content-Type": "image/png",
        "Content-Disposition": `inline; filename="${filename}"`,
      },
    });
  } catch (error) {
    console.error(error);
    return new NextResponse(
      "An error occurred while generating the screenshot.",
      { status: 500 }
    );
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}
