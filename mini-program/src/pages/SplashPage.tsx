import { useState, useEffect } from "react"

interface Slide {
  img: string; en: string; cn: string; productId?: string
}

const slides: Slide[] = [
  { img: "/images/waio-1.jpg", en: "Wai-O-Tapu", cn: "怀奥塔普地热世界", productId: "a1" },
  { img: "/images/tepuia-1.jpg", en: "Te Puia", cn: "蒂普亚毛利文化村", productId: "b1" },
  { img: "/images/redwoods-1.jpg", en: "Whakarewarewa Forest", cn: "法卡雷瓦雷瓦森林", productId: "c1" },
  { img: "/images/lake-1.jpg", en: "Lake Rotorua", cn: "罗托鲁瓦湖" },
  { img: "/images/whaka-1.jpg", en: "Whakarewarewa", cn: "法卡雷瓦雷瓦地热保护区", productId: "d2" },
]

interface Props {
  onDone: () => void
  onNavigate?: (productId: string) => void
}

export default function SplashPage({ onDone, onNavigate }: Props) {
  const [idx, setIdx] = useState(0)
  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    if (countdown <= 0) { onDone(); return }
    const t = setTimeout(() => setCountdown(c => c - 1), 1000)
    return () => clearTimeout(t)
  }, [countdown, onDone])

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % slides.length), 2000)
    return () => clearInterval(t)
  }, [])

  const s = slides[idx]

  return (
    <div className="h-full w-full relative overflow-hidden bg-black">
      {/* Zoom-in effect: start at scale-110, settle to scale-100 */}
      <div key={idx} className="absolute inset-0 animate-[zoomIn_1s_ease-out_forwards] cursor-pointer"
        onClick={() => {
          if (s.productId && onNavigate) {
            onNavigate(s.productId)
          } else {
            onDone()
          }
        }}>
        <img src={s.img} alt={s.cn} className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

      {/* Skip */}
      <button onClick={onDone}
        className="absolute top-12 right-4 z-10 text-xs text-white/80 bg-white/15 px-3 py-1.5 rounded-full backdrop-blur-sm">
        跳过 {countdown}s
      </button>

      {/* Dots */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <div key={i} className={`w-1.5 h-1.5 rounded-full transition-all ${i === idx ? "bg-white w-4" : "bg-white/40"}`} />
        ))}
      </div>

      {/* Bottom-right intro */}
      <div className="absolute bottom-8 right-4 text-right z-10">
        <p className="text-white/60 text-xs font-medium tracking-wide">{s.en}</p>
        <p className="text-white font-display font-bold text-lg leading-tight mt-0.5">{s.cn}</p>
      </div>
    </div>
  )
}
