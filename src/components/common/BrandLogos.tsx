import { cn } from "../../lib/cn";

type LogoProps = {
  className?: string;
};

export function OmersLogo({ className }: LogoProps) {
  return (
    <div className={cn("inline-flex items-center gap-3", className)}>
      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-amber-200 via-orange-200 to-stone-200 shadow-lg shadow-amber-200/30">
        <span className="font-display text-lg font-semibold text-slate-900">O</span>
      </div>
      <div className="leading-none">
        <div className="font-display text-xl font-semibold text-slate-950">Omer&apos;s</div>
        <div className="mt-1 text-[10px] font-bold tracking-[0.28em] text-slate-500">סטודיו דיגיטלי</div>
      </div>
    </div>
  );
}

export function LumaLogo({ className }: LogoProps) {
  return (
    <div className={cn("inline-flex items-center gap-3", className)}>
      <div className="relative h-11 w-11 rounded-full bg-amber-300">
        <div className="absolute inset-[8px] rounded-full bg-[#100d10]" />
        <div className="absolute right-[9px] top-[7px] h-3 w-3 rounded-full bg-amber-50" />
      </div>
      <div className="leading-none text-white">
        <div className="font-display text-xl">Luma Bistro</div>
        <div className="mt-1 text-[10px] font-semibold tracking-[0.28em] text-amber-100/80">
          מסעדת שף עירונית
        </div>
      </div>
    </div>
  );
}

export function PulseFitLogo({ className }: LogoProps) {
  return (
    <div className={cn("inline-flex items-center gap-3", className)}>
      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-lime-300 text-slate-950 shadow-lg shadow-lime-300/30">
        <span className="font-tech text-lg font-bold">P</span>
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
      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-rose-100 via-white to-amber-100 shadow-lg shadow-rose-100/50">
        <span className="font-display text-lg font-semibold text-rose-700">A</span>
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
      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-500 text-white shadow-lg shadow-blue-500/30">
        <span className="font-tech text-lg font-bold">N</span>
      </div>
      <div className="leading-none text-white">
        <div className="font-tech text-xl font-bold">Nexora</div>
        <div className="mt-1 text-[10px] font-semibold tracking-[0.28em] text-cyan-100/80">
          שכבת אוטומציה חכמה
        </div>
      </div>
    </div>
  );
}
