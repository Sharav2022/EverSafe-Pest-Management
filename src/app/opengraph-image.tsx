import { ImageResponse } from "next/og";

export const alt = "Ever Safe Pest Management — inspection-led pest control in Mississauga, Ontario";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#102b2c",
          color: "#f6f4ee",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: "#c77644" }} />
          <div style={{ fontSize: 26, letterSpacing: 6, textTransform: "uppercase", fontFamily: "sans-serif", color: "#d8e6d7" }}>
            Ever Safe Pest Management
          </div>
        </div>
        <div style={{ fontSize: 92, lineHeight: 1.02, maxWidth: 900 }}>
          Protect the spaces that matter most.
        </div>
        <div style={{ fontSize: 26, fontFamily: "sans-serif", color: "rgba(246,244,238,0.7)" }}>
          Residential & commercial pest management · Mississauga, Ontario
        </div>
      </div>
    ),
    size
  );
}
