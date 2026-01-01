import { motion } from 'framer-motion'
import { Volume2, VolumeX } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

interface ModalProps {
  onClose: () => void
  toggle: () => void
}

/**
 * Consent modal for background music
 */
function Modal({ onClose, toggle }: ModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const modalRoot = document.getElementById('sound-modal')
  if (!modalRoot) return null

  return createPortal(
    <div className="sound-modal-overlay">
      <div className="sound-modal glass">
        <p className="sound-modal-text">Do you like to play the background music?</p>
        <div className="sound-modal-buttons">
          <button onClick={toggle} className="sound-modal-btn glass">
            Yes
          </button>
          <button onClick={onClose} className="sound-modal-btn glass">
            No
          </button>
        </div>
      </div>
    </div>,
    modalRoot
  )
}

/**
 * Sound component - audio toggle with consent modal
 * Stores consent in localStorage for 3 days
 */
export function Sound() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handleFirstUserInteraction = () => {
    const musicConsent = localStorage.getItem('musicConsent')
    if (musicConsent === 'true' && !isPlaying && audioRef.current) {
      audioRef.current.play()
      setIsPlaying(true)
    }

    ;['click', 'keydown', 'touchstart'].forEach((event) =>
      document.removeEventListener(event, handleFirstUserInteraction)
    )
  }

  useEffect(() => {
    const consent = localStorage.getItem('musicConsent')
    const consentTime = localStorage.getItem('consentTime')

    // Check if consent exists and is less than 3 days old
    if (
      consent &&
      consentTime &&
      new Date(consentTime).getTime() + 3 * 24 * 60 * 60 * 1000 > Date.now()
    ) {
      setIsPlaying(consent === 'true')

      if (consent === 'true') {
        ;['click', 'keydown', 'touchstart'].forEach((event) =>
          document.addEventListener(event, handleFirstUserInteraction)
        )
      }
    } else {
      setShowModal(true)
    }

    return () => {
      ;['click', 'keydown', 'touchstart'].forEach((event) =>
        document.removeEventListener(event, handleFirstUserInteraction)
      )
    }
  }, [])

  const toggle = () => {
    const newState = !isPlaying
    setIsPlaying(newState)

    if (audioRef.current) {
      newState ? audioRef.current.play() : audioRef.current.pause()
    }

    localStorage.setItem('musicConsent', String(newState))
    localStorage.setItem('consentTime', new Date().toISOString())
    setShowModal(false)
  }

  return (
    <div className="sound-container">
      {showModal && <Modal onClose={() => setShowModal(false)} toggle={toggle} />}

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
        aria-label={isPlaying ? 'Mute background music' : 'Play background music'}
      >
        {isPlaying ? (
          <Volume2 className="sound-icon" strokeWidth={1.5} aria-hidden="true" />
        ) : (
          <VolumeX className="sound-icon" strokeWidth={1.5} aria-hidden="true" />
        )}
      </motion.button>
    </div>
  )
}
