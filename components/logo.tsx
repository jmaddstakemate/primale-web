export function Logo({ size = 36 }: { size?: number }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-xl bg-primary font-semibold text-white"
      style={{ width: size, height: size, fontSize: size * 0.48 }}
      aria-hidden
    >
      P
    </span>
  );
}

export function Wordmark({ size = 36 }: { size?: number }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Logo size={size} />
      <span className="text-[17px] font-semibold tracking-tight text-foreground">
        Primale
      </span>
    </span>
  );
}
