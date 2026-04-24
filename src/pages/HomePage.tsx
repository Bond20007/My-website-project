import { useMemo, useState } from "react";
import { m } from "framer-motion";
import {
  ArrowLeft,
  ChevronLeft,
  MessageCircle,
  MonitorSmartphone,
  MoveUpRight,
  PhoneCall,
  Search,
  ShieldCheck,
  Sparkles,
  Star
} from "lucide-react";
import { Link } from "wouter";
import { Button, LinkButton } from "../components/common/Button";
import { OmersLogo } from "../components/common/BrandLogos";
import { Seo } from "../components/seo/Seo";
import {
  WHATSAPP_URL,
  absoluteUrl,
  projects,
  SITE_EMAIL,
  SITE_NAME,
  SITE_PHONE
} from "../data/site";
import { fadeUp, punchIn, stagger } from "../lib/motion";

type ContactForm = {
  name: string;
  phone: string;
  websiteType: string;
  message: string;
};

const initialForm: ContactForm = {
  name: "",
  phone: "",
  websiteType: "",
  message: ""
};

const studioBadges = ["אתרי תדמית", "דפי נחיתה", "SEO", "מובייל"] as const;

const heroNotes = [
  {
    title: "נראה כמו עסק קיים",
    description: "לא עמוד שמרגיש מוכן מראש, אלא אתר עם קצב, טון ופרטים קטנים שמייצרים אמינות מהרגע הראשון."
  },
  {
    title: "מוביל לשיחה",
    description: "הלקוח מבין מהר מה העסק עושה, למי זה מתאים, ואיפה משאירים פרטים בלי לחפש."
  }
] as const;

const thinkingPoints = [
  "אתר טוב צריך להסביר מהר מה העסק עושה ולגרום ללקוח לרצות לדבר.",
  "בלי עומס, בלי טקסטים שמנסים להרשים, ובלי מסכים שמרגישים מוכנים מראש.",
  "המטרה היא לגרום ללקוח להבין, לסמוך, ולדעת בדיוק מה הצעד הבא."
] as const;

const beautyVsBusiness = [
  {
    title: "נראות",
    description: "כן, הוא צריך להיראות טוב. אבל נראות לבד לא מחזיקה אתר אם אין סדר נכון, טון נכון וקריאה ברורה לפעולה."
  },
  {
    title: "הבנה",
    description: "מי שנכנס לאתר צריך להבין תוך כמה שניות מה העסק עושה, למה זה רלוונטי לו, ולמה כדאי להישאר."
  },
  {
    title: "אמון",
    description: "היררכיה נכונה, שפה ברורה, מובייל טוב ו־SEO מסודר יוצרים תחושה של עסק רציני. זה מה שדוחף פנייה."
  }
] as const;

const beautyContrast = [
  {
    title: "כשאתר רק נראה יפה",
    points: [
      "יש אנימציה, צבעים ומסכים יפים, אבל לא באמת ברור מה העסק מציע.",
      "הלקוח צריך לעבוד קשה כדי להבין אם זה רלוונטי אליו.",
      "בסוף הוא מתרשם לשנייה וממשיך הלאה."
    ]
  },
  {
    title: "כשאתר גם בנוי נכון",
    points: [
      "הכותרת עושה סדר כבר במסך הראשון.",
      "העמוד מוביל צעד אחר צעד בלי עומס מיותר.",
      "נשארת תחושה של עסק שאפשר לסמוך עליו ולפנות אליו."
    ]
  }
] as const;

const showcaseMeta: Record<string, { eyebrow: string; note: string; size: string }> = {
  "luma-bistro": {
    eyebrow: "מסעדת שף",
    note: "אווירה כהה, קצב איטי ותפריט שמרגיש כמו מקום אמיתי בתל אביב.",
    size: "col-span-12 lg:col-span-7 lg:row-span-2"
  },
  "pulsefit-studio": {
    eyebrow: "סטודיו כושר",
    note: "שפה חדה, תנועה מהירה ומסכים שלא נראים כמו מועדון כושר גנרי.",
    size: "col-span-12 md:col-span-6 lg:col-span-5"
  },
  "aura-clinic": {
    eyebrow: "קליניקת אסתטיקה",
    note: "רוגע, ניקיון וחוויית אמון שמרגישה נכונה גם בלי עודף מילים.",
    size: "col-span-12 md:col-span-6 lg:col-span-5"
  },
  nexora: {
    eyebrow: "מוצר טכנולוגי",
    note: "עמוד מוצר עם עומק, גרפים, מסכים ותנועה שמרגישים כמו SaaS אמיתי.",
    size: "col-span-12 lg:col-span-7"
  }
};

const processFlow = [
  ["שיחת היכרות", "מבינים מה העסק צריך, מה מפריע כרגע, ואיפה האתר אמור לעזור בפועל."],
  ["כיוון ומבנה", "מחליטים על סדר, מסר, עמודים, ואיזה סוג חוויה הלקוח אמור לקבל."],
  ["עיצוב ופיתוח", "בונים שפה, מסכים, מובייל, תוכן ו־SEO יחד, לא כל אחד בנפרד."],
  ["בדיקה ועלייה", "עוברים על הכול, מתקנים, מחדדים ומעלים אתר שמרגיש מוכן ולא חצי דרך."]
] as const;

const projectTags: Record<string, string[]> = {
  "luma-bistro": ["תפריט", "גלריה", "הזמנות"],
  "pulsefit-studio": ["מאמנים", "תוכניות", "שיעור ניסיון"],
  "aura-clinic": ["טיפולים", "ייעוץ", "המלצות"],
  nexora: ["דשבורד", "יכולות", "מחירים"]
};

const projectSignals: Record<
  string,
  {
    title: string;
    items: string[];
  }
> = {
  "luma-bistro": {
    title: "מה מרגישים בכניסה",
    items: ["תפריט ערב עונתי", "בר יין שקט", "הזמנת שולחן פשוטה"]
  },
  "pulsefit-studio": {
    title: "מה ברור מיד",
    items: ["תוכניות אימון מובנות", "מאמנים עם שפה אחידה", "CTA ברור לשיעור ניסיון"]
  },
  "aura-clinic": {
    title: "מה בונה אמון",
    items: ["שפה רגועה", "טיפולים מוסברים", "מעבר נעים לקביעת תור"]
  },
  nexora: {
    title: "מה מוכיח שזה מוצר",
    items: ["Dashboard עם עומק", "יכולות שמוסברות טוב", "תמחור שנראה אמיתי"]
  }
};

const contactPromises = [
  "שיחה קצרה כדי להבין מה העסק עושה באמת.",
  "כיוון ברור למבנה, לתוכן ולמסך הראשון.",
  "המלצה כנה גם אם צריך רק שדרוג נקודתי."
] as const;

function PreviewWindow({
  title,
  subtitle,
  image,
  className,
  metric,
  accentClassName
}: {
  title: string;
  subtitle: string;
  image: string;
  className?: string;
  metric: string;
  accentClassName: string;
}) {
  return (
    <m.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75 }}
      className={`browser-window overflow-hidden border border-slate-200 bg-white ${className ?? ""}`}
    >
      <div className="window-bar border-b border-slate-200 bg-white/90">
        <span className="window-dot bg-[#ff5f57]" />
        <span className="window-dot bg-[#ffbd2f]" />
        <span className="window-dot bg-[#28c840]" />
        <div className={`mr-3 rounded-full px-3 py-1 text-[11px] font-bold ${accentClassName}`}>{title}</div>
      </div>
      <div className="grid gap-3 p-3">
        <img src={image} alt={subtitle} className="h-36 w-full rounded-[1.1rem] object-cover md:h-40" />
        <div className="grid gap-3 rounded-[1rem] bg-slate-50 p-3 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-xs font-extrabold tracking-[0.22em] text-slate-400">{title}</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">{subtitle}</p>
          </div>
          <div className="rounded-[0.9rem] bg-white px-3 py-2 text-xs font-extrabold tracking-[0.18em] text-slate-500">
            {metric}
          </div>
        </div>
      </div>
    </m.article>
  );
}

function ProjectDetailPanel({ slug }: { slug: string }) {
  const signal = projectSignals[slug];

  if (!signal) {
    return null;
  }

  if (slug === "luma-bistro") {
    return (
      <div className="mt-6 grid max-w-sm gap-3 sm:grid-cols-2">
        {signal.items.map((item) => (
          <div key={item} className="rounded-[1.1rem] border border-white/12 bg-black/22 px-4 py-3 text-sm text-white/82 backdrop-blur">
            {item}
          </div>
        ))}
      </div>
    );
  }

  if (slug === "pulsefit-studio") {
    return (
      <div className="mt-6 flex max-w-sm flex-wrap gap-3">
        {signal.items.map((item, index) => (
          <div
            key={item}
            className={`${index === 0 ? "bg-lime-300/18 text-white" : "bg-black/22 text-white/82"} rounded-[1rem] border border-white/12 px-4 py-3 text-sm backdrop-blur`}
          >
            {item}
          </div>
        ))}
      </div>
    );
  }

  if (slug === "aura-clinic") {
    return (
      <div className="mt-6 max-w-xs rounded-[1.5rem] border border-white/14 bg-white/12 p-4 backdrop-blur">
        <p className="text-[11px] font-extrabold tracking-[0.24em] text-white/68">{signal.title}</p>
        <div className="mt-3 grid gap-2">
          {signal.items.map((item) => (
            <div key={item} className="text-sm leading-6 text-white/82">
              {item}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6 grid max-w-sm gap-3 sm:grid-cols-2">
      {signal.items.map((item) => (
        <div key={item} className="rounded-[1rem] border border-cyan-300/22 bg-slate-950/36 px-4 py-3 text-sm text-white/84 backdrop-blur">
          {item}
        </div>
      ))}
    </div>
  );
}

export function HomePage() {
  const [form, setForm] = useState<ContactForm>(initialForm);

  const serviceSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: SITE_NAME,
      url: absoluteUrl("/"),
      image: absoluteUrl("/images/omers/agency-mockup-wall.webp"),
      telephone: SITE_PHONE,
      email: SITE_EMAIL,
      areaServed: "ישראל",
      description:
        "Omer's הוא סטודיו קטן לבניית אתרים לעסקים. אתרי תדמית, דפי נחיתה ואתרים ברורים, מהירים ומדויקים שמובילים לפנייה.",
      serviceType: ["בניית אתרים לעסקים", "אתר תדמית לעסק", "דף נחיתה", "עיצוב אתרים"],
      sameAs: [WHATSAPP_URL]
    }),
    []
  );

  function updateField<K extends keyof ContactForm>(field: K, value: ContactForm[K]) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(`פנייה חדשה מ-${form.name || "לקוח חדש"} דרך האתר של Omer's`);
    const body = encodeURIComponent(
      `שם: ${form.name}\nטלפון: ${form.phone}\nסוג אתר: ${form.websiteType}\n\nהודעה:\n${form.message}`
    );

    window.location.href = `mailto:${SITE_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <Seo
        title="Omer's | בניית אתרים לעסקים, אתרי תדמית ודפי נחיתה בעברית"
        description="Omer's בונה אתרים לעסקים שנראים טוב, נטענים מהר, עובדים מצוין במובייל וגורמים ללקוח להבין למה לפנות."
        path="/"
        image="/images/omers/agency-mockup-wall.webp"
        imageAlt="סטודיו Omer's עם קיר פרויקטים, מסכים ושולחן עבודה מסודר"
        keywords={["בניית אתרים לעסקים", "אתר תדמית לעסק", "דף נחיתה", "בניית אתרים מקצועיים", "עיצוב אתרים", "Omer's"]}
        schema={serviceSchema}
        lang="he"
        dir="rtl"
      />

      <div className="overflow-hidden bg-[#f3f0ea] text-right text-slate-950">
        <header className="sticky top-0 z-40 border-b border-black/5 bg-[#f3f0ea]/88 backdrop-blur-xl">
          <div className="container-shell flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center justify-between gap-4">
              <OmersLogo />
              <LinkButton href="#contact" className="md:hidden">
                בוא נבנה אתר
              </LinkButton>
            </div>
            <nav className="mobile-nav text-sm font-bold text-slate-600 md:flex md:flex-wrap md:items-center md:gap-6 md:overflow-visible md:pb-0">
              <a href="#home" className="transition hover:text-slate-950">
                בית
              </a>
              <a href="#thinking" className="transition hover:text-slate-950">
                איך אני חושב
              </a>
              <a href="#work" className="transition hover:text-slate-950">
                עבודות
              </a>
              <a href="#process" className="transition hover:text-slate-950">
                תהליך
              </a>
              <a href="#contact" className="transition hover:text-slate-950">
                צור קשר
              </a>
            </nav>
            <LinkButton href="#contact" className="hidden md:inline-flex">
              בוא נבנה אתר
            </LinkButton>
          </div>
        </header>

        <main id="home">
          <section className="section-space pb-16 md:pb-24">
            <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <m.div initial="hidden" animate="show" variants={stagger} className="pt-3 lg:sticky lg:top-28">
                <m.div
                  variants={fadeUp}
                  className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-extrabold tracking-[0.24em] text-slate-500 shadow-[0_14px_34px_rgba(15,23,42,0.05)]"
                >
                  <Sparkles className="h-4 w-4 text-amber-600" />
                  סטודיו קטן. עבודה מדויקת. בלי לוק של תבנית.
                </m.div>
                <m.h1 variants={fadeUp} className="max-w-xl text-balance font-display text-5xl leading-[0.88] md:text-7xl">
                  אני בונה אתרים שנראים טוב, נטענים מהר, ועוזרים לעסק להישמע ברור כבר מהמסך הראשון.
                </m.h1>
                <m.p variants={fadeUp} className="mt-6 max-w-xl text-lg leading-9 text-slate-600">
                  אתר טוב לא צריך לעשות הצגה. הוא צריך להסביר מהר מה העסק עושה, לגרום ללקוח להבין למה
                  כדאי לדבר איתך, ולהישאר חד גם במובייל. זה בדיוק סוג העבודה שאני אוהב לעשות.
                </m.p>
                <m.div variants={fadeUp} className="mt-7 flex flex-wrap gap-3">
                  {studioBadges.map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-[0_10px_28px_rgba(15,23,42,0.04)]"
                    >
                      {badge}
                    </span>
                  ))}
                </m.div>
                <m.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
                  <LinkButton href="#contact" className="gap-2">
                    בוא נבנה אתר
                    <ChevronLeft className="h-4 w-4" />
                  </LinkButton>
                  <LinkButton href="#work" variant="secondary" className="gap-2">
                    צפה בעבודות
                    <ArrowLeft className="h-4 w-4" />
                  </LinkButton>
                  <LinkButton href={WHATSAPP_URL} external variant="secondary" className="gap-2">
                    שלח הודעה בוואטסאפ
                    <MessageCircle className="h-4 w-4" />
                  </LinkButton>
                </m.div>
                <m.div variants={fadeUp} className="mt-10 grid gap-4 md:grid-cols-[1.08fr_0.92fr]">
                  <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_18px_46px_rgba(15,23,42,0.06)]">
                    <p className="text-xs font-extrabold tracking-[0.24em] text-slate-400">מה לקוח אמור להרגיש בדקה הראשונה</p>
                    <p className="mt-4 max-w-xl text-lg leading-8 text-slate-700">
                      שהוא מבין מהר מול מי הוא עומד, למה זה רלוונטי אליו, ושיש כאן עסק שמסודר גם במסר וגם בביצוע.
                    </p>
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-[1.4rem] bg-[#f7f4ee] p-4">
                        <p className="font-display text-3xl text-slate-950">חד</p>
                        <p className="mt-2 text-sm leading-7 text-slate-600">כותרת ברורה, מסך ראשון לא עמוס ודרך קצרה ליצירת קשר.</p>
                      </div>
                      <div className="rounded-[1.4rem] bg-[#f7f4ee] p-4">
                        <p className="font-display text-3xl text-slate-950">יציב</p>
                        <p className="mt-2 text-sm leading-7 text-slate-600">מובייל טוב, טעינה נקייה ותחושה של אתר שנבנה כדי לעבוד לאורך זמן.</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    {heroNotes.map((item) => (
                      <div key={item.title} className="rounded-[1.8rem] border border-slate-200 bg-white/88 p-5 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
                        <p className="text-sm font-extrabold tracking-[0.18em] text-slate-500">{item.title}</p>
                        <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </m.div>
              </m.div>

              <m.div initial="hidden" animate="show" variants={punchIn} className="relative min-h-[620px] lg:min-h-[760px]">
                <div className="absolute inset-0 rounded-[2.6rem] bg-[linear-gradient(140deg,#fbfaf6_0%,#ece7de_45%,#f4efe8_100%)] thin-outline" />
                <div className="absolute inset-0 rounded-[2.6rem] grain-panel opacity-80" />

                <div className="relative h-full p-5 md:p-7">
                  <PreviewWindow
                    title="Luma Bistro"
                    subtitle="שפה כהה, מינימליזם יוקרתי ואווירת ערב מדויקת."
                    image="/images/luma/luma-chef-plating.webp"
                    metric="תפריט / הזמנות"
                    accentClassName="bg-[#f8f2e8] text-amber-900"
                    className="floating-slow mr-auto mt-2 w-[82%] md:w-[58%]"
                  />
                  <PreviewWindow
                    title="PulseFit"
                    subtitle="סטודיו חד, צעיר ומהיר עם תנועה ואנרגיה."
                    image="/images/pulsefit/pulsefit-coach-session.webp"
                    metric="ניסיון / מסלולים"
                    accentClassName="bg-lime-100 text-lime-900"
                    className="floating-medium -mt-4 mr-[16%] w-[78%] md:-mt-6 md:mr-[8%] md:w-[46%]"
                  />
                  <PreviewWindow
                    title="Aura Clinic"
                    subtitle="שקט, ניקיון ואמון בלי עומס ויזואלי מיותר."
                    image="/images/aura/aura-consultation-room.webp"
                    metric="טיפולים / ייעוץ"
                    accentClassName="bg-rose-50 text-rose-700"
                    className="floating-slow -mt-2 mr-0 w-[76%] md:mr-auto md:w-[44%]"
                  />
                  <PreviewWindow
                    title="Nexora"
                    subtitle="מוצר טכנולוגי עם מסכים, גרפים ומבנה מוצר אמיתי."
                    image="/images/nexora/nexora-dashboard-analytics.webp"
                    metric="Dashboard / Pricing"
                    accentClassName="bg-cyan-50 text-cyan-800"
                    className="floating-medium -mt-5 mr-[18%] w-[80%] md:-mt-8 md:mr-[24%] md:w-[54%]"
                  />
                  <div className="absolute left-6 top-6 rounded-full border border-black/5 bg-white/80 px-4 py-2 text-xs font-bold tracking-[0.24em] text-slate-500 shadow-[0_12px_30px_rgba(15,23,42,0.06)]">
                    PREVIEW WALL
                  </div>
                  <div className="absolute bottom-7 left-7 rounded-[1.6rem] border border-white/90 bg-white/80 px-5 py-4 shadow-[0_18px_44px_rgba(15,23,42,0.08)] backdrop-blur">
                    <p className="text-xs font-extrabold tracking-[0.24em] text-slate-400">STUDIO NOTE</p>
                    <p className="mt-2 max-w-[14rem] text-sm leading-6 text-slate-600">
                      כל אתר בנוי אחרת. לא אותה מסגרת עם צבעים אחרים.
                    </p>
                  </div>
                </div>
              </m.div>
            </div>
          </section>

          <section id="thinking" className="section-tight border-y border-black/5 bg-white/70">
            <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="text-xs font-extrabold tracking-[0.28em] text-slate-400">איך אני חושב על אתר טוב</p>
                <h2 className="mt-4 max-w-lg text-balance font-display text-4xl leading-[0.92] md:text-6xl">
                  אתר לא צריך להיות מלא. הוא צריך להיות חד.
                </h2>
              </div>
              <div className="grid gap-6">
                {thinkingPoints.map((point) => (
                  <div key={point} className="soft-rule pb-6">
                    <p className="max-w-3xl text-lg leading-9 text-slate-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section-tight bg-[#17181b] text-white">
            <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="text-xs font-extrabold tracking-[0.28em] text-amber-200/75">אתר יפה זה לא מספיק</p>
                <h2 className="mt-4 max-w-md text-balance font-display text-4xl leading-[0.92] md:text-6xl">
                  אם הלקוח לא מבין, לא סומך, ולא יודע מה לעשות עכשיו, העיצוב לא באמת עשה את העבודה.
                </h2>
              </div>
              <div className="grid gap-5">
                <div className="grid gap-5 md:grid-cols-2">
                  {beautyContrast.map((column, index) => (
                    <div
                      key={column.title}
                      className={`${index === 0 ? "bg-white/6" : "bg-amber-200/10"} rounded-[2rem] border border-white/10 p-6`}
                    >
                      <h3 className="font-display text-3xl text-white">{column.title}</h3>
                      <div className="mt-5 grid gap-3">
                        {column.points.map((point) => (
                          <p key={point} className="text-sm leading-7 text-slate-300">
                            {point}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid gap-6">
                  {beautyVsBusiness.map((item) => (
                    <div key={item.title} className="soft-rule pb-6">
                      <div className="flex items-start gap-4">
                        <div className="pt-1 text-amber-200">
                          {item.title === "נראות" ? <Star className="h-5 w-5" /> : null}
                          {item.title === "הבנה" ? <Search className="h-5 w-5" /> : null}
                          {item.title === "אמון" ? <ShieldCheck className="h-5 w-5" /> : null}
                        </div>
                        <div>
                          <h3 className="font-display text-3xl text-white">{item.title}</h3>
                          <p className="mt-3 max-w-2xl text-base leading-8 text-slate-300">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="work" className="section-space">
            <div className="container-shell">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-xs font-extrabold tracking-[0.28em] text-slate-400">עבודות</p>
                  <h2 className="mt-3 max-w-2xl text-balance font-display text-4xl leading-[0.92] md:text-6xl">
                    בלי גריד אחיד. בלי ארבעה כרטיסים זהים. כל אתר מקבל פרופורציה משלו.
                  </h2>
                </div>
                <p className="max-w-md text-base leading-8 text-slate-600">
                  רציתי שכל פרויקט ייראה כמו עולם שלם ולא כמו thumbnail. לכן ה־showcase בנוי בצורה
                  אסימטרית, עם גדלים שונים, תגיות קטנות וכניסה ישירה לתוך האתר המלא.
                </p>
              </div>

              <div className="mt-12 grid auto-rows-[220px] grid-cols-12 gap-5 md:auto-rows-[240px]">
                {projects.map((project) => {
                  const meta = showcaseMeta[project.slug];

                  return (
                    <m.article
                      key={project.slug}
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.25 }}
                      className={`group relative overflow-hidden rounded-[2.3rem] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.07)] ${meta.size}`}
                    >
                      <div className="absolute inset-0">
                        <img
                          src={project.previewImage}
                          alt={project.previewAlt}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/76 via-slate-950/18 to-transparent" />
                      </div>
                      <div className="relative flex h-full flex-col justify-between p-6 md:p-7">
                        <div className="flex items-start justify-between gap-4">
                          <div className="rounded-full border border-white/15 bg-black/25 px-3 py-1 text-xs font-extrabold tracking-[0.22em] text-white/88 backdrop-blur">
                            {meta.eyebrow}
                          </div>
                          <div className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-bold text-white/80 backdrop-blur">
                            {project.industry}
                          </div>
                        </div>

                        <div className="max-w-md">
                          <h3 className="font-display text-4xl leading-none text-white md:text-5xl">{project.name}</h3>
                          <p className="mt-4 text-sm leading-7 text-white/78 md:text-base md:leading-8">{meta.note}</p>
                          <div className="mt-5 flex flex-wrap gap-2">
                            {projectTags[project.slug].map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full border border-white/15 bg-black/20 px-3 py-1 text-xs font-bold text-white/82 backdrop-blur"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <ProjectDetailPanel slug={project.slug} />
                          <div className="mt-6">
                            <Link href={project.route} className="inline-flex items-center gap-2 text-sm font-bold text-white">
                              צפה באתר
                              <MoveUpRight className="h-4 w-4 transition group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </m.article>
                  );
                })}
              </div>
            </div>
          </section>

          <section id="process" className="section-tight border-y border-black/5 bg-white/70">
            <div className="container-shell grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
              <div>
                <p className="text-xs font-extrabold tracking-[0.28em] text-slate-400">תהליך עבודה</p>
                <h2 className="mt-4 max-w-md text-balance font-display text-4xl leading-[0.92] md:text-6xl">
                  תהליך קצר, ישיר, ובלי שלבים שמרגישים בירוקרטיים.
                </h2>
              </div>
              <div className="grid gap-8">
                {processFlow.map(([title, description], index) => (
                  <div key={title} className="grid gap-4 border-b border-slate-200 pb-8 md:grid-cols-[86px_1fr]">
                    <div className="sidebar-number font-display text-slate-200">{String(index + 1).padStart(2, "0")}</div>
                    <div>
                      <h3 className="font-display text-3xl text-slate-950">{title}</h3>
                      <p className="mt-3 max-w-2xl text-base leading-8 text-slate-600">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="section-space">
            <div className="container-shell">
              <div className="grid gap-8 rounded-[2.6rem] border border-slate-200 bg-white p-6 shadow-[0_28px_90px_rgba(15,23,42,0.08)] md:p-8 xl:grid-cols-[0.82fr_1.18fr]">
                <aside className="grid gap-6">
                  <div>
                    <p className="text-xs font-extrabold tracking-[0.28em] text-slate-400">צור קשר</p>
                    <h2 className="mt-4 max-w-md text-balance font-display text-4xl leading-[0.92] md:text-5xl">
                      אם העסק שלך טוב, הגיע הזמן שגם האתר ירגיש ככה.
                    </h2>
                    <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">
                      אפשר להתחיל מאתר תדמית חדש, שדרוג לעמוד קיים, או דף נחיתה אחד ממוקד. תשלח כמה
                      פרטים, ואני אחזור אליך עם כיוון ברור ולא עם נאום.
                    </p>
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-[1.7rem] bg-slate-50 p-5">
                      <div className="flex items-center gap-3 text-slate-950">
                        <PhoneCall className="h-5 w-5 text-amber-600" />
                        <span className="font-bold">{SITE_PHONE}</span>
                      </div>
                      <p className="mt-2 text-sm text-slate-600">{SITE_EMAIL}</p>
                    </div>
                    <div className="rounded-[1.7rem] bg-slate-950 p-5 text-white">
                      <p className="text-xs font-extrabold tracking-[0.24em] text-white/50">איך נראה תהליך ראשון</p>
                      <div className="mt-4 grid gap-3">
                        {contactPromises.map((item, index) => (
                          <div key={item} className="grid gap-2 rounded-[1.2rem] border border-white/10 bg-white/5 p-4">
                            <div className="text-[11px] font-extrabold tracking-[0.24em] text-amber-200/80">0{index + 1}</div>
                            <p className="text-sm leading-7 text-slate-200">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <LinkButton href={WHATSAPP_URL} external className="gap-2">
                      וואטסאפ
                      <MessageCircle className="h-4 w-4" />
                    </LinkButton>
                    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-3 text-sm font-bold text-slate-700">
                      <MonitorSmartphone className="h-4 w-4 text-slate-400" />
                      מותאם מובייל מההתחלה
                    </div>
                  </div>
                </aside>

                <m.form
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  onSubmit={handleSubmit}
                  className="rounded-[2rem] bg-[#f8f6f1] p-5 md:p-7"
                >
                  <div className="grid gap-5 md:grid-cols-2">
                    <label className="grid gap-2 text-sm font-bold text-slate-700">
                      שם
                      <input
                        required
                        value={form.name}
                        onChange={(event) => updateField("name", event.target.value)}
                        className="rounded-[1.2rem] border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-amber-300"
                        placeholder="איך קוראים לך?"
                      />
                    </label>
                    <label className="grid gap-2 text-sm font-bold text-slate-700">
                      טלפון
                      <input
                        required
                        value={form.phone}
                        onChange={(event) => updateField("phone", event.target.value)}
                        className="rounded-[1.2rem] border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-amber-300"
                        placeholder="050-000-0000"
                      />
                    </label>
                  </div>

                  <label className="mt-5 grid gap-2 text-sm font-bold text-slate-700">
                    סוג אתר
                    <select
                      required
                      value={form.websiteType}
                      onChange={(event) => updateField("websiteType", event.target.value)}
                      className="rounded-[1.2rem] border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-amber-300"
                    >
                      <option value="">בחר סוג אתר</option>
                      <option value="אתר תדמית">אתר תדמית</option>
                      <option value="דף נחיתה">דף נחיתה</option>
                      <option value="אתר מכירה">אתר מכירה</option>
                      <option value="שדרוג אתר קיים">שדרוג אתר קיים</option>
                    </select>
                  </label>

                  <label className="mt-5 grid gap-2 text-sm font-bold text-slate-700">
                    הודעה
                    <textarea
                      required
                      rows={6}
                      value={form.message}
                      onChange={(event) => updateField("message", event.target.value)}
                      className="rounded-[1.4rem] border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-amber-300"
                      placeholder="ספר לי מה העסק עושה, מה האתר צריך להשיג, ואם יש כיוון עיצובי שאתה אוהב."
                    />
                  </label>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button type="submit" className="gap-2">
                      שלח פרטים
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <LinkButton href={WHATSAPP_URL} external variant="secondary" className="gap-2">
                      פתח וואטסאפ
                      <MessageCircle className="h-4 w-4" />
                    </LinkButton>
                  </div>
                </m.form>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-black/5 bg-white/70 py-6">
          <div className="container-shell flex flex-col gap-4 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-bold text-slate-900">{SITE_NAME}</p>
              <p className="mt-1">בניית אתרים לעסקים, אתרי תדמית ודפי נחיתה עם מסר ברור, מובייל טוב ו־SEO נקי.</p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#thinking">איך אני חושב</a>
              <a href="#work">עבודות</a>
              <a href="#process">תהליך</a>
              <a href="#contact">צור קשר</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
