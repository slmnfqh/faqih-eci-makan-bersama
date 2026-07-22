/**
 * FloatingOrnament — SVG decorative elements (hearts, stars, ribbons, sparkles)
 */
import "./FloatingOrnament.css";

export function HeartIcon({ className = "", size = 24, color = "var(--color-maroon)", filled = true, style = {} }) {
  return (
    <svg
      className={className}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? color : "none"}
      stroke={color}
      strokeWidth={filled ? "0" : "1.5"}
      aria-hidden="true"
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

export function HeartOutline({ className = "", size = 28, color = "var(--color-gold)", style = {} }) {
  return (
    <svg
      className={className}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      stroke={color}
      strokeWidth="1.2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M14 24l-1.5-1.36C6.3 17.4 3 14.5 3 10.5 3 7.5 5.5 5 8.5 5c1.8 0 3.5.84 4.6 2.16L14 8.3l.9-1.14C16 5.84 17.7 5 19.5 5 22.5 5 25 7.5 25 10.5c0 4-3.3 6.9-9.5 12.14L14 24z" />
    </svg>
  );
}

export function SparkleIcon({ className = "", size = 20, color = "var(--color-gold)", style = {} }) {
  return (
    <svg
      className={`sparkle ${className}`}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill={color}
      aria-hidden="true"
    >
      <path d="M10 0 L12 7 L20 10 L12 13 L10 20 L8 13 L0 10 L8 7 Z" />
    </svg>
  );
}

export function StarIcon({ className = "", size = 20, color = "var(--color-gold)", style = {} }) {
  return (
    <svg
      className={className}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export function RibbonBow({ className = "", size = 80, style = {} }) {
  return (
    <svg
      className={`ribbon-bow ${className}`}
      style={style}
      width={size}
      height={size * 0.8}
      viewBox="0 0 100 80"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="var(--color-maroon)" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.8">
        {/* Left loop */}
        <path d="M50 35 C35 10, 5 15, 15 35 C25 55, 48 40, 50 35" />
        {/* Right loop */}
        <path d="M50 35 C65 10, 95 15, 85 35 C75 55, 52 40, 50 35" />
        {/* Center knot */}
        <circle cx="50" cy="35" r="3" fill="var(--color-maroon)" />
        {/* Tails */}
        <path d="M47 38 C40 55, 35 70, 30 78" />
        <path d="M53 38 C60 55, 65 70, 70 78" />
      </g>
    </svg>
  );
}

export function RibbonLarge({ className = "", style = {} }) {
  return (
    <svg
      className={`ribbon-large ${className}`}
      style={style}
      width="160"
      height="180"
      viewBox="0 0 100 120"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="var(--color-maroon)" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.7">
        <path d="M50 45 C30 10, -5 20, 10 50 C25 80, 48 55, 50 45" />
        <path d="M50 45 C70 10, 105 20, 90 50 C75 80, 52 55, 50 45" />
        <circle cx="50" cy="45" r="4" fill="var(--color-maroon)" />
        <path d="M46 49 C35 75, 25 100, 15 115" />
        <path d="M54 49 C65 75, 75 100, 85 115" />
      </g>
    </svg>
  );
}

export function RibbonOutline({ className = "", style = {} }) {
  return (
    <svg
      className={`ribbon-outline ${className}`}
      style={style}
      width="180"
      height="200"
      viewBox="0 0 100 120"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="var(--color-maroon)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.3">
        <path d="M50 45 C30 10, -5 20, 10 50 C25 80, 48 55, 50 45" />
        <path d="M50 45 C70 10, 105 20, 90 50 C75 80, 52 55, 50 45" />
        <circle cx="50" cy="45" r="3" fill="transparent" />
        <path d="M46 49 C35 75, 25 100, 15 115" />
        <path d="M54 49 C65 75, 75 100, 85 115" />
      </g>
    </svg>
  );
}

export function EnvelopeIcon({ className = "", size = 60, style = {} }) {
  return (
    <svg
      className={className}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="var(--color-beige)" strokeWidth="1.5" opacity="0.6">
        {/* Envelope body */}
        <rect x="10" y="18" width="40" height="28" rx="3" />
        {/* Flap */}
        <path d="M10 18 L30 34 L50 18" />
        {/* Heart */}
        <path
          d="M30 30 C28 26, 22 26, 22 30 C22 34, 30 38, 30 38 C30 38, 38 34, 38 30 C38 26, 32 26, 30 30"
          fill="var(--color-beige)"
          stroke="none"
          opacity="0.5"
        />
      </g>
    </svg>
  );
}

export function PitaDivider({ className = "", width = 200 }) {
  return (
    <svg
      className={`pita-divider ${className}`}
      width={width}
      height="16"
      viewBox="0 0 200 16"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="var(--color-dusty-red)" strokeWidth="1" opacity="0.6">
        {Array.from({ length: 15 }).map((_, i) => (
          <path
            key={i}
            d={`M${i * 14},8 C${i * 14 + 3},2 ${i * 14 + 7},2 ${i * 14 + 7},8 C${i * 14 + 7},14 ${i * 14 + 11},14 ${i * 14 + 14},8`}
          />
        ))}
      </g>
    </svg>
  );
}

export function SmallStars({ className = "", style = {} }) {
  return (
    <svg
      className={`small-stars ${className}`}
      style={style}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="var(--color-maroon)"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="2" opacity="0.7" />
      <circle cx="20" cy="4" r="1.5" opacity="0.5" />
      <circle cx="32" cy="10" r="2.5" opacity="0.8" />
      <path d="M18 20 L20 14 L22 20 L28 20 L23 24 L25 30 L20 26 L15 30 L17 24 L12 20 Z" opacity="0.6" />
    </svg>
  );
}

export function LocationPin({ className = "", size = 48, style = {} }) {
  return (
    <svg
      className={className}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="var(--color-maroon)" strokeWidth="2" strokeLinecap="round">
        <path d="M24 4 C15 4, 8 11, 8 20 C8 32, 24 44, 24 44 C24 44, 40 32, 40 20 C40 11, 33 4, 24 4Z" />
        <circle cx="24" cy="19" r="5" />
        <circle cx="24" cy="44" r="2" fill="var(--color-maroon)" opacity="0.3" />
      </g>
    </svg>
  );
}

export function DiningTable({ className = "", size = 80, style = {} }) {
  return (
    <svg
      className={className}
      style={style}
      width={size}
      height={size * 0.9}
      viewBox="0 0 80 72"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="var(--color-muted)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6">
        {/* Table cloth */}
        <path d="M20 35 C20 30, 60 30, 60 35 L65 55 C65 60, 15 60, 15 55 Z" />
        {/* Table legs */}
        <line x1="25" y1="55" x2="22" y2="68" />
        <line x1="55" y1="55" x2="58" y2="68" />
        {/* Wine bottle */}
        <rect x="32" y="15" width="6" height="18" rx="2" />
        <rect x="33.5" y="10" width="3" height="6" rx="1" />
        {/* Wine glass left */}
        <path d="M24 32 L24 24 C24 20, 30 20, 30 24 L30 32" />
        <line x1="27" y1="32" x2="27" y2="35" />
        <line x1="24" y1="35" x2="30" y2="35" />
        {/* Wine glass right */}
        <path d="M48 32 L48 24 C48 20, 54 20, 54 24 L54 32" />
        <line x1="51" y1="32" x2="51" y2="35" />
        <line x1="48" y1="35" x2="54" y2="35" />
      </g>
    </svg>
  );
}

export function CalendarIcon({ className = "", size = 52, style = {} }) {
  return (
    <svg
      className={className}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 52 52"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="var(--color-maroon)" strokeWidth="1.5" strokeLinecap="round" opacity="0.7">
        {/* Calendar body */}
        <rect x="6" y="10" width="40" height="36" rx="4" />
        {/* Header */}
        <line x1="6" y1="20" x2="46" y2="20" />
        {/* Hooks */}
        <line x1="16" y1="6" x2="16" y2="14" />
        <line x1="36" y1="6" x2="36" y2="14" />
        {/* Dates grid */}
        {[0, 1, 2, 3, 4].map((row) =>
          [0, 1, 2, 3, 4, 5, 6].map((col) => (
            <text
              key={`${row}-${col}`}
              x={10 + col * 5.2}
              y={26 + row * 5}
              fontSize="3"
              fill="var(--color-maroon)"
              opacity="0.4"
            >
              {row * 7 + col + 1 <= 31 ? row * 7 + col + 1 : ""}
            </text>
          ))
        )}
        {/* Highlight 26 */}
        <circle cx="34.4" cy="38" r="3.5" fill="var(--color-maroon)" opacity="0.2" />
      </g>
    </svg>
  );
}

export function AlarmClock({ className = "", size = 32, style = {} }) {
  return (
    <svg
      className={className}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="var(--color-maroon)" strokeWidth="1.5" strokeLinecap="round" opacity="0.7">
        {/* Clock body */}
        <circle cx="16" cy="18" r="10" />
        {/* Bells */}
        <path d="M6 10 C3 7, 5 3, 9 5" />
        <path d="M26 10 C29 7, 27 3, 23 5" />
        {/* Hands */}
        <line x1="16" y1="18" x2="16" y2="12" />
        <line x1="16" y1="18" x2="21" y2="18" />
        {/* Legs */}
        <line x1="10" y1="28" x2="8" y2="30" />
        <line x1="22" y1="28" x2="24" y2="30" />
      </g>
    </svg>
  );
}

export function FamilyIcon({ className = "", size = 40, style = {} }) {
  return (
    <svg
      className={className}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="var(--color-maroon)" strokeWidth="1.5" strokeLinecap="round" opacity="0.8">
        {/* Adult 1 */}
        <circle cx="14" cy="10" r="4" />
        <path d="M14 14 L14 26" />
        <path d="M14 18 L8 22" />
        <path d="M14 18 L20 22" />
        <path d="M14 26 L10 34" />
        <path d="M14 26 L18 34" />
        {/* Child */}
        <circle cx="28" cy="14" r="3" />
        <path d="M28 17 L28 26" />
        <path d="M28 20 L24 23" />
        <path d="M28 20 L32 23" />
        <path d="M28 26 L25 32" />
        <path d="M28 26 L31 32" />
      </g>
    </svg>
  );
}
