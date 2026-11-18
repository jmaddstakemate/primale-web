import QRCode from "qrcode";
import { APP_STORE_URL } from "@/lib/app-store";

export function AppStoreButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download Primale on the App Store"
      className={`group relative inline-flex h-14 items-center gap-3 rounded-2xl bg-white pl-4 pr-6 text-black shadow-[0_10px_40px_-10px_rgba(245,166,35,0.55)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-12px_rgba(245,166,35,0.8)] ${className}`}
    >
      <AppleLogo />
      <span className="flex flex-col leading-none">
        <span className="text-[11px] font-medium">Download on the</span>
        <span className="mt-0.5 text-[20px] font-semibold tracking-tight">App Store</span>
      </span>
    </a>
  );
}

/** Scannable link to the App Store listing, for people reading on a desktop. */
export async function AppStoreQr({ size = 112 }: { size?: number }) {
  const svg = await QRCode.toString(APP_STORE_URL, {
    type: "svg",
    margin: 0,
    errorCorrectionLevel: "M",
    color: { dark: "#0B1520", light: "#FFFFFF" },
  });

  return (
    <div
      role="img"
      aria-label="QR code linking to Primale on the App Store"
      className="shrink-0 rounded-2xl bg-white p-2.5 [&>svg]:h-full [&>svg]:w-full"
      style={{ width: size, height: size }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

/** App Store button, plus a QR code on screens wide enough to be a desktop. */
export function DownloadCta({ align = "start" }: { align?: "start" | "center" }) {
  return (
    <div
      className={`flex flex-wrap items-center gap-5 ${align === "center" ? "justify-center" : ""}`}
    >
      <AppStoreButton />
      <div className="hidden items-center gap-3 lg:flex">
        <AppStoreQr size={72} />
        <p className="max-w-[9rem] text-left text-xs leading-snug text-muted">
          Scan with your iPhone camera to download
        </p>
      </div>
    </div>
  );
}

function AppleLogo() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M16.37 12.73c-.03-2.6 2.12-3.85 2.22-3.91-1.21-1.77-3.09-2.01-3.76-2.04-1.6-.16-3.12.94-3.94.94-.81 0-2.07-.92-3.4-.89-1.75.03-3.36 1.02-4.26 2.58-1.82 3.15-.47 7.82 1.3 10.38.87 1.25 1.9 2.66 3.26 2.61 1.31-.05 1.8-.85 3.38-.85 1.58 0 2.02.85 3.4.82 1.41-.02 2.3-1.27 3.16-2.53.99-1.45 1.4-2.86 1.42-2.93-.03-.01-2.73-1.05-2.78-4.18ZM13.77 5.1c.72-.87 1.2-2.08 1.07-3.29-1.04.04-2.29.69-3.03 1.56-.67.77-1.25 2-1.09 3.18 1.15.09 2.33-.59 3.05-1.45Z" />
    </svg>
  );
}
