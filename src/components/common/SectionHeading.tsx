import { m } from "framer-motion";
import { cn } from "../../lib/cn";
import { fadeUp } from "../../lib/motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "right" | "left";
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "right",
  className,
  titleClassName,
  descriptionClassName
}: SectionHeadingProps) {
  return (
    <m.div
      variants={fadeUp}
      className={cn("max-w-3xl", align === "left" ? "text-left" : "text-right", className)}
    >
      <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.34em] text-slate-500">{eyebrow}</p>
      <h2 className={cn("text-balance font-display text-4xl leading-[0.92] md:text-6xl", titleClassName)}>{title}</h2>
      {description ? (
        <p className={cn("mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg", descriptionClassName)}>
          {description}
        </p>
      ) : null}
    </m.div>
  );
}
