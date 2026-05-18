import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Trees, Home, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "tutur — Your voice is their greatest tool" },
      {
        name: "description",
        content:
          "Parent-led speech and language sessions for early learners. Every conversation at home is a milestone.",
      },
      { property: "og:title", content: "tutur — Your voice is their greatest tool" },
      {
        property: "og:description",
        content:
          "Parent-led speech and language sessions for early learners. Get early access to tutur.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  const [lang, setLang] = useState<"EN" | "MY">("EN");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  const t =
    lang === "MY"
      ? {
          earlyAccess: "Akses Awal",
          headlineStart: "Suara anda adalah ",
          headlineAccent: "dunia mereka.",
          emailPlaceholder: "Masukkan email anda",
          submit: "Dapatkan akses awal",
          submitted: "Terima kasih!",
          disclaimer: "Tiada spam. Hanya kemas kini apabila kami bersedia.",
          f1Title: "Sesi dipimpin ibu bapa",
          f1Body: "Setiap perbualan di rumah adalah pencapaian",
          f2Title: "Setiap hari adalah sesi",
          f2Body: "Semasa menunggu, kemajuan terus berlaku di rumah",
          f3Title: "Ia bermula dengan hubungan",
          f3Body: "Kegembiraan, permainan, kehadiran — anda sudah pun di sana",
          footer:
            "Tutur Technologies PLT is incubated in SEEd Lab, social enterprise incubation programme powered by PETRONAS and Tata Consultancy Services.",
        }
      : {
          earlyAccess: "Early Access",
          headlineStart: "Your voice is their ",
          headlineAccent: "greatest tool.",
          emailPlaceholder: "Enter your email",
          submit: "Get early access",
          submitted: "Thanks!",
          disclaimer: "No spam. Just updates when we're ready for you.",
          f1Title: "Parent-led sessions",
          f1Body: "Every conversation at home is a milestone",
          f2Title: "Every day is a session",
          f2Body: "While waiting, progress continues at home.",
          f3Title: "It starts with connection",
          f3Body: "Joy, play, presence — you're already there",
          footer:
            "Tutur Technologies PLT is incubated in SEEd Lab, social enterprise incubation programme powered by PETRONAS and Tata Consultancy Services.",
        };

  return (
    <div className="relative min-h-screen overflow-hidden bg-background bg-hero-blobs">
      {/* Nav */}
      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-7 md:px-12">
        <a href="/" className="text-2xl font-extrabold tracking-tight text-foreground">
          tutur
        </a>
        <nav className="flex items-center gap-6 text-sm font-bold">
          <button
            onClick={() => setLang("EN")}
            className={lang === "EN" ? "text-foreground" : "text-foreground/60 hover:text-foreground"}
            aria-label="English"
          >
            EN
          </button>
          <button
            onClick={() => setLang("MY")}
            className={lang === "MY" ? "text-foreground" : "text-foreground/60 hover:text-foreground"}
            aria-label="Bahasa Malaysia"
          >
            MY
          </button>
          <a
            href="#early-access"
            className="rounded-full bg-primary px-5 py-3 text-xs font-extrabold uppercase tracking-wider text-primary-foreground transition hover:brightness-105"
          >
            {t.earlyAccess}
          </a>
        </nav>
      </header>

      {/* Hero */}
      <main className="relative z-10 mx-auto max-w-7xl px-6 pb-40 pt-20 md:px-12 md:pt-28">
        <h1 className="max-w-6xl text-5xl font-extrabold leading-[1.05] tracking-tight text-foreground md:text-7xl lg:text-[5.5rem]">
          {t.headlineStart}
          <span className="text-primary">{t.headlineAccent}</span>
        </h1>

        <form
          id="early-access"
          onSubmit={onSubmit}
          className="mt-12 flex w-full max-w-xl items-center rounded-full bg-card p-2 shadow-lg"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.emailPlaceholder}
            className="flex-1 bg-transparent px-5 py-3 text-card-foreground placeholder:text-card-foreground/50 focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-full bg-primary px-6 py-3 text-sm font-extrabold text-primary-foreground transition hover:brightness-105"
          >
            {submitted ? t.submitted : t.submit}
          </button>
        </form>
        <p className="mt-3 text-xs text-foreground/80">{t.disclaimer}</p>
      </main>

      {/* Feature strip */}
      <section className="relative z-10 bg-footer/60 backdrop-blur-sm">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-8 md:grid-cols-3 md:px-12">
          <Feature
            icon={<Trees className="h-5 w-5 text-primary" aria-hidden />}
            title={t.f1Title}
            body={t.f1Body}
          />
          <Feature
            icon={<Home className="h-5 w-5 text-primary" aria-hidden />}
            title={t.f2Title}
            body={t.f2Body}
          />
          <Feature
            icon={<MessageCircle className="h-5 w-5 text-primary" aria-hidden />}
            title={t.f3Title}
            body={t.f3Body}
          />
        </div>
        <div className="border-t border-border/40">
          <p className="mx-auto max-w-7xl px-6 py-4 text-center text-xs text-foreground/80 md:px-12">
            {t.footer}
          </p>
        </div>
      </section>
    </div>
  );
}

function Feature({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-card/10">
        {icon}
      </span>
      <div>
        <h3 className="text-sm font-extrabold text-foreground">{title}</h3>
        <p className="text-xs text-foreground/85">{body}</p>
      </div>
    </div>
  );
}
