import { Phone } from "lucide-react";
import { LinkButton } from "../../components/common/Button";
import { LumaLogo } from "../../components/common/BrandLogos";
import { Seo } from "../../components/seo/Seo";
import { SITE_URL } from "../../data/site";

const lumaSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Luma Bistro",
  url: `${SITE_URL}/work/luma-bistro`,
  image: `${SITE_URL}/images/luma/luma-chef-plating.webp`,
  servesCuisine: "מטבח ים תיכוני מודרני",
  priceRange: "$$$",
  description:
    "Luma Bistro היא מסעדת שף בתל אביב עם תפריט ערב מדויק, חלל כהה ואלגנטי, והזמנת שולחן לערבים שרוצים אווירה אמיתית.",
  telephone: "+972-3-555-1480",
  address: {
    "@type": "PostalAddress",
    streetAddress: "שדרות רוטשילד 21",
    addressLocality: "תל אביב",
    addressCountry: "IL"
  }
};

const menuColumns = [
  {
    title: "פתיחה",
    items: [
      ["קרודו אינטיאס", "שמן עשבי תיבול, ענבים ירוקים, שקדים קלויים"],
      ["ארטישוק צלוי", "יוגורט מעושן, לימון כבוש, פלפל ירוק"],
      ["בריוש חמאה", "חמאה חומה מוקצפת ומלח ים"]
    ]
  },
  {
    title: "עיקריות",
    items: [
      ["פפרדלה בעבודת יד", "קרם שום צלוי, כמהין שחורות ופקורינו"],
      ["דג ים צלוי", "שומר חרוך, חמאת יין לבן וציר עדין"],
      ["אסאדו לילה", "שאלוט מקורמל, תפוחי אדמה צלויים וזיגוג תמרים"]
    ]
  },
  {
    title: "סיום",
    items: [
      ["טארט שוקולד", "קרם פרש, שמן זית עדין ומלח"],
      ["קינוח הדרים", "קרם וניל, קליפות מסוכרות וסורבה מרווה"],
      ["גבינות ערב", "בחירה משתנה עם לחם כפרי וריבה עונתית"]
    ]
  }
] as const;

const hostingNotes = [
  "החלל נבנה לערב רגוע ולא לרעש. תאורה נמוכה, מרווחים נכונים ושירות שיודע מתי להיות נוכח.",
  "התפריט קצר יחסית ומשתנה לפי עונה. הוא לא מנסה להראות הכול, אלא להרגיש בטוח במה שהוא מגיש.",
  "אפשר להזמין שולחן זוגי, ערב טעימות, או אירוח פרטי קטן בחדר נפרד בהזמנה מראש."
] as const;

export function LumaBistroPage() {
  return (
    <>
      <Seo
        title="Luma Bistro | מסעדת שף בתל אביב עם תפריט ערב והזמנת שולחן"
        description="Luma Bistro היא מסעדת שף בתל אביב עם חלל ערב יוקרתי, תפריט עונתי, מטבח פתוח והזמנת שולחן לערב מדויק."
        path="/work/luma-bistro"
        image="/images/luma/luma-chef-plating.webp"
        imageAlt="השף של Luma Bistro מסיים מנה במטבח פתוח בתאורה חמימה"
        keywords={["מסעדת שף בתל אביב", "הזמנת שולחן", "מסעדת ערב", "Luma Bistro"]}
        schema={lumaSchema}
        lang="he"
        dir="rtl"
      />

      <div className="min-h-screen bg-[#090809] text-right text-white">
        <header className="sticky top-0 z-40 border-b border-white/10 bg-[#090809]/82 backdrop-blur-xl">
          <div className="container-shell flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center justify-between gap-4">
              <LumaLogo />
              <LinkButton href="/" variant="secondary" className="border-white/10 bg-white/5 text-white md:hidden">
                חזרה ל־Omer&apos;s
              </LinkButton>
            </div>
            <nav className="mobile-nav text-sm font-semibold text-stone-300 md:flex md:flex-wrap md:items-center md:gap-6 md:overflow-visible">
              <a href="#home">בית</a>
              <a href="#menu">תפריט</a>
              <a href="#story">המסעדה</a>
              <a href="#gallery">גלריה</a>
              <a href="#reservation">הזמנת מקום</a>
            </nav>
            <LinkButton href="/" variant="secondary" className="hidden border-white/10 bg-white/5 text-white md:inline-flex">
              חזרה ל־Omer&apos;s
            </LinkButton>
          </div>
        </header>

        <main id="home">
          <section className="pb-8 pt-6 md:pb-10 md:pt-8">
            <div className="container-shell">
              <div className="editorial-frame overflow-hidden rounded-[2.8rem] border border-white/10">
                <img
                  src="/images/luma-bistro-hero.png"
                  alt="חלל הערב של Luma Bistro עם שולחן ערוך, אור חם ואווירת מסעדת שף"
                  className="luma-rise h-[78vh] min-h-[560px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute inset-x-7 bottom-7 grid gap-6 md:inset-x-10 md:bottom-10 md:grid-cols-[1fr_0.8fr] md:items-end">
                  <div className="max-w-xl">
                    <p className="text-xs font-bold tracking-[0.3em] text-amber-200/80">מסעדת שף / תל אביב</p>
                    <h1 className="mt-4 text-balance font-display text-6xl leading-[0.8] md:text-[6.5rem]">
                      ערב מדויק. שולחנות שקטים. מטבח שלא צריך להסביר את עצמו.
                    </h1>
                  </div>
                  <div className="mr-auto max-w-lg rounded-[1.8rem] border border-white/10 bg-black/28 p-6 backdrop-blur md:p-7">
                    <p className="text-lg leading-9 text-stone-100">
                      Luma Bistro היא מסעדת שף אורבנית בתל אביב. המקום בנוי לערבים ארוכים, תפריט עונתי,
                      שירות רגוע ואנשים שמעדיפים דיוק על פני רעש.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <LinkButton href="#reservation" className="bg-amber-200 text-slate-950">
                        הזמנת שולחן
                      </LinkButton>
                      <LinkButton href="#menu" variant="secondary" className="border-white/10 bg-white/5 text-white">
                        צפה בתפריט
                      </LinkButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="story" className="section-tight overlap-up relative z-10">
            <div className="container-shell rounded-[2.7rem] bg-[#070607] px-6 py-10 shadow-[0_28px_90px_rgba(0,0,0,0.24)] md:px-8 md:py-12">
              <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="border-b border-white/10 pb-8 lg:border-b-0 lg:border-l lg:border-white/10 lg:pb-0 lg:pl-10">
                <p className="text-xs font-bold tracking-[0.28em] text-amber-200/72">על המסעדה</p>
                <h2 className="mt-4 max-w-md text-balance font-display text-5xl leading-[0.86] md:text-[4.7rem]">
                  מקום שנועד לערב אחד טוב. לא לעוד רעש.
                </h2>
              </div>
              <div className="grid gap-8">
                {hostingNotes.map((item) => (
                  <div key={item} className="soft-rule pb-8">
                    <p className="max-w-3xl text-lg leading-9 text-stone-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            </div>
          </section>

          <section id="menu" className="section-space bg-[#0d0b0d]">
            <div className="container-shell">
              <div className="rounded-[2.8rem] border border-amber-200/15 bg-[linear-gradient(180deg,#f5ecdf_0%,#eee1d1_100%)] p-6 text-slate-950 shadow-[0_24px_80px_rgba(0,0,0,0.18)] md:p-10">
                <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
                  <div className="border-b border-slate-300/60 pb-8 lg:border-b-0 lg:border-l lg:border-slate-300/60 lg:pb-0 lg:pl-8">
                    <p className="text-xs font-extrabold tracking-[0.3em] text-amber-700">תפריט ערב</p>
                    <h2 className="mt-4 max-w-sm text-balance font-display text-4xl leading-[0.92] md:text-6xl">
                      תפריט שנראה כמו תפריט. לא כמו כרטיסים באתר.
                    </h2>
                    <p className="mt-5 max-w-sm text-base leading-8 text-slate-600">
                      המנות משתנות לפי עונה וזמינות. התפריט נשאר ממוקד, קצר, ומבוסס על חומרי גלם שנבחרים
                      כדי להחזיק ערב שלם ולא רק תמונה יפה.
                    </p>
                  </div>
                  <div className="grid gap-8 md:grid-cols-3">
                    {menuColumns.map((column) => (
                      <div key={column.title} className="grid gap-5">
                        <h3 className="font-display text-3xl text-slate-950">{column.title}</h3>
                        {column.items.map(([title, description]) => (
                          <div key={title} className="soft-rule pb-5">
                            <div className="flex items-start justify-between gap-4">
                              <p className="font-display text-2xl text-slate-950">{title}</p>
                              <span className="text-xs font-bold tracking-[0.24em] text-amber-700">בחירה</span>
                            </div>
                            <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="gallery" className="section-space">
            <div className="container-shell">
              <div className="grid gap-5 lg:grid-cols-12">
                <div className="grid gap-5 lg:col-span-4">
                  <div className="soft-rule pb-5">
                    <p className="text-xs font-bold tracking-[0.28em] text-amber-200/72">גלריה</p>
                    <h2 className="mt-3 max-w-md text-balance font-display text-4xl leading-[0.92] md:text-6xl">
                      חלל, מטבח וצלחות שמרגישים כמו ערב אחד שלם. לא כמו אוסף תמונות.
                    </h2>
                  </div>
                  <div className="rounded-[2rem] border border-white/10 bg-[#0d0b0d] p-6">
                    <p className="text-xs font-bold tracking-[0.28em] text-amber-200/72">הערת שף</p>
                    <p className="mt-4 text-lg leading-9 text-stone-300">
                      כל מנה צריכה להגיע לשולחן ברורה. טעם אחד מוביל, חומר גלם אחד שנשאר בזיכרון, והגשה שלא מנסה לצעוק.
                    </p>
                  </div>
                  <div className="editorial-frame overflow-hidden rounded-[2rem]">
                    <img
                      src="/images/luma/signature-dish.png"
                      alt="מנה ייחודית של Luma Bistro בהגשה אלגנטית על שולחן ערב"
                      className="h-[320px] w-full object-cover"
                    />
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="editorial-frame h-full overflow-hidden rounded-[2.2rem]">
                    <img
                      src="/images/luma/bar-interior.png"
                      alt="בר היין של Luma Bistro עם תאורה חמימה וכוסות ערב"
                      className="h-[640px] w-full object-cover"
                    />
                  </div>
                </div>

                <div className="grid gap-5 lg:col-span-3">
                  <div className="editorial-frame overflow-hidden rounded-[2rem]">
                    <img
                      src="/images/luma/luma-chef-plating.webp"
                      alt="השף של Luma Bistro מסיים מנה במטבח הפתוח"
                      className="h-[320px] w-full object-cover"
                    />
                  </div>
                  <div className="rounded-[2rem] border border-amber-200/12 bg-amber-200/8 p-6">
                    <p className="text-xs font-bold tracking-[0.28em] text-amber-200/72">ערב ב-Luma</p>
                    <p className="mt-4 text-sm leading-7 text-stone-300">
                      השולחנות נפתחים ב-18:30, המטבח עובד מול החלל, ובר היין נשאר פעיל עד השעה האחרונה של השירות.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section-tight bg-[#0d0b0d]">
            <div className="container-shell grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="overflow-hidden rounded-[2.3rem] border border-white/10">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="/images/luma/bar-interior.png"
                  aria-label="וידאו אווירה של Luma Bistro עם תנועת מצלמה איטית בין החלל, הבר והמטבח"
                  className="h-full min-h-[420px] w-full object-cover"
                >
                  <source src="/videos/luma/atmosphere-loop.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="grid content-start gap-5">
                <div className="soft-rule pb-6">
                  <p className="text-xs font-bold tracking-[0.28em] text-amber-200/72">חוויית אירוח</p>
                  <h2 className="mt-3 max-w-xl text-balance font-display text-4xl leading-[0.92] md:text-6xl">
                    ב־Luma גם האור, המרחק בין השולחנות וקצב השירות הם חלק מהמנה.
                  </h2>
                </div>
                <p className="max-w-2xl text-lg leading-9 text-stone-300">
                  יש מקומות שנשענים על רעש. כאן הכול בנוי על דיוק. המטבח פתוח, השירות רך, והחלל מרגיש כמו
                  מקום שאפשר להישאר בו עד סוף הערב בלי להרגיש שממהרים להזיז אותך.
                </p>
                <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
                  <div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6 text-sm leading-8 text-stone-200">
                    אירוח זוגי, שולחנות קבועים, ערבי טעימות ואירוח עסקי קטן. הכול מתואם מראש, בלי עומס ובלי מסלול מסורבל.
                  </div>
                  <div className="rounded-[1.8rem] border border-amber-200/14 bg-amber-200/8 p-6 text-sm leading-8 text-stone-200">
                    אם יש בקשה מיוחדת, יין מועדף או צורך באירוח פרטי, מדברים איתנו ישירות ומסדרים את זה אנושית.
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="reservation" className="section-space">
            <div className="container-shell rounded-[2.5rem] border border-white/10 bg-[linear-gradient(180deg,#101011_0%,#0d0b0d_100%)] p-6 md:p-8">
              <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <p className="text-xs font-bold tracking-[0.28em] text-amber-200/72">הזמנת מקום</p>
                  <h2 className="mt-4 max-w-2xl text-balance font-display text-4xl leading-[0.92] md:text-6xl">
                    אם רצית שולחן לערב הקרוב, עדיף לדבר איתנו עכשיו ולא לחכות לרגע האחרון.
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-stone-300">
                    להזמנות, אירוח פרטי או ערב טעימות, הצוות זמין לאורך היום. אפשר להתקשר, לשלוח מייל,
                    או לבקש שנחזור אליך עם מקום ושעה מתאימים.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <LinkButton href="mailto:reservations@lumabistro.com" className="bg-amber-200 text-slate-950">
                    reservations@lumabistro.com
                  </LinkButton>
                  <LinkButton href="tel:+97235551480" variant="secondary" className="gap-2 border-white/10 bg-white/5 text-white">
                    <Phone className="h-4 w-4" />
                    03-555-1480
                  </LinkButton>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/10 bg-[#090809] py-8 text-stone-300">
          <div className="container-shell flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-display text-3xl text-amber-100">Luma Bistro</p>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-stone-400">
                מסעדת שף בתל אביב עם תפריט ערב עונתי, מטבח פתוח, בר יין ואירוח שמרגיש מדויק מהכניסה ועד הקינוח.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm font-semibold">
              <a href="#menu">תפריט</a>
              <a href="#gallery">גלריה</a>
              <a href="#reservation">הזמנות</a>
              <a href="/">חזרה ל־Omer&apos;s</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
