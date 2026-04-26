import { Container } from "@/components/ui/container";
import { Logo } from "@/components/brand/logo";
import { SocialIcon } from "@/components/icons/social-icons";
import {
  FOOTER_BOTTOM,
  FOOTER_COLUMNS,
  FOOTER_LEGAL,
  SITE,
  SOCIALS,
} from "@/lib/data";

export function Footer() {
  return (
    <footer
      className="w-full bg-[#0c0c0c] text-white pt-20 pb-10 px-6 md:px-12 border-t border-white/5"
      aria-label="Pied de page"
    >
      <Container className="flex flex-col gap-12 px-0 md:px-0">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 border-b border-white/10 pb-12">
          <div className="flex items-start gap-5 max-w-md">
            <Logo variant="light" className="shrink-0" />
            <p className="text-xs text-white/55 leading-relaxed">
              {SITE.description}
            </p>
          </div>
          <div className="flex items-center gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all"
              >
                <SocialIcon name={s.icon} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <nav
          aria-label="Liens du pied de page"
          className="grid grid-cols-1 md:grid-cols-3 gap-10 text-xs"
        >
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.label}>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">
                {column.label}
              </p>
              <ul className="flex flex-wrap gap-x-4 gap-y-2.5 text-white/65">
                {column.links.map((l) => (
                  <li key={`${column.label}-${l.label}`}>
                    <a
                      href={l.href}
                      className="hover:text-white transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">
              Site
            </p>
            <ul className="flex flex-wrap gap-x-4 gap-y-2.5 text-white/65">
              {FOOTER_LEGAL.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5 text-xs text-white/40">
          <p>{SITE.copyright}</p>
          <ul className="flex flex-wrap justify-center gap-6">
            {FOOTER_BOTTOM.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="hover:text-white/80 transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
