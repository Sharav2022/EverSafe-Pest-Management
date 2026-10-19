export const inspectionZones = [
  { label: "Roofline & soffits", detail: "Gaps where wasps, birds and rodents get in.", x: 452, y: 128 },
  { label: "Attic & insulation", detail: "Nesting signs, droppings and moisture.", x: 320, y: 146 },
  { label: "Bedrooms & furniture", detail: "Seams, joints and other hiding places.", x: 210, y: 228 },
  { label: "Kitchen & plumbing", detail: "Food, water and entry around pipes.", x: 430, y: 316 },
  { label: "Foundation & sill", detail: "Cracks, mud tubes and softened wood.", x: 148, y: 372 },
  { label: "Yard & drainage", detail: "Standing water and harbourage outdoors.", x: 584, y: 370 },
];

/**
 * Line drawing of a two-storey home with the zones an inspection covers.
 * Decorative companion to the zone list rendered alongside it.
 */
export function PropertyBlueprint({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 660 430" fill="none" aria-hidden="true" className={className}>
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        {/* ground and basement */}
        <path d="M20 360h620" strokeWidth="1.5" opacity="0.6" />
        <path d="M124 360v44h392v-44" strokeWidth="1.2" strokeDasharray="4 6" opacity="0.5" />
        {/* walls, floors, roof */}
        <path d="M124 360V180h392v180" strokeWidth="1.8" />
        <path d="M124 270h392" strokeWidth="1.2" opacity="0.7" />
        <path d="M100 186 320 66l220 120" strokeWidth="1.8" />
        <path d="M160 180h320" strokeWidth="1" opacity="0.45" strokeDasharray="2 5" />
        <path d="M430 116V80h30v52" strokeWidth="1.5" />
        {/* windows and door */}
        <rect x="168" y="204" width="54" height="44" rx="2" strokeWidth="1.2" opacity="0.8" />
        <rect x="418" y="204" width="54" height="44" rx="2" strokeWidth="1.2" opacity="0.8" />
        <path d="M296 360v-62a24 24 0 0 1 48 0v62" strokeWidth="1.4" />
        <rect x="168" y="294" width="54" height="42" rx="2" strokeWidth="1.2" opacity="0.8" />
        {/* interior hints */}
        <path d="M188 258h52M188 258v-10M240 258v-10" strokeWidth="1" opacity="0.5" />
        <path d="M392 336h76M392 336v-24h76v24M430 312v-10" strokeWidth="1" opacity="0.5" />
        {/* tree */}
        <path d="M590 360v-46" strokeWidth="1.4" />
        <circle cx="590" cy="292" r="30" strokeWidth="1.2" opacity="0.7" />
        <path d="M44 360c10-16 22-16 30 0M64 360c8-12 18-12 24 0" strokeWidth="1" opacity="0.5" />
      </g>

      {inspectionZones.map((zone, i) => (
        <g key={zone.label}>
          <circle cx={zone.x} cy={zone.y} r="20" fill="#c77644" opacity="0.18" />
          <circle cx={zone.x} cy={zone.y} r="13" fill="#c77644" />
          <text
            x={zone.x}
            y={zone.y + 4.5}
            textAnchor="middle"
            fontSize="12.5"
            fontWeight="700"
            fill="#102b2c"
            fontFamily="var(--font-manrope), sans-serif"
          >
            {i + 1}
          </text>
        </g>
      ))}
    </svg>
  );
}
