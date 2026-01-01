import { useEffect, useState } from "react";
import { useBreakpoints } from "../hooks/useScreenSize";

interface Firefly {
  id: number;
  top: string;
  left: string;
  animationDuration: string;
}

function createFirefly(): Firefly {
  return {
    id: Math.random(),
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 5 + 5}s`,
  };
}

export function FireFliesBackground() {
  const [fireflies, setFireflies] = useState<Firefly[]>([]);
  const { isMobile } = useBreakpoints();

  // Reduce fireflies on mobile for better performance
  const maxFireflies = isMobile ? 8 : 15;

  useEffect(() => {
    const addFireflyPeriodically = () => {
      const newFirefly = createFirefly();
      setFireflies((currentFireflies) => [
        // Keep max fireflies (8 on mobile, 15 on desktop)
        ...currentFireflies.slice(-(maxFireflies - 1)),
        newFirefly,
      ]);
    };

    const interval = setInterval(addFireflyPeriodically, 1000);

    return () => clearInterval(interval);
  }, [maxFireflies]);

  return (
    <div className="fireflies-container" aria-hidden="true">
      {fireflies.map((firefly) => (
        <div
          key={firefly.id}
          className="firefly"
          style={{
            top: firefly.top,
            left: firefly.left,
            animationDuration: firefly.animationDuration,
          }}
        />
      ))}
    </div>
  );
}
