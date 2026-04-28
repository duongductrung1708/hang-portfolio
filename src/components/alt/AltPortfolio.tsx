import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import s from "./alt.module.css";

import { Cursor } from "./components/Cursor";
import { Loader } from "./components/Loader";
import { Header } from "./components/Header";
import { Webby } from "./components/Webby";
import { Clouds } from "./components/Clouds";
import { Intro } from "./components/Intro";
import { Nav } from "./components/Nav";
import { Menu } from "./components/Menu";
import { About } from "./components/About";
import { MusicAudio } from "./components/MusicAudio";
import { Scene1 } from "./components/scenes/Scene1";
import { Scene2 } from "./components/scenes/Scene2";
import { Scene3 } from "./components/scenes/Scene3";
import { Scene4 } from "./components/scenes/Scene4";
import { Scene5 } from "./components/scenes/Scene5";
import { Scene6 } from "./components/scenes/Scene6";
import { Scene1Mobile } from "./components/scenes/mobile/Scene1Mobile";
import { Scene2Mobile } from "./components/scenes/mobile/Scene2Mobile";
import { Scene3Mobile } from "./components/scenes/mobile/Scene3Mobile";
import { Scene4Mobile } from "./components/scenes/mobile/Scene4Mobile";
import { Scene5Mobile } from "./components/scenes/mobile/Scene5Mobile";
import { Scene6Mobile } from "./components/scenes/mobile/Scene6Mobile";

import { useLoader } from "./hooks/useLoader";
import { useMusic } from "./hooks/useMusic";
import { useScrollProgress } from "./hooks/useScrollProgress";
import { useFontCycle } from "./hooks/useFontCycle";
import { SCENES } from "./data";

export function AltPortfolio() {
  const introRef = useRef<HTMLElement | null>(null);
  const scenesRef = useRef<HTMLElement | null>(null);
  const bigWrapRef = useRef<HTMLDivElement | null>(null);
  const hdrLogoRef = useRef<HTMLDivElement | null>(null);

  // Intro scroll-driven dismissal
  const [introDismissed, setIntroDismissed] = useState(false);
  const [dismissMotion, setDismissMotion] = useState<{
    dx: number;
    dy: number;
    scale: number;
  } | null>(null);
  useEffect(() => {
    const THRESHOLD_PX = 8;
    const onScroll = () => {
      if (window.scrollY > THRESHOLD_PX) setIntroDismissed(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Loader
  const { text: loadText, out: loadOut, done: loadDone } = useLoader();

  // Music
  const { audioRef, playing, toggle } = useMusic(0.45);

  // Scroll progress through the intro section
  const p = useScrollProgress(introRef, loadDone);

  // Header reveal with hysteresis to avoid flicker around the threshold
  const [hdrOn, setHdrOn] = useState(false);
  useEffect(() => {
    if (introDismissed) {
      setHdrOn(true);
      return;
    }
    if (p > 0.06) setHdrOn(true);
    else if (p < 0.005) setHdrOn(false);
  }, [introDismissed, p]);

  // Big-title font cycling
  const titleFont = useFontCycle(!introDismissed);

  // Header logo font follows the cycling title font, then locks once dismissed
  const [lockedHeaderFont, setLockedHeaderFont] = useState<string | null>(null);
  useEffect(() => {
    if (introDismissed && lockedHeaderFont == null) {
      setLockedHeaderFont(titleFont);
    }
  }, [introDismissed, lockedHeaderFont, titleFont]);

  // Big-wrap transform / gather lines
  const bigWrapStyle = useMemo<React.CSSProperties>(() => {
    if (introDismissed) {
      if (dismissMotion) {
        const { dx, dy, scale } = dismissMotion;
        return {
          transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(${scale})`,
          opacity: 0,
        };
      }
      return { transform: "translate(-50%, -50%) scale(0.18)", opacity: 0 };
    }
    if (p < 0.5) {
      const t = p / 0.5;
      const scale = 1 - 0.85 * t;
      const ty = -50 * t;
      return {
        transform: `translate(-50%, calc(-50% + ${ty}vh)) scale(${scale})`,
        opacity: 1 - t * 0.95,
      };
    }
    return { transform: "translate(-50%, -50%)", opacity: 0 };
  }, [dismissMotion, introDismissed, p]);

  // When the intro is dismissed, compute a one-shot transform that makes the
  // big title "fly" into the header logo position.
  useEffect(() => {
    if (!introDismissed || dismissMotion) return;
    const big = bigWrapRef.current?.getBoundingClientRect();
    const logo = hdrLogoRef.current?.getBoundingClientRect();
    if (!big || !logo) return;

    const bigCx = big.left + big.width / 2;
    const bigCy = big.top + big.height / 2;
    const logoCx = logo.left + logo.width / 2;
    const logoCy = logo.top + logo.height / 2;

    const dx = logoCx - bigCx;
    const dy = logoCy - bigCy;
    const scale = Math.max(0.06, Math.min(0.22, logo.width / big.width));
    setDismissMotion({ dx, dy, scale });
  }, [dismissMotion, introDismissed]);

  // Reveal the gathering lines progressively as the user scrolls down.
  const showLine1 = p >= 0.12;
  const showLine2 = p >= 0.22;

  // Keep clouds consistently visible while scrolling
  const cloudOp = 0.85;

  // Show scene nav/label only when scenes are in view
  const [inScenes, setInScenes] = useState(false);
  useEffect(() => {
    const el = scenesRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => setInScenes(entry?.isIntersecting ?? false), {
      threshold: 0.25,
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Nav-only scene selection
  const [scene, setScene] = useState(0);
  const go = useCallback((i: number) => {
    setScene(Math.max(0, Math.min(SCENES.length - 1, i)));
  }, []);

  // Overlays
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const openMenu = useCallback(() => {
    setMenuOpen(true);
    document.body.classList.add("DARKCUR");
  }, []);
  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    document.body.classList.remove("DARKCUR");
  }, []);
  const openAbout = useCallback(() => {
    setAboutOpen(true);
    document.body.classList.add("DARKCUR");
  }, []);
  const closeAbout = useCallback(() => {
    setAboutOpen(false);
    document.body.classList.remove("DARKCUR");
  }, []);

  // ESC closes overlays
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
        closeAbout();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeMenu, closeAbout]);

  return (
    <div className={s.root}>
      <Cursor />
      <Loader text={loadText} out={loadOut} />

      <Header
        showLogo={hdrOn}
        showLeft={hdrOn}
        playing={playing}
        onToggleMusic={toggle}
        logoRef={hdrLogoRef}
        logoFont={introDismissed ? (lockedHeaderFont ?? titleFont) : titleFont}
      />
      <Webby visible={loadDone} />

      <Intro
        ref={introRef}
        bigWrapRef={bigWrapRef}
        bigWrapStyle={bigWrapStyle}
        titleFont={titleFont}
        showLine1={showLine1}
        showLine2={showLine2}
      />
      {/* Clouds inside intro sticky area — kept outside Intro for simpler positioning */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 3,
          overflow: "hidden",
        }}
      >
        <Clouds visible={loadDone} opacity={cloudOp} />
      </div>

      {/* Scenes live BELOW the intro; user scrolls down to reach them */}
      <section ref={scenesRef} className={s.sceneSection}>
        <div className={s.hscroll}>
          <div className={s.hstage} style={{ transform: `translateX(${-scene * 100}vw)` }}>
            <div className={s.scSlide}>
              <div className={s.desktopOnly}>
                <Scene1 />
              </div>
              <div className={s.mobileOnly}>
                <Scene1Mobile />
              </div>
            </div>

            <div className={s.scSlide}>
              <div className={s.desktopOnly}>
                <Scene2 />
              </div>
              <div className={s.mobileOnly}>
                <Scene2Mobile />
              </div>
            </div>

            <div className={s.scSlide}>
              <div className={s.desktopOnly}>
                <Scene3 onOpenDoor={() => go(3)} />
              </div>
              <div className={s.mobileOnly}>
                <Scene3Mobile onOpenDoor={() => go(3)} />
              </div>
            </div>

            <div className={s.scSlide}>
              <div className={s.desktopOnly}>
                <Scene4 />
              </div>
              <div className={s.mobileOnly}>
                <Scene4Mobile />
              </div>
            </div>

            <div className={s.scSlide}>
              <div className={s.desktopOnly}>
                <Scene5 />
              </div>
              <div className={s.mobileOnly}>
                <Scene5Mobile />
              </div>
            </div>

            <div className={s.scSlide}>
              <div className={s.desktopOnly}>
                <Scene6 />
              </div>
              <div className={s.mobileOnly}>
                <Scene6Mobile />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Persistent scene label — stays put while scenes slide underneath. */}
      <div className={`${s.scLabel} ${inScenes ? s.on : ""}`} aria-live="polite">
        {SCENES[scene]?.label}
      </div>

      <Nav
        scene={scene}
        total={SCENES.length}
        visible={inScenes}
        onPrev={() => {
          go(scene - 1);
        }}
        onNext={() => go(scene + 1)}
        onMenu={openMenu}
        onInfo={openAbout}
        onDot={(i) => go(i)}
      />

      <Menu
        open={menuOpen}
        onClose={closeMenu}
        onGo={(i) => {
          go(i);
        }}
        onAbout={openAbout}
      />
      <About open={aboutOpen} onClose={closeAbout} />

      <MusicAudio ref={audioRef} />
    </div>
  );
}
