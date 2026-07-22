/**
 * DecorativeFlower — SVG flower decorations
 * Creates beige/cream watercolor-style flowers using layered SVG shapes.
 */

export function FlowerCluster({
  className = "",
  style = {},
  size = 120,
  variant = "beige",
  flip = false,
}) {
  const colors =
    variant === "white"
      ? {
          petal1: "#f0ebe4",
          petal2: "#e8e0d6",
          petal3: "#ffffff",
          center: "#c7b29c",
          center2: "#a99d91",
        }
      : {
          petal1: "#d4bfa0",
          petal2: "#c7a882",
          petal3: "#e8d5be",
          center: "#a98e70",
          center2: "#8a7560",
        };

  return (
    <svg
      className={className}
      style={{
        ...style,
        transform: flip ? `scaleX(-1) ${style.transform || ""}` : style.transform,
      }}
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
    >
      {/* Main flower */}
      <g opacity="0.9">
        <ellipse cx="50" cy="40" rx="18" ry="14" fill={colors.petal1} transform="rotate(-20, 50, 40)" />
        <ellipse cx="70" cy="38" rx="16" ry="13" fill={colors.petal2} transform="rotate(15, 70, 38)" />
        <ellipse cx="60" cy="28" rx="14" ry="12" fill={colors.petal3} transform="rotate(-5, 60, 28)" />
        <ellipse cx="45" cy="50" rx="15" ry="12" fill={colors.petal2} transform="rotate(-30, 45, 50)" />
        <ellipse cx="72" cy="50" rx="14" ry="11" fill={colors.petal1} transform="rotate(25, 72, 50)" />
        <circle cx="58" cy="42" r="7" fill={colors.center} />
        <circle cx="58" cy="42" r="3.5" fill={colors.center2} />
      </g>

      {/* Secondary smaller flower */}
      <g opacity="0.75" transform="translate(10, 55) scale(0.6)">
        <ellipse cx="30" cy="25" rx="12" ry="10" fill={colors.petal3} transform="rotate(-15, 30, 25)" />
        <ellipse cx="45" cy="22" rx="11" ry="9" fill={colors.petal1} transform="rotate(10, 45, 22)" />
        <ellipse cx="38" cy="18" rx="10" ry="8" fill={colors.petal2} />
        <ellipse cx="28" cy="32" rx="11" ry="9" fill={colors.petal1} transform="rotate(-25, 28, 32)" />
        <circle cx="36" cy="26" r="5" fill={colors.center} />
        <circle cx="36" cy="26" r="2.5" fill={colors.center2} />
      </g>

      {/* Bud */}
      <g opacity="0.6" transform="translate(65, 70) scale(0.4)">
        <ellipse cx="20" cy="20" rx="10" ry="8" fill={colors.petal1} transform="rotate(-10, 20, 20)" />
        <ellipse cx="28" cy="18" rx="9" ry="7" fill={colors.petal3} transform="rotate(15, 28, 18)" />
        <circle cx="23" cy="20" r="3" fill={colors.center} />
      </g>

      {/* Leaves */}
      <g opacity="0.5">
        <ellipse cx="30" cy="75" rx="6" ry="18" fill="#8a9a78" transform="rotate(25, 30, 75)" />
        <ellipse cx="80" cy="60" rx="5" ry="14" fill="#7d8f6e" transform="rotate(-20, 80, 60)" />
        <ellipse cx="20" cy="55" rx="4" ry="12" fill="#8a9a78" transform="rotate(40, 20, 55)" />
      </g>
    </svg>
  );
}

export function SmallFlower({ className = "", style = {}, size = 50 }) {
  return (
    <svg
      className={className}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
      aria-hidden="true"
    >
      <g opacity="0.7">
        <ellipse cx="25" cy="20" rx="8" ry="6" fill="#e8d5be" transform="rotate(-15, 25, 20)" />
        <ellipse cx="30" cy="22" rx="7" ry="5.5" fill="#d4bfa0" transform="rotate(10, 30, 22)" />
        <ellipse cx="22" cy="24" rx="7" ry="5" fill="#f0ebe4" transform="rotate(-25, 22, 24)" />
        <ellipse cx="28" cy="17" rx="6" ry="5" fill="#e8d5be" />
        <circle cx="26" cy="22" r="3" fill="#a98e70" />
      </g>
      <ellipse cx="18" cy="34" rx="3" ry="10" fill="#8a9a78" opacity="0.5" transform="rotate(20, 18, 34)" />
      <ellipse cx="34" cy="32" rx="2.5" ry="8" fill="#7d8f6e" opacity="0.4" transform="rotate(-15, 34, 32)" />
    </svg>
  );
}

export function SageLeaf({ className = "", style = {}, size = 100 }) {
  return (
    <svg
      className={className}
      style={style}
      width={size * 0.4}
      height={size}
      viewBox="0 0 40 100"
      fill="none"
      aria-hidden="true"
    >
      <g opacity="0.45">
        {/* Main stem */}
        <line x1="20" y1="5" x2="20" y2="95" stroke="#8a9a78" strokeWidth="1.5" />
        {/* Leaves along stem */}
        <ellipse cx="14" cy="20" rx="8" ry="4" fill="#8a9a78" transform="rotate(-30, 14, 20)" />
        <ellipse cx="26" cy="32" rx="9" ry="4.5" fill="#7d8f6e" transform="rotate(25, 26, 32)" />
        <ellipse cx="12" cy="44" rx="10" ry="5" fill="#8a9a78" transform="rotate(-35, 12, 44)" />
        <ellipse cx="28" cy="56" rx="9" ry="4.5" fill="#7d8f6e" transform="rotate(30, 28, 56)" />
        <ellipse cx="13" cy="68" rx="8" ry="4" fill="#8a9a78" transform="rotate(-25, 13, 68)" />
        <ellipse cx="25" cy="80" rx="7" ry="3.5" fill="#7d8f6e" transform="rotate(20, 25, 80)" />
      </g>
    </svg>
  );
}

export function Sunflower({ size = 100, className = "", style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      style={style}
      fill="none"
      aria-hidden="true"
    >
      {/* Sunflower petals */}
      <g fill="var(--color-gold)" opacity="0.4">
        {[...Array(12)].map((_, i) => (
          <ellipse
            key={i}
            cx="50"
            cy="20"
            rx="6"
            ry="18"
            transform={`rotate(${i * 30}, 50, 50)`}
          />
        ))}
      </g>
      {/* Center */}
      <circle cx="50" cy="50" r="15" fill="var(--color-taupe)" opacity="0.6" />
      <circle cx="50" cy="50" r="10" fill="var(--color-maroon)" opacity="0.3" />
    </svg>
  );
}

export function Tulip({ size = 80, className = "", style = {}, flip = false }) {
  return (
    <svg
      width={size}
      height={size * 1.2}
      viewBox="0 0 80 100"
      className={className}
      style={{ ...style, transform: flip ? "scaleX(-1)" : "none" }}
      fill="none"
      aria-hidden="true"
    >
      <g opacity="0.45">
        {/* Stem */}
        <path d="M40 50 Q45 75 40 100" stroke="#8a9a78" strokeWidth="2" fill="none" />
        {/* Leaves */}
        <path d="M40 70 Q20 80 25 50 Q35 60 40 70" fill="#7d8f6e" />
        <path d="M42 80 Q65 85 55 55 Q45 70 42 80" fill="#8a9a78" />
        {/* Tulip flower head */}
        <path d="M25 50 Q25 20 40 25 Q55 20 55 50 C55 60 25 60 25 50 Z" fill="var(--color-dusty-red)" />
        <path d="M30 48 L40 25 L50 48 Z" fill="var(--color-maroon)" opacity="0.3" />
      </g>
    </svg>
  );
}
