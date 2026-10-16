import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(join(process.cwd(), "public/logo-1024.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(245,166,35,0.16), transparent 60%), #05080C",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            marginBottom: 36,
          }}
        >
          <img
            src={logoSrc}
            width={64}
            height={64}
            alt=""
            style={{ borderRadius: 14 }}
          />
          <div style={{ color: "#F8FAFC", fontSize: 30, fontWeight: 600 }}>
            Primale
          </div>
        </div>
        <div
          style={{
            color: "#F8FAFC",
            fontSize: 64,
            fontWeight: 700,
            letterSpacing: -2,
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          Optimize your testosterone, for real
        </div>
        <div
          style={{
            color: "#94A3B8",
            fontSize: 28,
            marginTop: 24,
            maxWidth: 800,
          }}
        >
          Monthly at-home blood tests. Personalized protocols. Track what works.
        </div>
      </div>
    ),
    { ...size },
  );
}
