import { useEffect, useRef, useState } from "react";
import { SKILL_CATEGORIES } from "../data";
import { ChevronDownIcon, ChevronUpIcon } from "./icons";

const N = SKILL_CATEGORIES.length;
const ANGLE_STEP = 360 / N;
const RADIUS = 92;

export function Skills() {
  // Rotation is tracked in continuous degrees so spinning always animates smoothly,
  // even across the wrap-around from the last category back to the first.
  const [rotation, setRotation] = useState(0);
  const wheelRef = useRef<HTMLDivElement>(null);
  const scrollAccumulator = useRef(0);
  const touchStartY = useRef(0);

  const rawIndex = Math.round(-rotation / ANGLE_STEP);
  const activeIndex = ((rawIndex % N) + N) % N;

  function spin(direction: 1 | -1) {
    setRotation((r) => r - direction * ANGLE_STEP);
  }

  useEffect(() => {
    const el = wheelRef.current;
    if (!el) return;
    function onWheel(e: WheelEvent) {
      e.preventDefault();
      scrollAccumulator.current += e.deltaY;
      if (scrollAccumulator.current > 55) {
        spin(1);
        scrollAccumulator.current = 0;
      } else if (scrollAccumulator.current < -55) {
        spin(-1);
        scrollAccumulator.current = 0;
      }
    }
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  function onTouchStart(e: React.TouchEvent) {
    touchStartY.current = e.touches[0].clientY;
  }

  function onTouchEnd(e: React.TouchEvent) {
    const dy = touchStartY.current - e.changedTouches[0].clientY;
    if (Math.abs(dy) > 20) spin(dy > 0 ? 1 : -1);
  }

  const category = SKILL_CATEGORIES[activeIndex];

  return (
    <section id="skills" className="section">
      <div className="wrap">
        <h2>Skills</h2>
        <div className="skills-layout">
          <div className="wheel-col">
            <p className="wheel-hint">Scroll or tap arrows</p>

            <button type="button" className="wheel-btn" onClick={() => spin(-1)} aria-label="Previous category">
              <ChevronUpIcon size={15} />
            </button>

            <div
              ref={wheelRef}
              className="wheel-viewport"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <span className="wheel-band" />
              <span className="wheel-fade wheel-fade-top" />
              <span className="wheel-fade wheel-fade-bottom" />

              <div className="wheel-cylinder-outer">
                <div className="wheel-cylinder-inner" style={{ transform: `rotateX(${rotation}deg)` }}>
                  {SKILL_CATEGORIES.map((cat, i) => (
                    <div
                      key={cat.label}
                      className="wheel-item"
                      onClick={() => setRotation(-i * ANGLE_STEP)}
                      style={{ transform: `rotateX(${i * ANGLE_STEP}deg) translateZ(${RADIUS}px)` }}
                    >
                      <span className={`wheel-item-label${i === activeIndex ? " active" : ""}`}>{cat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button type="button" className="wheel-btn" onClick={() => spin(1)} aria-label="Next category">
              <ChevronDownIcon size={15} />
            </button>

            <div className="wheel-dots">
              {SKILL_CATEGORIES.map((cat, i) => (
                <button
                  key={cat.label}
                  type="button"
                  className={`wheel-dot${i === activeIndex ? " active" : ""}`}
                  onClick={() => setRotation(-i * ANGLE_STEP)}
                  aria-label={`Select ${cat.label}`}
                />
              ))}
            </div>
          </div>

          <div className="wheel-panel">
            <h3 key={`label-${activeIndex}`} className="wheel-panel-title">
              {category.label}
            </h3>
            <p className="wheel-panel-caption">
              {activeIndex + 1} / {N} categories
            </p>
            <div key={`pills-${activeIndex}`} className="wheel-pills">
              {category.skills.map((skill, i) => (
                <span key={skill} className="wheel-pill" style={{ animationDelay: `${i * 55}ms` }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
