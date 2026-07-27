import { NAV_LINKS } from "../data";
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from "./icons";
import { useState } from "react";

type HeaderProps = {
  dark: boolean;
  onToggleTheme: () => void;
  activeSection: string | null;
};

export function Header({ dark, onToggleTheme, activeSection }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="wrap">
        <a className="brand" href="#top">
          Yi-Han Huang (Yvonne)
        </a>
        <div className="header-right">
          <nav>
            <ul className={`nav-links${open ? " open" : ""}`}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={activeSection === link.href.slice(1) ? "active" : ""}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <button className="icon-btn theme-toggle" aria-label="Toggle dark mode" onClick={onToggleTheme}>
            {dark ? <SunIcon className="icon-sun" /> : <MoonIcon className="icon-moon" />}
          </button>
          <button
            className="icon-btn nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon className="icon-close" /> : <MenuIcon className="icon-menu" />}
          </button>
        </div>
      </div>
    </header>
  );
}
