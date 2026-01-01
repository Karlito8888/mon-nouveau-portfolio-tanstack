import { useEffect, useState } from 'react'

interface Firefly {
  id: number
  top: string
  left: string
  animationDuration: string
}

function createFirefly(): Firefly {
  return {
    id: Math.random(),
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 5 + 5}s`,
  }
}

export function FireFliesBackground() {
  const [fireflies, setFireflies] = useState<Firefly[]>([])

  useEffect(() => {
    const addFireflyPeriodically = () => {
      const newFirefly = createFirefly()
      setFireflies((currentFireflies) => [
        // Keep max 15 fireflies
        ...currentFireflies.slice(-14),
        newFirefly,
      ])
    }

    const interval = setInterval(addFireflyPeriodically, 1000)

    return () => clearInterval(interval)
  }, [])

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
  )
}
