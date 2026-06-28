import { useParams, useNavigate } from "react-router-dom"
import { ArrowLeft, Star, MapPin, Clock, Tag, ChevronRight, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getAttractionById } from "@/data/attractions"
import { useFavorites } from "@/lib/useFavorites"
import { useI18n } from "@/lib/useI18n"

export default function ProductDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { t, td, tc } = useI18n()
  const { favorites, toggleFav } = useFavorites()
  const item = id ? getAttractionById(id) : undefined

  if (!item) {
    return (
      <div className="h-full flex flex-col bg-background">
        <header className="flex items-center gap-3 px-4 pt-3 pb-2 bg-white border-b border-border/50">
          <button onClick={() => navigate(-1)} className="p-1 -ml-1">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="font-display font-bold text-base">{t("header.detail")}</h1>
        </header>
        <main className="flex-1 flex flex-col items-center justify-center text-muted-foreground px-6">
          <div className="text-5xl mb-4">🔍</div>
          <p className="font-display font-semibold">{t("detail.notFound")}</p>
          <p className="text-xs mt-1 text-center">ID: {id}</p>
          <Button className="mt-6" size="sm" onClick={() => navigate("/")}>{t("detail.notFound")}</Button>
        </main>
      </div>
    )
  }

  const allImages = item.images
  const catKey = item.category

  return (
    <div className="h-full flex flex-col bg-background">
      {/* ===== 顶部导航 ===== */}
      <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 pt-3 pb-2">
        <button onClick={() => navigate(-1)} className="w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center">
          <ArrowLeft className="w-4 h-4 text-white" />
        </button>
        <button onClick={() => toggleFav(item.id)} className="w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center">
          <Heart className={`w-4 h-4 ${favorites.includes(item.id) ? "fill-red-400 text-red-400" : "text-white"}`} />
        </button>
      </header>

      <main className="flex-1 overflow-y-auto pb-24">
        {/* ===== 图片展示 ===== */}
        <div className="relative">
          <div className="h-72 w-full overflow-hidden">
            <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
          </div>
          {allImages.length > 1 && (
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
              {allImages.map((img, i) => (
                <img key={i} src={img} alt=""
                  className={`w-14 h-10 rounded-md object-cover border-2 cursor-pointer transition-all ${
                    i === 0 ? "border-white opacity-100" : "border-white/40 opacity-60"
                  }`}
                />
              ))}
            </div>
          )}
          <div className="absolute top-4 right-4">
            <Badge className="bg-white/90 text-foreground text-xs px-3 py-1.5 rounded-full font-semibold shadow-sm">
              {item.price}
            </Badge>
          </div>
        </div>

        {/* ===== 基本信息 ===== */}
        <div className="px-4 pt-4 pb-3 bg-white">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">{item.categoryIcon}</span>
                <span className="text-[11px] text-muted-foreground font-medium bg-muted/50 px-2 py-0.5 rounded-full">
                  {tc(catKey)}
                </span>
                <Badge variant="gold" className="text-[10px] px-1.5 py-0">
                  <Star className="w-2.5 h-2.5 fill-current mr-0.5" />
                  {item.r}
                </Badge>
              </div>
              <h1 className="font-display font-bold text-lg text-foreground">{item.name}</h1>
              <p className="text-xs text-muted-foreground mt-0.5">{item.en}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-3 text-[11px] text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" /> {td(item.address, item.addressEn)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" /> {item.duration}
            </span>
          </div>

          {item.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {item.tags.map(tag => (
                <Badge key={tag} variant="outline" className="text-[10px] px-2 py-0.5 rounded-full">
                  <Tag className="w-2 h-2 mr-0.5" />
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* ===== 分隔 ===== */}
        <div className="h-2 bg-muted/30" />

        {/* ===== 描述介绍 ===== */}
        <div className="px-4 py-4 bg-white">
          <h3 className="font-display font-semibold text-sm text-foreground/80 mb-2 flex items-center gap-2">
            <span>📖 {t("detail.intro")}</span>
          </h3>
          <p className="text-xs text-foreground/70 leading-relaxed">{td(item.description, item.descriptionEn)}</p>
        </div>

        {/* ===== 分隔 ===== */}
        <div className="h-2 bg-muted/30" />

        {/* ===== 特色亮点 ===== */}
        <div className="px-4 py-4 bg-white">
          <h3 className="font-display font-semibold text-sm text-foreground/80 mb-3 flex items-center gap-2">
            <span>⭐ {t("detail.highlights")}</span>
          </h3>
          <div className="space-y-2.5">
            {item.highlights.map((h, i) => (
              <div key={i} className="flex gap-2.5">
                <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <p className="text-xs text-foreground/70 leading-relaxed">{h}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== 分隔 ===== */}
        <div className="h-2 bg-muted/30" />

        {/* ===== 地图位置入口 ===== */}
        <button onClick={() => navigate("/map")} className="w-full px-4 py-3.5 bg-white flex items-center justify-between active:bg-muted/20 transition-colors">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-base">🗺️</span>
            <div className="text-left">
              <p className="text-xs font-medium text-foreground/80">{t("detail.map")}</p>
              <p className="text-[10px] text-muted-foreground">{td(item.address, item.addressEn)}</p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        </button>
      </main>

      {/* ===== 底部固定预订按钮 ===== */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-border/50 px-4 py-3 flex items-center gap-4">
        <div className="flex-1">
          <p className="text-xs text-muted-foreground">{item.name}</p>
          <p className="font-display font-bold text-base text-primary">{item.isFree ? t("detail.free") : item.price}</p>
        </div>
        <Button size="default" className="px-6" onClick={() => navigate(`/booking/${item.id}`)}>
          {t("detail.book")}
        </Button>
      </div>
    </div>
  )
}
