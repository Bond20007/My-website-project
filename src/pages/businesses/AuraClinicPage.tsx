import { m } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { HeartPulse, ShieldCheck, Sparkles, Star } from "lucide-react";
import { LinkButton } from "../../components/common/Button";
import { AuraLogo } from "../../components/common/BrandLogos";
import { Seo } from "../../components/seo/Seo";
import { SITE_URL } from "../../data/site";
import { fadeUp, stagger } from "../../lib/motion";

const auraSchema = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "Aura Clinic",
  url: `${SITE_URL}/work/aura-clinic`,
  image: `${SITE_URL}/images/aura-clinic-hero.png`,
  description:
    "Aura Clinic היא קליניקה אסתטית עם טיפולים מתקדמים, חוויית ייעוץ רגועה והזמנת פגישה ברורה ונעימה.",
  telephone: "+972-3-555-7722",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ויצמן 14",
    addressLocality: "תל אביב",
    addressCountry: "IL"
  }
};

const assurancePoints: Array<{ icon: LucideIcon; label: string }> = [
  { icon: ShieldCheck, label: "פרוטוקולים מבוקרים" },
  { icon: HeartPulse, label: "חוויה עדינה ומרגיעה" },
  { icon: Sparkles, label: "תוצאה נקייה וטבעית" }
];

const clinicReasons = [
  ["שיחה שמורידה לחץ", "הייעוץ הראשוני בנוי כדי להסביר אפשרויות, ציפיות ולוחות זמנים בלי לייצר עומס או בלבול."],
  ["טיפול שמכבד את המראה הטבעי", "המיקוד הוא באיזון, רכות ותוצאה שנראית שייכת לפנים שלך ולא לטיפול עצמו."],
  ["חוויה מלאה ולא רק פרוצדורה", "מהכניסה לקליניקה ועד המעקב אחר כך, הכול בנוי כדי לייצר תחושת סדר וביטחון."]
] as const;

const consultationFlow = [
  "שיחת היכרות קצרה להבנת צורך, אזורי טיפול והעדפות אישיות.",
  "בדיקה והתאמת מסלול טיפול לפי מצב העור, שגרה ותוצאה רצויה.",
  "הסבר ברור על זמן החלמה, תדירות, תחזוקה ועלויות."
] as const;

export function AuraClinicPage() {
  return (
    <>
      <Seo
        title="Aura Clinic | קליניקה אסתטית בתל אביב עם פגישת ייעוץ יוקרתית"
        description="Aura Clinic היא קליניקה אסתטית בתל אביב עם טיפולים מתקדמים, תוצאות טבעיות, המלצות והזמנת ייעוץ ברורה."
        path="/work/aura-clinic"
        image="/images/aura-clinic-hero.png"
        imageAlt="חדר טיפולים יוקרתי של Aura Clinic עם תאורה רכה, מיטת טיפול ואווירה רגועה"
        keywords={["Aura Clinic", "קליניקה אסתטית בתל אביב", "טיפולי עור", "פגישת ייעוץ"]}
        schema={auraSchema}
        lang="he"
        dir="rtl"
      />

      <div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(249,212,208,0.34),transparent_30%),linear-gradient(180deg,#fffdfb_0%,#f5ece5_100%)] text-right text-slate-950">
        <header className="sticky top-0 z-40 border-b border-rose-100/80 bg-white/80 backdrop-blur-xl">
          <div className="container-shell flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center justify-between gap-4">
              <AuraLogo />
              <LinkButton href="/" variant="secondary" className="md:hidden">
                חזרה ל־Omer&apos;s
              </LinkButton>
            </div>
            <nav className="flex flex-wrap gap-5 text-sm font-semibold text-slate-600">
              <a href="#home">בית</a>
              <a href="#treatments">טיפולים</a>
              <a href="#results">לפני ואחרי</a>
              <a href="#reviews">המלצות</a>
              <a href="#team">צוות</a>
              <a href="#booking">הזמנה</a>
            </nav>
            <LinkButton href="/" variant="secondary" className="hidden md:inline-flex">
              חזרה ל־Omer&apos;s
            </LinkButton>
          </div>
        </header>

        <main id="home">
          <section className="section-space">
            <div className="container-shell grid items-center gap-8 lg:grid-cols-[1.04fr_0.96fr]">
              <m.div initial="hidden" animate="show" variants={stagger}>
                <m.p variants={fadeUp} className="text-xs font-extrabold tracking-[0.32em] text-rose-400">
                  אסתטיקה מתקדמת / רכות מדויקת
                </m.p>
                <m.h1 variants={fadeUp} className="mt-4 text-balance font-display text-5xl leading-[0.9] md:text-7xl">
                  חוויית אסתטיקה רגועה, ברורה ויוקרתית שבנויה על אמון, דיוק וטיפול אישי.
                </m.h1>
                <m.p variants={fadeUp} className="mt-6 max-w-xl text-lg leading-9 text-slate-600">
                  Aura Clinic מחברת בין טיפולים מתקדמים, שיחת ייעוץ מדויקת ותקשורת מרגיעה כדי ליצור
                  מסלול הזמנה שנראה פרימיום כבר מהרגע הראשון.
                </m.p>
                <m.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
                  <LinkButton href="#booking" className="bg-rose-400 text-white shadow-[0_18px_40px_rgba(244,114,182,0.22)]">
                    קבעי פגישת ייעוץ
                  </LinkButton>
                  <LinkButton href="#treatments" variant="secondary">
                    צפי בטיפולים
                  </LinkButton>
                </m.div>
                <m.div variants={fadeUp} className="mt-10 grid gap-4 md:grid-cols-3">
                  {[
                    ["בליווי רופאה", "תוכנית טיפול מסודרת"],
                    ["4.9 / 5", "שביעות רצון גבוהה"],
                    ["אישי", "חדרי טיפול פרטיים"]
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-[1.6rem] border border-rose-100 bg-white/80 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.05)]">
                      <div className="font-display text-3xl text-slate-950">{value}</div>
                      <p className="mt-2 text-sm text-slate-600">{label}</p>
                    </div>
                  ))}
                </m.div>
              </m.div>

              <m.div initial="hidden" animate="show" variants={fadeUp} className="relative">
                <div className="premium-outline overflow-hidden rounded-[2.2rem] border border-white bg-white hero-shadow">
                  <img
                    src="/images/aura-clinic-hero.png"
                    alt="חדר טיפול מואר של Aura Clinic עם חומרים אסתטיים, תאורה רכה וקווים נקיים"
                    className="h-[640px] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/45 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 grid gap-4 md:grid-cols-3">
                    {assurancePoints.map(({ icon: Icon, label }) => (
                      <div key={label} className="rounded-[1.6rem] border border-white/90 bg-white/78 p-5 backdrop-blur-xl">
                        <Icon className="h-5 w-5 text-rose-400" />
                        <p className="mt-4 text-sm font-semibold text-slate-700">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </m.div>
            </div>
          </section>

          <section id="treatments" className="section-space border-y border-rose-100 bg-white/60">
            <div className="container-shell">
              <m.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }} variants={stagger}>
                <p className="text-xs font-extrabold tracking-[0.32em] text-rose-400">טיפולים</p>
                <h2 className="mt-4 text-balance font-display text-4xl md:text-6xl">
                  עמודי טיפול שמדברים בשפה רגועה, מסבירים נכון ומורידים חוסר ודאות.
                </h2>
                <div className="mt-10 grid gap-5 lg:grid-cols-3">
                  {[
                    ["חידוש עור", "טיפולים לשיפור מרקם, גוון ומראה אחיד ורענן."],
                    ["הזרקות", "עבודה עדינה לשמירה על תוצאה טבעית ואיזון נכון בפנים."],
                    ["טיפולי זוהר", "שיקום לחות, מראה רך ותחזוקה שוטפת לעור חיוני."]
                  ].map(([title, description]) => (
                    <m.article
                      key={title}
                      variants={fadeUp}
                      className="rounded-[1.8rem] border border-rose-100 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)]"
                    >
                      <h3 className="font-display text-3xl text-slate-950">{title}</h3>
                      <p className="mt-4 text-base leading-8 text-slate-600">{description}</p>
                    </m.article>
                  ))}
                </div>
              </m.div>
            </div>
          </section>

          <section className="section-space">
            <div className="container-shell">
              <m.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }} variants={stagger}>
                <p className="text-xs font-extrabold tracking-[0.32em] text-rose-400">למה בוחרות בנו</p>
                <h2 className="mt-4 text-balance font-display text-4xl md:text-6xl">
                  Aura Clinic בנויה כמו קליניקה שמבינה שגם שפה, רוגע ואמון הם חלק מהטיפול.
                </h2>
                <div className="mt-10 grid gap-5 lg:grid-cols-3">
                  {clinicReasons.map(([title, description]) => (
                    <m.article
                      key={title}
                      variants={fadeUp}
                      className="rounded-[1.8rem] border border-rose-100 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)]"
                    >
                      <h3 className="font-display text-3xl text-slate-950">{title}</h3>
                      <p className="mt-4 text-base leading-8 text-slate-600">{description}</p>
                    </m.article>
                  ))}
                </div>
              </m.div>
            </div>
          </section>

          <section id="results" className="section-space">
            <div className="container-shell grid gap-5 lg:grid-cols-[1fr_1fr]">
              <div className="overflow-hidden rounded-[2rem] border border-rose-100 bg-white">
                <img
                  src="/images/aura/reception-lounge.png"
                  alt="אזור ההמתנה של Aura Clinic עם קווים רכים, כורסאות בהירות ותחושת רוגע"
                  className="h-[420px] w-full object-cover"
                />
              </div>
              <div className="rounded-[2rem] border border-rose-100 bg-white p-8 shadow-[0_18px_40px_rgba(15,23,42,0.05)]">
                <p className="text-xs font-extrabold tracking-[0.32em] text-rose-400">לפני ואחרי</p>
                <h2 className="mt-4 text-balance font-display text-4xl md:text-5xl">
                  הצגת תוצאות שמרגישה אלגנטית, אמינה ומדויקת ולא רפואית מדי.
                </h2>
                <p className="mt-5 text-lg leading-9 text-slate-600">
                  אזור התוצאות בנוי כדי להוריד היסוס: הוא מבהיר ציפיות, מסביר טווחי זמן, מוסיף הקשר
                  מקצועי ושומר על שפה שמדגישה מראה טבעי ולא תחושה מלאכותית.
                </p>
              </div>
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
                  className="overflow-hidden rounded-[2rem] border border-rose-100 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)]"
                >
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster="/images/aura/treatment-detail.png"
                    aria-label="וידאו אווירה של Aura Clinic עם מעבר עדין בין חלל הקליניקה, אזור ההמתנה והטיפול"
                    className="h-full min-h-[430px] w-full object-cover"
                  >
                    <source src="/videos/aura/clinic-loop.mp4" type="video/mp4" />
                  </video>
                </m.article>
                <div className="grid gap-5">
                  <m.article
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.18 }}
                    variants={fadeUp}
                    className="overflow-hidden rounded-[2rem] border border-rose-100 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.05)]"
                  >
                    <img
                      src="/images/aura/treatment-detail.png"
                      alt="פרטי טיפול וציוד אסתטי יוקרתי ב־Aura Clinic"
                      className="h-[212px] w-full object-cover"
                    />
                  </m.article>
                  <m.article
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.18 }}
                    variants={fadeUp}
                    className="rounded-[2rem] border border-rose-100 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)]"
                  >
                    <p className="text-xs font-extrabold tracking-[0.32em] text-rose-400">הקליניקה מבפנים</p>
                    <h3 className="mt-4 font-display text-3xl text-slate-950">
                      יותר חומר ויזואלי, פחות תחושת תבנית, ועמוד שמרגיש כמו קליניקה אמיתית.
                    </h3>
                    <p className="mt-4 text-base leading-8 text-slate-600">
                      הוספתי גם וידאו קצר וגם תמונות מקוריות של חלל ההמתנה והטיפול כדי שהאתר יעביר
                      איכות, רוגע ואמון לפני שהגולשת מגיעה להזמנה.
                    </p>
                  </m.article>
                </div>
              </div>
            </div>
          </section>

          <section id="reviews" className="section-space border-y border-rose-100 bg-white/60">
            <div className="container-shell grid gap-5 md:grid-cols-3">
              {[
                "הקליניקה מרגישה רגועה, ברורה ומדויקת כבר מהפנייה הראשונה.",
                "כל תהליך הייעוץ היה נעים, מסודר וממש נתן תחושת ביטחון.",
                "התוצאה הייתה נקייה, עדינה ומדויקת בדיוק כמו שהבטיחו לי."
              ].map((quote) => (
                <div key={quote} className="rounded-[1.8rem] border border-rose-100 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)]">
                  <Star className="h-5 w-5 fill-rose-300 text-rose-300" />
                  <p className="mt-4 text-base leading-8 text-slate-700">{quote}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="team" className="section-space">
            <div className="container-shell grid gap-5 md:grid-cols-3">
              {[
                ["ד״ר יעל מור", "רפואה אסתטית, אבחון ותכנון מסלול טיפול."],
                ["נועה הראל", "פרוטוקולים מתקדמים לעור וליווי לפני ואחרי טיפול."],
                ["ליאן דביר", "שירות לקוחות, ייעוץ ראשוני ומעקב המשך."]
              ].map(([name, role]) => (
                <div key={name} className="rounded-[2rem] border border-rose-100 bg-white p-7 shadow-[0_18px_40px_rgba(15,23,42,0.05)]">
                  <div className="grid h-16 w-16 place-items-center rounded-2xl bg-rose-100 font-display text-lg text-rose-500">
                    {name[0]}
                  </div>
                  <h3 className="mt-6 font-display text-3xl text-slate-950">{name}</h3>
                  <p className="mt-3 text-slate-600">{role}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="section-space border-y border-rose-100 bg-white/60">
            <div className="container-shell grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-[2rem] border border-rose-100 bg-white p-8 shadow-[0_18px_40px_rgba(15,23,42,0.05)]">
                <p className="text-xs font-extrabold tracking-[0.32em] text-rose-400">איך נראה הייעוץ</p>
                <h2 className="mt-4 text-balance font-display text-4xl md:text-5xl">
                  עוד לפני טיפול, הלקוחה צריכה להרגיש שמסבירים לה נכון ושיש לה על מי לסמוך.
                </h2>
              </div>
              <div className="grid gap-4">
                {consultationFlow.map((item) => (
                  <div key={item} className="rounded-[1.6rem] border border-rose-100 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
                    <p className="text-base leading-8 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="booking" className="section-space">
            <div className="container-shell rounded-[2rem] border border-rose-100 bg-white p-8 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
              <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <p className="text-xs font-extrabold tracking-[0.32em] text-rose-400">הזמנה</p>
                  <h2 className="mt-4 text-balance font-display text-4xl md:text-5xl">
                    קבעי פגישת ייעוץ פרטית ב־Aura Clinic.
                  </h2>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                    מתחילים בשיחת ייעוץ רגועה, מגדירים מטרה, בונים כיוון טיפולי ומקבלים מסלול שמתאים לעור,
                    לשגרה ולתוצאה שאת באמת רוצה לראות.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {["ייעוץ פרטי", "הסבר ברור", "תוצאה טבעית"].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-rose-100 bg-rose-50 px-4 py-2 text-sm text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <LinkButton href="mailto:booking@auraclinic.com" className="bg-rose-400 text-white shadow-[0_18px_40px_rgba(244,114,182,0.22)]">
                    booking@auraclinic.com
                  </LinkButton>
                  <LinkButton href="tel:+97235557722" variant="secondary">
                    03-555-7722
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
