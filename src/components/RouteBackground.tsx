export default function RouteBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Radial glow */}
      <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.06] blur-3xl" />

      <svg
        viewBox="0 0 1200 700"
        className="absolute inset-0 h-full w-full opacity-70"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* faint dotted "globe" grid lines */}
        <g stroke="#ffffff" strokeOpacity="0.05" strokeWidth="1">
          <ellipse cx="600" cy="350" rx="520" ry="230" fill="none" />
          <ellipse cx="600" cy="350" rx="520" ry="140" fill="none" />
          <ellipse cx="600" cy="350" rx="520" ry="60" fill="none" />
          <line x1="80" y1="350" x2="1120" y2="350" />
        </g>

        {/* animated shipping routes */}
        <g fill="none" strokeLinecap="round">
          <path
            className="route-line"
            d="M120,420 C300,300 420,520 620,360 C780,240 900,380 1080,260"
            stroke="#D4A94B"
            strokeWidth="1.5"
            strokeOpacity="0.55"
          />
          <path
            className="route-line"
            style={{ animationDelay: "-6s", animationDuration: "26s" }}
            d="M160,220 C340,340 460,180 660,300 C820,390 940,220 1100,340"
            stroke="#ffffff"
            strokeWidth="1"
            strokeOpacity="0.3"
          />
          <path
            className="route-line"
            style={{ animationDelay: "-12s", animationDuration: "22s" }}
            d="M100,540 C280,460 500,600 700,480 C860,390 960,480 1120,420"
            stroke="#D4A94B"
            strokeWidth="1"
            strokeOpacity="0.35"
          />
        </g>

        {/* nodes */}
        {[
          [120, 420], [620, 360], [1080, 260], [660, 300], [1100, 340], [700, 480],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={i % 2 === 0 ? 3 : 2} fill="#F0C04E" opacity={0.7} />
        ))}
      </svg>

      {/* drifting glow dots (packages/planes in motion, abstracted) */}
      <div className="animate-drift absolute left-[18%] top-[38%] h-1.5 w-1.5 rounded-full bg-gold animate-glow" />
      <div
        className="animate-drift absolute left-[55%] top-[28%] h-1.5 w-1.5 rounded-full bg-white animate-glow"
        style={{ animationDelay: "-3s" }}
      />
      <div
        className="animate-drift absolute left-[78%] top-[52%] h-1.5 w-1.5 rounded-full bg-gold animate-glow"
        style={{ animationDelay: "-5s" }}
      />
    </div>
  );
}