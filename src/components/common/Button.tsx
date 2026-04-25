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
    "premium-cta rounded-[0.9rem] border border-[#f2d387]/40 bg-[linear-gradient(135deg,#efd07a_0%,#d6a84f_52%,#a2703c_100%)] text-[#080A12] hover:-translate-y-0.5",
  studioSecondary:
    "rounded-[0.9rem] border border-white/12 bg-white/6 text-[#f8fafc] shadow-[0_10px_28px_rgba(0,0,0,0.16)] backdrop-blur-md hover:-translate-y-0.5 hover:border-[#d6a84f]/28 hover:bg-[#d6a84f]/8",
  studioLight:
    "rounded-[0.9rem] border border-[#dcc28a] bg-[linear-gradient(135deg,#fffaf0,#ead7b6)] text-[#181411] shadow-[0_10px_26px_rgba(24,20,17,0.1)] hover:-translate-y-0.5 hover:bg-[#fff7e7]"
} as const;

const baseClassName =
  "inline-flex items-center justify-center rounded-full px-3 py-2.5 text-sm font-bold transition duration-300 will-change-transform active:translate-y-0 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent md:px-4 md:py-2.5 md:text-sm";

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
