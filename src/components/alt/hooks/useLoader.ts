import { useEffect, useState } from "react";

const PHRASES = ["...", "hello", "welcome in"];
const TYPE_TICK_MS = 85;
const PHRASE_HOLD_MS = 420;

/**
 * Typewriter loading text. Returns:
 *  - text: current phrase
 *  - out:  loader has begun fading out
 *  - done: loader fully gone, intro chrome may appear
 */
export function useLoader() {
  // Start with the first char so we never render empty "()"
  const [typed, setTyped] = useState(".");
  const [out, setOut] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.classList.add("alt-loading");
    let cancelled = false;

    const sleep = (ms: number) =>
      new Promise<void>((resolve) => {
        window.setTimeout(resolve, ms);
      });

    const run = async () => {
      for (const phrase of PHRASES) {
        if (cancelled) return;
        // Avoid ever showing empty "( )" between phrases
        setTyped(phrase.slice(0, 1));
        for (let i = 2; i <= phrase.length; i++) {
          if (cancelled) return;
          setTyped(phrase.slice(0, i));
          await sleep(TYPE_TICK_MS);
        }
        if (cancelled) return;
        await sleep(PHRASE_HOLD_MS);
      }

      if (cancelled) return;
      await sleep(120);
      setOut(true);
      document.body.classList.remove("alt-loading");
      await sleep(700);
      setDone(true);
    };

    void run();
    return () => {
      cancelled = true;
      document.body.classList.remove("alt-loading");
    };
  }, []);

  return { text: `(${typed})`, out, done };
}
