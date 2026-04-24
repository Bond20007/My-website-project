export const SITE_URL = "https://omers.studio";
export const SITE_NAME = "Omer's";
export const SITE_EMAIL = "hello@omers.studio";
export const SITE_PHONE = "+972-52-580-4321";
export const WHATSAPP_URL =
  "https://wa.me/972525804321?text=%D7%94%D7%99%D7%99%20Omer%2C%20%D7%A8%D7%95%D7%A6%D7%94%20%D7%9C%D7%93%D7%91%D7%A8%20%D7%A2%D7%9C%20%D7%90%D7%AA%D7%A8.";

export type ProjectItem = {
  slug: "luma-bistro" | "pulsefit-studio" | "aura-clinic" | "nexora";
  name: string;
  industry: string;
  description: string;
  route: string;
  previewImage: string;
  previewAlt: string;
  cta: string;
  accent: string;
};

export const services = [
  {
    title: "אתרי תדמית",
    description: "נוכחות דיגיטלית נקייה, סמכותית ומהירה לעסקים שצריכים להיראות רציניים כבר מהמבט הראשון."
  },
  {
    title: "דפי נחיתה",
    description: "עמודים מדויקים לקמפיינים, השקות והצעות ממוקדות עם היררכיה שבנויה להוביל לפנייה."
  },
  {
    title: "אתרי מכירה",
    description: "מסכים שמחזקים אמון, מציגים מוצר נכון ומחברים בין תוכן, מבנה וקריאה ברורה לפעולה."
  },
  {
    title: "עיצוב ממשק וחוויה",
    description: "שפה ויזואלית, היררכיית מסרים ומיקרו־אינטראקציות שמרגישות כמו מותג אמיתי ולא כמו תבנית."
  },
  {
    title: "התאמה למובייל",
    description: "רספונסיביות מדויקת כך שהאתר נשאר חד, קריא, מהיר ויוקרתי גם במסכים קטנים."
  },
  {
    title: "חיבור טפסים ווואטסאפ",
    description: "טפסים, וואטסאפ וערוצי יצירת קשר שעובדים בפועל ומחוברים ישירות לשלב הבא של העסק."
  }
] as const;

export const processSteps = [
  "שיחת היכרות",
  "אפיון",
  "עיצוב",
  "פיתוח",
  "תיקונים",
  "עלייה לאוויר"
] as const;

export const projects: ProjectItem[] = [
  {
    slug: "luma-bistro",
    name: "Luma Bistro",
    industry: "מסעדת שף אורבנית",
    description:
      "אתר למסעדת ערב יוקרתית עם תפריט מדויק, אווירה חמה, הזמנות שולחן ותחושת מותג עשירה.",
    route: "/work/luma-bistro",
    previewImage: "/images/luma-bistro-hero.png",
    previewAlt: "חלל הערב של Luma Bistro עם תאורה חמימה, שולחן ערוך והגשה יוקרתית",
    cta: "צפה באתר",
    accent: "from-amber-200 via-amber-100 to-stone-100"
  },
  {
    slug: "pulsefit-studio",
    name: "PulseFit Studio",
    industry: "סטודיו לכושר",
    description:
      "אתר כושר אנרגטי עם מסלולי אימון, צוות מאמנים, תוצאות, מחירים והצטרפות ברורה ומהירה.",
    route: "/work/pulsefit-studio",
    previewImage: "/images/pulsefit-hero.png",
    previewAlt: "חלל האימונים של PulseFit Studio עם ציוד מקצועי ותאורת ניאון חדה",
    cta: "צפה באתר",
    accent: "from-lime-200 via-lime-100 to-stone-100"
  },
  {
    slug: "aura-clinic",
    name: "Aura Clinic",
    industry: "אסתטיקה",
    description:
      "אתר לקליניקה אסתטית עם תחושת רוגע, טיפולים ברורים, המלצות, צוות והזמנת פגישת ייעוץ.",
    route: "/work/aura-clinic",
    previewImage: "/images/aura-clinic-hero.png",
    previewAlt: "חדר טיפולים מואר של Aura Clinic עם עיצוב רך, בהיר ויוקרתי",
    cta: "צפה באתר",
    accent: "from-rose-100 via-stone-100 to-amber-50"
  },
  {
    slug: "nexora",
    name: "Nexora",
    industry: "פלטפורמת תוכנה",
    description:
      "אתר מוצר טכנולוגי עם שפה עתידנית, יכולות מוצר, מסלולים, המלצות והרשמה מהירה.",
    route: "/work/nexora",
    previewImage: "/images/nexora-hero.png",
    previewAlt: "ממשק עתידני של Nexora עם דאשבורד, אוטומציות ושכבות מידע",
    cta: "צפה באתר",
    accent: "from-cyan-200 via-indigo-100 to-violet-100"
  }
];

export function absoluteUrl(path: string) {
  return `${SITE_URL}${path}`;
}
