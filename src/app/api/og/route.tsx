import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // Get title and description from the URL query params
    const title = searchParams.get("title");
    const description = searchParams.get("description");
    const site = searchParams.get("site");
    
    // Theme colors mapping
    const themeColors = {
      tubemagnet: "#0060FB",
      bolderbook: "#8B5CF6", 
      earforge: "#7E5BF6",
      instalever: "#10B981",
      xgrowlab: "#333333",
      streameredge: "#EF4444",
      omgtok: "#EC4899"
    };
    
    const backgroundColor = site && themeColors[site as keyof typeof themeColors] || "#0060FB";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "80px",
            background: `linear-gradient(135deg, ${backgroundColor} 0%, ${backgroundColor}dd 100%)`,
            position: "relative",
          }}
        >
          {/* Background pattern */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage:
                "radial-gradient(circle at 25px 25px, rgba(255,255,255,0.1) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(255,255,255,0.1) 2%, transparent 0%)",
              backgroundSize: "100px 100px",
            }}
          />
          
          {/* Content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              zIndex: 1,
            }}
          >
            <div
              style={{
                fontSize: 72,
                fontStyle: "normal",
                fontWeight: "bold",
                color: "white",
                marginBottom: 40,
                whiteSpace: "pre-wrap",
                lineHeight: 1.1,
                maxWidth: "900px",
                textShadow: "0 4px 20px rgba(0,0,0,0.3)",
              }}
            >
              {title}
            </div>
            {description && (
              <div
                style={{
                  fontSize: 32,
                  fontStyle: "normal",
                  color: "rgba(255,255,255,0.9)",
                  whiteSpace: "pre-wrap",
                  lineHeight: 1.3,
                  maxWidth: "800px",
                  textShadow: "0 2px 10px rgba(0,0,0,0.2)",
                }}
              >
                {description}
              </div>
            )}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
