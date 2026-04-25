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

const heroProofs = ["מותאם למובייל", "SEO בסיסי כלול", "חיבור לוואטסאפ וטפסים"] as const;

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
  description,
  image,
  badge,
  className,
  imageClassName,
  delay = 0,
  float = 9
}: {
  title: string;
  description: string;
  image: string;
  badge: string;
  className?: string;
  imageClassName?: string;
  delay?: number;
  float?: number;
}) {
  return (
    <m.div
      initial={{ opacity: 0, y: 34, rotate: 1.2 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      <m.article
        animate={{ y: [0, -12, 0], x: [0, 4, 0] }}
        transition={{ duration: float, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ y: -16, scale: 1.025, rotate: -0.4 }}
        className="hero-mockup-depth relative overflow-hidden rounded-[1.35rem] border border-white/14 bg-[#0b0e16]/92 backdrop-blur-xl"
      >
        <div className="relative z-10 flex items-center justify-between gap-3 border-b border-white/10 bg-[#0e111a]/80 px-3 py-2.5 backdrop-blur-xl">
          <div className="flex items-center gap-1.5">
            <span className="window-dot bg-[#f97373]" />
            <span className="window-dot bg-[#f8c766]" />
            <span className="window-dot bg-[#76d38f]" />
          </div>
          <span className="studio-chip rounded-full px-2.5 py-1 text-[10px] font-extrabold tracking-[0.18em] text-[#f6d991]">
            {badge}
          </span>
        </div>
        <div className="relative z-10">
          <img src={image} alt={description} className={`w-full object-cover ${imageClassName ?? "h-40 md:h-52"}`} />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_32%,rgba(8,10,18,0.94)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 p-4">
            <p className="font-hebrew-display text-xl font-black leading-none text-[#f8fafc] md:text-2xl">{title}</p>
            <p className="mt-2 max-w-[18rem] text-xs font-semibold leading-5 text-[#94a3b8]">{description}</p>
          </div>
        </div>
      </m.article>
    </m.div>
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
    <div className="studio-divider rounded-[1.4rem] px-3 pb-5 pt-3 transition hover:bg-[#181411]/5">
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
          <section className="studio-ambient relative isolate overflow-hidden bg-[#080A12] pb-14 pt-10 md:pb-28 md:pt-14">
            <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(214,168,79,0.12),transparent_30%,rgba(148,163,184,0.07)_72%,transparent)]" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,transparent,#080A12)]" />
            <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(214,168,79,0.45),transparent)]" />
            <div className="container-shell relative">
              <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
                <m.div
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.11 } }
                  }}
                  className="relative z-20 max-w-[43rem] pt-3 md:pt-10 lg:pt-0"
                >
                  <m.p
                    variants={{
                      hidden: { opacity: 0, x: 22 },
                      show: { opacity: 1, x: 0, transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] } }
                    }}
                    className="text-xs font-extrabold uppercase tracking-[0.34em] text-[#D6A84F]"
                  >
                    Omer's Studio
                  </m.p>

                  <m.h1
                    variants={{
                      hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
                      show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.78, ease: [0.22, 1, 0.36, 1] } }
                    }}
                    className="mt-6 max-w-[10ch] font-hebrew-display text-[4.55rem] font-black leading-[0.86] tracking-normal text-[#F8FAFC] sm:text-[6.1rem] lg:text-[7.35rem]"
                  >
                    נראה טוב. עובד חזק.
                  </m.h1>

                  <m.p
                    variants={{
                      hidden: { opacity: 0, y: 22 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.64, ease: [0.22, 1, 0.36, 1] } }
                    }}
                    className="mt-7 max-w-xl text-lg font-medium leading-8 text-[#94A3B8] md:text-xl md:leading-9"
                  >
                    אני בונה אתרי תדמית, דפי נחיתה ואתרי מכירה לעסקים שרוצים להיראות רציניים, לעבוד מהר ולקבל יותר לקוחות מהאתר.
                  </m.p>

                  <m.div
                    variants={{
                      hidden: { opacity: 0, y: 18 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] } }
                    }}
                    className="mt-9 flex flex-col gap-3 sm:flex-row"
                  >
                    <LinkButton
                      href="#contact"
                      variant="studio"
                      className="min-h-16 w-full rounded-[1.25rem] px-9 text-lg font-extrabold sm:w-auto"
                    >
                      בוא נבנה אתר
                    </LinkButton>
                    <LinkButton
                      href="#work"
                      variant="studioSecondary"
                      className="min-h-16 w-full rounded-[1.25rem] px-8 text-base font-extrabold sm:w-auto"
                    >
                      צפה בעבודות
                    </LinkButton>
                  </m.div>

                  <m.div
                    variants={{
                      hidden: { opacity: 0, y: 18 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] } }
                    }}
                    className="mt-9 grid gap-3 border-r border-[#D6A84F]/30 pr-5 sm:grid-cols-3 sm:border-r-0 sm:pr-0"
                  >
                    {heroProofs.map((item) => (
                      <div key={item} className="premium-glass flex items-center gap-3 rounded-full px-4 py-3 text-sm font-bold text-[#F8FAFC]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#D6A84F] shadow-[0_0_18px_rgba(214,168,79,0.65)]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </m.div>
                </m.div>

                <m.div
                  initial={{ opacity: 0, x: -34 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.86, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="relative min-h-[430px] sm:min-h-[660px] lg:-mr-10 lg:min-h-[760px]"
                >
                  <div className="absolute inset-x-0 top-8 h-[84%] rotate-[-1.5deg] border-y border-[#D6A84F]/12 bg-[linear-gradient(90deg,transparent,rgba(248,250,252,0.055),transparent)]" />
                  <div className="absolute inset-x-8 top-16 h-[72%] rotate-[1.4deg] rounded-[2.2rem] border border-white/8 bg-white/[0.025] backdrop-blur-[2px]" />
                  <div className="absolute left-4 top-2 h-[92%] w-px bg-[linear-gradient(180deg,transparent,rgba(214,168,79,0.38),transparent)]" />
                  <div className="absolute right-10 top-20 h-[78%] w-px bg-[linear-gradient(180deg,transparent,rgba(148,163,184,0.2),transparent)]" />

                  <StudioPreview
                    title="Luma Bistro"
                    description="מסעדת ערב עם היררכיה נקייה ותמונה שמוכרת אווירה."
                    image={luma.previewImage}
                    badge="RTL"
                    delay={0.2}
                    float={9.5}
                    imageClassName="h-[14.5rem] sm:h-[19.5rem] lg:h-[23rem]"
                    className="absolute right-0 top-24 z-30 w-[92%] rotate-[-0.6deg] sm:top-20 sm:w-[80%] lg:right-8 lg:w-[76%]"
                  />

                  <StudioPreview
                    title="PulseFit Studio"
                    description="אתר כושר חד, מהיר ותנועתי בלי להיראות כמו תבנית."
                    image={pulse.previewImage}
                    badge="Mobile First"
                    delay={0.32}
                    float={8}
                    imageClassName="h-40 sm:h-56 lg:h-64"
                    className="absolute left-0 top-0 z-20 w-[62%] rotate-[1.5deg] sm:w-[50%] lg:left-3 lg:w-[48%]"
                  />

                  <StudioPreview
                    title="Aura Clinic"
                    description="שפה רגועה לקליניקה, עם אמון ברור כבר במסך הראשון."
                    image={aura.previewImage}
                    badge="SEO"
                    delay={0.44}
                    float={10}
                    imageClassName="h-40 sm:h-56 lg:h-64"
                    className="absolute bottom-16 left-2 z-10 w-[72%] rotate-[-1deg] sm:bottom-20 sm:w-[58%] lg:left-0 lg:w-[54%]"
                  />

                  <StudioPreview
                    title="Nexora"
                    description="מוצר דיגיטלי עם תחושת מערכת, עומק וקצב מסודר."
                    image={nexora.previewImage}
                    badge="Fast"
                    delay={0.56}
                    float={7.5}
                    imageClassName="h-36 sm:h-48 lg:h-56"
                    className="absolute bottom-0 right-2 z-40 w-[62%] rotate-[1.2deg] sm:right-12 sm:w-[46%] lg:right-0 lg:w-[42%]"
                  />
                </m.div>
              </div>
            </div>
          </section>

          <section id="process" className="relative -mt-6 pb-18 md:-mt-14 md:pb-24">
            <div className="container-shell">
              <div className="premium-shell studio-surface overflow-hidden rounded-[2.5rem] px-5 py-8 md:px-8 md:py-12 lg:-rotate-[0.35deg]">
                <div className="grid gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
                  <div className="grid gap-5 lg:translate-y-8">
                    <div>
                      <p className="text-xs font-extrabold tracking-[0.28em] text-[#8d725c]">איך אני הופך רעיון לאתר</p>
                      <h2 className="mt-4 max-w-lg font-hebrew-display text-[3.35rem] font-black leading-[0.84] tracking-normal text-[#181411] md:text-[5.15rem]">
                        קודם מסדרים את העסק. אחר כך מעצבים את האתר.
                      </h2>
                    </div>

                    <div className="premium-card overflow-hidden rounded-[2rem] border border-black/6 bg-[#181411] p-3 shadow-[0_24px_70px_rgba(15,23,42,0.12)] lg:-mr-5">
                      <img
                        src="/images/omers/design-review.png"
                        alt="מסך תכנון וביקורת עיצוב בסטודיו של Omer's"
                        className="h-[360px] w-full rounded-[1.4rem] object-cover md:h-[420px]"
                      />
                    </div>

                    <div className="rounded-[1.8rem] border border-[#d6a84f]/18 bg-[#f6eee3]/88 p-5 text-[#5b4c3f] shadow-[0_22px_60px_rgba(24,20,17,0.08)] backdrop-blur">
                      <p className="text-sm leading-8">
                        אתר טוב לא מתחיל מאפקט. הוא מתחיל מהשאלה מה הלקוח צריך להבין כבר במסך הראשון כדי להרגיש שהוא במקום הנכון.
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-6 lg:rotate-[0.35deg]">
                    {ideaSteps.map((step, index) => (
                      <m.div
                        key={step.id}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.55, delay: index * 0.05 }}
                        className="studio-divider premium-lift grid gap-4 rounded-[1.7rem] px-2 pb-6 pt-2 md:grid-cols-[78px_1fr]"
                      >
                        <div className="font-hebrew-display text-6xl font-black leading-none text-[#d2b497]">{step.id}</div>
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

          <section className="relative pb-18 md:pb-24">
            <div className="container-shell">
              <div className="premium-shell studio-dark-panel overflow-hidden rounded-[2.5rem] px-5 py-8 md:px-8 md:py-12 lg:translate-x-4">
                <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
                  <div className="grid gap-5">
                    <div>
                      <p className="text-xs font-extrabold tracking-[0.28em] text-[var(--studio-accent-soft)]">אתר יפה זה לא מספיק</p>
                      <h2 className="mt-4 max-w-lg font-hebrew-display text-[3.25rem] font-black leading-[0.83] tracking-normal text-white md:text-[4.9rem]">
                        אם האתר לא מסביר, לא בונה אמון ולא מזיז את הלקוח לפעולה, הוא נשאר קישוט.
                      </h2>
                    </div>

                    <div className="premium-glass rounded-[1.9rem] p-6 lg:-mr-7">
                      <p className="text-xs font-extrabold tracking-[0.24em] text-white/45">מה קורה באתר תבניתי</p>
                      <p className="mt-4 text-base leading-8 text-[#eadccc]">
                        יש צבע, יש אנימציה, יש עוד כרטיסים, אבל אין נקודת מבט. הלקוח מתרשם לשנייה ולא באמת מבין מה העסק עושה טוב יותר מאחרים.
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-6 lg:pt-12">
                    <div>
                      <p className="text-xs font-extrabold tracking-[0.28em] text-[var(--studio-accent-soft)]">מה גורם לאתר להביא פניות</p>
                      <h3 className="mt-3 font-hebrew-display text-5xl font-black leading-[0.88] text-white md:text-[4rem]">
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
                        className="studio-divider premium-lift grid gap-4 rounded-[1.6rem] p-3 pb-6 md:grid-cols-[70px_1fr]"
                      >
                        <div className="grid h-14 w-14 place-items-center rounded-[1.3rem] border border-[#d6a84f]/24 bg-[#d6a84f]/10 text-[var(--studio-accent-soft)] shadow-[0_0_32px_rgba(214,168,79,0.12)]">
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

          <section id="work" className="relative pb-18 md:pb-24">
            <div className="container-shell">
              <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-xs font-extrabold tracking-[0.28em] text-[#bfae9d]">עבודות</p>
                  <h2 className="mt-3 max-w-4xl font-hebrew-display text-[3.45rem] font-black leading-[0.83] tracking-normal text-white md:text-[5.25rem]">
                    פורטפוליו שנראה כמו עבודות אמיתיות, לא כמו תבנית.
                  </h2>
                </div>
                <p className="premium-glass max-w-sm rounded-[1.5rem] p-5 text-base leading-8 text-[#d3c4b4] md:-mb-4">
                  כל אתר מקבל שפה, קצב ומבנה שמתאימים לעסק. ארבעה כיוונים שונים, ארבע תחושות שונות.
                </p>
              </div>

              <div className="mt-12 grid gap-6 lg:grid-cols-[1.22fr_0.78fr] lg:items-start">
                <m.article
                  whileHover={{ y: -12, scale: 1.006 }}
                  transition={{ duration: 0.32 }}
                  className="group premium-card studio-dark-panel relative overflow-hidden rounded-[2.5rem] border border-white/10 lg:-rotate-[0.45deg]"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(214,168,79,0.18),transparent_32%)]" />
                  <div className="relative grid min-h-[620px] content-between gap-8 p-5 md:p-8">
                    <div className="overflow-hidden rounded-[1.8rem] border border-white/12 bg-[#080A12] shadow-[0_36px_100px_rgba(0,0,0,0.45)]">
                      <div className="flex items-center justify-between border-b border-white/10 bg-white/6 px-4 py-3 backdrop-blur">
                        <div className="flex gap-1.5">
                          <span className="window-dot bg-[#f97373]" />
                          <span className="window-dot bg-[#f8c766]" />
                          <span className="window-dot bg-[#76d38f]" />
                        </div>
                        <span className="text-[11px] font-extrabold tracking-[0.22em] text-[#d6a84f]">FEATURED CASE</span>
                      </div>
                      <div className="relative h-[340px] overflow-hidden md:h-[410px]">
                        <img
                          src={luma.previewImage}
                          alt={luma.previewAlt}
                          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.055] group-hover:-translate-y-2"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(8,10,18,0.74))]" />
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
                      <div className="max-w-xl">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="studio-chip rounded-full px-4 py-2 text-xs font-extrabold tracking-[0.22em] text-white/82">
                            {luma.industry}
                          </span>
                          <span className="text-xs font-bold text-white/48">מה נבנה</span>
                        </div>
                        <h3 className="mt-4 font-hebrew-display text-5xl font-black leading-none text-white md:text-7xl">{luma.name}</h3>
                        <p className="mt-4 max-w-xl text-base leading-8 text-white/76">{showcaseNotes[luma.slug].whatBuilt}</p>
                      </div>
                      <LinkButton href={luma.route} variant="studioLight" className="w-full gap-2 md:w-auto">
                        צפה באתר
                        <ArrowUpRight className="h-4 w-4" />
                      </LinkButton>
                    </div>
                  </div>
                </m.article>

                <div className="grid gap-6 lg:translate-y-12">
                  {[pulse, aura].map((project, index) => (
                    <m.article
                      key={project.slug}
                      whileHover={{ y: -10, scale: 1.012 }}
                      transition={{ duration: 0.32 }}
                      className={`group premium-card relative overflow-hidden rounded-[2.3rem] border ${index === 0 ? "border-white/10 bg-[#11131b] text-white lg:rotate-[0.7deg]" : "border-black/8 bg-[var(--studio-paper)] text-[#181411] lg:-rotate-[0.6deg]"}`}
                    >
                      <div className="p-4">
                        <div className="overflow-hidden rounded-[1.45rem] border border-white/10 bg-[#080A12] shadow-[0_24px_70px_rgba(0,0,0,0.24)]">
                          <div className={`flex items-center justify-between border-b px-3 py-2 ${index === 0 ? "border-white/10 bg-white/6" : "border-black/8 bg-[#181411]/95"}`}>
                            <div className="flex gap-1.5">
                              <span className="window-dot bg-[#f97373]" />
                              <span className="window-dot bg-[#f8c766]" />
                              <span className="window-dot bg-[#76d38f]" />
                            </div>
                            <span className="text-[10px] font-extrabold tracking-[0.2em] text-[#d6a84f]">CASE 0{index + 2}</span>
                          </div>
                          <div className="relative h-56 overflow-hidden">
                            <img
                              src={project.previewImage}
                              alt={project.previewAlt}
                              className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.06] group-hover:-translate-y-2"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/54 to-transparent" />
                          </div>
                        </div>

                        <div className="grid gap-4 px-1 pb-2 pt-5">
                          <div className="flex items-center justify-between gap-3">
                            <span className={`text-xs font-extrabold tracking-[0.22em] ${index === 0 ? "text-[var(--studio-accent-soft)]" : "text-[#8b6a54]"}`}>
                              {project.industry}
                            </span>
                            <span className={`text-[11px] font-bold ${index === 0 ? "text-white/50" : "text-[#6d5b4a]"}`}>מה נבנה</span>
                          </div>
                          <div>
                            <h3 className="font-hebrew-display text-4xl font-black">{project.name}</h3>
                            <p className={`mt-3 text-sm leading-7 ${index === 0 ? "text-white/72" : "text-[#655748]"}`}>
                              {showcaseNotes[project.slug].whatBuilt}
                            </p>
                          </div>
                          <div>
                            <LinkButton href={project.route} variant={index === 0 ? "studioSecondary" : "studioLight"} className="w-full gap-2">
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
                whileHover={{ y: -12, scale: 1.006 }}
                transition={{ duration: 0.32 }}
                className="group premium-card relative mt-10 overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#121724] shadow-[0_26px_80px_rgba(0,0,0,0.22)] lg:mr-10 lg:rotate-[0.35deg]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(103,232,249,0.14),transparent_30%)]" />
                <div className="relative grid gap-6 p-5 lg:grid-cols-[1.25fr_0.75fr] lg:p-6">
                  <div className="overflow-hidden rounded-[1.8rem] border border-white/12 bg-[#080A12] shadow-[0_34px_90px_rgba(0,0,0,0.38)]">
                    <div className="flex items-center justify-between border-b border-white/10 bg-white/6 px-4 py-3 backdrop-blur">
                      <div className="flex gap-1.5">
                        <span className="window-dot bg-[#f97373]" />
                        <span className="window-dot bg-[#f8c766]" />
                        <span className="window-dot bg-[#76d38f]" />
                      </div>
                      <span className="text-[11px] font-extrabold tracking-[0.22em] text-cyan-200">WIDE CASE STUDY</span>
                    </div>
                    <div className="relative h-[310px] overflow-hidden md:h-[420px]">
                      <img
                        src={nexora.previewImage}
                        alt={nexora.previewAlt}
                        className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.055] group-hover:-translate-y-2"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_48%,rgba(16,23,38,0.78))]" />
                    </div>
                  </div>
                  <div className="grid content-between gap-6 p-1 text-white md:p-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-xs font-extrabold tracking-[0.22em] text-cyan-300">{nexora.industry}</span>
                        <span className="rounded-full border border-cyan-300/16 bg-cyan-300/8 px-4 py-2 text-[11px] font-bold text-cyan-200">
                          מה נבנה
                        </span>
                      </div>
                      <h3 className="mt-5 font-hebrew-display text-5xl font-black leading-none md:text-6xl">{nexora.name}</h3>
                      <p className="mt-4 max-w-xl text-base leading-8 text-white/74">{showcaseNotes[nexora.slug].whatBuilt}</p>
                    </div>
                    <LinkButton href={nexora.route} variant="studioSecondary" className="w-full gap-2 md:w-fit">
                      צפה באתר
                      <ArrowUpRight className="h-4 w-4" />
                    </LinkButton>
                  </div>
                </div>
              </m.article>
            </div>
          </section>

          <section className="pb-18 md:pb-24">
            <div className="container-shell">
              <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
                <div className="premium-glass rounded-[2.4rem] p-6 md:p-8 lg:translate-y-12 lg:rotate-[0.45deg]">
                  <p className="text-xs font-extrabold tracking-[0.28em] text-[var(--studio-accent-soft)]">למי זה מתאים</p>
                  <h2 className="mt-4 max-w-lg font-hebrew-display text-[3.35rem] font-black leading-[0.84] tracking-normal text-white md:text-[4.75rem]">
                    לעסקים טובים שלא רוצים להיראות בינוניים באינטרנט.
                  </h2>
                  <div className="mt-8 grid gap-4">
                    {audiences.map((item) => (
                      <div key={item} className="premium-lift flex items-start gap-3 rounded-[1.5rem] border border-white/10 bg-white/6 p-4">
                        <BadgeCheck className="mt-1 h-5 w-5 text-[var(--studio-accent-soft)]" />
                        <p className="text-sm leading-7 text-white/74">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="premium-shell studio-surface rounded-[2.4rem] px-6 py-8 md:px-8 md:py-12 lg:-rotate-[0.35deg]">
                  <p className="text-xs font-extrabold tracking-[0.28em] text-[#8d725c]">מה מקבלים בתהליך</p>
                  <h3 className="mt-4 max-w-xl font-hebrew-display text-[3.1rem] font-black leading-[0.86] tracking-normal text-[#181411] md:text-[4.55rem]">
                    לא רק אתר יפה. מערכת מסודרת שמסבירה, נראית נכון, ועובדת טוב.
                  </h3>
                  <div className="mt-8 grid gap-5">
                    {[
                      "כיוון מסר ברור כבר מהמסך הראשון.",
                      "עיצוב שמרגיש מותאם לעסק ולא מורכב מאוסף רכיבים.",
                      "מובייל חד, טפסים, קישורים ו־CTA שעובדים נכון.",
                      "בסיס SEO נקי כדי להתחיל ממקום טוב יותר."
                    ].map((item, index) => (
                      <div key={item} className="studio-divider grid gap-4 rounded-[1.4rem] pb-5 md:grid-cols-[64px_1fr]">
                        <div className="font-hebrew-display text-5xl font-black text-[#d2b497]">0{index + 1}</div>
                        <p className="text-base leading-8 text-[#655748]">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="packages" className="relative pb-18 md:pb-24">
            <div className="container-shell">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-xs font-extrabold tracking-[0.28em] text-[#bfae9d]">חבילות שירות</p>
                  <h2 className="mt-3 max-w-3xl font-hebrew-display text-[3.3rem] font-black leading-[0.84] tracking-normal text-white md:text-[5rem]">
                    בוחרים את המסגרת שנכונה לעסק, לא את מה שנוח לתבנית.
                  </h2>
                </div>
                <p className="max-w-md text-base leading-8 text-[#d3c4b4]">
                  לפעמים צריך דף חד להשקה. לפעמים אתר תדמית מלא. ולפעמים אתר מכירה שצריך לעבוד חזק יותר על מסר והמרה.
                </p>
              </div>

              <div className="mt-12 grid gap-6 lg:grid-cols-[1.22fr_0.78fr]">
                <div className="premium-shell studio-surface rounded-[2.5rem] px-6 py-8 md:px-9 md:py-12 lg:translate-y-6 lg:rotate-[0.35deg]">
                  <div className="flex flex-wrap items-start justify-between gap-5">
                    <div>
                      <p className="text-xs font-extrabold tracking-[0.24em] text-[#8d725c]">{packagePlans[1].note}</p>
                      <h3 className="mt-3 font-hebrew-display text-6xl font-black leading-none text-[#181411] md:text-7xl">
                        {packagePlans[1].title}
                      </h3>
                    </div>
                    <span className="rounded-full bg-[#181411] px-4 py-2 text-xs font-extrabold tracking-[0.22em] text-white shadow-[0_18px_42px_rgba(24,20,17,0.22)]">הכי מבוקש</span>
                  </div>
                  <p className="mt-5 max-w-2xl text-lg leading-9 text-[#5d4e40]">{packagePlans[1].summary}</p>
                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {packagePlans[1].items.map((item) => (
                      <div key={item} className="premium-lift rounded-[1.5rem] border border-black/6 bg-[#fbf5ed] px-4 py-4 text-sm font-bold text-[#4f4134]">
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

                <div className="grid gap-6 lg:-translate-y-6">
                  {[packagePlans[0], packagePlans[2]].map((plan, index) => (
                    <div
                      key={plan.title}
                      className={`${index === 0 ? "premium-glass text-white lg:-rotate-[0.7deg]" : "studio-dark-panel text-white lg:rotate-[0.7deg]"} premium-lift rounded-[2.2rem] border border-white/10 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.16)]`}
                    >
                      <p className={`text-xs font-extrabold tracking-[0.24em] ${index === 0 ? "text-[var(--studio-accent-soft)]" : "text-[#f0d3bd]"}`}>
                        {plan.note}
                      </p>
                      <h3 className="mt-3 font-hebrew-display text-4xl font-black leading-none">{plan.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-white/72">{plan.summary}</p>
                      <div className="mt-6 grid gap-3">
                        {plan.items.map((item) => (
                          <div key={item} className="rounded-[1.2rem] border border-white/10 bg-white/7 px-4 py-3 text-sm font-bold text-white/82 backdrop-blur">
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
              <div className="premium-shell studio-surface rounded-[2.5rem] px-6 py-8 md:px-8 md:py-12 lg:-rotate-[0.25deg]">
                <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
                  <div>
                    <p className="text-xs font-extrabold tracking-[0.28em] text-[#8d725c]">שאלות נפוצות</p>
                    <h2 className="mt-4 max-w-lg font-hebrew-display text-[3.25rem] font-black leading-[0.85] tracking-normal text-[#181411] md:text-[4.65rem]">
                      לפני שמתחילים, יש כמה דברים שעדיף לסגור ישר.
                    </h2>
                    <p className="mt-5 max-w-md text-base leading-8 text-[#655748]">
                      אני מעדיף שיחה ישירה ותהליך ברור. בלי הבטחות גדולות ובלי מילים מנופחות. הנה התשובות לדברים שעולים כמעט תמיד.
                    </p>
                  </div>

                  <div className="grid gap-5 lg:rotate-[0.25deg]">
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
              <div className="grid gap-6 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
                <div className="premium-shell studio-dark-panel rounded-[2.5rem] px-6 py-8 md:px-8 md:py-12 lg:translate-y-10 lg:rotate-[0.45deg]">
                  <p className="text-xs font-extrabold tracking-[0.28em] text-[var(--studio-accent-soft)]">צור קשר</p>
                  <h2 className="mt-4 max-w-lg font-hebrew-display text-[3.25rem] font-black leading-[0.83] tracking-normal text-white md:text-[4.95rem]">
                    אם העסק שלך טוב, הגיע הזמן שגם האתר יישמע וייראה ככה.
                  </h2>
                  <p className="mt-5 max-w-md text-base leading-8 text-[#e6d8c9]">
                    תכתוב כמה מילים על העסק, מה צריך לקרות באתר, ואם יש דחיפות או כיוון. אני אחזור עם תשובה ברורה ולא עם נאום.
                  </p>

                  <div className="mt-8 grid gap-4">
                    <div className="premium-glass rounded-[1.7rem] p-5">
                      <div className="flex items-center gap-3">
                        <PhoneCall className="h-5 w-5 text-[var(--studio-accent-soft)]" />
                        <span className="font-bold text-white">{SITE_PHONE}</span>
                      </div>
                      <p className="mt-2 text-sm text-white/66">{SITE_EMAIL}</p>
                    </div>
                    <div className="premium-glass rounded-[1.7rem] p-5">
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
                    <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-[1.2rem] border border-white/10 bg-white/7 px-5 py-3 text-sm font-bold text-white/80 shadow-[0_16px_44px_rgba(0,0,0,0.18)] backdrop-blur transition hover:-translate-y-1 hover:scale-[1.02] hover:border-[#d6a84f]/28 hover:bg-[#d6a84f]/10">
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
                  className="premium-shell studio-surface rounded-[2.5rem] px-6 py-8 md:px-8 md:py-12 lg:-rotate-[0.35deg]"
                >
                  <div className="grid gap-5 md:grid-cols-2">
                    <label className="grid gap-2 text-sm font-bold text-[#5b4c3f]">
                      שם
                      <input
                        required
                        value={form.name}
                        onChange={(event) => updateField("name", event.target.value)}
                        className="premium-field rounded-[1.2rem] border border-black/8 px-4 py-3 outline-none transition focus:border-[#d08a59]"
                        placeholder="איך קוראים לך?"
                      />
                    </label>
                    <label className="grid gap-2 text-sm font-bold text-[#5b4c3f]">
                      טלפון
                      <input
                        required
                        value={form.phone}
                        onChange={(event) => updateField("phone", event.target.value)}
                        className="premium-field rounded-[1.2rem] border border-black/8 px-4 py-3 outline-none transition focus:border-[#d08a59]"
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
                      className="premium-field rounded-[1.2rem] border border-black/8 px-4 py-3 outline-none transition focus:border-[#d08a59]"
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
                      className="premium-field rounded-[1.4rem] border border-black/8 px-4 py-3 outline-none transition focus:border-[#d08a59]"
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
