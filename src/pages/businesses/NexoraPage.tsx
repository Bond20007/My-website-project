import { m } from "framer-motion";
import { Bot, Layers3, Workflow } from "lucide-react";
import { LinkButton } from "../../components/common/Button";
import { NexoraLogo } from "../../components/common/BrandLogos";
import { Seo } from "../../components/seo/Seo";
import { SITE_URL } from "../../data/site";

const nexoraSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Nexora",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: `${SITE_URL}/work/nexora`,
  image: `${SITE_URL}/images/nexora/nexora-dashboard-analytics.webp`,
  description:
    "Nexora היא פלטפורמת אוטומציה לצוותי תפעול, תמיכה וצמיחה עם דשבורדים, workflows ומסלולים ברורים.",
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    price: "29"
  }
};

const features = [
  {
    title: "מנוע תהליכים",
    description: "בניית workflows, תנאים, אישורים והעברות בלי לכתוב לוגיקה מחדש בכל פעם.",
    icon: Workflow
  },
  {
    title: "שכבת תפעול אחת",
    description: "דשבורד אחד שמרכז תורים, התראות, משימות, SLA ותמונת מצב חיה לצוות.",
    icon: Layers3
  },
  {
    title: "עוזרים חכמים",
    description: "אוטומציות, ניסוחים, תעדוף ופעולות חוזרות עם עזרה חכמה ולא עם עומס מוצר מיותר.",
    icon: Bot
  }
] as const;

const featuredFeature = features[0];
const secondaryFeatures = features.slice(1);
const FeaturedFeatureIcon = featuredFeature.icon;

const steps = [
  ["חיבור מערכות", "מחברים CRM, טפסים, מקורות מידע וכלי תמיכה בלי לאבד שליטה."],
  ["בניית לוגיקה", "מגדירים תנאים, הרשאות וזרימות עבודה בשפה תפעולית ברורה."],
  ["מעקב ושיפור", "רואים מה רץ, מה נתקע, ואיפה נכון לשפר את התהליך הבא."]
] as const;

const pricing = [
  ["START", "$29", "לצוותים קטנים", ["עד 5 משתמשים", "Workflow builder", "Dashboard בסיסי"]],
  ["GROWTH", "$99", "לצוותי תפעול וצמיחה", ["אוטומציות מתקדמות", "התראות והרשאות", "חיבורים מרובים"]],
  ["ENTERPRISE", "מותאם", "לארגונים עם בקרה עמוקה", ["SSO והרשאות מורכבות", "סביבות נפרדות", "ליווי הטמעה"]]
] as const;

export function NexoraPage() {
  return (
    <>
      <Seo
        title="Nexora | פלטפורמת אוטומציה לצוותי תפעול, תמיכה וצמיחה"
        description="Nexora היא פלטפורמת אוטומציה בעברית לצוותי תפעול, תמיכה וצמיחה עם דשבורד, workflows, מחירים והרשמה."
        path="/work/nexora"
        image="/images/nexora/nexora-dashboard-analytics.webp"
        imageAlt="מסך אנליטיקה של Nexora עם גרפים, התראות וזרימת אוטומציה"
        keywords={["פלטפורמת אוטומציה", "אוטומציות לעסקים", "מוצר SaaS", "Nexora"]}
        schema={nexoraSchema}
        lang="he"
        dir="rtl"
      />

      <div className="min-h-screen bg-[#04070d] text-right text-white">
        <header className="sticky top-0 z-40 border-b border-white/10 bg-[#04070d]/82 backdrop-blur-xl">
          <div className="container-shell flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center justify-between gap-4">
              <NexoraLogo />
              <LinkButton href="/" variant="secondary" className="border-white/10 bg-white/5 text-white md:hidden">
                חזרה ל־Omer&apos;s
              </LinkButton>
            </div>
            <nav className="mobile-nav text-sm font-semibold text-slate-300 md:flex md:flex-wrap md:items-center md:gap-6 md:overflow-visible">
              <a href="#home">בית</a>
              <a href="#features">יכולות</a>
              <a href="#screens">מסכים</a>
              <a href="#pricing">מחירים</a>
              <a href="#signup">הרשמה</a>
            </nav>
            <LinkButton href="/" variant="secondary" className="hidden border-white/10 bg-white/5 text-white md:inline-flex">
              חזרה ל־Omer&apos;s
            </LinkButton>
          </div>
        </header>

        <main id="home">
          <section className="section-space pb-14 md:pb-20">
            <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="grid gap-6">
                <p className="text-xs font-extrabold tracking-[0.3em] text-cyan-300/80">אוטומציה / תפעול / בקרה</p>
                <h1 className="max-w-xl text-balance font-tech text-5xl leading-[0.88] md:text-7xl">
                  מערכת אחת שמרכזת תהליכים, מעקב, התראות והחלטות יומיומיות בלי לפזר את העבודה בין חמישה כלים.
                </h1>
                <p className="max-w-xl text-lg leading-9 text-slate-300">
                  Nexora מיועדת לצוותי תפעול, תמיכה וצמיחה שצריכים פלטפורמת אוטומציה בעברית עם דשבורד ברור,
                  workflows, הרשאות ומסלול הצטרפות שלא מרגיש מסובך כבר מהעמוד הראשון.
                </p>
                <div className="flex flex-wrap gap-4">
                  <LinkButton href="#signup" className="bg-gradient-to-r from-cyan-400 to-violet-500 text-white shadow-[0_20px_50px_rgba(99,102,241,0.28)]">
                    התחל ללא עלות
                  </LinkButton>
                  <LinkButton href="#pricing" variant="secondary" className="border-white/10 bg-white/5 text-white">
                    צפה במחירים
                  </LinkButton>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    ["99.9%", "יעד זמינות"],
                    ["4 דק'", "זמן הקמה ממוצע"],
                    ["120+", "פעולות מחוברות"]
                  ].map(([value, label]) => (
                    <div key={label} className="soft-rule border-b border-white/10 pb-5">
                      <div className="font-tech text-4xl font-bold text-cyan-300">{value}</div>
                      <p className="mt-2 text-sm leading-7 text-slate-300">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="dash-glow grain-panel rounded-[2.8rem] border border-cyan-400/20 bg-[linear-gradient(180deg,#0c1323_0%,#070b14_100%)] p-4 md:p-6">
                  <div className="rounded-[2.2rem] border border-white/10 bg-[#0b1220] p-4">
                    <div className="flex items-center justify-between border-b border-white/8 pb-4">
                      <div className="flex items-center gap-2">
                        <span className="window-dot bg-cyan-300" />
                        <span className="window-dot bg-violet-400" />
                        <span className="window-dot bg-blue-500" />
                      </div>
                      <div className="rounded-full bg-white/6 px-3 py-1 text-[11px] font-bold tracking-[0.22em] text-slate-300">
                        NEXORA DASHBOARD
                      </div>
                    </div>

                    <div className="mt-4 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                      <m.div
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 4.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                        className="rounded-[1.6rem] border border-white/8 bg-white/5 p-4"
                      >
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-semibold text-slate-200">Operational throughput</p>
                          <span className="text-xs font-bold text-cyan-300">+18%</span>
                        </div>
                        <img
                          src="/images/nexora/nexora-dashboard-analytics.webp"
                          alt="מסך אנליטיקה של Nexora עם גרפים עגולים ועמודות"
                          className="mt-4 h-[210px] w-full rounded-[1.2rem] object-cover"
                        />
                      </m.div>

                      <div className="grid gap-4">
                        <m.div
                          animate={{ y: [0, 8, 0] }}
                          transition={{ duration: 5.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                          className="rounded-[1.6rem] border border-white/8 bg-white/5 p-4"
                        >
                          <p className="text-sm font-semibold text-slate-200">Queue health</p>
                          <div className="mt-4 grid gap-3">
                            {[
                              ["Inbound", "74%"],
                              ["Escalations", "12%"],
                              ["Resolved", "91%"]
                            ].map(([name, value]) => (
                              <div key={name} className="rounded-[1rem] bg-[#0e182b] px-4 py-3">
                                <div className="flex items-center justify-between text-sm">
                                  <span className="text-slate-300">{name}</span>
                                  <span className="font-bold text-cyan-300">{value}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </m.div>

                        <m.div
                          animate={{ y: [0, -7, 0] }}
                          transition={{ duration: 4.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                          className="rounded-[1.6rem] border border-white/8 bg-[#0c1323] p-4"
                        >
                          <p className="text-sm font-semibold text-slate-200">Workflow map</p>
                          <div className="mt-4 flex items-center justify-between gap-3">
                            {["Lead", "Check", "Assign", "Done"].map((step, index) => (
                              <div key={step} className="flex items-center gap-3">
                                <div className="grid h-11 w-11 place-items-center rounded-[1rem] border border-cyan-400/20 bg-white/5 text-xs font-bold text-cyan-300">
                                  {step}
                                </div>
                                {index < 3 ? <div className="h-[2px] w-6 bg-gradient-to-l from-cyan-400 to-violet-500" /> : null}
                              </div>
                            ))}
                          </div>
                        </m.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="features" className="section-tight border-y border-white/10 bg-white/4">
            <div className="container-shell grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
              <div>
                <p className="text-xs font-extrabold tracking-[0.28em] text-cyan-300/80">יכולות</p>
                <h2 className="mt-4 max-w-md text-balance font-tech text-4xl leading-[0.92] md:text-6xl">
                  לא עוד רשימת features. שלוש יכולות שבאמת מספרות מה המוצר עושה.
                </h2>
              </div>
              <div className="grid gap-5">
                <div className="rounded-[2.2rem] border border-cyan-400/18 bg-[#09111e] p-6 md:p-7">
                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-[1.2rem] bg-cyan-400/10 text-cyan-300">
                      <FeaturedFeatureIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-tech text-3xl text-white">{featuredFeature.title}</h3>
                      <p className="mt-3 max-w-3xl text-base leading-8 text-slate-300">{featuredFeature.description}</p>
                    </div>
                  </div>
                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {["שלבים ברורים", "תנאים והרשאות", "אישורים בלי עומס"].map((item) => (
                      <div key={item} className="rounded-[1rem] border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  {secondaryFeatures.map(({ title, description, icon: Icon }) => (
                    <div key={title} className="rounded-[2rem] border border-white/10 bg-[#09111e] p-6">
                      <div className="grid gap-4">
                        <div className="grid h-12 w-12 place-items-center rounded-[1.2rem] bg-white/5 text-cyan-300">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-tech text-3xl text-white">{title}</h3>
                          <p className="mt-3 text-base leading-8 text-slate-300">{description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="screens" className="section-space">
            <div className="container-shell grid gap-5 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <div className="soft-rule pb-5">
                  <p className="text-xs font-extrabold tracking-[0.28em] text-cyan-300/80">מסכים</p>
                  <h2 className="mt-3 max-w-md text-balance font-tech text-4xl leading-[0.92] md:text-6xl">
                    מסכים שונים, שימושים שונים, אותה שפה מוצרית.
                  </h2>
                </div>
              </div>
              <div className="lg:col-span-7 grid gap-5 md:grid-cols-2">
                <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#09111e] shadow-[0_24px_70px_rgba(0,0,0,0.25)] md:col-span-2">
                  <img
                    src="/images/nexora/operations-room.png"
                    alt="חדר תפעול עתידני של Nexora עם מסכים מרובים"
                    className="h-[360px] w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#09111e]">
                  <img
                    src="/images/nexora/founder-workstation.png"
                    alt="עמדת עבודה של Nexora עם לפטופ ומסכים מוארים"
                    className="h-[260px] w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#09111e]">
                  <img
                    src="/images/nexora/nexora-dashboard-analytics.webp"
                    alt="מסך דשבורד של Nexora עם גרפים, התראות ונתונים"
                    className="h-[260px] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="section-tight border-y border-white/10 bg-white/4">
            <div className="container-shell grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
              <div>
                <p className="text-xs font-extrabold tracking-[0.28em] text-cyan-300/80">איך זה עובד</p>
                <h2 className="mt-4 max-w-md text-balance font-tech text-4xl leading-[0.92] md:text-6xl">
                  מתחברים, מגדירים, רואים תוצאה. בלי להסתבך בהטמעה אינסופית.
                </h2>
              </div>
              <div className="grid gap-5 md:grid-cols-3">
                {steps.map(([title, description], index) => (
                  <div key={title} className="rounded-[1.9rem] border border-white/10 bg-[#09111e] p-6">
                    <div className="font-tech text-5xl font-bold text-cyan-300/24">{String(index + 1).padStart(2, "0")}</div>
                    <h3 className="mt-4 font-tech text-3xl text-white">{title}</h3>
                    <p className="mt-4 text-base leading-8 text-slate-300">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="pricing" className="section-space">
            <div className="container-shell">
              <div className="soft-rule pb-5">
                <p className="text-xs font-extrabold tracking-[0.28em] text-cyan-300/80">מחירים</p>
                <h2 className="mt-3 max-w-xl text-balance font-tech text-4xl leading-[0.92] md:text-6xl">
                  מבנה מחירים שנראה כמו מוצר אמיתי. לא קופסאות צבעוניות בלי הקשר.
                </h2>
              </div>
              <div className="mt-8 grid gap-5 lg:grid-cols-[0.92fr_1.16fr_0.92fr]">
                {pricing.map(([name, price, fit, bullets], index) => (
                  <div
                    key={name}
                    className={`${
                      index === 1
                        ? "border-cyan-400/24 bg-[linear-gradient(180deg,#0c1527_0%,#09111e_100%)]"
                        : "border-white/10 bg-[#09111e]"
                    } rounded-[2rem] border p-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)]`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-tech text-3xl font-bold text-white">{name}</p>
                        <p className="mt-3 text-5xl font-bold text-cyan-300">{price}</p>
                      </div>
                      <span className="rounded-full border border-white/10 px-3 py-2 text-[11px] font-extrabold tracking-[0.22em] text-slate-300">
                        {index === 1 ? "צוותים בצמיחה" : index === 0 ? "כניסה מהירה" : "פריסה רחבה"}
                      </span>
                    </div>
                    <p className="mt-5 text-sm font-semibold tracking-[0.22em] text-slate-400">{fit}</p>
                    <div className="mt-6 grid gap-3">
                      {bullets.map((bullet) => (
                        <div key={bullet} className="rounded-[1rem] bg-white/5 px-4 py-3 text-sm leading-7 text-slate-200">
                          {bullet}
                        </div>
                      ))}
                    </div>
                    <p className="mt-6 text-sm leading-7 text-slate-400">
                      {index === 0
                        ? "מתאים לצוות קטן שרוצה להתחיל לעבוד מסודר בלי הטמעה כבדה."
                        : index === 1
                          ? "המסלול שבדרך כלל בוחרים כשהעבודה כבר עוברת בין כמה אנשי צוות."
                          : "לארגונים שצריכים הרשאות, פריסה וליווי טכני עמוק יותר."}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="signup" className="section-space pt-0">
            <div className="container-shell rounded-[2.6rem] border border-cyan-400/20 bg-[linear-gradient(140deg,#0c1527_0%,#08101d_55%,#17102b_100%)] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.24)] md:p-8">
              <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <p className="text-xs font-extrabold tracking-[0.28em] text-cyan-300/80">הרשמה</p>
                  <h2 className="mt-4 max-w-2xl text-balance font-tech text-4xl leading-[0.92] md:text-6xl">
                    אם הצוות שלך עובד עם יותר מדי כלים, קבצים והודעות, הגיע הזמן לשכבת תפעול אחת שעושה סדר.
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                    מתחילים בניסיון, מחברים מערכות, ובודקים איפה התהליך הראשון שנכון להרים. בלי התחייבות
                    כבדה ובלי להרגיש שהמוצר דורש הטמעה של חודשיים לפני שהוא נותן ערך.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <LinkButton href="mailto:hello@nexora.app" className="bg-gradient-to-r from-cyan-400 to-violet-500 text-white">
                    hello@nexora.app
                  </LinkButton>
                  <LinkButton href="#features" variant="secondary" className="border-white/10 bg-white/5 text-white">
                    חזור ליכולות
                  </LinkButton>
                </div>
              </div>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {[
                  "פלטפורמת אוטומציה לצוותי תפעול, תמיכה וצמיחה.",
                  "מסכים ברורים, workflows, הרשאות ודשבורד אחד מרכזי.",
                  "עמוד מוצר בעברית עם מסר חד ומבנה אמין."
                ].map((item) => (
                  <div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/10 bg-[#04070d] py-8 text-slate-300">
          <div className="container-shell flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-tech text-3xl text-white">Nexora</p>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-400">
                פלטפורמת אוטומציה בעברית לצוותי תפעול, תמיכה וצמיחה עם דשבורדים, workflows ומסכי מוצר שנראים בשלים.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm font-semibold">
              <a href="#features">יכולות</a>
              <a href="#screens">מסכים</a>
              <a href="#pricing">מחירים</a>
              <a href="/">חזרה ל־Omer&apos;s</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
