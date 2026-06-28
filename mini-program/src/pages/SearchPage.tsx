import { useState, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import { Search, ArrowLeft, Star, Heart, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useI18n } from "@/lib/useI18n"
import { useFavorites } from "@/lib/useFavorites"
import { catBlocks, foodItems, eventItems, stayItems, type AttractionItem } from "@/data/attractions"

export default function SearchPage() {
  const navigate = useNavigate()
  const { t, td, lang } = useI18n()
  const { favorites, toggleFav } = useFavorites()
  const [query, setQuery] = useState("")

  const allItems = useMemo(() => {
    const items: AttractionItem[] = []
    for (const block of catBlocks) items.push(...block.items)
    items.push(...foodItems, ...eventItems, ...stayItems)
    return items
  }, [])

  const results = useMemo(() => {
    if (!query.trim()) return []
    const q = query.trim().toLowerCase()
    return allItems.filter(item => {
      const name = item.name.toLowerCase()
      const en = item.en.toLowerCase()
      const desc = item.description.toLowerCase()
      const descEn = item.descriptionEn.toLowerCase()
      const tags = item.tags.map(t => t.toLowerCase())
      const cat = item.category.toLowerCase()
      const catEn = item.categoryEn.toLowerCase()
      return name.includes(q) || en.includes(q) || desc.includes(q) ||
        descEn.includes(q) || tags.some(t => t.includes(q)) ||
        cat.includes(q) || catEn.includes(q)
    })
  }, [query, allItems])

  return (
    <div className="h-full flex flex-col bg-background">
      {/* ===== 搜索头 ===== */}
      <header className="px-4 pt-3 pb-2 bg-white border-b border-border/50 shrink-0">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-1 -ml-1">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder={lang === "zh" ? "搜索景点、美食、活动..." : "Search attractions, food, events..."}
              className="w-full h-10 pl-9 pr-8 bg-muted/50 rounded-xl text-sm outline-none"
            />
            {query && (
              <button onClick={() => setQuery("")} className="absolute right-2 top-1/2 -translate-y-1/2">
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto pb-6">
        {query.trim() && results.length === 0 ? (
          <div className="py-20 text-center">
            <Search className="w-12 h-12 mx-auto text-muted-foreground/20 mb-4" />
            <p className="text-muted-foreground text-sm">
              {lang === "zh" ? `未找到"${query}"相关结果` : `No results for "${query}"`}
            </p>
            <p className="text-xs text-muted-foreground/60 mt-1">
              {lang === "zh" ? "试试其他关键词" : "Try different keywords"}
            </p>
          </div>
        ) : query.trim() && results.length > 0 ? (
          <div className="px-4 pt-3 pb-4">
            <p className="text-xs text-muted-foreground mb-3">
              {lang === "zh" ? `找到 ${results.length} 个结果` : `${results.length} results found`}
            </p>
            <div className="flex flex-col gap-3">
              {results.map((item, idx) => (
                <div key={item.id} className="animate-fade-in" style={{ animationDelay: `${idx * 40}ms` }}>
                  <div className="h-28 rounded-xl overflow-hidden relative cursor-pointer active:scale-[0.98] transition-transform"
                    onClick={() => navigate(`/product/${item.id}`)}>
                    <img src={item.img} alt="" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <button onClick={e => { e.stopPropagation(); toggleFav(item.id) }}
                      className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Heart className={`w-3 h-3 ${favorites.includes(item.id) ? "fill-white text-white" : "text-white/70"}`} />
                    </button>
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <div className="flex items-center gap-2 text-white/70 mb-0.5">
                        <Badge variant="secondary" className="text-[9px] px-1.5 py-0 bg-white/20 text-white border-0">
                          {item.categoryIcon} {td(item.category, item.categoryEn)}
                        </Badge>
                        <span className="text-[10px] text-amber-300 flex items-center gap-0.5">
                          <Star className="w-2.5 h-2.5 fill-current" />{item.r}
                        </span>
                      </div>
                      <div className="flex items-end justify-between">
                        <div>
                          <h4 className="text-white font-display font-semibold text-sm">{td(item.name, item.en)}</h4>
                          <p className="text-white/50 text-[10px]">{lang === "zh" ? item.en : item.name}</p>
                        </div>
                        <span className="text-white font-display font-semibold text-xs">{item.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="py-20 text-center">
            <Search className="w-12 h-12 mx-auto text-muted-foreground/10 mb-4" />
            <p className="text-muted-foreground text-xs">
              {lang === "zh" ? "输入关键词开始搜索" : "Type to start searching"}
            </p>
          </div>
        )}
      </main>
    </div>
  )
}
