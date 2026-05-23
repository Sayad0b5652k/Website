export function FireworksLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Cone / base — the classic ground fountain shape */}
      <path d="M19.5 54 L28 33 L36.5 54 Z" fill="currentColor" />

      {/* Centre straight-up spray */}
      <path d="M28 33 Q28 20 28 6" stroke="currentColor" strokeWidth="2.3" fill="none" strokeLinecap="round" />

      {/* Left sprays — two arcs fanning outward */}
      <path d="M28 33 Q22 20 11 13" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M28 33 Q17 25 5 21" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.72" />

      {/* Right sprays */}
      <path d="M28 33 Q34 20 45 13" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M28 33 Q39 25 51 21" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.72" />

      {/* Sparkle dots — tips of sprays */}
      <circle cx="28" cy="6" r="3.2" fill="currentColor" />
      <circle cx="11" cy="13" r="2.8" fill="currentColor" />
      <circle cx="45" cy="13" r="2.8" fill="currentColor" />
      <circle cx="5" cy="21" r="2.1" fill="currentColor" opacity="0.8" />
      <circle cx="51" cy="21" r="2.1" fill="currentColor" opacity="0.8" />

      {/* Mid-arc accent sparkles */}
      <circle cx="28" cy="20" r="1.6" fill="currentColor" opacity="0.5" />
      <circle cx="18.5" cy="21" r="1.4" fill="currentColor" opacity="0.42" />
      <circle cx="37.5" cy="21" r="1.4" fill="currentColor" opacity="0.42" />
    </svg>
  );
}
