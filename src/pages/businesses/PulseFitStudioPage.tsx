import { m } from "framer-motion";
import { ArrowLeft, ChevronLeft } from "lucide-react";
import { LinkButton } from "../../components/common/Button";
import { PulseFitLogo } from "../../components/common/BrandLogos";
import { Seo } from "../../components/seo/Seo";
import { SITE_URL } from "../../data/site";

const pulseSchema = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "PulseFit Studio",
  url: `${SITE_URL}/work/pulsefit-studio`,
  image: `${SITE_URL}/images/pulsefit/pulsefit-coach-session.webp`,
  description:
    "PulseFit Studio הוא סטודיו כושר בתל אביב עם מסלולי אימון, צוות מאמנים, שיעור ניסיון ומבנה הצטרפות חד וברור.",
  telephone: "+972-3-555-9088",
  address: {
    "@type": "PostalAddress",
    streetAddress: "יגאל אלון 88",
    addressLocality: "תל אביב",
    addressCountry: "IL"
  }
};

const programs = [
  ["01", "STRONG", "כוח, יסודות ותנועה למי שרוצה להיכנס לשגרה רצינית בלי לבזבז חודשים על חיפוש כיוון."],
  ["02", "HYBRID", "שילוב של כוח, קצב ועבודה מטבולית למי שרוצה גם ביצועים וגם תחושה של מערכת אמיתית."],
  ["03", "PERSONAL", "ליווי אישי עם מאמן, בניית עומסים, מעקב ותכנון מסודר לאורך שבועות ולא רק לפי מצב רוח."]
] as const;

const trainers = [
  ["מאיה לוין", "כוח ותנועה", "שומרת על טכניקה, עומס נכון וקצב שמוציא עבודה אמיתית מכל אימון."],
  ["נועם בר", "ביצועים", "מוביל מסלולי קצב, התנעה ובלוקים חזקים בלי לאבד שליטה על הפרטים."],
  ["דין אסולין", "קבוצות", "יודע להחזיק אנרגיה גבוהה בקבוצה ועדיין לתת יחס חד לכל מתאמן."]
] as const;

const pricing = [
  ["CORE", "149$", "שני אימונים מודרכים בשבוע", "למי שרוצה להיכנס נכון ולהתחיל מסגרת קבועה."],
  ["FULL", "239$", "גישה מלאה לכל המערכת", "כולל עדיפות בהרשמה, מעקב וקבוצות ברמות שונות."],
  ["PRO", "420$", "מאמן אישי ותוכנית מלאה", "מסלול אישי עם בניית עומסים, מעקב ותכנון שבועי."]
] as const;

export function PulseFitStudioPage() {
  return (
    <>
      <Seo
        title="PulseFit Studio | סטודיו כושר בתל אביב עם שיעור ניסיון ותוכניות אימון"
        description="PulseFit Studio הוא סטודיו כושר בתל אביב עם תוכניות כוח, מאמנים מובילים, שיעור ניסיון והצטרפות מהירה."
        path="/work/pulsefit-studio"
        image="/images/pulsefit/pulsefit-coach-session.webp"
        imageAlt="מאמן מוביל אימון כוח בקבוצה קטנה ב־PulseFit Studio"
        keywords={["סטודיו כושר בתל אביב", "שיעור ניסיון", "אימוני כוח", "PulseFit Studio"]}
        schema={pulseSchema}
        lang="he"
        dir="rtl"
      />

      <div className="min-h-screen bg-[#060806] text-right text-white">
        <header className="sticky top-0 z-40 border-b border-white/10 bg-[#060806]/82 backdrop-blur-xl">
          <div className="container-shell flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center justify-between gap-4">
              <PulseFitLogo />
              <LinkButton href="/" variant="neon" className="md:hidden">
                חזרה ל־Omer&apos;s
              </LinkButton>
            </div>
            <nav className="mobile-nav text-sm font-bold text-slate-300 md:flex md:flex-wrap md:items-center md:gap-6 md:overflow-visible">
              <a href="#home">בית</a>
              <a href="#programs">תוכניות</a>
              <a href="#trainers">מאמנים</a>
              <a href="#trial">שיעור ניסיון</a>
              <a href="#pricing">מחירים</a>
            </nav>
            <LinkButton href="/" variant="neon" className="hidden md:inline-flex">
              חזרה ל־Omer&apos;s
            </LinkButton>
          </div>
        </header>

        <main id="home">
          <section className="section-space pb-10 md:pb-14">
            <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="grid gap-6">
                <p className="text-xs font-extrabold tracking-[0.32em] text-lime-300/80">כוח / קצב / מסגרת</p>
                <h1 className="max-w-[11ch] text-balance font-tech text-6xl leading-[0.8] md:text-[6.3rem]">
                  כאן לא באים להעביר שעה. באים לעבוד חזק, ברור, וקבוע.
                </h1>
                <p className="max-w-xl text-lg leading-9 text-slate-300">
                  PulseFit Studio בנוי לאנשים שרוצים מערכת. אימונים חדים, מאמנים שמחזיקים סטנדרט,
                  ותהליך הצטרפות ברור שמתחיל משיעור ניסיון ונכנס ישר לשגרה.
                </p>
                <div className="flex flex-wrap gap-4">
                  <LinkButton href="#trial" variant="neon" className="gap-2">
                    קבע שיעור ניסיון
                    <ChevronLeft className="h-4 w-4" />
                  </LinkButton>
                  <LinkButton href="#programs" variant="secondary" className="gap-2 border-white/10 bg-white/5 text-white">
                    צפה בתוכניות
                    <ArrowLeft className="h-4 w-4" />
                  </LinkButton>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    ["18", "אימונים שבועיים"],
                    ["06", "מאמנים מובילים"],
                    ["92%", "התמדה לאורך זמן"]
                  ].map(([value, label]) => (
                    <div key={label} className="soft-rule border-b border-white/10 pb-5">
                      <div className="font-tech text-6xl font-bold leading-none text-lime-300 md:text-7xl">{value}</div>
                      <p className="mt-2 text-sm leading-7 text-slate-300">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="angled-panel pulse-cut overflow-hidden rounded-[2.6rem] border border-lime-300/20 bg-[#0c100c] shadow-[0_30px_90px_rgba(0,0,0,0.28)]">
                  <img
                    src="/images/pulsefit-hero.png"
                    alt="חלל האימונים של PulseFit Studio עם דשא, ציוד כוח ותאורה חדה"
                    className="h-[620px] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/12 to-lime-300/10" />
                </div>
                <m.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  className="absolute -left-3 top-8 rounded-[1.6rem] border border-lime-300/25 bg-black/75 px-5 py-4 backdrop-blur"
                >
                  <p className="text-xs font-extrabold tracking-[0.26em] text-lime-300/80">TRIAL</p>
                  <p className="mt-2 text-sm leading-6 text-white/82">אימון ראשון שמראה בדיוק איך הסטודיו עובד.</p>
                </m.div>
                <m.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  className="absolute bottom-5 right-5 max-w-[16rem] rounded-[1.7rem] border border-white/10 bg-white/8 p-5 backdrop-blur"
                >
                  <p className="font-tech text-4xl font-bold text-white">FULL BODY</p>
                  <p className="mt-2 text-sm leading-7 text-slate-200">אימון חד, עם קצב נכון ובלי יותר מדי דיבורים בין סט לסט.</p>
                </m.div>
              </div>
            </div>
          </section>

          <section id="programs" className="section-space overlap-up relative z-10 bg-transparent">
            <div className="container-shell">
              <div className="rounded-[2.8rem] bg-[#0b0f0b] px-6 py-8 shadow-[0_30px_90px_rgba(0,0,0,0.2)] md:px-8 md:py-10">
              <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
                <div>
                  <p className="text-xs font-extrabold tracking-[0.28em] text-lime-300/80">תוכניות אימון</p>
                  <h2 className="mt-4 max-w-md text-balance font-tech text-5xl leading-[0.84] md:text-[4.9rem]">
                    שלוש תוכניות. שלושה קצבים. בלי קשקוש סביב זה.
                  </h2>
                </div>
                <div className="grid gap-5">
                  {programs.map(([number, title, description], index) => (
                    <div
                      key={title}
                      className={`${index % 2 === 0 ? "pulse-cut" : "pulse-cut-top"} rounded-[2rem] border border-white/10 bg-[#111611] p-6 md:p-8`}
                    >
                      <div className="grid gap-5 md:grid-cols-[110px_1fr] md:items-start">
                        <div className="font-tech text-6xl font-bold leading-none text-lime-300/28">{number}</div>
                        <div>
                          <h3 className="font-tech text-4xl font-bold text-white">{title}</h3>
                          <p className="mt-3 max-w-3xl text-base leading-8 text-slate-300">{description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              </div>
            </div>
          </section>

          <section id="trainers" className="section-space">
            <div className="container-shell grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="overflow-hidden rounded-[2.4rem] border border-white/10 bg-[#0d120d] shadow-[0_28px_80px_rgba(0,0,0,0.22)]">
                <img
                  src="/images/pulsefit/pulsefit-coach-session.webp"
                  alt="מאמן מוביל תרגילי כוח בקבוצה קטנה ב־PulseFit Studio"
                  className="h-full min-h-[560px] w-full object-cover"
                />
              </div>
              <div className="grid gap-4">
                <div className="soft-rule pb-5">
                  <p className="text-xs font-extrabold tracking-[0.28em] text-lime-300/80">מאמנים</p>
                  <h2 className="mt-3 max-w-lg text-balance font-tech text-4xl leading-[0.92] md:text-6xl">
                    מאמנים שלא רק עומדים ליד. הם מחזיקים קצב, טכניקה וסטנדרט לכל קבוצה.
                  </h2>
                </div>
                <div className="pulse-cut rounded-[2rem] border border-lime-300/18 bg-[#111611] p-6 md:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-extrabold tracking-[0.24em] text-lime-300/80">{trainers[0][1]}</p>
                      <h3 className="mt-3 font-tech text-4xl text-white">{trainers[0][0]}</h3>
                    </div>
                    <div className="rounded-[1rem] bg-lime-300/10 px-4 py-3 text-sm font-semibold text-lime-200">
                      מובילה את קו הכוח והטכניקה
                    </div>
                  </div>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">{trainers[0][2]}</p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {trainers.slice(1).map(([name, role, description], index) => (
                    <div
                      key={name}
                      className={`${index === 0 ? "pulse-cut-top" : "pulse-cut"} rounded-[1.9rem] border border-white/10 bg-white/5 p-6 backdrop-blur`}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="font-tech text-3xl text-white">{name}</h3>
                        <span className="text-xs font-extrabold tracking-[0.24em] text-lime-300/80">{role}</span>
                      </div>
                      <p className="mt-4 text-base leading-8 text-slate-300">{description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="trial" className="section-space bg-[#0b0f0b]">
            <div className="container-shell grid gap-6 lg:grid-cols-[1.04fr_0.96fr]">
              <div className="rounded-[2.4rem] border border-white/10 bg-[#111611] p-6 md:p-8">
                <p className="text-xs font-extrabold tracking-[0.28em] text-lime-300/80">שיעור ניסיון</p>
                <h2 className="mt-4 max-w-2xl text-balance font-tech text-4xl leading-[0.92] md:text-6xl">
                  אם רצית לראות איך זה מרגיש מבפנים, מתחילים כאן. בלי נאומים ובלי מסלול מכירה ארוך.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-9 text-slate-300">
                  שיעור הניסיון בודק רמה, התאמה וקצב. אתה פוגש מאמן, מבין איך נראית המערכת השבועית,
                  ומתנסה באימון שמראה אם PulseFit מתאים לך באמת ולא רק על הנייר.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <LinkButton href="#pricing" variant="neon">
                    בחר מסלול
                  </LinkButton>
                  <LinkButton href="mailto:hello@pulsefitstudio.com" variant="secondary" className="border-white/10 bg-white/5 text-white">
                    hello@pulsefitstudio.com
                  </LinkButton>
                </div>
              </div>
              <div className="pulse-cut-top overflow-hidden rounded-[2.4rem] border border-white/10 bg-black shadow-[0_26px_80px_rgba(0,0,0,0.24)]">
                <img
                  src="/images/pulsefit/equipment-zone.png"
                  alt="אזור ציוד הכוח של PulseFit Studio עם תאורת ניאון, דשא ומתקני עבודה"
                  className="h-full min-h-[460px] w-full object-cover"
                />
              </div>
            </div>
          </section>

          <section id="pricing" className="section-space">
            <div className="container-shell">
              <div className="soft-rule pb-5">
                <p className="text-xs font-extrabold tracking-[0.28em] text-lime-300/80">מחירים</p>
                <h2 className="mt-3 max-w-xl text-balance font-tech text-4xl leading-[0.92] md:text-6xl">
                  מסלולים ברורים, בלי טבלאות כבדות ובלי אותיות קטנות שמנסות להתחבא.
                </h2>
              </div>
              <div className="mt-8 grid gap-5 lg:grid-cols-[0.9fr_1.2fr_0.9fr]">
                {pricing.map(([title, price, label, description], index) => (
                  <div
                    key={title}
                    className={`${
                      index === 1
                        ? "border-lime-300/30 bg-[linear-gradient(180deg,rgba(215,255,99,0.12),rgba(17,22,17,0.95))]"
                        : "border-white/10 bg-white/5"
                    } ${index === 0 ? "pulse-cut-top" : index === 2 ? "pulse-cut" : ""} rounded-[2rem] border p-6 md:p-7`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-tech text-3xl font-bold text-white">{title}</p>
                        <p className="mt-3 text-5xl font-bold text-lime-300">{price}</p>
                      </div>
                      <div className="text-right text-[11px] font-extrabold tracking-[0.24em] text-slate-400">
                        {index === 1 ? "הכי נבחר" : "מסלול"}
                      </div>
                    </div>
                    <p className="mt-5 text-sm font-semibold tracking-[0.22em] text-slate-400">{label}</p>
                    <p className="mt-4 text-base leading-8 text-slate-300">{description}</p>
                    <div className="mt-6 text-sm font-bold text-white/78">
                      {index === 0 ? "כניסה חזקה לשגרה" : index === 1 ? "למי שרוצה להתאמן קבוע" : "ליווי אישי מלא"}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/10 bg-[#060806] py-8 text-slate-300">
          <div className="container-shell flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-tech text-3xl text-white">PulseFit Studio</p>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-400">
                סטודיו כושר בתל אביב עם תוכניות כוח, מאמנים חזקים, שיעור ניסיון ברור ושגרת אימון שלא מרגישה גנרית.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm font-semibold">
              <a href="#programs">תוכניות</a>
              <a href="#trainers">מאמנים</a>
              <a href="#trial">שיעור ניסיון</a>
              <a href="/">חזרה ל־Omer&apos;s</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
