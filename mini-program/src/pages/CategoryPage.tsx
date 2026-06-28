import { useParams, useNavigate } from "react-router-dom"
import { ArrowLeft, Star, Heart, ChevronRight, MapPin, Clock } from "lucide-react"
import SafeImage from "@/components/ui/SafeImage"
import { useFavorites } from "@/lib/useFavorites"
import { useI18n } from "@/lib/useI18n"
import { catBlocks, recTabData } from "@/data/attractions"

const catMap: Record<string, { id: string; title: string; en: string; icon: string }> = {
  attractions: { id: "attractions", title: "景点", en: "Attractions", icon: "🏔️" },
  stays: { id: "stays", title: "住宿", en: "Accommodation", icon: "🏨" },
  food: { id: "food", title: "美食", en: "Food & Dining", icon: "🍽️" },
  events: { id: "events", title: "活动", en: "Activities", icon: "🎯" },
}

export default function CategoryPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { td, toggle: toggleLang, lang } = useI18n()
  const { favorites, toggleFav } = useFavorites()

  const cat = catMap[id || ""] || catMap.attractions
  const items = recTabData[id || "attractions"] || []

  // Split items into primary (with images) and compact (text smaller)
  const primary = items.slice(0, 4)
  const rest = items.slice(4)

  return (
    <div className="h-full flex flex-col bg-white">
      {/* ===== Header ===== */}
      <div className="flex items-center gap-3 px-4 pt-3 pb-2 border-b border-border/30 shrink-0">
        <button onClick={() => navigate(-1)} className="p-1 -ml-1">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <span className="text-xl">{cat.icon}</span>
        <h1 className="font-display font-bold text-base flex-1">{td(cat.title, cat.en)}</h1>
        <button onClick={toggleLang} className="text-[11px] font-semibold text-primary bg-primary/5 px-2.5 py-1 rounded-full">
          {lang === "zh" ? "EN" : "中"}
        </button>
      </div>

      <main className="flex-1 overflow-y-auto">
        {/* ===== Hero for this category ===== */}
        <div className="relative h-48 w-full overflow-hidden bg-dark">
          {primary.length > 0 && (
            <>
              <SafeImage src={primary[0].img} alt="" className="absolute inset-0 w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </>
          )}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <div className="notch mb-2" />
            <h2 className="headline-title text-[2.5rem] text-white leading-[0.85]">{td(cat.title, cat.en)}</h2>
            <p className="text-white/50 text-xs mt-1.5 font-light">
              {cat.id === "attractions" ? td("探索罗托鲁瓦最好的景点", "Explore the best of Rotorua") :
               cat.id === "stays" ? td("找到你的理想住处", "Find your perfect stay") :
               cat.id === "food" ? td("品味罗托鲁瓦美食", "Taste Rotorua's finest") :
               td("体验精彩活动", "Experience amazing activities")}
            </p>
          </div>
        </div>

        {/* ===== Primary cards (big) ===== */}
        <div className="px-4 pt-5 pb-2">
          <div className="flex items-center gap-2 mb-3">
            <div className="notch" />
            <h3 className="text-sm font-semibold">{td("精选推荐", "Featured")}</h3>
          </div>
          <div className="flex flex-col gap-3">
            {primary.map((item, idx) => (
              <button key={item.id} onClick={() => navigate(`/product/${item.id}`)}
                className="nz-card bg-white border border-border/20 text-left flex gap-0 active:scale-[0.98] transition-all">
                <SafeImage src={item.img} alt="" className="w-[120px] h-[120px] object-cover shrink-0" />
                <div className="p-3 flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wide">{td(item.category, item.categoryEn)}</span>
                    <span className="text-[10px] text-amber-500 flex items-center gap-0.5 ml-auto">
                      <Star className="w-2.5 h-2.5 fill-current" />{item.r}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold leading-tight">{td(item.name, item.en)}</h3>
                  <p className="text-[11px] text-muted-foreground mt-1 line-clamp-2">{td(item.description, item.descriptionEn).slice(0, 80)}…</p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="text-[10px] flex items-center gap-0.5 text-muted-foreground">
                      <Clock className="w-3 h-3" />{item.duration}
                    </span>
                    <span className="text-xs text-primary font-semibold ml-auto">{item.isFree ? td("免费", "Free") : item.price}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ===== Rest of items (smaller grid) ===== */}
        {rest.length > 0 && (
          <div className="px-4 pt-5 pb-8">
            <div className="flex items-center gap-2 mb-3">
              <div className="notch" />
              <h3 className="text-sm font-semibold">{td("查看更多", "More options")}</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {rest.map(item => (
                <button key={item.id} onClick={() => navigate(`/product/${item.id}`)}
                  className="nz-card bg-white border border-border/20 text-left">
                  <SafeImage src={item.img} alt="" className="w-full h-28 object-cover" />
                  <div className="p-2.5">
                    <h4 className="text-xs font-semibold leading-tight line-clamp-1">{td(item.name, item.en)}</h4>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-[10px] text-amber-500 flex items-center gap-0.5">
                        <Star className="w-2.5 h-2.5 fill-current" />{item.r}
                      </span>
                      <span className="text-[10px] text-primary font-semibold">
                        {item.isFree ? td("免费", "Free") : item.price}
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
