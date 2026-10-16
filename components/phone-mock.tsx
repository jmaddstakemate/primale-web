const POINTS = [
  { x: 0, y: 66.7 },
  { x: 56, y: 58.5 },
  { x: 112, y: 49.8 },
  { x: 168, y: 39.5 },
  { x: 224, y: 29.1 },
  { x: 280, y: 16.5 },
];

const LINE = POINTS.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(
  " ",
);
const AREA = `${LINE} L 280 80 L 0 80 Z`;

export function PhoneMock() {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const score = 0.82;

  return (
    <div className="relative mx-auto w-[280px] sm:w-[300px]">
      <div className="absolute -inset-10 rounded-full bg-primary/20 blur-3xl" />
      <div className="relative rounded-[2.4rem] border border-white/10 bg-[#0e1620] p-2.5 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)]">
        <div className="relative overflow-hidden rounded-[1.9rem] bg-background">
          <div className="absolute left-1/2 top-2 z-10 h-[22px] w-[92px] -translate-x-1/2 rounded-full bg-black" />

          <div className="px-5 pb-6 pt-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-2">
              Today
            </p>
            <p className="mt-1 text-lg font-semibold tracking-tight">
              Your testosterone
            </p>

            <div className="mt-6 flex items-center justify-center">
              <svg width="148" height="148" viewBox="0 0 148 148" aria-hidden>
                <circle
                  cx="74"
                  cy="74"
                  r={radius}
                  fill="none"
                  className="stroke-border"
                  strokeWidth="10"
                />
                <circle
                  cx="74"
                  cy="74"
                  r={radius}
                  fill="none"
                  className="stroke-primary"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference * (1 - score)}
                  transform="rotate(-90 74 74)"
                />
                <text
                  x="74"
                  y="70"
                  textAnchor="middle"
                  fill="#F8FAFC"
                  fontSize="36"
                  fontWeight="700"
                  letterSpacing="-1.5"
                >
                  82
                </text>
                <text
                  x="74"
                  y="92"
                  textAnchor="middle"
                  fill="#94A3B8"
                  fontSize="12"
                  fontWeight="600"
                >
                  T score
                </text>
              </svg>
            </div>

            <div className="mt-2 rounded-2xl border border-border bg-card p-4">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-2">
                    Total T
                  </p>
                  <p className="mt-0.5 text-[28px] font-bold leading-none tracking-tight">
                    23.8
                    <span className="ml-1 text-sm font-medium text-muted">
                      nmol/L
                    </span>
                  </p>
                </div>
                <span className="rounded-full bg-optimal/15 px-2.5 py-1 text-xs font-semibold text-optimal">
                  Optimal
                </span>
              </div>
              <svg
                className="mt-4 h-16 w-full"
                viewBox="0 0 280 80"
                preserveAspectRatio="none"
                aria-hidden
              >
                <defs>
                  <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" style={{ stopColor: "var(--primary)" }} stopOpacity="0.35" />
                    <stop offset="100%" style={{ stopColor: "var(--primary)" }} stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d={AREA} fill="url(#chartFill)" />
                <path
                  d={LINE}
                  fill="none"
                  className="stroke-primary"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="mt-3 flex items-center justify-between rounded-2xl border border-border bg-card px-4 py-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-2">
                  Next test
                </p>
                <p className="text-sm font-semibold">12 Sep</p>
              </div>
              <span className="text-xs font-medium text-primary-light">
                Kit included
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
