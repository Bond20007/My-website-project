import { useMemo, useState } from "react";
import { m } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowLeft,
  BadgeCheck,
  BriefcaseBusiness,
  ChevronLeft,
  MessageCircle,
  MessagesSquare,
  MonitorSmartphone,
  MoveUpRight,
  PhoneCall,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Star
} from "lucide-react";
import { Link } from "wouter";
import { Button, LinkButton } from "../components/common/Button";
import { OmersLogo } from "../components/common/BrandLogos";
import { SectionHeading } from "../components/common/SectionHeading";
import { Seo } from "../components/seo/Seo";
import {
  WHATSAPP_URL,
  absoluteUrl,
  processSteps,
  projects,
  services,
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

const processDescriptions = [
  "מיישרים ציפיות, מבינים מטרות עסקיות ומזהים מה הלקוח צריך להרגיש כדי לפעול.",
  "מגדירים מבנה עמודים, היררכיית מסרים, קהלי יעד וזרימת תוכן חכמה.",
  "בונים שפה חזותית, טיפוגרפיה, קומפוזיציה ותחושת מותג שמתאימה לעסק.",
  "מפתחים אתר מהיר, רספונסיבי ונקי עם חוויית משתמש מדויקת ותחזוקה נוחה.",
  "מחדדים מסכים, תוכן ואינטראקציות עד שהפרויקט מרגיש סגור ונכון.",
  "מחברים טפסים, מטא־דאטה, אופטימיזציה אורגנית ופרטי קשר כדי שהאתר יהיה מוכן לעבודה."
] as const;

const heroStats = [
  ["4", "עולמות מותג מלאים באתר אחד"],
  ["מותאם", "שפה חזותית ומבנה מסרים לכל עסק"],
  ["מוכן", "מובייל, SEO וערוצי פנייה כבר מהיום הראשון"]
] as const;

const premiumSignals = [
  "נראה כמו מותג, לא כמו תבנית",
  "מבנה תוכן שמוביל לפנייה",
  "חוויית מובייל מדויקת"
] as const;

const projectHighlights: Record<string, string[]> = {
  "luma-bistro": ["תפריט עשיר", "הזמנות שולחן", "אווירת ערב"],
  "pulsefit-studio": ["מסלולי אימון", "צוות מאמנים", "הצטרפות מהירה"],
  "aura-clinic": ["טיפולים", "המלצות", "הזמנת ייעוץ"],
  nexora: ["מוצר טכנולוגי", "מסלולים", "חוויית הרשמה"]
};

const projectOutcomes: Record<string, string> = {
  "luma-bistro": "מחזק תחושת מקום ומקל על הזמנת שולחן כבר בגלילה הראשונה.",
  "pulsefit-studio": "מציג את הערך, המחיר והפעולה הבאה בצורה חדה ואנרגטית.",
  "aura-clinic": "מוריד חשש, בונה אמון ומוביל לפגישת ייעוץ רגועה וברורה.",
  nexora: "מסביר מוצר מורכב בשפה בהירה ומוביל להרשמה בלי חיכוך."
};

const differentiators: Array<{ icon: LucideIcon; title: string; description: string }> = [
  {
    icon: ShieldCheck,
    title: "לא עוד אתר שנראה גנרי",
    description: "כל פרויקט מקבל שפה חזותית, היררכיה וקצב משלו, כך שהוא מרגיש כמו עסק אמיתי עם מעמד."
  },
  {
    icon: MessagesSquare,
    title: "מסרים שעושים סדר",
    description: "אני בונה כותרות, מבנה ו־CTA כך שהגולש יבין מהר מאוד למה לפנות ומה השלב הבא."
  },
  {
    icon: MonitorSmartphone,
    title: "פרימיום גם במובייל",
    description: "הריווחים, הטיפוגרפיה והאינטראקציות נבנים כך שהאתר נשאר חד, יוקרתי וקל לשימוש בכל מסך."
  },
  {
    icon: Search,
    title: "SEO מהשלד, לא כתוספת",
    description: "תוכן עשיר, מבנה סמנטי, מטא־דאטה ומילות חיפוש טבעיות נכנסים כבר בשלב הבנייה."
  }
];

const businessBenefits: Array<{ icon: LucideIcon; title: string; description: string }> = [
  {
    icon: BriefcaseBusiness,
    title: "העסק נראה בשל יותר",
    description: "עיצוב מדויק משדר סדר, ביטחון ותחושת מותג שמקלה על לקוחות לבחור בך."
  },
  {
    icon: BadgeCheck,
    title: "הפנייה מרגישה טבעית יותר",
    description: "מבנה נכון ותוכן נכון מורידים חיכוך ומובילים את הגולש לפעולה בלי להילחץ או להתלבט."
  },
  {
    icon: Rocket,
    title: "האתר מוכן לעבוד",
    description: "טפסים, וואטסאפ, מובייל וחשיפה אורגנית בסיסית מחוברים מההתחלה כדי שהאתר לא יהיה רק יפה."
  }
];

const trustSignals = [
  "מבנה מסודר שמתחיל במטרות העסק ומסתיים במסך מוכן לעלייה לאוויר.",
  "חשיבה על נראות, מהירות, חוויית משתמש וחשיפה אורגנית כבר מהעמוד הראשון.",
  "שפה חזותית שמבדלת גם בעולמות תחרותיים כמו מסעדנות, כושר, אסתטיקה וטכנולוגיה."
] as const;

const finalCtaPoints = [
  "מתאים לאתרי תדמית, דפי נחיתה ואתרי מכירה.",
  "כולל חשיבה על מבנה, מסרים, עיצוב, מובייל ו־SEO בסיסי.",
  "פשוט שולחים פרטים ומתחילים מכיוון ברור."
] as const;

const audienceSegments = [
  {
    title: "לבעלי עסקים שהאתר שלהם לא משקף את הרמה שלהם",
    description: "אם העסק עובד טוב במציאות אבל האתר נראה מיושן, גנרי או לא משכנע, זה בדיוק המקום שבו שדרוג נכון עושה הבדל."
  },
  {
    title: "למי שצריך דף ברור שמוביל לפנייה",
    description: "עסקים קטנים, קליניקות, מסעדות, סטודיואים ושירותים מקצועיים שצריכים אתר תדמית לעסק או דף נחיתה שמסביר מהר מי אתם ולמה לפנות."
  },
  {
    title: "למותגים שרוצים להיראות מסודרים גם במובייל",
    description: "לא רק מסך יפה לדסקטופ, אלא חוויה מדויקת בכל מכשיר, עם כפתורים נוחים, טקסטים קריאים וזרימה חלקה עד להשארת פרטים."
  }
] as const;

const servicePackages = [
  {
    name: "אתר תדמית ממוקד",
    fit: "לעסקים שצריכים נוכחות מקצועית ברורה",
    details: ["עמוד בית חזק", "הצגת שירותים", "אזור אמון והנעה לפנייה"]
  },
  {
    name: "דף נחיתה לקמפיין",
    fit: "להצעה אחת שצריכה לעבוד מהר",
    details: ["מבנה מכירתי", "טופס או וואטסאפ", "קצב קריאה חד ומדויק"]
  },
  {
    name: "אתר מותג מלא",
    fit: "לעסק שצריך עומק, עמודים ותוכן עשיר",
    details: ["מספר עמודים", "שפה חזותית רחבה", "SEO בסיסי והיררכיה מסודרת"]
  }
] as const;

const faqItems = [
  [
    "כמה זמן לוקח לבנות אתר?",
    "זה תלוי בהיקף, אבל ברוב הפרויקטים עובדים בשלבים ברורים כך שכבר מההתחלה יש כיוון, מסגרת זמנים ותמונה מסודרת של מה מתקדם ומתי."
  ],
  [
    "אתה עובד רק על העיצוב או גם על המסרים?",
    "גם וגם. אתר טוב לא נשען רק על צבעים וטיפוגרפיה, אלא על כותרות, סדר תוכן, CTA ודרך ברורה שמובילה את הלקוח להבין למה לפנות."
  ],
  [
    "האתר יתאים גם למובייל ולחיפוש בגוגל?",
    "כן. אני בונה את העמודים כך שירגישו טוב במובייל, ייטענו נכון, וישמרו על מבנה SEO נקי עם כותרות, מטא־דאטה ועמודים מסודרים."
  ]
] as const;

export function HomePage() {
  const [form, setForm] = useState<ContactForm>(initialForm);

  const serviceSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: SITE_NAME,
      url: absoluteUrl("/"),
      image: absoluteUrl("/images/omers-hero.png"),
      telephone: SITE_PHONE,
      email: SITE_EMAIL,
      areaServed: "ישראל",
      description:
        "Omer's בונה אתרי תדמית, דפי נחיתה ואתרי מכירה לעסקים שצריכים אתר יוקרתי, מהיר ומדויק שמוביל לפניות.",
      serviceType: ["בניית אתרי תדמית", "בניית דפי נחיתה", "בניית אתרי מכירה", "עיצוב ממשק וחוויית משתמש"],
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
        title="Omer's | בניית אתרי תדמית, דפי נחיתה ואתרי מכירה לעסקים"
        description="Omer's בונה אתרי תדמית, דפי נחיתה ואתרי מכירה בעיצוב יוקרתי, חוויית משתמש מדויקת ומבנה שמוביל לפניות."
        path="/"
        image="/images/omers-hero.png"
        imageAlt="סטודיו Omer's עם סביבת עבודה מוקפדת, מסכים, סקיצות וחומרי מיתוג"
        keywords={[
          "בניית אתרי תדמית לעסקים",
          "בניית דפי נחיתה",
          "אתר מכירה לעסק",
          "עיצוב אתרים יוקרתי",
          "מעצב ובונה אתרים",
          "Omer's"
        ]}
        schema={serviceSchema}
        lang="he"
        dir="rtl"
      />

      <div className="overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(197,154,101,0.2),transparent_28%),linear-gradient(180deg,#faf8f4_0%,#f2efe8_54%,#efebe3_100%)] text-right">
        <header className="sticky top-0 z-40 border-b border-white/60 bg-white/75 backdrop-blur-xl">
          <div className="container-shell flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center justify-between gap-4">
              <OmersLogo />
              <LinkButton href="#contact" className="md:hidden">
                בוא נבנה אתר
              </LinkButton>
            </div>
            <nav className="flex flex-wrap items-center gap-4 text-sm font-bold text-slate-600 md:gap-6">
              <a href="#home" className="transition hover:text-slate-950">
                בית
              </a>
              <a href="#services" className="transition hover:text-slate-950">
                שירותים
              </a>
              <a href="#work" className="transition hover:text-slate-950">
                עבודות
              </a>
              <a href="#process" className="transition hover:text-slate-950">
                תהליך עבודה
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
          <section className="section-space">
            <div className="container-shell grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
              <m.div initial="hidden" animate="show" variants={stagger} className="relative">
                <m.div
                  variants={fadeUp}
                  className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-4 py-2 text-xs font-extrabold tracking-[0.24em] text-slate-600 shadow-[0_12px_35px_rgba(15,23,42,0.05)]"
                >
                  <Sparkles className="h-4 w-4 text-amber-500" />
                  סטודיו לבניית אתרים שמרגישים כמו מותג
                </m.div>
                <m.h1
                  variants={fadeUp}
                  className="text-balance font-display text-5xl leading-[0.84] text-slate-950 md:text-7xl"
                >
                  אתרים לעסקים שרוצים להיראות ברמה גבוהה, להיטען מהר, ולגרום ללקוח להבין מיד למה לפנות.
                </m.h1>
                <m.p variants={fadeUp} className="mt-7 max-w-2xl text-lg leading-9 text-slate-600">
                  אני בונה אתרי תדמית, דפי נחיתה ואתרי מכירה לעסקים קטנים ובינוניים שצריכים אתר שנראה טוב,
                  נשמע נכון, עובד מעולה במובייל ומוביל אנשים להשאיר פרטים בלי להרגיש שהם נחתו על עוד תבנית.
                </m.p>
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
                <m.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
                  {premiumSignals.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-amber-200/70 bg-white/75 px-4 py-2 text-sm font-bold text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </m.div>
                <m.div
                  variants={stagger}
                  initial="hidden"
                  animate="show"
                  className="mt-10 grid gap-4 md:grid-cols-3"
                >
                  {heroStats.map(([value, label]) => (
                    <m.article
                      key={label}
                      variants={fadeUp}
                      className="rounded-[1.8rem] border border-white/80 bg-white/78 p-5 shadow-[0_18px_55px_rgba(15,23,42,0.06)]"
                    >
                      <div className="font-display text-3xl text-slate-950">{value}</div>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{label}</p>
                    </m.article>
                  ))}
                </m.div>
              </m.div>

              <m.div initial="hidden" animate="show" variants={punchIn} className="relative">
                <div className="premium-outline mesh-overlay hero-shadow relative overflow-hidden rounded-[2.2rem] border border-white/70 bg-slate-950">
                  <img
                    src="/images/omers/agency-mockup-wall.webp"
                    alt="קיר מסכים בסטודיו של Omer's עם עבודות אתר, חומרי מיתוג ושולחן עבודה מסודר"
                    className="h-[640px] w-full object-cover object-center opacity-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/82 via-slate-950/18 to-amber-300/10" />
                  <div className="absolute inset-x-6 top-6 flex justify-between gap-4">
                    <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-extrabold tracking-[0.28em] text-amber-50 backdrop-blur">
                      Omer&apos;s
                    </div>
                    <div className="rounded-full border border-white/15 bg-black/20 px-4 py-2 text-xs font-bold text-white/85 backdrop-blur">
                      פרימיום, מהיר, ממוקד
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 space-y-4">
                    <div className="rounded-[1.8rem] border border-white/10 bg-slate-950/70 p-6 text-white backdrop-blur-xl">
                      <p className="text-xs font-extrabold tracking-[0.24em] text-amber-200/80">מיצוב דיגיטלי</p>
                      <h2 className="mt-3 text-balance font-display text-3xl leading-none md:text-4xl">
                        כשעסק נראה נכון ברשת, הלקוח מבין מהר יותר מול מי הוא עומד.
                      </h2>
                      <p className="mt-4 max-w-xl text-sm leading-7 text-slate-200/85">
                        החלק העליון של האתר נבנה כדי לייצר תחושת רמה, דיוק ואמון כבר בשניות הראשונות,
                        עוד לפני המעבר לעבודות, לשירותים וליצירת הקשר.
                      </p>
                    </div>
                    <div className="grid gap-3 md:grid-cols-3">
                      {[
                        ["אתרי תדמית", "מיצוב, מסרים וחוויית משתמש"],
                        ["דפי נחיתה", "קצב מהיר וקריאות לפעולה"],
                        ["אתרי מכירה", "מבנה שמחזק אמון ומוצר"]
                      ].map(([title, subtitle]) => (
                        <div
                          key={title}
                          className="rounded-[1.4rem] border border-white/10 bg-white/10 p-4 text-white backdrop-blur"
                        >
                          <p className="text-sm font-bold">{title}</p>
                          <p className="mt-1 text-xs leading-6 text-slate-200/75">{subtitle}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </m.div>
            </div>
          </section>

          <section className="pb-24 md:pb-32">
            <div className="container-shell">
              <m.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }} variants={stagger}>
                <SectionHeading
                  eyebrow="הסטודיו"
                  title="יותר חומר ויזואלי, יותר עומק, יותר תחושה של סטודיו אמיתי שעובד על פרויקטים חיים"
                  description="המדיה באתר נוצרה במיוחד כדי שהחוויה תרגיש כמו סטודיו אמיתי עם תהליך, חומרים וסביבת עבודה ברמה גבוהה, לא רק כמו עמוד פורטפוליו דיפולטי."
                />
                <div className="mt-12 grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
                  <m.article
                    variants={fadeUp}
                    className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 shadow-[0_24px_80px_rgba(15,23,42,0.12)]"
                  >
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      poster="/images/omers/studio-interior.png"
                      aria-label="וידאו אווירה של סטודיו Omer's עם תנועת מצלמה עדינה בין סביבת עבודה, מסכים וחומרי עיצוב"
                      className="h-full min-h-[420px] w-full object-cover"
                    >
                      <source src="/videos/omers/studio-reel.mp4" type="video/mp4" />
                    </video>
                  </m.article>
                  <div className="grid gap-5">
                    {[
                        [
                        "/images/omers/agency-mockup-wall.webp",
                        "מסכי עבודה בסטודיו של Omer's עם תצוגות אתר וחומרי מיתוג"
                      ],
                      [
                        "/images/omers/design-review.png",
                        "רגע עבודה בסטודיו של Omer's עם סקיצות, לפטופ ומסכי עיצוב"
                      ]
                    ].map(([src, alt]) => (
                      <m.article
                        key={src}
                        variants={fadeUp}
                        className="overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
                      >
                        <img src={src} alt={alt} className="h-[220px] w-full object-cover" />
                      </m.article>
                    ))}
                  </div>
                </div>
              </m.div>
            </div>
          </section>

          <section className="section-space border-y border-slate-200/70 bg-white/70">
            <div className="container-shell">
              <m.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }} variants={stagger}>
                <SectionHeading
                  eyebrow="למי זה מתאים"
                  title="לא לכל עסק צריך אותו אתר. כן צריך אתר שמבין את הסיטואציה העסקית שלך."
                  description="הדגש הוא לא רק לבנות עמוד יפה, אלא להבין מי קורא אותו, מה הוא צריך להבין בשניות הראשונות, ואיזה סוג פנייה אתה באמת רוצה לקבל ממנו."
                />
                <div className="mt-12 grid gap-5 lg:grid-cols-3">
                  {audienceSegments.map((segment) => (
                    <m.article
                      key={segment.title}
                      variants={fadeUp}
                      className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_22px_65px_rgba(15,23,42,0.05)]"
                    >
                      <h3 className="text-balance font-display text-3xl leading-none text-slate-950">{segment.title}</h3>
                      <p className="mt-5 text-base leading-8 text-slate-600">{segment.description}</p>
                    </m.article>
                  ))}
                </div>
              </m.div>
            </div>
          </section>

          <section className="section-space border-y border-slate-200/70 bg-white/70">
            <div className="container-shell">
              <m.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
                <SectionHeading
                  eyebrow="למה לבחור בי"
                  title="הפער בין אתר יפה לאתר שמביא לקוחות נמצא בפרטים הקטנים של מבנה, מסר וחוויה"
                  description="אני בונה אתרים שנראים יוקרתיים, אבל גם עובדים נכון: ברור מה העסק עושה, למה לפנות, ואיך ליצור קשר בלי חיכוך."
                />
                <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                  {differentiators.map(({ icon: Icon, title, description }) => (
                    <m.article
                      key={title}
                      variants={fadeUp}
                      className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_80px_rgba(15,23,42,0.08)]"
                    >
                      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-amber-100 text-amber-700 transition group-hover:scale-105">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-6 text-balance font-display text-3xl leading-none text-slate-950">{title}</h3>
                      <p className="mt-4 text-base leading-8 text-slate-600">{description}</p>
                    </m.article>
                  ))}
                </div>
              </m.div>
            </div>
          </section>

          <section id="services" className="section-space">
            <div className="container-shell">
              <m.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
                <SectionHeading
                  eyebrow="שירותים"
                  title="כל מה שצריך כדי שאתר ייראה יוקרתי, יעבוד מהר וירגיש מדויק"
                  description="אני לא בונה רק מסך יפה. כל פרויקט מקבל חשיבה על תוכן, קצב, מבנה, UX, התאמה למובייל וקריאות לפעולה שנכונות לעסק."
                />
                <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {services.map((service, index) => (
                    <m.article
                      key={service.title}
                      variants={fadeUp}
                      className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_22px_65px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_80px_rgba(15,23,42,0.08)]"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-display text-4xl text-slate-300">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <MoveUpRight className="h-5 w-5 text-amber-500 transition group-hover:-translate-x-1 group-hover:-translate-y-1" />
                      </div>
                      <h3 className="mt-6 text-balance font-display text-3xl leading-none text-slate-950">
                        {service.title}
                      </h3>
                      <p className="mt-4 text-base leading-8 text-slate-600">{service.description}</p>
                    </m.article>
                  ))}
                </div>
              </m.div>
            </div>
          </section>

          <section className="section-space border-y border-slate-200/70 bg-white/70">
            <div className="container-shell">
              <m.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }} variants={stagger}>
                <SectionHeading
                  eyebrow="חבילות שירות"
                  title="שלוש נקודות פתיחה שונות, עם אותה מטרה: אתר שמרגיש מקצועי ומוביל לפנייה."
                  description="אני מתאים את המבנה והעומק לצורך העסקי. לפעמים צריך עמוד חד וממוקד, ולפעמים נוכחות מלאה שמספרת סיפור של מותג."
                />
                <div className="mt-12 grid gap-5 lg:grid-cols-3">
                  {servicePackages.map((pkg) => (
                    <m.article
                      key={pkg.name}
                      variants={fadeUp}
                      className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_22px_65px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_80px_rgba(15,23,42,0.08)]"
                    >
                      <p className="text-xs font-extrabold tracking-[0.28em] text-amber-700">{pkg.fit}</p>
                      <h3 className="mt-4 text-balance font-display text-3xl leading-none text-slate-950">{pkg.name}</h3>
                      <div className="mt-6 space-y-3">
                        {pkg.details.map((detail) => (
                          <div key={detail} className="rounded-[1.3rem] bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700">
                            {detail}
                          </div>
                        ))}
                      </div>
                    </m.article>
                  ))}
                </div>
              </m.div>
            </div>
          </section>

          <section id="work" className="section-space border-y border-slate-200/70 bg-white/70">
            <div className="container-shell">
              <m.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }} variants={stagger}>
                <SectionHeading
                  eyebrow="עבודות"
                  title="ארבעה אתרים שונים באמת, שכל אחד מהם מרגיש כמו עסק חי עם שפה משלו"
                  description="כל פרויקט בנוי כעולם שלם עם לוגו, ניווט, תוכן אמין, מבנה ברור ותחושת מותג ייחודית. אין כאן חזרתיות של אותה תבנית עם צבע אחר."
                />

                <div className="mt-12 grid gap-6 xl:grid-cols-2">
                  {projects.map((project) => (
                    <m.article
                      key={project.slug}
                      variants={fadeUp}
                      className="group overflow-hidden rounded-[2.2rem] border border-white/80 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1"
                    >
                      <div className={`h-2 w-full bg-gradient-to-r ${project.accent}`} />
                      <div className="grid gap-0 lg:grid-cols-[1.02fr_0.98fr]">
                        <div className="relative overflow-hidden bg-slate-950">
                          <img
                            src={project.previewImage}
                            alt={project.previewAlt}
                            className="h-full min-h-[340px] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />
                          <div className="absolute bottom-5 right-5 flex flex-wrap gap-2">
                            {projectHighlights[project.slug].map((item) => (
                              <span
                                key={item}
                                className="rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs font-bold text-white backdrop-blur"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-col justify-between p-7 text-right">
                          <div>
                            <p className="text-xs font-extrabold tracking-[0.28em] text-slate-500">{project.industry}</p>
                            <h3 className="mt-3 font-display text-4xl leading-none text-slate-950">{project.name}</h3>
                            <p className="mt-5 text-base leading-8 text-slate-600">{project.description}</p>
                            <p className="mt-5 text-sm leading-7 text-slate-500">{projectOutcomes[project.slug]}</p>
                          </div>
                          <div className="mt-8 flex items-center justify-between gap-4">
                            <div className="flex items-center gap-2 text-sm text-amber-700">
                              <Star className="h-4 w-4 fill-amber-300 text-amber-300" />
                              <span className="font-bold">שפה ייחודית ותחושת מותג מלאה</span>
                            </div>
                            <Link
                              href={project.route}
                              className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5"
                            >
                              {project.cta}
                              <ChevronLeft className="h-4 w-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </m.article>
                  ))}
                </div>
              </m.div>
            </div>
          </section>

          <section className="section-space">
            <div className="container-shell">
              <m.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }} variants={stagger}>
                <SectionHeading
                  eyebrow="מה העסק מרוויח"
                  title="האתר החדש לא אמור רק להיראות טוב. הוא אמור לשפר איך הלקוח תופס את העסק שלך"
                  description="כשחושבים נכון על מסר, היררכיה, ריווחים וחוויית משתמש, האתר מרגיש הרבה יותר בשל, ברור ואמין."
                />
                <div className="mt-12 grid gap-5 lg:grid-cols-3">
                  {businessBenefits.map(({ icon: Icon, title, description }) => (
                    <m.article
                      key={title}
                      variants={fadeUp}
                      className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_22px_65px_rgba(15,23,42,0.05)]"
                    >
                      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-6 text-balance font-display text-3xl text-slate-950">{title}</h3>
                      <p className="mt-4 text-base leading-8 text-slate-600">{description}</p>
                    </m.article>
                  ))}
                </div>
                <div className="mt-8 grid gap-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.04)] md:grid-cols-3">
                  {trustSignals.map((item) => (
                    <m.div key={item} variants={fadeUp} className="rounded-[1.5rem] bg-slate-50 p-5">
                      <p className="text-sm leading-7 text-slate-700">{item}</p>
                    </m.div>
                  ))}
                </div>
              </m.div>
            </div>
          </section>

          <section id="process" className="section-space border-y border-slate-200/70 bg-slate-950 text-white">
            <div className="container-shell">
              <m.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
                <SectionHeading
                  eyebrow="תהליך עבודה"
                  title="איך פרויקט עובר מרעיון לאתר חי שמוכן לקבל לקוחות"
                  description="המטרה היא לעבוד מסודר, לשמור על קצב ברור ולבנות תהליך שמרגיש מקצועי לא רק בעיצוב, אלא גם בדרך."
                  titleClassName="text-white"
                  descriptionClassName="text-slate-300"
                />
                <div className="mt-12 grid gap-5 lg:grid-cols-3">
                  {processSteps.map((step, index) => (
                    <m.article
                      key={step}
                      variants={fadeUp}
                      className="rounded-[1.9rem] border border-white/10 bg-white/6 p-6 backdrop-blur"
                    >
                      <div className="text-xs font-extrabold tracking-[0.28em] text-amber-200/70">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <h3 className="mt-5 font-display text-3xl leading-none text-white">{step}</h3>
                      <p className="mt-4 text-sm leading-7 text-slate-300">{processDescriptions[index]}</p>
                    </m.article>
                  ))}
                </div>
              </m.div>
            </div>
          </section>

          <section className="section-space">
            <div className="container-shell">
              <m.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }} variants={stagger}>
                <SectionHeading
                  eyebrow="שאלות נפוצות"
                  title="לפני שמתחילים, אלה הדברים שבדרך כלל חשוב לדעת."
                  description="אם אתה מתלבט אם זה הזמן לשדרג, כמה עומק צריך, או איך נראה התהליך בפועל, אלו בדרך כלל השאלות הראשונות שעליהן אנחנו מיישרים קו."
                />
                <div className="mt-12 grid gap-5 lg:grid-cols-3">
                  {faqItems.map(([question, answer]) => (
                    <m.article
                      key={question}
                      variants={fadeUp}
                      className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_20px_60px_rgba(15,23,42,0.05)]"
                    >
                      <h3 className="text-balance font-display text-3xl leading-none text-slate-950">{question}</h3>
                      <p className="mt-5 text-base leading-8 text-slate-600">{answer}</p>
                    </m.article>
                  ))}
                </div>
              </m.div>
            </div>
          </section>

          <section className="section-space">
            <div className="container-shell">
              <m.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.18 }}
                variants={stagger}
                className="overflow-hidden rounded-[2.4rem] bg-[linear-gradient(135deg,#0f172a_0%,#111827_45%,#2b2117_100%)] p-8 text-white shadow-[0_26px_90px_rgba(15,23,42,0.18)] md:p-10"
              >
                <m.p variants={fadeUp} className="text-xs font-extrabold tracking-[0.3em] text-amber-200/80">
                  קריאה לפעולה
                </m.p>
                <m.div
                  variants={fadeUp}
                  className="mt-4 grid items-start gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end"
                >
                  <div>
                    <h2 className="text-balance font-display text-4xl leading-[0.9] md:text-6xl">
                      אם העסק שלך כבר טוב, הגיע הזמן שהאתר שלו ייראה באותה רמה.
                    </h2>
                    <p className="mt-5 max-w-2xl text-lg leading-9 text-slate-300">
                      אני בונה אתרים שמכוונים גם לנראות, גם לחוויית משתמש וגם לפעולה. לא עוד עמוד יפה
                      שנשכח מהר, אלא נכס דיגיטלי שנראה רציני ומרגיש נכון.
                    </p>
                  </div>
                  <div className="space-y-3">
                    {finalCtaPoints.map((item) => (
                      <div
                        key={item}
                        className="rounded-[1.4rem] border border-white/10 bg-white/6 px-4 py-3 text-sm text-slate-200"
                      >
                        {item}
                      </div>
                    ))}
                    <div className="flex flex-wrap gap-3 pt-2">
                      <LinkButton href="#contact" className="gap-2 bg-white text-slate-950">
                        שלח פרטים
                        <ChevronLeft className="h-4 w-4" />
                      </LinkButton>
                      <LinkButton href={WHATSAPP_URL} external variant="secondary" className="gap-2 border-white/15 bg-white/8 text-white">
                        פתח וואטסאפ
                        <MessageCircle className="h-4 w-4" />
                      </LinkButton>
                    </div>
                  </div>
                </m.div>
              </m.div>
            </div>
          </section>

          <section id="contact" className="section-space">
            <div className="container-shell">
              <div className="grid gap-8 xl:grid-cols-[0.82fr_1.18fr]">
                <m.aside
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={stagger}
                  className="space-y-5"
                >
                  <SectionHeading
                    eyebrow="צור קשר"
                    title="אם אתה צריך אתר שנראה כמו עסק אמיתי, מכאן מתחילים"
                    description="אפשר להתחיל מפרויקט חדש, שדרוג לאתר קיים או דף נחיתה ממוקד. שלח פרטים ואחזור אליך עם כיוון ברור, פרקטי ומדויק לעסק."
                  />
                  <m.div
                    variants={fadeUp}
                    className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_22px_65px_rgba(15,23,42,0.06)]"
                  >
                    <div className="flex items-center gap-3 text-slate-950">
                      <PhoneCall className="h-5 w-5 text-amber-600" />
                      <span className="font-bold">{SITE_PHONE}</span>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{SITE_EMAIL}</p>
                    <div className="mt-6 space-y-3">
                      {[
                        "מתאים לעסק חדש, למותג קיים או לשדרוג מלא לאתר שלא מייצג אותך היום.",
                        "כולל חשיבה על מסרים, שפה חזותית, חוויית משתמש, מובייל וערוצי פנייה.",
                        "המטרה היא לסיים עם אתר שנראה טוב, מרגיש נכון וקל לפעול דרכו."
                      ].map((item) => (
                        <div
                          key={item}
                          className="rounded-[1.3rem] border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-7 text-slate-600"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <LinkButton href={WHATSAPP_URL} external className="gap-2">
                        וואטסאפ
                        <MessageCircle className="h-4 w-4" />
                      </LinkButton>
                      <LinkButton href={`mailto:${SITE_EMAIL}`} variant="secondary">
                        שלח מייל
                      </LinkButton>
                    </div>
                  </m.div>
                </m.aside>

                <m.form
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  onSubmit={handleSubmit}
                  className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_24px_70px_rgba(15,23,42,0.06)]"
                >
                  <div className="grid gap-5 md:grid-cols-2">
                    <label className="grid gap-2 text-sm font-bold text-slate-700">
                      שם
                      <input
                        required
                        value={form.name}
                        onChange={(event) => updateField("name", event.target.value)}
                        className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-amber-300 focus:bg-white"
                        placeholder="איך קוראים לך?"
                      />
                    </label>
                    <label className="grid gap-2 text-sm font-bold text-slate-700">
                      טלפון
                      <input
                        required
                        value={form.phone}
                        onChange={(event) => updateField("phone", event.target.value)}
                        className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-amber-300 focus:bg-white"
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
                      className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-amber-300 focus:bg-white"
                    >
                      <option value="">בחר סוג אתר</option>
                      <option value="אתר תדמית">אתר תדמית</option>
                      <option value="דף נחיתה">דף נחיתה</option>
                      <option value="אתר מכירה">אתר מכירה</option>
                      <option value="עיצוב ממשק וחוויה">עיצוב ממשק וחוויה</option>
                    </select>
                  </label>
                  <label className="mt-5 grid gap-2 text-sm font-bold text-slate-700">
                    הודעה
                    <textarea
                      required
                      rows={6}
                      value={form.message}
                      onChange={(event) => updateField("message", event.target.value)}
                      className="rounded-[1.4rem] border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-amber-300 focus:bg-white"
                      placeholder="ספר לי על העסק שלך, מה המטרה של האתר, ואיזו תחושה אתה רוצה שהלקוח יקבל כשהוא נכנס."
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

        <footer className="border-t border-slate-200/70 bg-white/70 py-6">
          <div className="container-shell flex flex-col gap-4 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-bold text-slate-900">{SITE_NAME}</p>
              <p className="mt-1">בניית אתרי תדמית, דפי נחיתה ואתרי מכירה לעסקים שרוצים להיראות ברמה גבוהה ולהוביל לפניות.</p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#services">שירותים</a>
              <a href="#work">עבודות</a>
              <a href="#process">תהליך עבודה</a>
              <a href="#contact">צור קשר</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
