import { AnimatePresence, m } from "framer-motion";
import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  BadgeCheck,
  ChevronLeft,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  PhoneCall,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  X
} from "lucide-react";
import { Button, LinkButton } from "../components/common/Button";
import { OmersLogo } from "../components/common/BrandLogos";
import { Seo } from "../components/seo/Seo";
import {
  WHATSAPP_URL,
  absoluteUrl,
  projects,
  services,
  SITE_EMAIL,
  SITE_NAME,
  SITE_PHONE,
  type ProjectItem
} from "../data/site";

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

const GITHUB_URL = "https://github.com/Bond20007/My-website-project";

const navItems = [
  { label: "עבודות", href: "#work" },
  { label: "תהליך", href: "#process" },
  { label: "חבילות", href: "#packages" },
  { label: "שאלות", href: "#faq" },
  { label: "צור קשר", href: "#contact" }
] as const;

const heroBadges = ["אתרי תדמית", "דפי נחיתה", "אתרי מכירה", "SEO", "מובייל"] as const;

const heroSignals = [
  {
    title: "נראה כמו מותג",
    description: "שפה ויזואלית, קצב ותוכן שמרגישים כמו עסק אמיתי ולא כמו תבנית."
  },
  {
    title: "עובד מהר",
    description: "מסכים חדים, מובייל טוב, חיבור טפסים ודרך קצרה מאוד לפנייה."
  },
  {
    title: "נשמע ברור",
    description: "הלקוח מבין כבר במסך הראשון מה אתה עושה, למי זה מתאים ולמה לפנות."
  }
] as const;

const ideaSteps = [
  {
    id: "01",
    title: "מחדדים את העסק",
    description: "מה השירות שהכי חשוב למכור, מה הלקוח צריך להבין מהר, ואיזה רושם צריך להישאר אחרי 20 שניות."
  },
  {
    id: "02",
    title: "בונים מסך ראשון שמסביר",
    description: "כותרת, סדר, הוכחה ו־CTA. בלי רעש, בלי טקסטים שנכתבו רק כדי למלא גובה."
  },
  {
    id: "03",
    title: "מעצבים מערכת ולא רק עמוד",
    description: "טיפוגרפיה, צבע, מובייל, תנועה ומעברים שבונים אמון, לא רק יופי."
  },
  {
    id: "04",
    title: "מעלים אתר שמוכן לעבוד",
    description: "SEO בסיסי מסודר, קישורים נכונים, טפסים, בדיקות מובייל ותחושה של מוצר גמור."
  }
] as const;

const leadDrivers = [
  {
    title: "מסר חד במסך הראשון",
    description: "הכותרת עושה סדר. הלקוח לא צריך לנחש מה אתה עושה.",
    icon: Search
  },
  {
    title: "הוכחה ואמון במקום הנכון",
    description: "מבנה, היררכיה ופרטים קטנים שגורמים לעסק להרגיש מסודר ואמין.",
    icon: ShieldCheck
  },
  {
    title: "תנועה ברורה לפנייה",
    description: "CTA במקום הנכון, טפסים שעובדים ומובייל שלא מאבד את המסר.",
    icon: Rocket
  }
] as const;

const audiences = [
  "עסקים טובים שנראים קטנים מדי באינטרנט.",
  "בעלי מקצוע עם שירות חזק ואתר שלא מסביר אותו טוב.",
  "מותגים בתחילת הדרך שרוצים להיראות רציניים כבר מהיום הראשון.",
  "עסקים עם אתר קיים שרוצים לשדרג שפה, מסר והמרה בלי לבזבז חודשים."
] as const;

const packagePlans = [
  {
    title: "דף נחיתה חד",
    summary: "עמוד אחד שמסביר מהר, נראה נקי ומוביל לפנייה בלי שכבות מיותרות.",
    note: "מתאים להשקה, קמפיין או שירות ממוקד",
    items: ["מחקר מסר", "מסך ראשון חד", "חיבור טופס ווואטסאפ"]
  },
  {
    title: "אתר תדמית מלא",
    summary: "אתר שלם לעסק שרוצה להיראות כמו מותג אמיתי ולעבוד נכון גם בדסקטופ וגם במובייל.",
    note: "החבילה שרוב העסקים צריכים",
    items: ["שפה ויזואלית מלאה", "עמודים מרכזיים", "SEO בסיסי מסודר", "תוכן, טפסים ומובייל"]
  },
  {
    title: "אתר מכירה",
    summary: "מבנה שמציג מוצר או שירות, בונה אמון ומוביל את הלקוח לעבר פעולה ברורה.",
    note: "למכירה, להצעה או לפרויקט פרימיום",
    items: ["מסכי מכירה", "היררכיית מסר", "FAQ והוכחה", "חיבורי לידים"]
  }
] as const;

const faqItems = [
  {
    id: "timeline",
    question: "כמה זמן לוקח לבנות אתר?",
    answer: "זה תלוי בגודל האתר ובכמה מהר סוגרים תוכן, אבל ברוב המקרים אתר תדמית טוב לא צריך להיגרר חודשים. המטרה שלי היא לעבוד חד, לא למשוך זמן."
  },
  {
    id: "content",
    question: "אתה כותב גם את הטקסטים?",
    answer: "כן. אני עוזר לזקק את המסר, לנסח כותרות ולעשות סדר בתוכן כדי שהאתר יישמע כמו עסק אמיתי ולא כמו מסמך גולמי."
  },
  {
    id: "mobile",
    question: "מה לגבי מובייל ו־SEO?",
    answer: "מובייל ו־SEO לא מגיעים בסוף. הם חלק מהבנייה עצמה. אני בודק שהמסכים חדים בטלפון, שההיררכיה עובדת ושהעמוד בנוי נכון גם למנועי חיפוש."
  },
  {
    id: "existing",
    question: "אפשר לשדרג אתר קיים במקום לבנות מחדש?",
    answer: "לפעמים כן, ולפעמים עדיף לבנות מחדש. אם יש לאתר בסיס טוב, אפשר לחזק את המסר, העיצוב וההמרה בלי לפרק הכול."
  }
] as const;

const showcaseNotes: Record<
  ProjectItem["slug"],
  {
    whatBuilt: string;
    whyItFits: string;
    tags: string[];
  }
> = {
  "luma-bistro": {
    whatBuilt: "עמוד פתיחה עם אווירת ערב, תפריט, גלריה והזמנת שולחן.",
    whyItFits: "העיצוב כהה, שקט ואלגנטי כדי להרגיש כמו מסעדת שף אמיתית בתל אביב ולא כמו אתר מסעדה גנרי.",
    tags: ["ערב", "תפריט", "הזמנות"]
  },
  "pulsefit-studio": {
    whatBuilt: "אתר לסטודיו כושר עם תוכניות, מאמנים, שיעור ניסיון ומסלולים.",
    whyItFits: "הקומפוזיציה חדה ודינמית כי העסק עצמו חי מאנרגיה, קצב ותנועה, לא מקווים עדינים.",
    tags: ["כוח", "ניסיון", "תנועה"]
  },
  "aura-clinic": {
    whatBuilt: "אתר לקליניקה עם טיפולים, תהליך, המלצות וקביעת תור.",
    whyItFits: "החלל הוויזואלי פתוח, רגוע ונקי כדי לייצר אמון, שקט ועדינות כבר מהמבט הראשון.",
    tags: ["ייעוץ", "אמון", "רוגע"]
  },
  nexora: {
    whatBuilt: "עמוד מוצר עם dashboard, יכולות, מסכים, מחירים והרשמה.",
    whyItFits: "המבנה מרגיש כמו מוצר SaaS אמיתי: שכבות מידע, data blocks ותחושת מערכת ולא דף שיווק שטוח.",
    tags: ["מוצר", "data", "pricing"]
  }
};

function StudioPreview({
  title,
  subtitle,
  image,
  badge,
  className
}: {
  title: string;
  subtitle: string;
  image: string;
  badge: string;
  className?: string;
}) {
  return (
    <m.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className={`overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#1e1915] shadow-[0_24px_70px_rgba(0,0,0,0.22)] ${className ?? ""}`}
    >
      <div className="flex items-center gap-2 border-b border-white/8 bg-[#171310] px-4 py-3">
        <span className="window-dot bg-[#ff7c64]" />
        <span className="window-dot bg-[#ffc45b]" />
        <span className="window-dot bg-[#7ec77b]" />
        <div className="mr-3 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-bold tracking-[0.2em] text-white/72">
          {badge}
        </div>
      </div>
      <div className="grid gap-3 p-3">
        <img src={image} alt={subtitle} className="h-40 w-full rounded-[1.25rem] object-cover md:h-48" />
        <div className="rounded-[1.25rem] bg-white/5 p-4">
          <p className="font-hebrew-display text-2xl font-bold text-white">{title}</p>
          <p className="mt-2 text-sm leading-7 text-white/68">{subtitle}</p>
        </div>
      </div>
    </m.article>
  );
}

function FaqRow({
  question,
  answer,
  open,
  onToggle
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="studio-divider pb-5">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-6 py-2 text-right"
      >
        <span className="font-hebrew-display text-2xl font-extrabold text-[#1b1714] md:text-3xl">{question}</span>
        <span className="mt-1 text-sm font-extrabold tracking-[0.22em] text-[#b06a45]">{open ? "סגור" : "פתח"}</span>
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <m.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="overflow-hidden"
          >
            <p className="max-w-3xl pt-2 text-base leading-8 text-[#655748]">{answer}</p>
          </m.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function HomePage() {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<string>(faqItems[0].id);

  const projectMap = useMemo(() => new Map(projects.map((project) => [project.slug, project])), []);

  const luma = projectMap.get("luma-bistro");
  const pulse = projectMap.get("pulsefit-studio");
  const aura = projectMap.get("aura-clinic");
  const nexora = projectMap.get("nexora");

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
        "Omer's הוא סטודיו לבניית אתרים לעסקים: אתרי תדמית, דפי נחיתה ואתרי מכירה שנראים רציניים, עובדים מהר ומביאים יותר פניות.",
      serviceType: ["בניית אתרים לעסקים", "אתר תדמית לעסק", "דף נחיתה", "עיצוב אתרים"],
      sameAs: [WHATSAPP_URL, GITHUB_URL]
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

  function handleNavClose() {
    setMenuOpen(false);
  }

  if (!luma || !pulse || !aura || !nexora) {
    return null;
  }

  return (
    <>
      <Seo
        title="Omer's | אתרים שנראים כמו מותג ועובדים כמו מערכת שמביאה פניות"
        description="Omer's הוא סטודיו לבניית אתרים לעסקים: אתרי תדמית, דפי נחיתה ואתרי מכירה שנראים רציניים, זזים מהר ומביאים יותר פניות."
        path="/"
        image="/images/omers/agency-mockup-wall.webp"
        imageAlt="סטודיו Omer's עם מסכי פרויקטים, חלונות דפדפן וחלל עבודה מעוצב"
        keywords={["בניית אתרים לעסקים", "אתר תדמית לעסק", "דף נחיתה", "בניית אתרים מקצועיים", "עיצוב אתרים", "Omer's"]}
        schema={serviceSchema}
        lang="he"
        dir="rtl"
      />

      <div className="min-h-screen bg-[var(--studio-ink)] text-[#f6eadc] font-hebrew-body">
        <header className="sticky top-0 z-50 border-b border-white/6 bg-[rgba(18,17,15,0.84)] backdrop-blur-2xl">
          <div className="container-shell flex items-center justify-between gap-4 py-4">
            <div className="flex items-center gap-4">
              <OmersLogo />
            </div>

            <nav className="hidden items-center gap-6 rounded-full border border-white/8 bg-white/5 px-5 py-3 text-sm font-bold text-white/70 lg:flex">
              <a href="#home" className="studio-link hover:text-white">
                בית
              </a>
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="studio-link hover:text-white">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <LinkButton href={WHATSAPP_URL} external variant="studioSecondary" className="gap-2">
                ווטסאפ
                <MessageCircle className="h-4 w-4" />
              </LinkButton>
              <LinkButton href="#contact" variant="studio" className="gap-2">
                בוא נבנה אתר
                <ChevronLeft className="h-4 w-4" />
              </LinkButton>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-[1rem] border border-white/10 bg-white/6 text-white lg:hidden"
              aria-label="פתח תפריט"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </header>

        <AnimatePresence>
          {menuOpen ? (
            <m.div
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.22 }}
              className="fixed inset-x-4 top-20 z-50 rounded-[2rem] border border-white/10 bg-[rgba(22,19,16,0.96)] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-2xl lg:hidden"
            >
              <div className="grid gap-3">
                <a href="#home" onClick={handleNavClose} className="rounded-[1rem] bg-white/6 px-4 py-4 text-lg font-bold text-white">
                  בית
                </a>
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={handleNavClose}
                    className="rounded-[1rem] bg-white/6 px-4 py-4 text-lg font-bold text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <LinkButton href="#contact" variant="studio" className="gap-2" onClick={handleNavClose}>
                  בוא נבנה אתר
                  <ChevronLeft className="h-4 w-4" />
                </LinkButton>
                <LinkButton href={WHATSAPP_URL} external variant="studioSecondary" className="gap-2">
                  ווטסאפ
                  <MessageCircle className="h-4 w-4" />
                </LinkButton>
              </div>
            </m.div>
          ) : null}
        </AnimatePresence>

        <main id="home">
          <section className="pb-18 pt-8 md:pb-24 md:pt-10">
            <div className="container-shell">
              <div className="studio-dark-panel studio-grid studio-noise relative overflow-hidden rounded-[2.6rem] px-5 pb-8 pt-5 md:px-8 md:pb-10 md:pt-7">
                <div className="absolute -left-12 top-16 h-48 w-48 rounded-full bg-[rgba(208,138,89,0.16)] blur-3xl" />
                <div className="absolute -right-10 bottom-14 h-56 w-56 rounded-full bg-[rgba(104,114,93,0.18)] blur-3xl" />

                <div className="relative grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
                  <m.div
                    initial={{ opacity: 0, y: 26 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="grid gap-6"
                  >
                    <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs font-extrabold tracking-[0.24em] text-white/72">
                      <Sparkles className="h-4 w-4 text-[var(--studio-accent-soft)]" />
                      סטודיו לבניית אתרים לעסקים
                    </div>

                    <div className="grid gap-4">
                      <h1 className="max-w-[11ch] font-hebrew-display text-[3.4rem] font-black leading-[0.82] tracking-[-0.03em] text-white md:text-[5.8rem]">
                        אתרים שנראים כמו מותג ועובדים כמו מכונה שמביאה פניות
                      </h1>
                      <p className="max-w-2xl text-xl leading-9 text-[#e7d9ca] md:max-w-xl">
                        אני בונה אתרי תדמית, דפי נחיתה ואתרי מכירה לעסקים שרוצים להיראות רציניים, לזוז מהר ולקבל יותר
                        פניות.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {heroBadges.map((badge) => (
                        <span key={badge} className="studio-chip rounded-full px-4 py-2 text-sm font-bold text-white/80">
                          {badge}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <LinkButton href="#contact" variant="studio" className="gap-2">
                        בוא נבנה אתר
                        <ChevronLeft className="h-4 w-4" />
                      </LinkButton>
                      <LinkButton href="#work" variant="studioSecondary" className="gap-2">
                        צפה בעבודות
                        <ArrowUpRight className="h-4 w-4" />
                      </LinkButton>
                    </div>

                    <div className="mt-2 grid gap-4 lg:grid-cols-3">
                      {heroSignals.map((item) => (
                        <div key={item.title} className="rounded-[1.6rem] border border-white/10 bg-white/6 p-5 backdrop-blur">
                          <p className="text-sm font-extrabold tracking-[0.16em] text-[var(--studio-accent-soft)]">{item.title}</p>
                          <p className="mt-3 text-sm leading-7 text-white/70">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </m.div>

                  <m.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.75 }}
                    className="relative min-h-[520px] md:min-h-[680px]"
                  >
                    <div className="absolute inset-y-0 left-0 right-8 rounded-[2.3rem] bg-[linear-gradient(145deg,#f6ebde_0%,#f0e3d2_58%,#d9c2aa_100%)] studio-outline" />
                    <div className="absolute inset-y-10 left-8 right-0 rounded-[2.2rem] border border-black/5 bg-white/70 backdrop-blur-2xl" />

                    <div className="absolute right-4 top-0 w-[64%] studio-float-slow md:right-6">
                      <StudioPreview
                        title="קיר עבודות"
                        subtitle="מסכים, כיוון עיצובי ותחושה של סטודיו אמיתי עם פרויקטים חיים."
                        image="/images/omers/agency-mockup-wall.webp"
                        badge="MAIN BOARD"
                      />
                    </div>

                    <div className="absolute left-0 top-28 w-[48%] studio-float-fast md:top-36">
                      <StudioPreview
                        title="Luma Bistro"
                        subtitle="אתר מסעדה כהה, מדויק ואלגנטי."
                        image={luma.previewImage}
                        badge="RESTAURANT"
                      />
                    </div>

                    <div className="absolute bottom-22 right-10 w-[42%] studio-float-slow">
                      <StudioPreview
                        title="Nexora"
                        subtitle="מוצר SaaS עם dashboard אמיתי."
                        image={nexora.previewImage}
                        badge="SAAS"
                      />
                    </div>

                    <div className="absolute bottom-8 left-8 max-w-[18rem] rounded-[1.5rem] border border-white/12 bg-[rgba(18,17,15,0.86)] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur">
                      <p className="text-xs font-extrabold tracking-[0.24em] text-white/42">סטודיו אמיתי, לא אוסף מסכים</p>
                      <p className="mt-3 text-sm leading-7 text-[#e7d9ca]">
                        כל פרויקט מקבל שפה משלו, מבנה משלו וסיבה אמיתית להיראות כמו שהוא נראה.
                      </p>
                    </div>

                    <div className="absolute right-8 top-24 hidden rounded-full border border-black/8 bg-white px-4 py-2 text-xs font-extrabold tracking-[0.22em] text-[#8b5c3d] md:block">
                      STUDIO MOCKUPS
                    </div>
                  </m.div>
                </div>
              </div>
            </div>
          </section>

          <section id="process" className="relative -mt-8 pb-18 md:-mt-10 md:pb-24">
            <div className="container-shell">
              <div className="studio-surface overflow-hidden rounded-[2.5rem] px-5 py-8 md:px-8 md:py-10">
                <div className="grid gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
                  <div className="grid gap-5">
                    <div>
                      <p className="text-xs font-extrabold tracking-[0.28em] text-[#8d725c]">איך אני הופך רעיון לאתר</p>
                      <h2 className="mt-4 max-w-md font-hebrew-display text-[3rem] font-black leading-[0.86] tracking-[-0.03em] text-[#181411] md:text-[4.6rem]">
                        קודם מסדרים את העסק. אחר כך מעצבים את האתר.
                      </h2>
                    </div>

                    <div className="overflow-hidden rounded-[2rem] border border-black/6 bg-[#181411] p-3 shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
                      <img
                        src="/images/omers/design-review.png"
                        alt="מסך תכנון וביקורת עיצוב בסטודיו של Omer's"
                        className="h-[360px] w-full rounded-[1.4rem] object-cover md:h-[420px]"
                      />
                    </div>

                    <div className="rounded-[1.8rem] bg-[#f6eee3] p-5 text-[#5b4c3f]">
                      <p className="text-sm leading-8">
                        אתר טוב לא מתחיל מאפקט. הוא מתחיל מהשאלה מה הלקוח צריך להבין כבר במסך הראשון כדי להרגיש שהוא במקום הנכון.
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-6">
                    {ideaSteps.map((step, index) => (
                      <m.div
                        key={step.id}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.55, delay: index * 0.05 }}
                        className="studio-divider grid gap-4 pb-6 md:grid-cols-[78px_1fr]"
                      >
                        <div className="font-hebrew-display text-5xl font-black leading-none text-[#d2b497]">{step.id}</div>
                        <div>
                          <h3 className="font-hebrew-display text-3xl font-black text-[#181411] md:text-4xl">{step.title}</h3>
                          <p className="mt-3 max-w-2xl text-base leading-8 text-[#655748]">{step.description}</p>
                        </div>
                      </m.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="pb-18 md:pb-24">
            <div className="container-shell">
              <div className="studio-dark-panel overflow-hidden rounded-[2.5rem] px-5 py-8 md:px-8 md:py-10">
                <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
                  <div className="grid gap-5">
                    <div>
                      <p className="text-xs font-extrabold tracking-[0.28em] text-[var(--studio-accent-soft)]">אתר יפה זה לא מספיק</p>
                      <h2 className="mt-4 max-w-md font-hebrew-display text-[3rem] font-black leading-[0.84] tracking-[-0.03em] text-white md:text-[4.4rem]">
                        אם האתר לא מסביר, לא בונה אמון ולא מזיז את הלקוח לפעולה, הוא נשאר קישוט.
                      </h2>
                    </div>

                    <div className="rounded-[1.9rem] border border-white/10 bg-white/5 p-6">
                      <p className="text-xs font-extrabold tracking-[0.24em] text-white/45">מה קורה באתר תבניתי</p>
                      <p className="mt-4 text-base leading-8 text-[#eadccc]">
                        יש צבע, יש אנימציה, יש עוד כרטיסים, אבל אין נקודת מבט. הלקוח מתרשם לשנייה ולא באמת מבין מה העסק עושה טוב יותר מאחרים.
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-6">
                    <div>
                      <p className="text-xs font-extrabold tracking-[0.28em] text-[var(--studio-accent-soft)]">מה גורם לאתר להביא פניות</p>
                      <h3 className="mt-3 font-hebrew-display text-4xl font-black leading-[0.9] text-white md:text-[3.4rem]">
                        מסר חד, הוכחה במקום הנכון, ודרך קצרה מאוד להשאיר פרטים.
                      </h3>
                    </div>

                    {leadDrivers.map(({ title, description, icon: Icon }, index) => (
                      <m.div
                        key={title}
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.55, delay: index * 0.08 }}
                        className="studio-divider grid gap-4 pb-6 md:grid-cols-[70px_1fr]"
                      >
                        <div className="grid h-14 w-14 place-items-center rounded-[1.3rem] border border-white/10 bg-white/6 text-[var(--studio-accent-soft)]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-hebrew-display text-3xl font-black text-white">{title}</h4>
                          <p className="mt-3 max-w-2xl text-base leading-8 text-white/70">{description}</p>
                        </div>
                      </m.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="work" className="pb-18 md:pb-24">
            <div className="container-shell">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-xs font-extrabold tracking-[0.28em] text-[#bfae9d]">עבודות</p>
                  <h2 className="mt-3 max-w-3xl font-hebrew-display text-[3.2rem] font-black leading-[0.84] tracking-[-0.03em] text-white md:text-[4.8rem]">
                    לא ארבעה כרטיסים. ארבעה עסקים שנראים כאילו מישהו באמת בנה להם אתר.
                  </h2>
                </div>
                <p className="max-w-md text-base leading-8 text-[#d3c4b4]">
                  כל פרויקט מקבל עולם ויזואלי משלו, קצב משלו והיגיון שמתאים לעסק. זאת הנקודה שבה האתר מפסיק להרגיש כמו טמפלט.
                </p>
              </div>

              <div className="mt-10 grid gap-6 lg:grid-cols-[1.14fr_0.86fr]">
                <m.article
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.28 }}
                  className="group studio-dark-panel relative overflow-hidden rounded-[2.5rem] border border-white/10"
                >
                  <img
                    src={luma.previewImage}
                    alt={luma.previewAlt}
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/28 to-transparent" />
                  <div className="relative grid h-full min-h-[560px] content-between p-6 md:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <span className="studio-chip rounded-full px-4 py-2 text-xs font-extrabold tracking-[0.22em] text-white/82">
                        {luma.industry}
                      </span>
                      <span className="rounded-full bg-black/28 px-4 py-2 text-xs font-bold text-white/72">פרויקט מוביל</span>
                    </div>

                    <div className="max-w-xl">
                      <h3 className="font-hebrew-display text-5xl font-black leading-none text-white md:text-6xl">{luma.name}</h3>
                      <p className="mt-4 text-base leading-8 text-white/78">{showcaseNotes[luma.slug].whatBuilt}</p>
                      <p className="mt-4 max-w-xl text-sm leading-7 text-white/68">{showcaseNotes[luma.slug].whyItFits}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {showcaseNotes[luma.slug].tags.map((tag) => (
                          <span key={tag} className="rounded-full border border-white/12 bg-black/24 px-3 py-2 text-xs font-bold text-white/80">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="mt-7">
                        <LinkButton href={luma.route} variant="studioLight" className="gap-2">
                          צפה באתר
                          <ArrowUpRight className="h-4 w-4" />
                        </LinkButton>
                      </div>
                    </div>
                  </div>
                </m.article>

                <div className="grid gap-6">
                  {[pulse, aura].map((project, index) => (
                    <m.article
                      key={project.slug}
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.28 }}
                      className={`group relative overflow-hidden rounded-[2.3rem] border ${index === 0 ? "border-white/10 bg-[#1a1713]" : "border-black/8 bg-[var(--studio-paper)]"} shadow-[0_24px_70px_rgba(0,0,0,0.14)]`}
                    >
                      <div className="grid md:grid-cols-[0.95fr_1.05fr]">
                        <div className="relative min-h-[240px] overflow-hidden">
                          <img
                            src={project.previewImage}
                            alt={project.previewAlt}
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                          />
                          <div className={`absolute inset-0 ${index === 0 ? "bg-gradient-to-t from-black/68 to-transparent" : "bg-gradient-to-t from-[#181411]/40 to-transparent"}`} />
                        </div>
                        <div className={`grid gap-4 p-5 md:p-6 ${index === 0 ? "text-white" : "text-[#181411]"}`}>
                          <div className="flex items-center justify-between gap-3">
                            <span className={`text-xs font-extrabold tracking-[0.22em] ${index === 0 ? "text-[var(--studio-accent-soft)]" : "text-[#8b6a54]"}`}>
                              {project.industry}
                            </span>
                            <span className={`text-[11px] font-bold ${index === 0 ? "text-white/55" : "text-[#6d5b4a]"}`}>מה נבנה</span>
                          </div>
                          <div>
                            <h3 className="font-hebrew-display text-4xl font-black">{project.name}</h3>
                            <p className={`mt-3 text-sm leading-7 ${index === 0 ? "text-white/72" : "text-[#655748]"}`}>
                              {showcaseNotes[project.slug].whatBuilt}
                            </p>
                            <p className={`mt-3 text-sm leading-7 ${index === 0 ? "text-white/62" : "text-[#7c6c5d]"}`}>
                              {showcaseNotes[project.slug].whyItFits}
                            </p>
                          </div>
                          <div className="mt-auto flex flex-wrap gap-2">
                            {showcaseNotes[project.slug].tags.map((tag) => (
                              <span
                                key={tag}
                                className={`rounded-full px-3 py-2 text-xs font-bold ${index === 0 ? "border border-white/12 bg-white/6 text-white/80" : "border border-black/8 bg-[#f3e7d9] text-[#6a5647]"}`}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div>
                            <LinkButton href={project.route} variant={index === 0 ? "studioSecondary" : "studioLight"} className="gap-2">
                              צפה באתר
                              <ArrowUpRight className="h-4 w-4" />
                            </LinkButton>
                          </div>
                        </div>
                      </div>
                    </m.article>
                  ))}
                </div>
              </div>

              <m.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.28 }}
                className="group relative mt-6 overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#121724] shadow-[0_26px_80px_rgba(0,0,0,0.22)]"
              >
                <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
                  <div className="relative min-h-[320px] overflow-hidden">
                    <img
                      src={nexora.previewImage}
                      alt={nexora.previewAlt}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101726] via-[#101726]/24 to-transparent" />
                  </div>
                  <div className="grid gap-5 p-6 text-white md:p-8">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="text-xs font-extrabold tracking-[0.22em] text-cyan-300">{nexora.industry}</span>
                      <span className="rounded-full border border-cyan-300/16 bg-cyan-300/8 px-4 py-2 text-[11px] font-bold text-cyan-200">
                        Full Product Showcase
                      </span>
                    </div>
                    <div>
                      <h3 className="font-hebrew-display text-5xl font-black leading-none">{nexora.name}</h3>
                      <p className="mt-4 max-w-2xl text-base leading-8 text-white/74">{showcaseNotes[nexora.slug].whatBuilt}</p>
                      <p className="mt-4 max-w-2xl text-sm leading-7 text-white/62">{showcaseNotes[nexora.slug].whyItFits}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {showcaseNotes[nexora.slug].tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-cyan-300/14 bg-white/6 px-3 py-2 text-xs font-bold text-white/82">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div>
                      <LinkButton href={nexora.route} variant="studioSecondary" className="gap-2">
                        צפה באתר
                        <ArrowUpRight className="h-4 w-4" />
                      </LinkButton>
                    </div>
                  </div>
                </div>
              </m.article>
            </div>
          </section>

          <section className="pb-18 md:pb-24">
            <div className="container-shell">
              <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-[2.4rem] border border-white/10 bg-white/5 p-6 backdrop-blur md:p-8">
                  <p className="text-xs font-extrabold tracking-[0.28em] text-[var(--studio-accent-soft)]">למי זה מתאים</p>
                  <h2 className="mt-4 max-w-md font-hebrew-display text-[3rem] font-black leading-[0.86] tracking-[-0.03em] text-white md:text-[4.2rem]">
                    לעסקים טובים שלא רוצים להיראות בינוניים באינטרנט.
                  </h2>
                  <div className="mt-8 grid gap-4">
                    {audiences.map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                        <BadgeCheck className="mt-1 h-5 w-5 text-[var(--studio-accent-soft)]" />
                        <p className="text-sm leading-7 text-white/74">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="studio-surface rounded-[2.4rem] px-6 py-8 md:px-8 md:py-10">
                  <p className="text-xs font-extrabold tracking-[0.28em] text-[#8d725c]">מה מקבלים בתהליך</p>
                  <h3 className="mt-4 max-w-lg font-hebrew-display text-[2.8rem] font-black leading-[0.88] tracking-[-0.03em] text-[#181411] md:text-[4rem]">
                    לא רק אתר יפה. מערכת מסודרת שמסבירה, נראית נכון, ועובדת טוב.
                  </h3>
                  <div className="mt-8 grid gap-5">
                    {[
                      "כיוון מסר ברור כבר מהמסך הראשון.",
                      "עיצוב שמרגיש מותאם לעסק ולא מורכב מאוסף רכיבים.",
                      "מובייל חד, טפסים, קישורים ו־CTA שעובדים נכון.",
                      "בסיס SEO נקי כדי להתחיל ממקום טוב יותר."
                    ].map((item, index) => (
                      <div key={item} className="studio-divider grid gap-4 pb-5 md:grid-cols-[56px_1fr]">
                        <div className="font-hebrew-display text-4xl font-black text-[#d2b497]">0{index + 1}</div>
                        <p className="text-base leading-8 text-[#655748]">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="packages" className="pb-18 md:pb-24">
            <div className="container-shell">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-xs font-extrabold tracking-[0.28em] text-[#bfae9d]">חבילות שירות</p>
                  <h2 className="mt-3 max-w-2xl font-hebrew-display text-[3rem] font-black leading-[0.86] tracking-[-0.03em] text-white md:text-[4.4rem]">
                    בוחרים את המסגרת שנכונה לעסק, לא את מה שנוח לתבנית.
                  </h2>
                </div>
                <p className="max-w-md text-base leading-8 text-[#d3c4b4]">
                  לפעמים צריך דף חד להשקה. לפעמים אתר תדמית מלא. ולפעמים אתר מכירה שצריך לעבוד חזק יותר על מסר והמרה.
                </p>
              </div>

              <div className="mt-10 grid gap-6 lg:grid-cols-[1.18fr_0.82fr]">
                <div className="studio-surface rounded-[2.5rem] px-6 py-8 md:px-8 md:py-10">
                  <div className="flex flex-wrap items-start justify-between gap-5">
                    <div>
                      <p className="text-xs font-extrabold tracking-[0.24em] text-[#8d725c]">{packagePlans[1].note}</p>
                      <h3 className="mt-3 font-hebrew-display text-5xl font-black leading-none text-[#181411] md:text-6xl">
                        {packagePlans[1].title}
                      </h3>
                    </div>
                    <span className="rounded-full bg-[#181411] px-4 py-2 text-xs font-extrabold tracking-[0.22em] text-white">הכי מבוקש</span>
                  </div>
                  <p className="mt-5 max-w-2xl text-lg leading-9 text-[#5d4e40]">{packagePlans[1].summary}</p>
                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {packagePlans[1].items.map((item) => (
                      <div key={item} className="rounded-[1.5rem] border border-black/6 bg-[#fbf5ed] px-4 py-4 text-sm font-bold text-[#4f4134]">
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="mt-8">
                    <LinkButton href="#contact" variant="studioLight" className="gap-2">
                      בוא נבנה אתר כזה
                      <ChevronLeft className="h-4 w-4" />
                    </LinkButton>
                  </div>
                </div>

                <div className="grid gap-6">
                  {[packagePlans[0], packagePlans[2]].map((plan, index) => (
                    <div
                      key={plan.title}
                      className={`${index === 0 ? "bg-white/6 text-white" : "bg-[#171310] text-white"} rounded-[2.2rem] border border-white/10 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.16)]`}
                    >
                      <p className={`text-xs font-extrabold tracking-[0.24em] ${index === 0 ? "text-[var(--studio-accent-soft)]" : "text-[#f0d3bd]"}`}>
                        {plan.note}
                      </p>
                      <h3 className="mt-3 font-hebrew-display text-4xl font-black leading-none">{plan.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-white/72">{plan.summary}</p>
                      <div className="mt-6 grid gap-3">
                        {plan.items.map((item) => (
                          <div key={item} className="rounded-[1.2rem] border border-white/10 bg-white/6 px-4 py-3 text-sm font-bold text-white/82">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="faq" className="pb-18 md:pb-24">
            <div className="container-shell">
              <div className="studio-surface rounded-[2.5rem] px-6 py-8 md:px-8 md:py-10">
                <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
                  <div>
                    <p className="text-xs font-extrabold tracking-[0.28em] text-[#8d725c]">שאלות נפוצות</p>
                    <h2 className="mt-4 max-w-md font-hebrew-display text-[3rem] font-black leading-[0.86] tracking-[-0.03em] text-[#181411] md:text-[4.2rem]">
                      לפני שמתחילים, יש כמה דברים שעדיף לסגור ישר.
                    </h2>
                    <p className="mt-5 max-w-md text-base leading-8 text-[#655748]">
                      אני מעדיף שיחה ישירה ותהליך ברור. בלי הבטחות גדולות ובלי מילים מנופחות. הנה התשובות לדברים שעולים כמעט תמיד.
                    </p>
                  </div>

                  <div className="grid gap-5">
                    {faqItems.map((item) => (
                      <FaqRow
                        key={item.id}
                        question={item.question}
                        answer={item.answer}
                        open={openFaq === item.id}
                        onToggle={() => setOpenFaq((current) => (current === item.id ? "" : item.id))}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="pb-20 md:pb-24">
            <div className="container-shell">
              <div className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
                <div className="studio-dark-panel rounded-[2.5rem] px-6 py-8 md:px-8 md:py-10">
                  <p className="text-xs font-extrabold tracking-[0.28em] text-[var(--studio-accent-soft)]">צור קשר</p>
                  <h2 className="mt-4 max-w-md font-hebrew-display text-[3rem] font-black leading-[0.84] tracking-[-0.03em] text-white md:text-[4.4rem]">
                    אם העסק שלך טוב, הגיע הזמן שגם האתר יישמע וייראה ככה.
                  </h2>
                  <p className="mt-5 max-w-md text-base leading-8 text-[#e6d8c9]">
                    תכתוב כמה מילים על העסק, מה צריך לקרות באתר, ואם יש דחיפות או כיוון. אני אחזור עם תשובה ברורה ולא עם נאום.
                  </p>

                  <div className="mt-8 grid gap-4">
                    <div className="rounded-[1.7rem] border border-white/10 bg-white/6 p-5">
                      <div className="flex items-center gap-3">
                        <PhoneCall className="h-5 w-5 text-[var(--studio-accent-soft)]" />
                        <span className="font-bold text-white">{SITE_PHONE}</span>
                      </div>
                      <p className="mt-2 text-sm text-white/66">{SITE_EMAIL}</p>
                    </div>
                    <div className="rounded-[1.7rem] border border-white/10 bg-white/6 p-5">
                      <div className="flex items-center gap-3">
                        <MonitorSmartphone className="h-5 w-5 text-[var(--studio-accent-soft)]" />
                        <span className="font-bold text-white">מובייל, SEO ו־CTA נכנסים מההתחלה</span>
                      </div>
                      <p className="mt-2 text-sm leading-7 text-white/66">
                        לא מחכים לסוף כדי לבדוק אם הטלפון עובד או אם הכפתור יושב במקום הנכון.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <LinkButton href={WHATSAPP_URL} external variant="studioSecondary" className="gap-2">
                      ווטסאפ
                      <MessageCircle className="h-4 w-4" />
                    </LinkButton>
                    <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-[1.2rem] border border-white/10 bg-white/6 px-5 py-3 text-sm font-bold text-white/80 transition hover:-translate-y-1 hover:bg-white/10">
                      GitHub
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <m.form
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55 }}
                  onSubmit={handleSubmit}
                  className="studio-surface rounded-[2.5rem] px-6 py-8 md:px-8 md:py-10"
                >
                  <div className="grid gap-5 md:grid-cols-2">
                    <label className="grid gap-2 text-sm font-bold text-[#5b4c3f]">
                      שם
                      <input
                        required
                        value={form.name}
                        onChange={(event) => updateField("name", event.target.value)}
                        className="rounded-[1.2rem] border border-black/8 bg-white px-4 py-3 outline-none transition focus:border-[#d08a59]"
                        placeholder="איך קוראים לך?"
                      />
                    </label>
                    <label className="grid gap-2 text-sm font-bold text-[#5b4c3f]">
                      טלפון
                      <input
                        required
                        value={form.phone}
                        onChange={(event) => updateField("phone", event.target.value)}
                        className="rounded-[1.2rem] border border-black/8 bg-white px-4 py-3 outline-none transition focus:border-[#d08a59]"
                        placeholder="050-000-0000"
                      />
                    </label>
                  </div>

                  <label className="mt-5 grid gap-2 text-sm font-bold text-[#5b4c3f]">
                    סוג אתר
                    <select
                      required
                      value={form.websiteType}
                      onChange={(event) => updateField("websiteType", event.target.value)}
                      className="rounded-[1.2rem] border border-black/8 bg-white px-4 py-3 outline-none transition focus:border-[#d08a59]"
                    >
                      <option value="">בחר סוג אתר</option>
                      <option value="אתר תדמית">אתר תדמית</option>
                      <option value="דף נחיתה">דף נחיתה</option>
                      <option value="אתר מכירה">אתר מכירה</option>
                      <option value="שדרוג אתר קיים">שדרוג אתר קיים</option>
                    </select>
                  </label>

                  <label className="mt-5 grid gap-2 text-sm font-bold text-[#5b4c3f]">
                    הודעה
                    <textarea
                      required
                      rows={6}
                      value={form.message}
                      onChange={(event) => updateField("message", event.target.value)}
                      className="rounded-[1.4rem] border border-black/8 bg-white px-4 py-3 outline-none transition focus:border-[#d08a59]"
                      placeholder="ספר לי מה העסק עושה, מה צריך לקרות באתר, ואיזה כיוון אתה מחפש."
                    />
                  </label>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button type="submit" variant="studio" className="gap-2">
                      שלח פרטים
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <LinkButton href={WHATSAPP_URL} external variant="studioLight" className="gap-2">
                      פתח ווטסאפ
                      <MessageCircle className="h-4 w-4" />
                    </LinkButton>
                  </div>
                </m.form>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/8 bg-[#0f0d0b] py-10 text-[#e6d7c7]">
          <div className="container-shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr_0.9fr_0.9fr]">
            <div>
              <p className="font-hebrew-display text-3xl font-black text-white">{SITE_NAME}</p>
              <p className="mt-3 max-w-sm text-sm leading-7 text-white/62">
                סטודיו לבניית אתרים לעסקים שרוצים להיראות רציניים, להישמע ברור ולהפוך יותר מבקרים לפניות.
              </p>
            </div>

            <div>
              <p className="text-xs font-extrabold tracking-[0.24em] text-[var(--studio-accent-soft)]">ניווט</p>
              <div className="mt-4 grid gap-3 text-sm font-bold text-white/76">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className="studio-link w-fit hover:text-white">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-extrabold tracking-[0.24em] text-[var(--studio-accent-soft)]">שירותים</p>
              <div className="mt-4 grid gap-3 text-sm font-bold text-white/76">
                {services.slice(0, 4).map((service) => (
                  <span key={service.title}>{service.title}</span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-extrabold tracking-[0.24em] text-[var(--studio-accent-soft)]">קישורים</p>
              <div className="mt-4 grid gap-3 text-sm font-bold text-white/76">
                <a href={`mailto:${SITE_EMAIL}`} className="studio-link w-fit hover:text-white">
                  {SITE_EMAIL}
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="studio-link w-fit hover:text-white">
                  ווטסאפ
                </a>
                <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="studio-link w-fit hover:text-white">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
