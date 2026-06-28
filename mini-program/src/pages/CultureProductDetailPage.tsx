import { useParams, useNavigate } from "react-router-dom"
import { ArrowLeft, Heart, ShoppingBag } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/useI18n"
import { useFavorites } from "@/lib/useFavorites"
import { getCultureProduct } from "@/data/cultureProducts"

export default function CultureProductDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { t, td, lang } = useI18n()
  const { favorites, toggleFav } = useFavorites()

  const product = getCultureProduct(id || "")

  if (!product) {
    return (
      <div className="h-full flex flex-col items-center justify-center bg-background gap-4">
        <p className="text-muted-foreground">{lang === "zh" ? "商品未找到" : "Product not found"}</p>
        <Button size="sm" onClick={() => navigate("/culture")}>{lang === "zh" ? "返回特色" : "Go Back"}</Button>
      </div>
    )
  }

  const isFav = favorites.includes(product.id)

  return (
    <div className="h-full flex flex-col bg-background">
      <header className="shrink-0 bg-white border-b border-border/50">
        <div className="flex items-center gap-3 px-4 pt-3 pb-2">
          <button onClick={() => navigate(-1)} className="p-1 -ml-1">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="font-display font-bold text-sm truncate">
            {td(product.name, product.nameEn)}
          </h1>
          <button onClick={() => toggleFav(product.id)} className="ml-auto">
            <Heart className={`w-5 h-5 ${isFav ? "fill-red-400 text-red-400" : "text-muted-foreground"}`} />
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto">
        {/* 商品主图区 */}
        <div className={`bg-gradient-to-br ${product.bg} h-48 flex items-center justify-center relative`}>
          {product.img ? (
            <img src={product.img} alt="" className="w-full h-full object-cover" />
          ) : (
            <span className="text-8xl opacity-30">{product.emoji}</span>
          )}
          <Badge variant="gold" className="absolute top-3 left-3 text-[10px] px-2 py-0.5">
            {product.category}
          </Badge>
        </div>

        <div className="p-5">
          {/* 标题 & 价格 */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="font-display font-bold text-lg">{td(product.name, product.nameEn)}</h1>
              <p className="text-xs text-muted-foreground mt-0.5">{lang === "zh" ? product.nameEn : product.name}</p>
            </div>
            <span className="font-display font-bold text-lg text-primary">{product.price}</span>
          </div>

          {/* 描述 */}
          <section className="mb-5">
            <h3 className="font-display font-semibold text-sm mb-2">
              {lang === "zh" ? "商品介绍" : "Description"}
            </h3>
            <p className="text-sm text-foreground/80 leading-relaxed">
              {td(product.desc, product.descEn)}
            </p>
          </section>

          {/* 亮点 */}
          <section className="mb-6">
            <h3 className="font-display font-semibold text-sm mb-2">
              {lang === "zh" ? "产品亮点" : "Highlights"}
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.highlights.map((h, i) => (
                <Badge key={i} variant="secondary" className="text-[10px] px-2 py-0.5">
                  {h}
                </Badge>
              ))}
            </div>
          </section>

          {/* 购买提示 */}
          <div className="bg-muted/30 rounded-xl p-4 mb-6">
            <p className="text-xs text-muted-foreground leading-relaxed">
              💡 {lang === "zh"
                ? "本商品为文化展示，实际购买请前往罗托鲁瓦当地商店或访问新西兰官方购物网站。"
                : "This item is for cultural展示. To purchase, visit local stores in Rotorua or NZ official shopping websites."}
            </p>
          </div>
        </div>
      </main>

      {/* 底部按钮 */}
      <div className="shrink-0 bg-white border-t border-border/50 px-4 py-3">
        <div className="flex gap-3">
          <Button variant="outline" className="flex-1" onClick={() => navigate("/culture")}>
            {lang === "zh" ? "继续浏览" : "Continue"}
          </Button>
          <Button className="flex-1" onClick={() => window.open("https://www.newzealand.com/nz/rotorua/", "_blank")}>
            <ShoppingBag className="w-4 h-4 mr-1.5" />
            {lang === "zh" ? "前往购买" : "Shop Now"}
          </Button>
        </div>
      </div>
    </div>
  )
}
