import { LinkButton } from "../components/common/Button";
import { Seo } from "../components/seo/Seo";

export function NotFoundPage() {
  return (
    <>
      <Seo
        title="Omer's | העמוד לא נמצא"
        description="העמוד שחיפשת לא נמצא. אפשר לחזור לאתר הראשי של Omer's ולצפות בעבודות."
        path="/404"
        image="/images/omers-hero.png"
      />
      <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-white">
        <div className="max-w-xl rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center backdrop-blur">
          <p className="text-xs font-extrabold uppercase tracking-[0.34em] text-amber-200/70">404</p>
          <h1 className="mt-4 font-display text-5xl">העמוד לא נמצא</h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            כנראה שהקישור השתנה או שהעמוד הוסר. אפשר לחזור לעמוד הראשי ולהמשיך משם.
          </p>
          <div className="mt-8 flex justify-center">
            <LinkButton href="/">חזרה ל-Omer&apos;s</LinkButton>
          </div>
        </div>
      </main>
    </>
  );
}
