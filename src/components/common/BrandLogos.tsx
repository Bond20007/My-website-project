import { cn } from "../../lib/cn";

type LogoProps = {
  className?: string;
};

export function OmersLogo({ className }: LogoProps) {
  return (
    <a
      href="#home"
      aria-label="Omer's Studio"
      className={cn(
        "group inline-flex items-end gap-2.5 text-[#F8FAFC] transition duration-300 hover:text-white",
        className
      )}
    >
      <span className="relative inline-flex flex-col leading-none">
        <span className="font-hebrew-display text-[1.45rem] font-extrabold tracking-[0.01em] sm:text-[1.62rem]">
          Omer&apos;s
        </span>
        <span className="mt-1 h-px w-0 bg-[#D6A84F] transition-all duration-300 group-hover:w-full" />
      </span>
      <span className="mb-[0.18rem] hidden items-center gap-2 sm:inline-flex">
        <span className="h-1.5 w-1.5 rounded-full bg-[#D6A84F]" />
        <span className="text-[0.68rem] font-bold uppercase tracking-[0.32em] text-[#94A3B8] transition group-hover:text-[#D6A84F]">
          Studio
        </span>
      </span>
    </a>
  );
}

export function LumaLogo({ className }: LogoProps) {
  return (
    <div className={cn("inline-flex items-center gap-3", className)}>
      <div className="relative h-11 w-11 rounded-full border border-amber-200/40 bg-[#100d10]">
        <div className="absolute inset-[7px] rounded-full border border-amber-200/35" />
        <div className="absolute inset-x-[15px] top-[11px] h-[2px] rounded-full bg-amber-200/70" />
        <div className="absolute inset-x-[11px] bottom-[13px] h-[2px] rounded-full bg-amber-200/35" />
      </div>
      <div className="leading-none text-white">
        <div className="font-display text-xl">Luma Bistro</div>
        <div className="mt-1 text-[10px] font-semibold tracking-[0.28em] text-amber-100/80">מסעדת שף אורבנית</div>
      </div>
    </div>
  );
}

export function PulseFitLogo({ className }: LogoProps) {
  return (
    <div className={cn("inline-flex items-center gap-3", className)}>
      <div className="grid h-11 w-11 place-items-center rounded-[1.1rem] border border-lime-300/40 bg-[#0b130b] text-lime-300 shadow-[0_16px_35px_rgba(163,230,53,0.16)]">
        <span className="font-tech text-lg font-bold">PF</span>
      </div>
      <div className="leading-none">
        <div className="font-tech text-xl font-bold text-white">PulseFit</div>
        <div className="mt-1 text-[10px] font-bold tracking-[0.28em] text-lime-200/75">סטודיו לאימונים</div>
      </div>
    </div>
  );
}

export function AuraLogo({ className }: LogoProps) {
  return (
    <div className={cn("inline-flex items-center gap-3", className)}>
      <div className="grid h-11 w-11 place-items-center rounded-[1.45rem] border border-rose-100 bg-white shadow-[0_16px_35px_rgba(244,114,182,0.08)]">
        <span className="font-display text-lg font-semibold text-rose-500">A</span>
      </div>
      <div className="leading-none">
        <div className="font-display text-xl text-slate-900">Aura Clinic</div>
        <div className="mt-1 text-[10px] font-bold tracking-[0.28em] text-rose-400">אסתטיקה מתקדמת</div>
      </div>
    </div>
  );
}

export function NexoraLogo({ className }: LogoProps) {
  return (
    <div className={cn("inline-flex items-center gap-3", className)}>
      <div className="grid h-11 w-11 place-items-center rounded-[1.1rem] border border-cyan-400/30 bg-slate-950 text-white shadow-[0_18px_40px_rgba(34,211,238,0.16)]">
        <span className="font-tech text-lg font-bold text-cyan-300">NX</span>
      </div>
      <div className="leading-none text-white">
        <div className="font-tech text-xl font-bold">Nexora</div>
        <div className="mt-1 text-[10px] font-semibold tracking-[0.28em] text-cyan-100/80">שכבת אוטומציה חכמה</div>
      </div>
    </div>
  );
}
