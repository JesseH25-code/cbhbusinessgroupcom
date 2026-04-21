import { useEffect, useState } from "react";
import { Globe } from "lucide-react";

declare global {
  interface Window {
    google?: any;
    googleTranslateElementInit?: () => void;
  }
}

const COOKIE_NAME = "googtrans";

const setCookie = (value: string) => {
  const domain = window.location.hostname;
  const root = domain.split(".").slice(-2).join(".");
  // Set on current host and root domain so it survives subdomains
  document.cookie = `${COOKIE_NAME}=${value};path=/`;
  document.cookie = `${COOKIE_NAME}=${value};path=/;domain=${domain}`;
  if (root && root !== domain) {
    document.cookie = `${COOKIE_NAME}=${value};path=/;domain=.${root}`;
  }
};

const readLang = (): "en" | "es" => {
  const match = document.cookie.match(/googtrans=\/en\/(es|en)/);
  if (match && match[1] === "es") return "es";
  const stored = localStorage.getItem("site-lang");
  return stored === "es" ? "es" : "en";
};

const LanguageToggle = () => {
  const [lang, setLang] = useState<"en" | "es">("en");

  useEffect(() => {
    setLang(readLang());

    if (document.getElementById("google-translate-script")) return;

    window.googleTranslateElementInit = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      new (window.google as any).translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,es",
          autoDisplay: false,
          layout: 0,
        },
        "google_translate_element"
      );
    };

    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const switchTo = (next: "en" | "es") => {
    if (next === lang) return;
    localStorage.setItem("site-lang", next);
    setCookie(next === "es" ? "/en/es" : "/en/en");
    setLang(next);
    // Reload so Google Translate re-applies cleanly across all routes
    window.location.reload();
  };

  return (
    <div className="flex items-center gap-1.5 text-[11px] font-sans font-medium tracking-widest uppercase">
      <Globe className="w-3 h-3 text-primary/90" aria-hidden="true" />
      <button
        onClick={() => switchTo("en")}
        aria-label="Switch to English"
        aria-pressed={lang === "en"}
        className={`transition-colors ${
          lang === "en"
            ? "text-primary"
            : "text-primary/60 hover:text-primary"
        }`}
      >
        EN
      </button>
      <span className="text-primary/30" aria-hidden="true">
        /
      </span>
      <button
        onClick={() => switchTo("es")}
        aria-label="Cambiar a Español"
        aria-pressed={lang === "es"}
        className={`transition-colors ${
          lang === "es"
            ? "text-primary"
            : "text-primary/60 hover:text-primary"
        }`}
      >
        ES
      </button>
      <div id="google_translate_element" className="hidden" aria-hidden="true" />
    </div>
  );
};

export default LanguageToggle;