import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { Search, Star, Heart, ChevronRight, MapPin, Plane, Calendar, BedDouble, Route, Handshake, Car } from "lucide-react"
import SafeImage from "@/components/ui/SafeImage"
import { useFavorites } from "@/lib/useFavorites"
import { useI18n } from "@/lib/useI18n"
import { categories, catBlocks, recTabs, recTabData, type AttractionItem } from "@/data/attractions"

export default function TravelPage() {
  const navigate = useNavigate()
  const { favorites, toggleFav } = useFavorites()
  const { t, td, toggle: toggleLang, lang } = useI18n()

  const allAttractions = catBlocks.flatMap(b => b.items)
  const [topIdx, setTopIdx] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  // Rotate through hero items from all attractions
  const heroItems = allAttractions.slice(0, 5)
  const heroLen = heroItems.length
  useEffect(() => {
    if (heroLen === 0) return
    const t = setInterval(() => setTopIdx(i => (i + 1) % heroLen), 4000)
    return () => clearInterval(t)
  }, [heroLen])

  // Swipe handlers for hero
  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX }
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (heroLen === 0) return
    touchEndX.current = e.changedTouches[0].clientX
    const diff = touchStartX.current - touchEndX.current
    if (diff > 50) setTopIdx(i => (i + 1) % heroLen)
    else if (diff < -50) setTopIdx(i => (i - 1 + heroLen) % heroLen)
  }

  return (
    <div className="h-full flex flex-col bg-white">
      {/* ===== Top bar ===== */}
      <div className="flex items-center gap-2 px-4 pt-3 pb-2 bg-white z-10 relative">
        <span className="font-display font-bold text-sm tracking-tight mr-auto">
          <span className="text-primary">Rotorua</span>
          <span className="text-foreground/40 font-normal ml-1">| NZ</span>
        </span>
        <div className="relative flex-1 max-w-[180px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
          <input type="text" placeholder="Search..." readOnly
            onFocus={() => navigate("/search")} onClick={() => navigate("/search")}
            className="w-full h-8 pl-8 pr-3 bg-muted/60 rounded-full text-xs outline-none cursor-pointer" />
        </div>
        <button onClick={toggleLang}
          className="text-[11px] font-semibold text-primary bg-primary/5 px-2.5 py-1 rounded-full">
          {lang === "zh" ? "EN" : "中"}
        </button>
      </div>

      <main className="flex-1 overflow-y-auto">
        {/* ===== HERO — with swipe ===== */}
        <div className="relative h-[360px] w-full overflow-hidden bg-dark"
          onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          {heroLen > 0 && (() => {
            const current = heroItems[Math.min(topIdx, heroLen - 1)]
            if (!current) return null
            return (
              <>
                <SafeImage src={current.img} alt="" className="absolute inset-0 w-full h-full object-cover opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
                <div className="absolute top-4 right-4">
                  <span className="text-white/40 text-[10px] font-medium uppercase tracking-wider bg-white/10 px-2 py-1 rounded-full">
                    {td(current.name, current.en)}
                  </span>
                </div>
              </>
            )
          })()}
          <div className="absolute bottom-0 left-0 right-0 p-5 pb-6">
            <div className="max-w-[280px]">
              <h1 className="headline-title text-[3.25rem] text-white leading-[0.85] mb-1.5">Rotorua</h1>
              <p className="text-white/60 text-xs font-light leading-relaxed max-w-[220px]">
                Geysers, Māori culture &amp; adventure — discover the beating heart of New Zealand's North Island.
              </p>
            </div>
          </div>
          {/* Navigation dots */}
          {heroLen > 0 && (
            <div className="absolute bottom-5 right-5 flex gap-1.5">
              {heroItems.map((_, i) => (
                <button key={i} onClick={() => setTopIdx(i)}
                  className={`rounded-full transition-all ${
                    i === topIdx ? "w-5 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/30"
                  }`} />
              ))}
            </div>
          )}
        </div>

        {/* ===== Quick Navigation — 2x4 Grid ===== */}
        <div className="px-4 py-4 border-b border-border/40">
          <div className="grid grid-cols-4 gap-3">
            {[
              { icon: Search, label: "Attractions", labelCn: "景点", to: "/category/attractions" },
              { icon: BedDouble, label: "Stays", labelCn: "住宿", to: "/category/stays" },
              { icon: Heart, label: "Food", labelCn: "美食", to: "/category/food" },
              { icon: Calendar, label: "Events", labelCn: "活动", to: "/events" },
              { icon: Plane, label: "Flights", labelCn: "航班", to: "/flights" },
              { icon: Route, label: "Routes", labelCn: "路线推荐", to: "/routes" },
              { icon: Handshake, label: "Invest", labelCn: "项目招商", to: "/invest" },
              { icon: Car, label: "Rental", labelCn: "租车", to: "/rental" },
            ].map(cat => {
              const Icon = cat.icon
              return (
                <button key={cat.to} onClick={() => navigate(cat.to)}
                  className="flex flex-col items-center gap-1.5 py-3 rounded-xl bg-muted/50 active:scale-95 transition-all">
                  <Icon className="w-5 h-5 text-primary" />
                  <span className="text-[11px] font-medium text-foreground/70 text-center leading-tight">
                    {td(cat.labelCn, cat.label)}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* ===== Top Attractions (title + horizontal cards — like official site) ===== */}
        <div className="py-5">
          <div className="flex items-center justify-between px-4 mb-3">
            <div className="flex items-center gap-2">
              <div className="notch" />
              <h2 className="section-title">{td("热门景点", "Top attractions")}</h2>
            </div>
            <button onClick={() => navigate("/category/attractions")}
              className="text-[11px] font-medium text-primary flex items-center gap-0.5">
              {td("查看全部", "View all")} <ChevronRight className="w-3 h-3" />
            </button>
          </div>
          <div ref={scrollRef}
            className="flex gap-3 overflow-x-auto scrollbar-hide px-4 pb-1">
            {allAttractions.map((item) => (
              <button key={item.id} onClick={() => navigate(`/product/${item.id}`)}
                className="nz-card shrink-0 w-[200px] bg-white border border-border/30 text-left">
                <SafeImage src={item.img} alt="" className="nz-card-img" />
                <div className="p-2.5">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wide font-medium">
                      {td(item.category, item.categoryEn)}
                    </span>
                    <span className="text-[10px] text-amber-500 flex items-center gap-0.5 ml-auto">
                      <Star className="w-2.5 h-2.5 fill-current" />{item.r}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold leading-tight">{td(item.name, item.en)}</h3>
                  <p className="text-[11px] text-muted-foreground mt-1 line-clamp-2">{td(item.description, item.descriptionEn).slice(0, 60)}…</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ===== Section: Things to do (categories grid) ===== */}
        <div className="section-light-grey py-6 px-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="notch" />
            <h2 className="section-title">{td("玩点什么", "Things to do")}</h2>
          </div>

          {catBlocks.slice(0, 3).map(block => (
            <div key={block.title} className="mb-5 last:mb-0">
              <div className="flex items-center gap-2 mb-2.5">
                <span className="text-lg">{block.em}</span>
                <h3 className="text-sm font-semibold text-foreground/80">{td(block.title, block.en)}</h3>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {block.items.slice(0, 4).map(item => (
                  <button key={item.id} onClick={() => navigate(`/product/${item.id}`)}
                    className="bg-white rounded-lg overflow-hidden border border-border/20 active:scale-[0.97] transition-all text-left">
                    <SafeImage src={item.img} alt="" className="w-full h-24 object-cover" />
                    <div className="p-2.5">
                      <h4 className="text-xs font-semibold leading-tight line-clamp-1">{td(item.name, item.en)}</h4>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-[10px] text-amber-500 flex items-center gap-0.5">
                          <Star className="w-2.5 h-2.5 fill-current" />{item.r}
                        </span>
                        {!item.isFree && (
                          <span className="text-[10px] text-primary font-semibold">{item.price}</span>
                        )}
                        {item.isFree && (
                          <span className="text-[10px] text-green-600 font-semibold">{td("免费", "Free")}</span>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ===== Section: Dark — Key Info ===== */}
        <div className="section-dark py-6 px-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-0.5 bg-primary rounded-full" />
            <h2 className="section-title text-white">{td("罗托鲁瓦小贴士", "Rotorua Tips")}</h2>
          </div>
          <div className="space-y-2.5">
            <div className="bg-white/5 border border-white/10 rounded-lg p-3.5">
              <p className="text-xs text-white/70 leading-relaxed">
                {td(
                  "罗托鲁瓦以地热奇观、毛利文化和户外冒险闻名。" + 
                  "市中心步行可达大多数景点。" + 
                  "建议至少停留2-3天。罗托鲁瓦机场（ROT）距市中心仅10分钟车程。",
                  "Rotorua is famous for geothermal wonders, Māori culture, and outdoor adventures. " +
                  "Most attractions are walkable from the city centre. " +
                  "Recommend at least 2-3 days. Rotorua Airport (ROT) is just 10 min from town."
                )}
              </p>
            </div>
            <div className="flex gap-2.5">
              {[
                { em: "♨️", cn: "地热温泉", en: "Hot Springs" },
                { em: "🎭", cn: "毛利文化", en: "Māori Culture" },
                { em: "🚲", cn: "户外探险", en: "Adventure" },
                { em: "🌲", cn: "自然徒步", en: "Nature Walks" },
              ].map(tag => (
                <span key={tag.cn} className="bg-white/5 border border-white/10 rounded-full px-3 py-1 text-[10px] text-white/60">
                  {tag.em} {td(tag.cn, tag.en)}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ===== Section: Accommodation Picks ===== */}
        <div className="py-5 px-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="notch" />
              <h2 className="section-title">{td("精选住宿", "Places to stay")}</h2>
            </div>
            <button onClick={() => navigate("/category/stays")}
              className="text-[11px] font-medium text-primary flex items-center gap-0.5">
              {td("查看全部", "View all")} <ChevronRight className="w-3 h-3" />
            </button>
          </div>
          <div className="flex gap-3 overflow-x-auto scrollbar-hide -mx-4 px-4 pb-1">
            {(recTabData.stays || []).slice(0, 6).map(item => (
              <button key={item.id} onClick={() => navigate(`/product/${item.id}`)}
                className="nz-card shrink-0 w-[180px] bg-white border border-border/30 text-left">
                <SafeImage src={item.img} alt="" className="nz-card-img" />
                <div className="p-2.5">
                  <h3 className="text-xs font-semibold leading-tight line-clamp-1">{td(item.name, item.en)}</h3>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-2.5 h-2.5 text-amber-500 fill-current" />
                    <span className="text-[10px] text-amber-500 font-medium">{item.r}</span>
                  </div>
                  <span className="text-[10px] text-primary font-semibold block mt-0.5">{item.price}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ===== Map CTA ===== */}
        <button onClick={() => navigate("/map")}
          className="mx-4 mb-6 bg-primary rounded-lg flex items-center justify-between p-4 text-white active:bg-primary/90 transition-colors">
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5" />
            <div className="text-left">
              <p className="text-sm font-semibold">{td("探索互动地图", "Explore interactive map")}</p>
              <p className="text-[11px] text-white/60">{td("发现罗托鲁瓦的每一个角落", "Discover every corner of Rotorua")}</p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-white/60" />
        </button>
      </main>
    </div>
  )
}
