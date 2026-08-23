"use client";

import { motion } from "framer-motion";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { geoEqualEarth } from "d3-geo";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Matches ComposableMap's default projection (geoEqualEarth, 800x600 viewBox)
const projection = geoEqualEarth().scale(148).center([10, 20]).translate([400, 300]);

const regions: { name: string; coords: [number, number] }[] = [
  { name: "North America", coords: [-100, 45] },
  { name: "South America", coords: [-58, -15] },
  { name: "Europe", coords: [12, 50] },
  { name: "Africa", coords: [20, 5] },
  { name: "Middle East", coords: [46, 26] },
  { name: "Asia", coords: [100, 34] },
  { name: "Oceania", coords: [135, -25] },
];

const routes: [number, number][] = [
  [0, 2], [0, 1], [2, 3], [2, 4], [4, 5], [5, 6], [1, 3], [3, 6],
];

function project(coords: [number, number]): [number, number] {
  const p = projection(coords);
  return p ? [p[0], p[1]] : [0, 0];
}

function arcPath(from: [number, number], to: [number, number]) {
  const [x1, y1] = project(from);
  const [x2, y2] = project(to);
  const mx = (x1 + x2) / 2;
  const my = Math.min(y1, y2) - 40;
  return `M${x1},${y1} Q${mx},${my} ${x2},${y2}`;
}

export default function GlobalReach() {
  return (
    <section className="bg-navy-deep py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-gold">
            Global reach
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
            From one destination to another, Waybound keeps the world moving
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mt-16 overflow-hidden rounded-2xl border border-white/10 bg-navy"
        >
          <ComposableMap
            projectionConfig={{ scale: 148, center: [10, 20] }}
            width={800}
            height={600}
            className="h-auto w-full"
          >
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#122352"
                    stroke="#1e3168"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none", fill: "#16305f" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>

            <g fill="none" strokeLinecap="round">
              {routes.map(([a, b], i) => (
                <path
                  key={i}
                  className="route-line"
                  style={{ animationDelay: `-${i * 2.4}s`, animationDuration: "18s" }}
                  d={arcPath(regions[a].coords, regions[b].coords)}
                  stroke="#D4A94B"
                  strokeWidth="1.4"
                  strokeOpacity="0.6"
                />
              ))}
            </g>

            {regions.map((r, i) => {
              const [x, y] = project(r.coords);
              return (
                <g key={r.name}>
                  <circle cx={x} cy={y} r="10" fill="#D4A94B" opacity="0.12" />
                  <circle
                    cx={x}
                    cy={y}
                    r="3.5"
                    fill="#F0C04E"
                    className="animate-glow"
                    style={{ animationDelay: `-${i * 0.4}s` }}
                  />
                  <text
                    x={x}
                    y={y + 18}
                    textAnchor="middle"
                    fontSize="9"
                    fontFamily="var(--font-mono)"
                    letterSpacing="0.5"
                    fill="#ffffff"
                    opacity="0.45"
                  >
                    {r.name.toUpperCase()}
                  </text>
                </g>
              );
            })}
          </ComposableMap>
        </motion.div>
      </div>
    </section>
  );
}