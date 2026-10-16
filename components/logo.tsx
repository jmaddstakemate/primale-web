import Image from "next/image";

export function Logo({ size = 36 }: { size?: number }) {
  return (
    <Image
      src="/logo.svg"
      alt=""
      width={size}
      height={size}
      className="shrink-0"
      aria-hidden
      priority
    />
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
