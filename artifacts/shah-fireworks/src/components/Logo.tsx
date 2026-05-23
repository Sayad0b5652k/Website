export function FireworksLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Central glowing core */}
      <circle cx="28" cy="28" r="6" fill="currentColor" />
      <circle cx="28" cy="28" r="3.5" fill="white" opacity="0.35" />

      {/* Cardinal long rays */}
      <line x1="28" y1="2" x2="28" y2="17" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
      <line x1="54" y1="28" x2="39" y2="28" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
      <line x1="28" y1="54" x2="28" y2="39" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
      <line x1="2" y1="28" x2="17" y2="28" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />

      {/* Diagonal medium rays */}
      <line x1="45" y1="11" x2="35" y2="21" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="45" y1="45" x2="35" y2="35" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="11" y1="45" x2="21" y2="35" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="11" y1="11" x2="21" y2="21" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />

      {/* Sparkle dots — cardinal tips */}
      <circle cx="28" cy="2" r="3.2" fill="currentColor" />
      <circle cx="54" cy="28" r="3.2" fill="currentColor" />
      <circle cx="28" cy="54" r="3.2" fill="currentColor" />
      <circle cx="2" cy="28" r="3.2" fill="currentColor" />

      {/* Sparkle dots — diagonal tips */}
      <circle cx="45" cy="11" r="2.6" fill="currentColor" opacity="0.85" />
      <circle cx="45" cy="45" r="2.6" fill="currentColor" opacity="0.85" />
      <circle cx="11" cy="45" r="2.6" fill="currentColor" opacity="0.85" />
      <circle cx="11" cy="11" r="2.6" fill="currentColor" opacity="0.85" />

      {/* Half-way ring accent dots */}
      <circle cx="28" cy="10" r="1.4" fill="currentColor" opacity="0.5" />
      <circle cx="46" cy="28" r="1.4" fill="currentColor" opacity="0.5" />
      <circle cx="28" cy="46" r="1.4" fill="currentColor" opacity="0.5" />
      <circle cx="10" cy="28" r="1.4" fill="currentColor" opacity="0.5" />
    </svg>
  );
}
