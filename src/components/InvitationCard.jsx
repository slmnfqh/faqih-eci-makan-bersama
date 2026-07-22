/**
 * InvitationCard — Wavy-edged card using SVG clip-path
 * Each section gets a slightly different wavy edge variant.
 */
import "./InvitationCard.css";

const wavyPaths = {
  default: `M 0,24 
    C 15,2 25,30 44,12
    C 63,-6 73,30 88,12
    C 103,-6 113,30 132,12
    C 151,-6 161,30 176,12
    C 191,-6 201,30 220,12
    C 239,-6 249,30 264,12
    C 279,-6 289,30 308,12
    C 327,-6 337,30 352,12
    C 367,-6 377,30 396,12
    C 415,-6 425,30 440,12
    L 440,0 L 0,0 Z`,
};

export default function InvitationCard({
  children,
  className = "",
  variant = "default",
}) {

  return (
    <div className={`wavy-card-wrapper ${className}`}>
      <div className="wavy-card-inner">
        {/* Top wavy edge */}
        <svg
          className="wavy-edge wavy-edge-top"
          viewBox="0 0 440 24"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d={wavyPaths[variant] || wavyPaths.default} fill="var(--color-paper)" />
        </svg>

        {/* Main card content */}
        <div className="wavy-card">{children}</div>

        {/* Bottom wavy edge (flipped) */}
        <svg
          className="wavy-edge wavy-edge-bottom"
          viewBox="0 0 440 24"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d={wavyPaths[variant] || wavyPaths.default}
            fill="var(--color-paper)"
            transform="translate(440, 24) rotate(180)"
          />
        </svg>

        {/* Left wavy edge */}
        <svg
          className="wavy-edge wavy-edge-left"
          viewBox="0 0 24 440"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M 24,0 C 8,12 0,24 12,48 C 24,72 6,84 4,108 C 2,132 18,156 12,180 C 6,204 0,228 8,252 C 16,276 4,288 6,312 C 8,336 20,360 14,384 C 8,408 2,420 10,440 L 0,440 L 0,0 Z"
            fill="var(--color-paper)"
          />
        </svg>

        {/* Right wavy edge */}
        <svg
          className="wavy-edge wavy-edge-right"
          viewBox="0 0 24 440"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M 0,0 C 16,12 24,24 12,48 C 0,72 18,84 20,108 C 22,132 6,156 12,180 C 18,204 24,228 16,252 C 8,276 20,288 18,312 C 16,336 4,360 10,384 C 16,408 22,420 14,440 L 24,440 L 24,0 Z"
            fill="var(--color-paper)"
          />
        </svg>
      </div>
    </div>
  );
}
