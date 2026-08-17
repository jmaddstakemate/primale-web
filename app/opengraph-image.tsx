import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000000",
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
            gap: 16,
            marginBottom: 36,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              background: "#0D9488",
              borderRadius: 14,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            P
          </div>
          <div style={{ color: "#F8FAFC", fontSize: 28, fontWeight: 600 }}>
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
