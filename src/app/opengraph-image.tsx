import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ENGXLABS — AI Native Engineering & Transformation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0A0A",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Blue ambient glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -60%)",
            width: 600,
            height: 400,
            background: "radial-gradient(ellipse, rgba(59,130,246,0.12) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(59,130,246,0.12)",
              border: "1px solid rgba(59,130,246,0.3)",
              borderRadius: 999,
              padding: "8px 20px",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#3B82F6",
              }}
            />
            <span
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: "#3B82F6",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              AI Native Engineering & Transformation
            </span>
          </div>

          {/* Wordmark */}
          <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
            <span
              style={{
                fontSize: 80,
                fontWeight: 900,
                color: "#F8F8F8",
                letterSpacing: "-2px",
                lineHeight: 1,
              }}
            >
              ENG
            </span>
            {/* X mark */}
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              style={{ margin: "0 4px", flexShrink: 0 }}
            >
              <rect
                x="27.2"
                y="-19.2"
                width="14.4"
                height="102.4"
                fill="#3B82F6"
                transform="rotate(45 32 32)"
              />
              <rect
                x="27.2"
                y="-19.2"
                width="14.4"
                height="102.4"
                fill="#3B82F6"
                transform="rotate(-45 32 32)"
              />
            </svg>
            <span
              style={{
                fontSize: 80,
                fontWeight: 900,
                color: "#F8F8F8",
                letterSpacing: "-2px",
                lineHeight: 1,
              }}
            >
              LABS
            </span>
          </div>

          {/* Tagline */}
          <p
            style={{
              fontSize: 24,
              color: "#A1A1AA",
              fontWeight: 400,
              margin: 0,
              letterSpacing: "-0.3px",
            }}
          >
            Build an AI Native Business
          </p>
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 16,
            color: "#52525B",
            letterSpacing: "0.05em",
          }}
        >
          engxlabs.com
        </div>
      </div>
    ),
    { ...size }
  );
}
