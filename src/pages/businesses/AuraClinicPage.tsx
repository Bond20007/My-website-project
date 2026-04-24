import { ChevronLeft, Star } from "lucide-react";
import { LinkButton } from "../../components/common/Button";
import { AuraLogo } from "../../components/common/BrandLogos";
import { Seo } from "../../components/seo/Seo";
import { SITE_URL } from "../../data/site";

const auraSchema = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "Aura Clinic",
  url: `${SITE_URL}/work/aura-clinic`,
  image: `${SITE_URL}/images/aura/aura-consultation-room.webp`,
  description:
    "Aura Clinic היא קליניקה אסתטית בתל אביב עם טיפולים עדינים, שיחת ייעוץ ברורה וחוויית טיפול רגועה ונקייה.",
  telephone: "+972-3-555-7722",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ויצמן 14",
    addressLocality: "תל אביב",
    addressCountry: "IL"
  }
};

const treatments = [
  ["חידוש עור", "טיפול עדין לשיפור מרקם, גוון ואחידות בלי תחושה אגרסיבית מדי."],
  ["הזרקות מדויקות", "גישה שמכוונת לאיזון ולמראה טבעי, לא לשינוי שנראה מייד מלאכותי."],
  ["שיקום וזוהר", "שילוב של לחות, תחזוקה וטיפול תקופתי לעור שצריך חזרה לרעננות."]
] as const;

const processItems = [
  "מתחילים בשיחה רגועה כדי להבין מה מפריע, מה חשוב לך, ומה בכלל לא.",
  "בודקים מצב עור, מסבירים אפשרויות, ומחליטים יחד אם צריך טיפול נקודתי או תהליך.",
  "מקבלים הסבר ברור על זמן החלמה, תוצאה צפויה, ועל מה נכון לעשות בהמשך."
] as const;

const reviewQuotes = [
  {
    quote: "הכול הרגיש נעים, מוסבר ולא מלחיץ. כבר בשיחה הראשונה היה ברור שמדברים איתי בגובה העיניים.",
    name: "שני, רמת גן"
  },
  {
    quote: "לא דחפו טיפול שלא צריך. הסבירו מה נכון, מה לא חובה, ואיך ייראה התהליך באמת.",
    name: "יעל, תל אביב"
  },
  {
    quote: "התוצאה נשארה טבעית ונקייה. בדיוק מה שקיוויתי לקבל.",
    name: "מור, גבעתיים"
  }
] as const;

export function AuraClinicPage() {
  return (
    <>
      <Seo
        title="Aura Clinic | קליניקה אסתטית בתל אביב עם ייעוץ וטיפולים טבעיים"
        description="Aura Clinic היא קליניקה אסתטית בתל אביב עם טיפולים מדויקים, שיחת ייעוץ ברורה, תהליך רגוע וקביעת תור נוחה."
        path="/work/aura-clinic"
        image="/images/aura/aura-consultation-room.webp"
        imageAlt="פגישת ייעוץ ב־Aura Clinic בחלל בהיר, שקט ואלגנטי"
        keywords={["קליניקה אסתטית בתל אביב", "טיפולי עור", "פגישת ייעוץ", "Aura Clinic"]}
        schema={auraSchema}
        lang="he"
        dir="rtl"
      />

      <div className="min-h-screen bg-[#f7f1eb] text-right text-slate-950">
        <header className="sticky top-0 z-40 border-b border-rose-100/80 bg-[#f7f1eb]/88 backdrop-blur-xl">
          <div className="container-shell flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center justify-between gap-4">
              <AuraLogo />
              <LinkButton href="/" variant="secondary" className="md:hidden">
                חזרה ל־Omer&apos;s
              </LinkButton>
            </div>
            <nav className="mobile-nav text-sm font-semibold text-slate-600 md:flex md:flex-wrap md:items-center md:gap-6 md:overflow-visible">
              <a href="#home">בית</a>
              <a href="#treatments">טיפולים</a>
              <a href="#process">תהליך טיפול</a>
              <a href="#reviews">המלצות</a>
              <a href="#booking">קביעת תור</a>
            </nav>
            <LinkButton href="/" variant="secondary" className="hidden md:inline-flex">
              חזרה ל־Omer&apos;s
            </LinkButton>
          </div>
        </header>

        <main id="home">
          <section className="section-space pb-12 md:pb-16">
            <div className="container-shell grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
              <div className="grid gap-6">
                <p className="text-xs font-extrabold tracking-[0.3em] text-rose-400">אסתטיקה מדויקת / שקט / אמון</p>
                <h1 className="max-w-[12ch] text-balance font-display text-6xl leading-[0.84] md:text-[6rem]">
                  טיפול טוב מתחיל ברוגע. לא בלחץ, ולא בהבטחות גדולות.
                </h1>
                <p className="max-w-xl text-lg leading-9 text-slate-600">
                  Aura Clinic בנויה לנשים שמחפשות קליניקה אסתטית רגועה, נקייה ולא מתאמצת. שיחת ייעוץ
                  ברורה, טיפולים עדינים, והרגשה שיש על מי לסמוך עוד לפני שנקבע תור.
                </p>
                <div className="flex flex-wrap gap-4">
                  <LinkButton href="#booking" className="bg-rose-400 text-white shadow-[0_18px_40px_rgba(244,114,182,0.18)]">
                    קביעת תור
                  </LinkButton>
                  <LinkButton href="#treatments" variant="secondary">
                    צפייה בטיפולים
                  </LinkButton>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-[0.95fr_1.05fr]">
                <div className="aura-float rounded-[2.2rem] border border-white bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
                  <img
                    src="/images/aura-clinic-hero.png"
                    alt="חדר טיפולים של Aura Clinic עם תאורה רכה ועיצוב נקי"
                    className="h-[520px] w-full rounded-[1.7rem] object-cover"
                  />
                </div>
                <div className="grid gap-5">
                  <div className="aura-float rounded-[2.2rem] border border-white bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
                    <img
                      src="/images/aura/aura-consultation-room.webp"
                      alt="פגישת ייעוץ פרטית ב־Aura Clinic עם אשת צוות ומטופלת"
                      className="h-[250px] w-full rounded-[1.7rem] object-cover"
                    />
                  </div>
                  <div className="rounded-[2.2rem] border border-rose-100 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
                    <p className="text-xs font-extrabold tracking-[0.26em] text-rose-400">למה זה מרגיש רגוע</p>
                    <p className="mt-4 text-base leading-8 text-slate-600">
                      כי אין כאן עומס. לא בעיצוב, לא בשיחה, ולא באופן שבו מציגים טיפול. הכול בנוי כדי לתת
                      תחושת סדר ולא להפעיל לחץ.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="treatments" className="section-tight overlap-up relative z-10 bg-transparent">
            <div className="container-shell rounded-[2.8rem] border border-rose-100/80 bg-white/84 px-6 py-10 shadow-[0_24px_70px_rgba(15,23,42,0.05)] md:px-8 md:py-12">
              <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-xs font-extrabold tracking-[0.28em] text-rose-400">טיפולים</p>
                <h2 className="mt-4 max-w-md text-balance font-display text-5xl leading-[0.86] md:text-[4.7rem]">
                  כל טיפול מוסבר בפשטות. בלי לנסות להפעיל לחץ.
                </h2>
              </div>
              <div className="grid gap-0">
                {treatments.map(([title, description]) => (
                  <div key={title} className="soft-rule py-6">
                    <div className="grid gap-4 md:grid-cols-[0.75fr_1.25fr] md:items-start">
                      <h3 className="font-display text-3xl text-slate-950">{title}</h3>
                      <p className="max-w-2xl text-base leading-8 text-slate-600">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            </div>
          </section>

          <section id="process" className="section-space">
            <div className="container-shell grid gap-6 lg:grid-cols-[0.96fr_1.04fr]">
              <div className="grid gap-5">
                <div className="overflow-hidden rounded-[2.4rem] border border-white bg-white p-5 shadow-[0_24px_70px_rgba(15,23,42,0.05)]">
                  <img
                    src="/images/aura/reception-lounge.png"
                    alt="אזור ההמתנה של Aura Clinic עם כורסאות בהירות ואווירה שקטה"
                    className="h-full min-h-[360px] w-full rounded-[1.7rem] object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-[2.4rem] border border-rose-100 bg-white p-5 shadow-[0_24px_70px_rgba(15,23,42,0.05)]">
                  <img
                    src="/images/aura/treatment-detail.png"
                    alt="טיפול מדויק ב-Aura Clinic בחדר מואר ונקי"
                    className="h-full min-h-[220px] w-full rounded-[1.7rem] object-cover"
                  />
                </div>
              </div>
              <div className="grid gap-5">
                <div className="soft-rule pb-5">
                  <p className="text-xs font-extrabold tracking-[0.28em] text-rose-400">תהליך טיפול</p>
                  <h2 className="mt-3 max-w-lg text-balance font-display text-4xl leading-[0.92] md:text-6xl">
                    מהפגישה הראשונה ועד הטיפול עצמו, הכול אמור להיות ברור ולא מאיים.
                  </h2>
                </div>
                <div className="relative grid gap-4 before:absolute before:bottom-4 before:right-[1.35rem] before:top-4 before:w-px before:bg-rose-100">
                  {processItems.map((item, index) => (
                    <div key={item} className="relative rounded-[1.9rem] border border-rose-100 bg-white p-6 pr-16 shadow-[0_14px_35px_rgba(15,23,42,0.04)]">
                      <div className="absolute right-5 top-5 grid h-8 w-8 place-items-center rounded-full bg-rose-100 font-bold text-rose-500">
                        {index + 1}
                      </div>
                      <p className="text-base leading-8 text-slate-600">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="reviews" className="section-space border-y border-rose-100 bg-white/70">
            <div className="container-shell">
              <div className="soft-rule pb-5">
                <p className="text-xs font-extrabold tracking-[0.28em] text-rose-400">המלצות</p>
                <h2 className="mt-3 max-w-xl text-balance font-display text-4xl leading-[0.92] md:text-6xl">
                  המלצות שנשמעות כמו מי שבאמת הייתה כאן. לא כמו ציטוטים שנכתבו בשביל למלא אתר.
                </h2>
              </div>
              <div className="mt-8 grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
                <div className="rounded-[2.2rem] border border-rose-100 bg-white p-7 shadow-[0_18px_40px_rgba(15,23,42,0.05)]">
                  <Star className="h-5 w-5 fill-rose-300 text-rose-300" />
                  <p className="mt-5 max-w-2xl font-display text-3xl leading-[1.3] text-slate-900">{reviewQuotes[0].quote}</p>
                  <p className="mt-5 text-sm font-bold tracking-[0.18em] text-rose-400">{reviewQuotes[0].name}</p>
                </div>
                <div className="grid gap-5">
                  {reviewQuotes.slice(1).map((review) => (
                    <div key={review.name} className="rounded-[2rem] border border-rose-100 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)]">
                      <Star className="h-5 w-5 fill-rose-300 text-rose-300" />
                      <p className="mt-4 text-base leading-8 text-slate-700">{review.quote}</p>
                      <p className="mt-4 text-sm font-bold tracking-[0.18em] text-rose-400">{review.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="booking" className="section-space">
            <div className="container-shell rounded-[2.5rem] border border-white bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.05)] md:p-8">
              <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <p className="text-xs font-extrabold tracking-[0.28em] text-rose-400">קביעת תור</p>
                  <h2 className="mt-4 max-w-2xl text-balance font-display text-4xl leading-[0.92] md:text-6xl">
                    אם רצית לדבר קודם, לשאול שאלה או לקבוע פגישת ייעוץ, מכאן מתחילים.
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                    אפשר לשלוח מייל, לבקש שיחה, או לקבוע פגישה בקליניקה. בלי לחץ ובלי התחייבות מראש,
                    רק שיחה מסודרת שמבהירה מה נכון עבורך.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <LinkButton href="mailto:booking@auraclinic.com" className="bg-rose-400 text-white">
                    booking@auraclinic.com
                  </LinkButton>
                  <LinkButton href="#home" variant="secondary" className="gap-2">
                    חזרה לראש העמוד
                    <ChevronLeft className="h-4 w-4" />
                  </LinkButton>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-rose-100 bg-[#f7f1eb] py-8 text-slate-600">
          <div className="container-shell flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-display text-3xl text-slate-950">Aura Clinic</p>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-500">
                קליניקה אסתטית בתל אביב עם טיפולים עדינים, ייעוץ ברור, חלל שקט ותהליך שנשאר נעים גם לפני ההזמנה.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm font-semibold">
              <a href="#treatments">טיפולים</a>
              <a href="#process">תהליך טיפול</a>
              <a href="#booking">קביעת תור</a>
              <a href="/">חזרה ל־Omer&apos;s</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
