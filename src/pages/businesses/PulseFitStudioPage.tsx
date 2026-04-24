import { m } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Dumbbell, TrendingUp, Zap } from "lucide-react";
import { LinkButton } from "../../components/common/Button";
import { PulseFitLogo } from "../../components/common/BrandLogos";
import { Seo } from "../../components/seo/Seo";
import { SITE_URL } from "../../data/site";
import { fadeUp, stagger } from "../../lib/motion";

const pulseSchema = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "PulseFit Studio",
  url: `${SITE_URL}/work/pulsefit-studio`,
  image: `${SITE_URL}/images/pulsefit-hero.png`,
  description:
    "PulseFit Studio הוא סטודיו לאימונים בתל אביב עם תוכניות כוח, מאמנים מובילים וחוויית הצטרפות חדה וברורה.",
  telephone: "+972-3-555-9088",
  address: {
    "@type": "PostalAddress",
    streetAddress: "יגאל אלון 88",
    addressLocality: "תל אביב",
    addressCountry: "IL"
  }
};

const heroHighlights: Array<{ icon: LucideIcon; label: string }> = [
  { icon: Dumbbell, label: "תוכניות כוח ממוקדות" },
  { icon: Zap, label: "בלוקים של קצב והתניה" },
  { icon: TrendingUp, label: "מעקב תוצאות אמיתי" }
];

const memberReasons = [
  ["לא למי שמחפש להעביר שעה", "הסטודיו נבנה למי שרוצה שיטה, מסגרת ותחושה שהאימון באמת דוחף אותו קדימה."],
  ["אימון עם סטנדרט ברור", "המאמנים שומרים על קצב, דיוק ועומס נכון, בלי לזרוק מתאמנים לתוך רעש מיותר."],
  ["ממשק הצטרפות חד", "גם האתר וגם חוויית ההצטרפות נבנו כך שהשלב הבא יהיה ברור, מהיר ומשכנע."]
] as const;

const memberQuotes = [
  "זה מקום שמרגיש מקצועי מהרגע הראשון, לא עוד חדר כושר עם תאורה טובה.",
  "האימונים ברורים, עצימים, ויש תחושה שמישהו באמת עוקב אחרי ההתקדמות שלך.",
  "העמוד מסביר בדיוק מה מקבלים, למי זה מתאים ואיך מצטרפים בלי בלבול."
] as const;

export function PulseFitStudioPage() {
  return (
    <>
      <Seo
        title="PulseFit Studio | סטודיו כושר בתל אביב עם מסלולי אימון ברמה גבוהה"
        description="PulseFit Studio הוא סטודיו כושר בתל אביב עם מסלולי אימון, מאמנים מובילים, תוצאות, מחירים והצטרפות מהירה."
        path="/work/pulsefit-studio"
        image="/images/pulsefit-hero.png"
        imageAlt="חלל האימונים של PulseFit Studio עם דשא, משקולות ותאורת ניאון חדה"
        keywords={["PulseFit Studio", "סטודיו כושר בתל אביב", "מסלולי אימון", "אימוני כוח"]}
        schema={pulseSchema}
        lang="he"
        dir="rtl"
      />

      <div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_right,_rgba(215,255,99,0.22),transparent_26%),linear-gradient(180deg,#101410_0%,#060806_100%)] text-right text-white">
        <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0a0d0a]/75 backdrop-blur-xl">
          <div className="container-shell flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center justify-between gap-4">
              <PulseFitLogo />
              <LinkButton href="/" variant="neon" className="md:hidden">
                חזרה ל־Omer&apos;s
              </LinkButton>
            </div>
            <nav className="flex flex-wrap gap-5 text-sm font-semibold text-slate-300">
              <a href="#home">בית</a>
              <a href="#programs">מסלולים</a>
              <a href="#trainers">מאמנים</a>
              <a href="#results">תוצאות</a>
              <a href="#pricing">מחירים</a>
              <a href="#join">הצטרפות</a>
            </nav>
            <LinkButton href="/" variant="neon" className="hidden md:inline-flex">
              חזרה ל־Omer&apos;s
            </LinkButton>
          </div>
        </header>

        <main id="home">
          <section className="section-space">
            <div className="container-shell grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <m.div initial="hidden" animate="show" variants={stagger}>
                <m.p variants={fadeUp} className="text-xs font-extrabold tracking-[0.32em] text-lime-300/80">
                  כוח / קצב / משמעת
                </m.p>
                <m.h1 variants={fadeUp} className="mt-4 text-balance font-tech text-5xl leading-[0.88] md:text-7xl">
                  סטודיו שנבנה לאנשים שרוצים יותר מבאזז. הם רוצים שיטה, אנרגיה ותוצאה.
                </m.h1>
                <m.p variants={fadeUp} className="mt-6 max-w-xl text-lg leading-9 text-slate-300">
                  PulseFit Studio מחבר בין כוח, התניה וקצב עבודה גבוה בתוך סביבת אימון חדה, מעוצבת
                  ומדויקת, עם מאמנים שמחזיקים סטנדרט ברור לכל מתאמן.
                </m.p>
                <m.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
                  <LinkButton href="#join" variant="neon">
                    הצטרף ל־PulseFit
                  </LinkButton>
                  <LinkButton href="#programs" variant="secondary" className="border-white/10 bg-white/5 text-white">
                    צפה במסלולים
                  </LinkButton>
                </m.div>
                <m.div variants={fadeUp} className="mt-10 grid gap-4 sm:grid-cols-3">
                  {[
                    ["18", "אימונים שבועיים"],
                    ["6", "מאמנים מובילים"],
                    ["92%", "התמדה לאורך זמן"]
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-[1.6rem] border border-white/10 bg-white/5 p-5 backdrop-blur">
                      <div className="font-tech text-3xl font-bold text-lime-300">{value}</div>
                      <p className="mt-2 text-sm text-slate-300">{label}</p>
                    </div>
                  ))}
                </m.div>
              </m.div>

              <m.div initial="hidden" animate="show" variants={fadeUp} className="relative">
                <div className="premium-outline overflow-hidden rounded-[2.1rem] border border-lime-300/15 bg-black hero-shadow">
                  <img
                    src="/images/pulsefit-hero.png"
                    alt="חלל האימונים של PulseFit Studio עם דשא, ציוד כוח ותאורת ניאון"
                    className="h-[640px] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-transparent to-lime-300/10" />
                  <div className="absolute left-6 top-6 rounded-full bg-lime-300 px-4 py-2 text-xs font-extrabold tracking-[0.28em] text-slate-950">
                    מצב דופק
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 grid gap-4 lg:grid-cols-3">
                    {heroHighlights.map(({ icon: Icon, label }) => (
                      <div key={label} className="rounded-[1.6rem] border border-white/10 bg-black/50 p-5 backdrop-blur-xl">
                        <Icon className="h-5 w-5 text-lime-300" />
                        <p className="mt-4 text-sm font-semibold text-slate-100">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </m.div>
            </div>
          </section>

          <section id="programs" className="section-space border-y border-white/10 bg-white/4">
            <div className="container-shell">
              <m.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }} variants={stagger}>
                <p className="text-xs font-extrabold tracking-[0.32em] text-lime-300/80">מסלולים</p>
                <h2 className="mt-4 text-balance font-tech text-4xl md:text-6xl">
                  שלושה מסלולים. סטנדרט אחד: לעבוד נכון ולהתקדם עקבי.
                </h2>
                <div className="mt-10 grid gap-5 lg:grid-cols-3">
                  {[
                    ["בסיס", "כוח, תנועה וכניסה מסודרת למתאמנים חדשים."],
                    ["הייבריד", "שילוב של כוח, קצב, סבולת ועבודה בעצימות גבוהה."],
                    ["פרטי", "ליווי אישי עם תוכנית מדויקת ומעקב שבועי על תוצאות."]
                  ].map(([title, description]) => (
                    <m.article
                      key={title}
                      variants={fadeUp}
                      className="rounded-[1.8rem] border border-white/10 bg-black/25 p-6 backdrop-blur"
                    >
                      <h3 className="font-tech text-3xl text-white">{title}</h3>
                      <p className="mt-4 text-base leading-8 text-slate-300">{description}</p>
                    </m.article>
                  ))}
                </div>
              </m.div>
            </div>
          </section>

          <section id="trainers" className="section-space">
            <div className="container-shell grid gap-5 md:grid-cols-3">
              {[
                ["מאיה לוין", "מובילה מערכות כוח, מוביליות ושיפור תנועה."],
                ["נועם בר", "אחראי על כוח, עומסים ותפוקת אימון לאורך זמן."],
                ["דין אסולין", "מחזיק קצב, עצימות והתמדה של מתאמנים בקבוצות."]
              ].map(([name, specialty], index) => (
                <div key={name} className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur">
                  <div className="grid h-16 w-16 place-items-center rounded-2xl bg-lime-300 text-lg font-bold text-slate-950">
                    {index + 1}
                  </div>
                  <h3 className="mt-6 font-tech text-3xl text-white">{name}</h3>
                  <p className="mt-3 text-slate-300">{specialty}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="section-space border-y border-white/10 bg-white/4">
            <div className="container-shell">
              <m.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }} variants={stagger}>
                <p className="text-xs font-extrabold tracking-[0.32em] text-lime-300/80">למה מצטרפים</p>
                <h2 className="mt-4 text-balance font-tech text-4xl md:text-6xl">
                  PulseFit בנוי למי שמחפש סטודיו עם רמה, לא מקום שמרגיש כמו עוד מנוי מדף.
                </h2>
                <div className="mt-10 grid gap-5 lg:grid-cols-3">
                  {memberReasons.map(([title, description]) => (
                    <m.article
                      key={title}
                      variants={fadeUp}
                      className="rounded-[1.8rem] border border-white/10 bg-black/25 p-6 backdrop-blur"
                    >
                      <h3 className="font-tech text-3xl text-white">{title}</h3>
                      <p className="mt-4 text-base leading-8 text-slate-300">{description}</p>
                    </m.article>
                  ))}
                </div>
              </m.div>
            </div>
          </section>

          <section className="section-space">
            <div className="container-shell">
              <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
                <m.article
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.18 }}
                  variants={fadeUp}
                  className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/25 shadow-[0_24px_80px_rgba(0,0,0,0.2)]"
                >
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster="/images/pulsefit/action-training.png"
                    aria-label="וידאו אווירה של PulseFit Studio עם תנועת מצלמה בין אזור האימונים, המתאמנים וציוד הכוח"
                    className="h-full min-h-[430px] w-full object-cover"
                  >
                    <source src="/videos/pulsefit/training-loop.mp4" type="video/mp4" />
                  </video>
                </m.article>
                <div className="grid gap-5">
                  {[
                    ["/images/pulsefit/action-training.png", "אימון פונקציונלי אינטנסיבי ב־PulseFit Studio"],
                    ["/images/pulsefit/equipment-zone.png", "אזור ציוד הכוח של PulseFit Studio עם תאורת ניאון חדה"]
                  ].map(([src, alt]) => (
                    <m.article
                      key={src}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.18 }}
                      variants={fadeUp}
                      className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5"
                    >
                      <img src={src} alt={alt} className="h-[212px] w-full object-cover" />
                    </m.article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="section-space">
            <div className="container-shell grid gap-5 md:grid-cols-3">
              {memberQuotes.map((quote) => (
                <m.article
                  key={quote}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.18 }}
                  variants={fadeUp}
                  className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6 backdrop-blur"
                >
                  <p className="text-xs font-extrabold tracking-[0.32em] text-lime-300/80">קולות מהסטודיו</p>
                  <p className="mt-4 text-base leading-8 text-slate-200">{quote}</p>
                </m.article>
              ))}
            </div>
          </section>

          <section id="results" className="section-space border-y border-white/10 bg-white/4">
            <div className="container-shell grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-[2rem] border border-white/10 bg-black/25 p-8 backdrop-blur">
                <p className="text-xs font-extrabold tracking-[0.32em] text-lime-300/80">תוצאות</p>
                <h2 className="mt-4 text-balance font-tech text-4xl md:text-5xl">
                  כשהשיטה ברורה, גם התוצאה נראית לעין ומרגישה יציבה.
                </h2>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                {[
                  "מתאמנים נשארים כי האימון ישיר, ברור ולא מתנצל.",
                  "כל בלוק אימון מחובר למטרה של כוח, סבולת או התמדה בפועל.",
                  "יש אנרגיה קבוצתית, אבל לא מאבדים יחס אישי בדרך.",
                  "עמוד ההצטרפות מרגיש חד, פרימיום ופשוט להבנה."
                ].map((item) => (
                  <div key={item} className="rounded-[1.8rem] border border-white/10 bg-black/25 p-6 backdrop-blur">
                    <p className="text-base leading-8 text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="pricing" className="section-space">
            <div className="container-shell grid gap-5 lg:grid-cols-3">
              {[
                ["בסיס", "149$", "שני אימונים מודרכים בשבוע וקליטה אישית מסודרת."],
                ["ללא הגבלה", "239$", "גישה מלאה לסטודיו, עדיפות בהרשמה ומעקב חודשי."],
                ["פרטי", "420$", "מאמן אישי, תוכנית מותאמת ובקרה שבועית מלאה."]
              ].map(([name, price, description]) => (
                <div key={name} className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur">
                  <h3 className="font-tech text-3xl text-white">{name}</h3>
                  <p className="mt-3 text-4xl font-bold text-lime-300">{price}</p>
                  <p className="mt-4 text-slate-300">{description}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="join" className="section-space">
            <div className="container-shell rounded-[2rem] border border-white/10 bg-gradient-to-br from-lime-300/22 via-white/6 to-transparent p-8 backdrop-blur">
              <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <p className="text-xs font-extrabold tracking-[0.32em] text-lime-300/80">הצטרפות</p>
                  <h2 className="mt-4 text-balance font-tech text-4xl md:text-5xl">
                    קבע אימון ניסיון והרגש איך PulseFit עובד מבפנים.
                  </h2>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                    המפגש הראשון כולל הערכת תנועה, הבנת מטרה והתאמה למסלול הכניסה הכי נכון עבורך.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {["אימון ניסיון", "התאמת מסלול", "כניסה מהירה לשגרה"].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <LinkButton href="mailto:hello@pulsefitstudio.com" variant="neon">
                    hello@pulsefitstudio.com
                  </LinkButton>
                  <LinkButton href="tel:+97235559088" variant="secondary" className="border-white/10 bg-white/5 text-white">
                    03-555-9088
                  </LinkButton>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
