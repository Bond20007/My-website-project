import { m } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Bot, CheckCircle2, Layers3, Lock, Workflow } from "lucide-react";
import { LinkButton } from "../../components/common/Button";
import { NexoraLogo } from "../../components/common/BrandLogos";
import { Seo } from "../../components/seo/Seo";
import { SITE_URL } from "../../data/site";
import { fadeUp, stagger } from "../../lib/motion";

const nexoraSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Nexora",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: `${SITE_URL}/work/nexora`,
  image: `${SITE_URL}/images/nexora-hero.png`,
  description:
    "Nexora היא פלטפורמת תוכנה לניהול אוטומציות, תהליכים ודיווח בזמן אמת עם חוויית מוצר עתידנית וברורה.",
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    price: "29"
  }
};

const productPillars: Array<{ icon: LucideIcon; label: string }> = [
  { icon: Workflow, label: "מנוע תהליכים" },
  { icon: Layers3, label: "שכבת תפעול אחודה" },
  { icon: Bot, label: "עוזרים חכמים" }
];

const useCases = [
  ["לצוותי תפעול", "איחוד תהליכים, אישורים, תורים והרצות קבועות בלי לנהל הכול ידנית."],
  ["לצוותי צמיחה", "חיבור בין לידים, CRM, דיווחים וטריגרים כדי שהעבודה תישאר מהירה ומדויקת."],
  ["לצוותי תמיכה", "אוטומציה של מענה, הקצאות, תעדוף ומעקב אחר פעולות שחוזרות על עצמן."]
] as const;

const productImpact = [
  "העמוד מסביר מוצר מורכב בשפה קצרה, בטוחה ולא טכנית מדי.",
  "המחיר, היכולות והשלב הבא ברורים כבר מהגלילה הראשונה.",
  "העיצוב נראה כמו מוצר בשל ולא כמו דף תוכנה גנרי."
] as const;

export function NexoraPage() {
  return (
    <>
      <Seo
        title="Nexora | פלטפורמת אוטומציה לצוותי תפעול, תמיכה וצמיחה"
        description="Nexora היא פלטפורמת אוטומציה לצוותי תפעול, תמיכה וצמיחה עם עמוד מוצר טכנולוגי, מסלולים והרשמה מהירה."
        path="/work/nexora"
        image="/images/nexora-hero.png"
        imageAlt="הדמיית המוצר של Nexora עם דאשבורד עתידני, גרדיאנטים וכרטיסי מערכת"
        keywords={["Nexora", "פלטפורמת אוטומציה", "מוצר תוכנה", "אוטומציות לעסקים"]}
        schema={nexoraSchema}
        lang="he"
        dir="rtl"
      />

      <div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.22),transparent_26%),linear-gradient(180deg,#07101d_0%,#04070d_100%)] text-right text-white">
        <header className="sticky top-0 z-40 border-b border-white/10 bg-[#050914]/72 backdrop-blur-xl">
          <div className="container-shell flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center justify-between gap-4">
              <NexoraLogo />
              <LinkButton href="/" variant="secondary" className="border-white/10 bg-white/5 text-white md:hidden">
                חזרה ל־Omer&apos;s
              </LinkButton>
            </div>
            <nav className="flex flex-wrap gap-5 text-sm font-semibold text-slate-300">
              <a href="#home">בית</a>
              <a href="#features">יכולות</a>
              <a href="#how">איך זה עובד</a>
              <a href="#pricing">מסלולים</a>
              <a href="#testimonials">המלצות</a>
              <a href="#signup">הרשמה</a>
            </nav>
            <LinkButton href="/" variant="secondary" className="hidden border-white/10 bg-white/5 text-white md:inline-flex">
              חזרה ל־Omer&apos;s
            </LinkButton>
          </div>
        </header>

        <main id="home">
          <section className="section-space">
            <div className="container-shell grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <m.div initial="hidden" animate="show" variants={stagger}>
                <m.p variants={fadeUp} className="text-xs font-extrabold tracking-[0.32em] text-cyan-300/80">
                  אוטומציה / תפעול / מוצר
                </m.p>
                <m.h1 variants={fadeUp} className="mt-4 text-balance font-tech text-5xl leading-[0.88] md:text-7xl">
                  סביבת עבודה אחת שמחברת אוטומציה, תפעול, בקרה ודיווח בקצב של צוות מודרני.
                </m.h1>
                <m.p variants={fadeUp} className="mt-6 max-w-xl text-lg leading-9 text-slate-300">
                  Nexora נותנת לצוותי צמיחה, תמיכה ותפעול שכבה אחת לבניית תהליכים, ניטור הרצות, הרשאות
                  ואופטימיזציה, בלי שהמוצר ירגיש מסובך או עמוס מדי.
                </m.p>
                <m.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
                  <LinkButton href="#signup" className="bg-gradient-to-r from-cyan-400 to-violet-500 text-white shadow-[0_20px_50px_rgba(99,102,241,0.28)]">
                    התחל ללא עלות
                  </LinkButton>
                  <LinkButton href="#features" variant="secondary" className="border-white/10 bg-white/5 text-white">
                    צפה ביכולות
                  </LinkButton>
                </m.div>
                <m.div variants={fadeUp} className="mt-10 grid gap-4 md:grid-cols-3">
                  {[
                    ["99.9%", "יעד זמינות"],
                    ["4 דק׳", "זמן הקמה ממוצע"],
                    ["120+", "פעולות מחוברות"]
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-[1.6rem] border border-white/10 bg-white/5 p-5 backdrop-blur">
                      <div className="font-tech text-3xl font-bold text-cyan-300">{value}</div>
                      <p className="mt-2 text-sm text-slate-300">{label}</p>
                    </div>
                  ))}
                </m.div>
              </m.div>

              <m.div initial="hidden" animate="show" variants={fadeUp} className="relative">
                <div className="premium-outline overflow-hidden rounded-[2.2rem] border border-cyan-400/20 bg-slate-950 hero-shadow">
                  <img
                    src="/images/nexora-hero.png"
                    alt="המחשה עתידנית של Nexora עם דאשבורד, אוטומציות ושכבות מידע"
                    className="h-[640px] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/78 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 grid gap-4 lg:grid-cols-3">
                    {productPillars.map(({ icon: Icon, label }) => (
                      <div key={label} className="rounded-[1.5rem] border border-white/10 bg-slate-950/55 p-5 backdrop-blur-xl">
                        <Icon className="h-5 w-5 text-cyan-300" />
                        <p className="mt-4 text-sm font-semibold text-slate-100">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </m.div>
            </div>
          </section>

          <section id="features" className="section-space border-y border-white/10 bg-white/4">
            <div className="container-shell">
              <m.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }} variants={stagger}>
                <p className="text-xs font-extrabold tracking-[0.32em] text-cyan-300/80">יכולות</p>
                <h2 className="mt-4 text-balance font-tech text-4xl md:text-6xl">
                  ארכיטקטורת תוכן שמצליחה להסביר מוצר מורכב בלי להפוך אותו למאיים.
                </h2>
                <div className="mt-10 grid gap-5 lg:grid-cols-3">
                  {[
                    ["בונה תהליכים", "יצירת אוטומציות בצורה חזותית וחיבור פעולות בין צוותים."],
                    ["ניטור חי", "מעקב אחרי הרצות, כשלים, אישורים ותורים במסך אחד."],
                    ["סביבות מאובטחות", "הרשאות, יומן פעילות והפרדה ברורה בין סביבת עבודה לצוות."]
                  ].map(([title, description], index) => (
                    <m.article
                      key={title}
                      variants={fadeUp}
                      className="rounded-[1.8rem] border border-white/10 bg-slate-950/30 p-6 backdrop-blur"
                    >
                      {index === 2 ? <Lock className="h-5 w-5 text-cyan-300" /> : null}
                      <h3 className="mt-4 font-tech text-3xl text-white">{title}</h3>
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
                  className="overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-slate-950/45 shadow-[0_24px_80px_rgba(3,7,18,0.3)]"
                >
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster="/images/nexora/operations-room.png"
                    aria-label="וידאו אווירה של Nexora עם מעבר בין סביבת תפעול, עמדת עבודה ודשבורדים עתידניים"
                    className="h-full min-h-[430px] w-full object-cover"
                  >
                    <source src="/videos/nexora/product-loop.mp4" type="video/mp4" />
                  </video>
                </m.article>
                <div className="grid gap-5">
                  {[
                    ["/images/nexora/operations-room.png", "חדר תפעול עתידני של Nexora עם מסכים ואור כחול־סגלגל"],
                    ["/images/nexora/founder-workstation.png", "עמדת עבודה יוקרתית של Nexora עם לפטופ ודשבורד מואר"]
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

          <section className="section-space border-y border-white/10 bg-white/4">
            <div className="container-shell">
              <m.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }} variants={stagger}>
                <p className="text-xs font-extrabold tracking-[0.32em] text-cyan-300/80">למי זה מתאים</p>
                <h2 className="mt-4 text-balance font-tech text-4xl md:text-6xl">
                  Nexora לא מנסה להתאים לכולם. היא בנויה לצוותים שחייבים תהליכים ברורים ומהירים.
                </h2>
                <div className="mt-10 grid gap-5 lg:grid-cols-3">
                  {useCases.map(([title, description]) => (
                    <m.article
                      key={title}
                      variants={fadeUp}
                      className="rounded-[1.8rem] border border-white/10 bg-slate-950/30 p-6 backdrop-blur"
                    >
                      <h3 className="font-tech text-3xl text-white">{title}</h3>
                      <p className="mt-4 text-base leading-8 text-slate-300">{description}</p>
                    </m.article>
                  ))}
                </div>
              </m.div>
            </div>
          </section>

          <section id="how" className="section-space">
            <div className="container-shell grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-[2rem] border border-white/10 bg-slate-950/35 p-8 backdrop-blur">
                <p className="text-xs font-extrabold tracking-[0.32em] text-cyan-300/80">איך זה עובד</p>
                <h2 className="mt-4 text-balance font-tech text-4xl md:text-5xl">
                  מחברים, בונים, עוקבים ומשפרים, בלי לאבד שליטה בדרך.
                </h2>
                <p className="mt-5 text-lg leading-9 text-slate-300">
                  האתר מציג את המוצר בארבע תחנות ברורות: חיבור למערכות, בניית לוגיקה, ניטור ריצות
                  והבנת ההשפעה העסקית של כל תהליך.
                </p>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                {[
                  "מחברים את המערכות הקיימות דרך אינטגרציות וחיבורי API.",
                  "בונים לוגיקה עם בלוקים, תנאים והרשאות חוזרות לשימוש.",
                  "עוקבים אחרי תוצאות עם לוחות בקרה, לוגים והתראות.",
                  "משפרים תהליכים עם אישורים, תבניות עבודה ואופטימיזציה."
                ].map((item) => (
                  <div key={item} className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
                    <p className="text-base leading-8 text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section-space">
            <div className="container-shell grid gap-5 md:grid-cols-3">
              {productImpact.map((item) => (
                <m.article
                  key={item}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.18 }}
                  variants={fadeUp}
                  className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6 backdrop-blur"
                >
                  <p className="text-xs font-extrabold tracking-[0.32em] text-cyan-300/80">השפעה</p>
                  <p className="mt-4 text-base leading-8 text-slate-200">{item}</p>
                </m.article>
              ))}
            </div>
          </section>

          <section id="pricing" className="section-space border-y border-white/10 bg-white/4">
            <div className="container-shell grid gap-5 lg:grid-cols-3">
              {[
                ["התחלה", "$29", "למפעילים שרוצים להתחיל לבנות אוטומציות ראשונות במהירות."],
                ["צמיחה", "$99", "לצוותים חוצי ארגון שמנהלים תהליכים ומשימות משותפות."],
                ["ארגוני", "מותאם", "לארגונים עם אבטחה, שליטה והרשאות מתקדמות."]
              ].map(([title, price, description]) => (
                <div key={title} className="rounded-[2rem] border border-white/10 bg-slate-950/35 p-7 backdrop-blur">
                  <h3 className="font-tech text-3xl text-white">{title}</h3>
                  <p className="mt-3 text-4xl font-bold text-cyan-300">{price}</p>
                  <p className="mt-4 text-slate-300">{description}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="testimonials" className="section-space">
            <div className="container-shell grid gap-5 md:grid-cols-3">
              {[
                "Nexora הפכה שישה כלים מפוזרים לשכבת תפעול אחת שקל להבין ולשלוט בה.",
                "העמוד מצליח להסביר מוצר טכנולוגי מורכב בצורה מהירה וברורה מאוד.",
                "תהליך ההרשמה פשוט, בטוח ונותן תחושת מוצר בשל כבר מהמסך הראשון."
              ].map((quote) => (
                <div key={quote} className="rounded-[1.8rem] border border-white/10 bg-slate-950/35 p-6 backdrop-blur">
                  <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                  <p className="mt-4 text-base leading-8 text-slate-200">{quote}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="signup" className="section-space">
            <div className="container-shell rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/18 via-violet-500/14 to-transparent p-8 backdrop-blur">
              <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <p className="text-xs font-extrabold tracking-[0.32em] text-cyan-300/80">הרשמה</p>
                  <h2 className="mt-4 text-balance font-tech text-4xl md:text-5xl">
                    פתח סביבת עבודה חדשה והקם שכבת אוטומציה חכמה עם Nexora.
                  </h2>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                    יוצרים סביבת עבודה, מחברים מערכות, מגדירים לוגיקה ומתחילים להריץ תהליכים חוזרים בתוך
                    כמה דקות, עם בקרה מלאה לכל אורך הדרך.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {["פתיחה מהירה", "חיבורי API", "בקרה וניטור"].map((item) => (
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
                  <LinkButton href="mailto:hello@nexora.app" className="bg-gradient-to-r from-cyan-400 to-violet-500 text-white">
                    hello@nexora.app
                  </LinkButton>
                  <LinkButton href="#features" variant="secondary" className="border-white/10 bg-white/5 text-white">
                    צפה בפרטי המוצר
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
