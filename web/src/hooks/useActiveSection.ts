import { useEffect, useState } from "react";

const HEADER_OFFSET = 80;

// Scroll-spy based on scroll position rather than IntersectionObserver ratio,
// so the last section still activates even when there's little scroll room
// below it (e.g. a short footer).
export function useActiveSection(ids: string[]): string | null {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    function update() {
      let currentId: string | null = null;
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top - HEADER_OFFSET <= 0) {
          currentId = section.id;
        }
      });

      const atBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 1;
      if (atBottom && sections.length > 0) {
        currentId = sections[sections.length - 1].id;
      }

      setActive(currentId);
    }

    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    }

    update();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join(",")]);

  return active;
}
