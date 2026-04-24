import { Helmet } from "react-helmet-async";
import { SITE_NAME, absoluteUrl } from "../../data/site";

type SeoProps = {
  title: string;
  description: string;
  path: string;
  image: string;
  imageAlt?: string;
  type?: "website" | "article";
  keywords?: string[];
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
  lang?: string;
  dir?: "rtl" | "ltr";
};

export function Seo({
  title,
  description,
  path,
  image,
  imageAlt,
  type = "website",
  keywords,
  schema,
  lang = "he",
  dir = "rtl"
}: SeoProps) {
  const url = absoluteUrl(path);
  const imageUrl = image.startsWith("http") ? image : absoluteUrl(image);
  const schemaValue = schema ? JSON.stringify(schema) : null;
  const locale = lang === "he" ? "he_IL" : "en_US";

  return (
    <Helmet prioritizeSeoTags>
      <html lang={lang} dir={dir} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow" />
      {keywords?.length ? <meta name="keywords" content={keywords.join(", ")} /> : null}
      <link rel="canonical" href={url} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:secure_url" content={imageUrl} />
      {imageAlt ? <meta property="og:image:alt" content={imageAlt} /> : null}
      <meta name="application-name" content={SITE_NAME} />
      <meta name="theme-color" content="#111827" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      {imageAlt ? <meta name="twitter:image:alt" content={imageAlt} /> : null}
      {schemaValue ? <script type="application/ld+json">{schemaValue}</script> : null}
    </Helmet>
  );
}
