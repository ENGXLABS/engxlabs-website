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
  /** Size of the X mark icon embedded in the wordmark (px). Match to ~80% of font-size. */
  markSize?: number;
  textSize?: string;
  variant?: "primary" | "blue";
}

/**
 * Full ENGXLABS logo — ENG + [X mark icon] + LABS inline.
 * The X mark replaces the letter X so there is only one X in the lockup.
 */
export function Logo({ className, markSize = 14, textSize = "text-lg", variant = "blue" }: LogoProps) {
  const textColor = variant === "blue" ? "text-white" : "text-white";
  return (
    <span
      className={`inline-flex items-center select-none ${className ?? ""}`}
      aria-label="ENGXLABS"
    >
      <span
        className={`${textSize} font-extrabold leading-none inline-flex items-center`}
        style={{ fontFamily: "'Outfit', system-ui, sans-serif", letterSpacing: "-0.3px" }}
      >
        <span className={textColor}>ENG</span>
        <LogoMark size={markSize} color="#3B82F6" className="mx-[2px] flex-shrink-0" />
        <span className={textColor}>LABS</span>
      </span>
    </span>
  );
}

