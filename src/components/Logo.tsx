"use client";
// Shared ENGXLABS logo components — inline SVG mark + HTML wordmark for
// crisp rendering without font-in-SVG limitations.

interface LogoMarkProps {
  size?: number;
  color?: string;
  className?: string;
}

/** The X mark only — use in favicons, avatars, small placements */
export function LogoMark({ size = 24, color = "#3B82F6", className }: LogoMarkProps) {
  const half = size / 2;
  const barW = size * 0.225;
  const barH = size * 1.6;
  const offset = half - barW / 2;
  const top = -(barH - size) / 2;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x={offset} y={top} width={barW} height={barH} fill={color} transform={`rotate(45 ${half} ${half})`} />
      <rect x={offset} y={top} width={barW} height={barH} fill={color} transform={`rotate(-45 ${half} ${half})`} />
    </svg>
  );
}

interface LogoProps {
  className?: string;
  markSize?: number;
  textSize?: string;
  /** "primary" = ENG white / X blue / LABS white  |  "blue" = all white wordmark */
  variant?: "primary" | "blue";
}

/** Full ENGXLABS logo — mark + wordmark rendered as HTML (no font-in-SVG) */
export function Logo({ className, markSize = 22, textSize = "text-lg", variant = "blue" }: LogoProps) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 select-none ${className ?? ""}`}
      aria-label="ENGXLABS"
    >
      <LogoMark size={markSize} color="#3B82F6" />
      <span
        className={`${textSize} font-extrabold tracking-tight leading-none`}
        style={{ fontFamily: "'Outfit', system-ui, sans-serif", letterSpacing: "-0.4px" }}
      >
        {variant === "blue" ? (
          <span className="text-white">ENGXLABS</span>
        ) : (
          <>
            <span className="text-white">ENG</span>
            <span className="text-[#3B82F6]">X</span>
            <span className="text-white">LABS</span>
          </>
        )}
      </span>
    </span>
  );
}

