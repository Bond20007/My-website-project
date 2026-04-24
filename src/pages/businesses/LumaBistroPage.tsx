import { m } from "framer-motion";
import { CalendarDays, Clock3, MapPin, Phone } from "lucide-react";
import { LinkButton } from "../../components/common/Button";
import { LumaLogo } from "../../components/common/BrandLogos";
import { Seo } from "../../components/seo/Seo";
import { SITE_URL } from "../../data/site";
import { fadeUp, stagger } from "../../lib/motion";

const lumaSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Luma Bistro",
  url: `${SITE_URL}/work/luma-bistro`,
  image: `${SITE_URL}/images/luma-bistro-hero.png`,
  servesCuisine: "מטבח ים תיכוני מודרני",
  priceRange: "$$$",
  description:
    "Luma Bistro היא מסעדת שף עירונית בתל אביב עם תפריט עונתי, אווירת ערב מדויקת וחוויית הזמנה יוקרתית.",
  telephone: "+972-3-555-1480",
  address: {
    "@type": "PostalAddress",
    streetAddress: "שדרות רוטשילד 21",
    addressLocality: "תל אביב",
    addressCountry: "IL"
  }
};

const menuItems = [
  ["לברק צרוב", "חמאת לימון חומה, שומר קלוי וענבים מוחמצים"],
  ["פפרדלה בעבודת יד", "קרם שום צלוי, כמהין שחורות ופקורינו מיושן"],
  ["אסאדו קקאו", "שאלוט מקורמל, זיגוג תמרים מעושן וגזרי ירושה"]
];

const diningReasons = [
  ["חלל שמחזיק ערב שלם", "התאורה, הקצב והפרטים הקטנים בחלל נבנו לערב שנשאר מדויק גם בשעה המאוחרת."],
  ["מטבח עונתי עם אמירה", "התפריט קצר, משתנה, ומרגיש בטוח בעצמו בלי להעמיס או להתפזר."],
  ["אירוח שמבין סיטואציה", "דייט, ארוחה עסקית או שולחן קבוע, כל חוויה מקבלת טון ושירות שמתאימים לה."]
] as const;

const guestVoices = [
  "אחת המסעדות הבודדות שמרגישות מדויקות גם באוכל וגם באווירה.",
  "השירות חד, רגוע ולא משתלט. בדיוק מה שמצפים ממקום ברמה הזו.",
  "החלל, הבר והמנות עובדים יחד כמו חוויה שלמה ולא כמו עוד ערב בחוץ."
] as const;

export function LumaBistroPage() {
  return (
    <>
      <Seo
        title="Luma Bistro | מסעדת שף בתל אביב עם תפריט ערב והזמנת שולחן"
        description="Luma Bistro היא מסעדת שף בתל אביב עם תפריט עונתי, אווירת ערב חמה, חדר פרטי והזמנת שולחן יוקרתית."
        path="/work/luma-bistro"
        image="/images/luma-bistro-hero.png"
        imageAlt="חלל האירוח של Luma Bistro עם תאורת ערב חמימה ושולחן ערוך להגשה"
        keywords={["Luma Bistro", "מסעדת שף בתל אביב", "הזמנת שולחן בתל אביב", "מסעדה יוקרתית"]}
        schema={lumaSchema}
        lang="he"
        dir="rtl"
      />

      <div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(216,163,107,0.18),transparent_26%),linear-gradient(180deg,#151114_0%,#09080a_100%)] text-right text-white">
        <header className="sticky top-0 z-40 border-b border-white/10 bg-[#080709]/70 backdrop-blur-xl">
          <div className="container-shell flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center justify-between gap-4">
              <LumaLogo />
              <LinkButton href="/" variant="secondary" className="border-white/15 bg-white/5 text-white md:hidden">
                חזרה ל־Omer&apos;s
              </LinkButton>
            </div>
            <nav className="flex flex-wrap gap-5 text-sm font-semibold text-stone-300">
              <a href="#home">בית</a>
              <a href="#menu">תפריט</a>
              <a href="#about">הסיפור</a>
              <a href="#gallery">גלריה</a>
              <a href="#experience">חוויית אירוח</a>
              <a href="#reservation">הזמנות</a>
              <a href="#contact">יצירת קשר</a>
            </nav>
            <LinkButton href="/" variant="secondary" className="hidden border-white/15 bg-white/5 text-white md:inline-flex">
              חזרה ל־Omer&apos;s
            </LinkButton>
          </div>
        </header>

        <main id="home">
          <section className="section-space">
            <div className="container-shell grid items-center gap-8 lg:grid-cols-[1.04fr_0.96fr]">
              <m.div initial="hidden" animate="show" variants={stagger}>
                <m.p variants={fadeUp} className="text-xs font-bold tracking-[0.32em] text-amber-200/70">
                  אירוח ערב / תל אביב
                </m.p>
                <m.h1 variants={fadeUp} className="mt-4 text-balance font-display text-5xl leading-[0.88] md:text-7xl">
                  מסעדת שף שנבנתה לערבים ארוכים, שולחנות זכירים ואירוח מדויק.
                </m.h1>
                <m.p variants={fadeUp} className="mt-6 max-w-xl text-lg leading-9 text-stone-300">
                  Luma Bistro משלבת תפריט ים תיכוני עונתי, שירות מלוטש ואווירה חמה עם חוויית הזמנה
                  שמרגישה אלגנטית כמו החדר עצמו.
                </m.p>
                <m.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
                  <LinkButton href="#reservation" className="bg-amber-200 text-slate-950">
                    הזמן שולחן
                  </LinkButton>
                  <LinkButton href="#menu" variant="secondary" className="border-white/15 bg-white/5 text-white">
                    צפה בתפריט
                  </LinkButton>
                </m.div>
                <m.div variants={fadeUp} className="mt-10 grid gap-4 sm:grid-cols-3">
                  {[
                    ["7 מנות", "ארוחת טעימות מדויקת"],
                    ["חמישי עד שבת", "סרוויס ערב מלא"],
                    ["חדר פרטי", "אירוח עד 14 סועדים"]
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-[1.6rem] border border-white/10 bg-white/5 p-5 backdrop-blur">
                      <div className="font-display text-3xl text-amber-100">{value}</div>
                      <p className="mt-2 text-sm text-stone-300">{label}</p>
                    </div>
                  ))}
                </m.div>
              </m.div>

              <m.div initial="hidden" animate="show" variants={fadeUp} className="relative">
                <div className="premium-outline overflow-hidden rounded-[2.2rem] border border-white/10 bg-black hero-shadow">
                  <img
                    src="/images/luma-bistro-hero.png"
                    alt="שולחן שף ב־Luma Bistro עם תאורה חמימה, צלחות מדויקות ואווירת ערב"
                    className="h-[640px] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-transparent to-black/10" />
                  <div className="absolute bottom-6 left-6 right-6 grid gap-4 lg:grid-cols-[1fr_auto]">
                    <div className="rounded-[1.8rem] border border-white/10 bg-black/50 p-6 backdrop-blur-xl">
                      <p className="text-xs font-bold tracking-[0.32em] text-amber-200/75">הערת שף</p>
                      <p className="mt-3 text-lg leading-8 text-stone-100">
                        כל מנה נבנתה כדי להרגיש טבעית בצלחת, אבל שום פרט כאן לא מקרי.
                      </p>
                    </div>
                    <div className="rounded-[1.8rem] border border-white/10 bg-black/50 p-5 backdrop-blur-xl">
                      <div className="flex items-center gap-3 text-sm font-semibold text-stone-100">
                        <Clock3 className="h-4 w-4 text-amber-200" />
                        קבלת אורחים מ־18:30
                      </div>
                      <div className="mt-3 flex items-center gap-3 text-sm font-semibold text-stone-100">
                        <MapPin className="h-4 w-4 text-amber-200" />
                        שדרות רוטשילד, תל אביב
                      </div>
                    </div>
                  </div>
                </div>
              </m.div>
            </div>
          </section>

          <section id="menu" className="section-space border-y border-white/10 bg-white/4">
            <div className="container-shell">
              <m.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }} variants={stagger}>
                <p className="text-xs font-bold tracking-[0.32em] text-amber-200/70">תפריט</p>
                <h2 className="mt-4 text-balance font-display text-4xl md:text-6xl">
                  תפריט קצר, חד ובטוח בעצמו, כזה שמכוון לאיכות ולא לרעש.
                </h2>
                <div className="mt-10 grid gap-5 lg:grid-cols-3">
                  {menuItems.map(([title, description]) => (
                    <m.article
                      key={title}
                      variants={fadeUp}
                      className="rounded-[1.8rem] border border-white/10 bg-black/20 p-6 backdrop-blur"
                    >
                      <h3 className="font-display text-3xl text-amber-100">{title}</h3>
                      <p className="mt-4 text-base leading-8 text-stone-300">{description}</p>
                    </m.article>
                  ))}
                </div>
              </m.div>
            </div>
          </section>

          <section id="about" className="section-space">
            <div className="container-shell grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
                <p className="text-xs font-bold tracking-[0.32em] text-amber-200/70">הסיפור</p>
                <h2 className="mt-4 text-balance font-display text-4xl md:text-5xl">
                  חלל שנועד לדייטים, לקבועים ולאירועים קטנים שמרגישים כמו ערב פרטי.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-9 text-stone-300">
                  Luma Bistro נולדה מתוך הרעיון שמסעדת ערב מודרנית צריכה להיות אינטימית אבל לא רשמית,
                  חמה אבל לא כבדה, ויוקרתית בלי מאמץ מיותר. התפריט משתנה לעיתים קרובות, רשימת היין נשארת
                  חדה, וכל הפרטים בחלל עובדים יחד כדי לבנות קצב נכון לערב.
                </p>
              </div>
              <div className="grid gap-5">
                {[
                  "עבודה עם חומרי גלם עונתיים מחקלאים, יקבים ודייגים נבחרים.",
                  "שירות שמוביל את הערב ברוגע ויודע לבנות התאמה בין אוכל, יין וקצב.",
                  "אירוח מותאם לערבי מותג, ארוחות פרטיות ואירועים אינטימיים."
                ].map((item) => (
                  <div key={item} className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
                    <p className="text-base leading-8 text-stone-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section-space border-y border-white/10 bg-white/4">
            <div className="container-shell">
              <m.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }} variants={stagger}>
                <p className="text-xs font-bold tracking-[0.32em] text-amber-200/70">למה מגיעים</p>
                <h2 className="mt-4 text-balance font-display text-4xl md:text-6xl">
                  Luma לא נשענת רק על מנה טובה. היא בנויה כחוויה שלמה, מדויקת ובטוחה בעצמה.
                </h2>
                <div className="mt-10 grid gap-5 lg:grid-cols-3">
                  {diningReasons.map(([title, description]) => (
                    <m.article
                      key={title}
                      variants={fadeUp}
                      className="rounded-[1.8rem] border border-white/10 bg-black/20 p-6 backdrop-blur"
                    >
                      <h3 className="font-display text-3xl text-amber-100">{title}</h3>
                      <p className="mt-4 text-base leading-8 text-stone-300">{description}</p>
                    </m.article>
                  ))}
                </div>
              </m.div>
            </div>
          </section>

          <section id="gallery" className="section-space">
            <div className="container-shell">
              <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
                <m.article
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.18 }}
                  variants={fadeUp}
                  className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/20 shadow-[0_24px_80px_rgba(0,0,0,0.18)]"
                >
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster="/images/luma/bar-interior.png"
                    aria-label="וידאו אווירה של Luma Bistro עם מעבר איטי בין חלל המסעדה, הבר והמנות"
                    className="h-full min-h-[430px] w-full object-cover"
                  >
                    <source src="/videos/luma/atmosphere-loop.mp4" type="video/mp4" />
                  </video>
                </m.article>
                <div className="grid gap-5">
                  {[
                    ["/images/luma/bar-interior.png", "הבר של Luma Bistro עם תאורה חמימה וכוסות יין"],
                    ["/images/luma/signature-dish.png", "מנה ייחודית של Luma Bistro בהגשה אלגנטית על שולחן ערב"]
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
              {guestVoices.map((quote) => (
                <m.article
                  key={quote}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.18 }}
                  variants={fadeUp}
                  className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6 backdrop-blur"
                >
                  <p className="text-xs font-bold tracking-[0.32em] text-amber-200/70">קולות מהחדר</p>
                  <p className="mt-4 text-base leading-8 text-stone-200">{quote}</p>
                </m.article>
              ))}
            </div>
          </section>

          <section id="experience" className="section-space border-y border-white/10 bg-white/4">
            <div className="container-shell grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/20 shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
                <img
                  src="/images/luma/luma-chef-plating.webp"
                  alt="השף של Luma Bistro מסיים מנה במטבח הפתוח תחת תאורה חמימה"
                  className="h-full min-h-[480px] w-full object-cover"
                />
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-black/20 p-8 backdrop-blur">
                <p className="text-xs font-bold tracking-[0.32em] text-amber-200/70">חוויית אירוח</p>
                <h2 className="mt-4 text-balance font-display text-4xl md:text-5xl">
                  המטבח הפתוח, הקצב של השירות והחלל המואר בעדינות עובדים יחד כמו ערב אחד שלם.
                </h2>
                <p className="mt-6 text-lg leading-9 text-stone-300">
                  יש מסעדות שמתחילות ונגמרות בצלחת, ויש מקומות שבהם גם הדרך למנה מרגישה מדויקת. ב־Luma
                  הטבח נראה לעין, השירות קשוב אבל לא לוחץ, והערב נבנה בקצב רגוע שמרגיש יוקרתי בלי מאמץ.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "בר יין אינטימי לפתיחה רגועה של הערב.",
                    "מטבח פתוח שמדגיש חומרי גלם, דיוק ונוכחות שף.",
                    "אירוח שמתאים גם לדייט וגם לארוחה עסקית מצומצמת.",
                    "אפשרות לבניית ערב טעימות או חדר פרטי בהזמנה מראש."
                  ].map((item) => (
                    <div key={item} className="rounded-[1.4rem] border border-white/10 bg-white/5 p-4 text-sm leading-7 text-stone-200">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="reservation" className="section-space border-y border-white/10 bg-white/4">
            <div className="container-shell grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-[2rem] border border-white/10 bg-black/20 p-8 backdrop-blur">
                <p className="text-xs font-bold tracking-[0.32em] text-amber-200/70">הזמנות</p>
                <h2 className="mt-4 text-balance font-display text-4xl md:text-5xl">
                  מערכת הזמנות שנראית אלגנטית כמו חדר האוכל עצמו.
                </h2>
                <p className="mt-6 text-lg leading-9 text-stone-300">
                  אפשר להזמין שולחן לארוחת ערב, לבקש חדר פרטי או לקבל מידע על ערבי טעימות ואירוח עסקי.
                </p>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.4rem] border border-white/10 bg-black/20 p-5">
                    <CalendarDays className="h-5 w-5 text-amber-200" />
                    <h3 className="mt-4 font-display text-2xl">הזמנת שולחן</h3>
                    <p className="mt-3 text-stone-300">אירוח לזוגות ולקבוצות קטנות בימי חמישי עד שבת.</p>
                  </div>
                  <div className="rounded-[1.4rem] border border-white/10 bg-black/20 p-5">
                    <Phone className="h-5 w-5 text-amber-200" />
                    <h3 className="mt-4 font-display text-2xl">אירוח פרטי</h3>
                    <p className="mt-3 text-stone-300">תפריט מותאם ושירות אישי לעד 14 אורחים.</p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <LinkButton href="#contact" className="bg-amber-200 text-slate-950">
                    הזמן עכשיו
                  </LinkButton>
                  <LinkButton href="tel:+97235551480" variant="secondary" className="border-white/15 bg-white/5 text-white">
                    דבר עם המארחת
                  </LinkButton>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="section-space">
            <div className="container-shell rounded-[2rem] border border-white/10 bg-black/25 p-8 backdrop-blur">
              <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <p className="text-xs font-bold tracking-[0.32em] text-amber-200/70">יצירת קשר</p>
                  <h2 className="mt-4 font-display text-4xl md:text-5xl">שריין את הערב שלך ב־Luma Bistro.</h2>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-300">
                    להזמנות, אירוח פרטי וערבים עסקיים, צוות האירוח שלנו זמין מדי יום וישמח לכוון אתכם
                    לשולחן המתאים.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {["הזמנה מהירה", "אירוח פרטי", "מענה אנושי כל יום"].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-stone-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <LinkButton href="mailto:reservations@lumabistro.com" className="bg-amber-200 text-slate-950">
                    reservations@lumabistro.com
                  </LinkButton>
                  <LinkButton href="tel:+97235551480" variant="secondary" className="border-white/15 bg-white/5 text-white">
                    03-555-1480
                  </LinkButton>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/10 bg-[#080709]/88 py-8 text-stone-300">
          <div className="container-shell flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-display text-3xl text-amber-100">Luma Bistro</p>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-stone-400">
                מסעדת שף אורבנית בתל אביב עם תפריט עונתי, שירות מדויק והזמנת שולחן לערבים שרוצים להרגיש
                מוקפדים מהכניסה ועד הקינוח.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm font-semibold">
              <a href="#menu">תפריט</a>
              <a href="#experience">חוויית אירוח</a>
              <a href="#reservation">הזמנות</a>
              <a href="/">חזרה ל־Omer&apos;s</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
