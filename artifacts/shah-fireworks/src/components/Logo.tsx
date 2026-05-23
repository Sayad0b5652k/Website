export function FireworksLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Shah Fireworks"
    >
      {/* Outer badge ring */}
      <circle cx="26" cy="26" r="23.5" stroke="currentColor" strokeWidth="1.8" />

      {/* Inner subtle ring */}
      <circle cx="26" cy="26" r="19" stroke="currentColor" strokeWidth="0.7" opacity="0.3" />

      {/* SF monogram — Playfair Display serif, bold */}
      <text
        x="26"
        y="32"
        textAnchor="middle"
        fontSize="18"
        fontWeight="900"
        fill="currentColor"
        fontFamily="'Playfair Display', Georgia, serif"
        letterSpacing="1.5"
      >
        SF
      </text>

      {/* Cardinal sparkle dots — between the two rings */}
      <circle cx="26" cy="2.5"  r="2.3" fill="currentColor" />
      <circle cx="49.5" cy="26" r="2.3" fill="currentColor" />
      <circle cx="26" cy="49.5" r="2.3" fill="currentColor" />
      <circle cx="2.5"  cy="26" r="2.3" fill="currentColor" />

      {/* Diagonal accent dots */}
      <circle cx="42.2" cy="9.8"  r="1.7" fill="currentColor" opacity="0.72" />
      <circle cx="42.2" cy="42.2" r="1.7" fill="currentColor" opacity="0.72" />
      <circle cx="9.8"  cy="42.2" r="1.7" fill="currentColor" opacity="0.72" />
      <circle cx="9.8"  cy="9.8"  r="1.7" fill="currentColor" opacity="0.72" />
    </svg>
  );
}
