import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

/**
 * Sound component - simple audio toggle button
 * Audio starts muted, user can toggle with button
 */
export function Sound() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Check localStorage for previous preference
    const musicConsent = localStorage.getItem("musicConsent");
    if (musicConsent === "true") {
      setIsPlaying(true);
    }
  }, []);

  // Handle user interaction to start audio (browser autoplay policy)
  useEffect(() => {
    if (isPlaying && audioRef.current) {
      const playAudio = () => {
        audioRef.current?.play();
        document.removeEventListener("click", playAudio);
      };
      document.addEventListener("click", playAudio);
      return () => document.removeEventListener("click", playAudio);
    }
  }, [isPlaying]);

  const toggle = () => {
    const newState = !isPlaying;
    setIsPlaying(newState);

    if (audioRef.current) {
      if (newState) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }

    localStorage.setItem("musicConsent", String(newState));
  };

  return (
    <div className="sound-container">
      <audio ref={audioRef} loop>
        <source src="/audio/birds39-forest-20772.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <motion.button
        onClick={toggle}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        className="sound-btn glass"
        aria-label={
          isPlaying ? "Mute background music" : "Play background music"
        }
      >
        {isPlaying ? (
          <Volume2
            className="sound-icon"
            strokeWidth={1.5}
            aria-hidden="true"
          />
        ) : (
          <VolumeX
            className="sound-icon"
            strokeWidth={1.5}
            aria-hidden="true"
          />
        )}
      </motion.button>
    </div>
  );
}
