import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import ferrariLogo from "@/assets/ferrari-logo.svg";

interface PageLoaderProps {
  onComplete: () => void;
}

const VIEW = 260;
const CX = VIEW / 2;
const CY = VIEW / 2;
/** Active gauge arc: 300° sweep, 60° gap at bottom (speedometer style) */
const GAUGE_R = 100;
/** Length of the 300° gauge arc (matches `gaugeArcPath`) */
const ARC_LEN = (300 / 360) * (2 * Math.PI * GAUGE_R);

function gaugeArcPath(): string {
  const r = GAUGE_R;
  const startDeg = 120;
  const sweep = 300;
  const toRad = (d: number) => ((d - 90) * Math.PI) / 180;
  const x1 = CX + r * Math.cos(toRad(startDeg));
  const y1 = CY + r * Math.sin(toRad(startDeg));
  const endDeg = startDeg + sweep;
  const x2 = CX + r * Math.cos(toRad(endDeg));
  const y2 = CY + r * Math.sin(toRad(endDeg));
  return `M ${x1} ${y1} A ${r} ${r} 0 1 1 ${x2} ${y2}`;
}

const PageLoader = ({ onComplete }: PageLoaderProps) => {
  const [progress, setProgress] = useState(0);
  const arcD = useMemo(() => gaugeArcPath(), []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 520);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);

  const dashOffset = ARC_LEN * (1 - progress / 100);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[hsl(0_0%_2%)] overflow-hidden"
        exit={{
          y: "-100%",
          transition: { duration: 0.88, ease: [0.76, 0, 0.24, 1] },
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex flex-col items-center"
        >
          <div className="relative w-[min(78vmin,320px)] aspect-square flex items-center justify-center">
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox={`0 0 ${VIEW} ${VIEW}`}
              fill="none"
              aria-hidden
            >
              {/* Outermost faint rings */}
              <circle
                cx={CX}
                cy={CY}
                r={118}
                className="stroke-white/[0.08]"
                strokeWidth={0.75}
              />
              <circle
                cx={CX}
                cy={CY}
                r={112}
                className="stroke-white/[0.12]"
                strokeWidth={0.5}
              />
              <circle
                cx={CX}
                cy={CY}
                r={106}
                className="stroke-white/[0.1]"
                strokeWidth={0.5}
              />
              {/* Gauge arc (rotated so the 60° gap sits at the bottom) */}
              <g transform={`rotate(102 ${CX} ${CY})`}>
                <path
                  d={arcD}
                  className="stroke-white/[0.14]"
                  strokeWidth={1.75}
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d={arcD}
                  className="stroke-primary drop-shadow-[0_0_10px_hsl(var(--primary)/0.55)]"
                  strokeWidth={2.25}
                  strokeLinecap="round"
                  fill="none"
                  strokeDasharray={`${ARC_LEN} ${ARC_LEN}`}
                  style={{ strokeDashoffset: dashOffset }}
                />
              </g>
              {/* Inner accent ring */}
              <circle
                cx={CX}
                cy={CY}
                r={82}
                className="stroke-white/[0.09]"
                strokeWidth={0.5}
              />
              <circle
                cx={CX}
                cy={CY}
                r={76}
                className="stroke-white/[0.06]"
                strokeWidth={0.5}
              />
            </svg>

            <div className="relative z-10 flex h-[46%] w-[46%] items-center justify-center">
              <img
                src={ferrariLogo}
                alt=""
                className="h-full w-full max-h-[4.5rem] sm:max-h-[5.25rem] object-contain object-center"
                width={2500}
                height={2500}
              />
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-10 font-body text-sm font-medium tracking-wide text-muted-foreground"
          >
            Starting the Engine…
          </motion.p>
        </motion.div>

        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(circle at 50% 42%, hsl(var(--primary) / ${progress * 0.0018}) 0%, transparent 55%)`,
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default PageLoader;
