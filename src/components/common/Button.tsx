import { forwardRef, type AnchorHTMLAttributes, type ButtonHTMLAttributes } from "react";
import { Link } from "wouter";
import { cn } from "../../lib/cn";

const variants = {
  primary:
    "bg-slate-950 text-white shadow-[0_18px_45px_rgba(15,23,42,0.18)] hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(15,23,42,0.22)]",
  secondary:
    "border border-slate-300/70 bg-white/80 text-slate-900 hover:-translate-y-0.5 hover:border-slate-400/80 hover:bg-white",
  ghost: "bg-transparent text-slate-900 hover:bg-slate-100/80",
  neon: "bg-lime-300 text-slate-950 hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(179,255,60,0.22)]",
  dark: "bg-slate-900/90 text-white hover:-translate-y-0.5 hover:bg-slate-950",
  studio:
    "premium-cta rounded-[1.2rem] border border-[#f2d387]/45 bg-[linear-gradient(135deg,#f4d27a_0%,#d6a84f_45%,#9f6732_100%)] text-[#080A12] hover:-translate-y-1 hover:scale-[1.025]",
  studioSecondary:
    "rounded-[1.2rem] border border-white/14 bg-white/7 text-[#f8fafc] shadow-[0_16px_44px_rgba(0,0,0,0.22)] backdrop-blur-xl hover:-translate-y-1 hover:scale-[1.02] hover:border-[#d6a84f]/35 hover:bg-[#d6a84f]/10 hover:shadow-[0_0_38px_rgba(214,168,79,0.12)]",
  studioLight:
    "rounded-[1.2rem] border border-[#dcc28a] bg-[linear-gradient(135deg,#fffaf0,#ead7b6)] text-[#181411] shadow-[0_18px_44px_rgba(24,20,17,0.13)] hover:-translate-y-1 hover:scale-[1.02] hover:bg-[#fff7e7] hover:shadow-[0_24px_60px_rgba(24,20,17,0.18)]"
} as const;

const baseClassName =
  "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-bold transition duration-300 will-change-transform active:translate-y-0 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent md:px-6 md:py-3.5 md:text-[15px]";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant = "primary", ...props },
  ref
) {
  return <button ref={ref} className={cn(baseClassName, variants[variant], className)} {...props} />;
});

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: keyof typeof variants;
  external?: boolean;
};

export function LinkButton({
  className,
  href,
  variant = "primary",
  external,
  children,
  ...props
}: LinkButtonProps) {
  const classes = cn(baseClassName, variants[variant], className);
  const isAnchor = href.startsWith("#");

  if (
    external ||
    isAnchor ||
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  ) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
