import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ChevronRight, Heart, Star, ShoppingBag } from "lucide-react"
import SafeImage from "@/components/ui/SafeImage"
import { useI18n } from "@/lib/useI18n"
import { useFavorites } from "@/lib/useFavorites"

interface CultureItem {
  id: string; name: string; nameEn: string; desc: string; descEn: string
  price: string; category: string; emoji: string; img: string
}

const items: CultureItem[] = [
  { id: "pounamu", name: "毛利绿玉 Pounamu", nameEn: "Māori Greenstone Pounamu",
    desc: "新西兰翡翠，毛利文化的灵魂之石。每块绿玉都有独一无二的纹理和色泽，象征力量、和平与永恒。", descEn: "NZ jade, the spiritual gem of Māori culture. Each piece has unique texture representing strength, peace, and eternity.",
    price: "NZ$89起", category: "文创", emoji: "🟢", img: "https://images.unsplash.com/photo-1584657257642-c44234bb8cbd?w=400&h=300&fit=crop" },
  { id: "weaving", name: "毛利手工编织", nameEn: "Māori Weaving",
    desc: "传承千年的Harakeke亚麻编织技艺，每件作品独一无二。从Kete篮子到传统服饰，凝聚毛利智慧。", descEn: "Ancient Harakeke flax weaving technique. From Kete baskets to traditional garments, each piece embodies Māori wisdom.",
    price: "NZ$55起", category: "文创", emoji: "🧶", img: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=400&h=300&fit=crop" },
  { id: "skincare", name: "地热护肤系列", nameEn: "Geothermal Skincare",
    desc: "富含罗托鲁瓦地热矿物质的护肤品。天然硫磺和硅质成分深层滋养，帮皮肤回到最佳状态。", descEn: "Skincare enriched with Rotorua's geothermal minerals. Natural sulphur and silica nourish deeply.",
    price: "NZ$35起", category: "特产", emoji: "🧴", img: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&h=300&fit=crop" },
  { id: "hangi-spice", name: "Hangi 地热烤肉料", nameEn: "Hangi Seasoning",
    desc: "重现毛利地热盛宴的灵魂香料。带回Rotorua的味道，在家也能做出地道的Hangi风味大餐。", descEn: "The soul spice of Māori Hangi feasts. Bring the taste of Rotorua home for an authentic Hangi experience.",
    price: "NZ$18", category: "美食", emoji: "🌶️", img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop" },
  { id: "carving", name: "毛利骨雕摆件", nameEn: "Māori Bone Carving",
    desc: "鹿骨手工雕刻，Koru蕨叶螺旋、Manaia守护神等传统毛利图腾。每件都是独一无二的艺术品。", descEn: "Hand-carved bone with traditional Māori motifs—Koru spiral, Manaia guardian. Each piece is a unique artwork.",
    price: "NZ$120起", category: "文创", emoji: "🦴", img: "https://images.unsplash.com/photo-1578301978018-300c9f1c290c?w=400&h=300&fit=crop" },
  { id: "merino", name: "美利奴羊毛围巾", nameEn: "Merino Scarf",
    desc: "新西兰美利奴羊毛，融入毛利编织纹样。轻暖柔软，是旅途中最温暖的纪念。", descEn: "Pure NZ Merino wool with Māori weaving patterns. Lightweight, warm, and soft—the warmest souvenir from your journey.",
    price: "NZ$79", category: "纪念品", emoji: "🧣", img: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=300&fit=crop" },
  { id: "honey", name: "麦卢卡蜂蜜", nameEn: "Mānuka Honey",
    desc: "新西兰国宝级蜂蜜。UMF 10+活性抗菌，天然抵御力。纯正麦卢卡，每一勺都是大自然的馈赠。", descEn: "NZ's treasured honey. UMF 10+ active antibacterial. Pure Mānuka, every spoonful is nature's gift.",
    price: "NZ$45", category: "特产", emoji: "🍯", img: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=300&fit=crop" },
  { id: "kiwi", name: "几维鸟毛绒公仔", nameEn: "Kiwi Plush Toy",
    desc: "新西兰国鸟几维鸟造型，超萌软糯手感。带一只回家，把新西兰的小精灵留在身边。", descEn: "Super soft NZ kiwi bird plush toy. Take home New Zealand's beloved icon.",
    price: "NZ$29", category: "纪念品", emoji: "🐥", img: "https://images.unsplash.com/photo-1590099033615-be195f8d9d31?w=400&h=300&fit=crop" },
]

const cultureTabs = ["全部", "文创", "特产", "美食", "纪念品"]
const cultureTabsEn = ["All", "Cultural", "Specialty", "Food", "Souvenirs"]

export default function CulturePage() {
  const navigate = useNavigate()
  const { td, lang } = useI18n()
  const { favorites, toggleFav } = useFavorites()
  const [catTab, setCatTab] = useState("全部")

  return (
    <div className="h-full flex flex-col bg-white">
      {/* ===== Header ===== */}
      <div className="flex items-center justify-between px-4 pt-3 pb-2 border-b border-border/30 shrink-0">
        <div>
          <h1 className="font-display font-bold text-base">{td("特色商品", "Culture & Souvenirs")}</h1>
          <p className="text-[10px] text-muted-foreground">{td("把Rotorua带回家", "Take Rotorua home")}</p>
        </div>
      </div>

      <main className="flex-1 overflow-y-auto pb-20">
        {/* ===== Hero Banner ===== */}
        <div className="mx-4 mt-3 relative h-40 overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-emerald-700 opacity-80" />
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.3'%3E%3Cpath d='M30 5L37 20L55 22L40 33L44 50L30 41L16 50L20 33L5 22L23 20Z'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "40px 40px"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent p-4 flex flex-col justify-end">
            <div className="notch mb-1.5" />
            <h2 className="text-white font-display font-bold text-lg">{td("罗托鲁瓦伴手礼", "Rotorua Souvenirs")}</h2>
            <p className="text-white/60 text-[11px] mt-0.5">{td("从绿玉到麦卢卡，每一件都是新西兰的味道", "From greenstone to Mānuka, every piece tells a story")}</p>
          </div>
        </div>

        {/* ===== Category Tabs ===== */}
        <div className="px-4 pt-4 pb-2">
          <div className="flex items-center gap-4 border-b border-border/40">
            {(lang === "zh" ? cultureTabs : cultureTabsEn).map((tab, i) => (
              <button key={tab} onClick={() => setCatTab(cultureTabs[i])}
                className={`text-xs font-medium pb-2 transition-all ${
                  catTab === cultureTabs[i]
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground"
                }`}>
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* ===== Product Grid ===== */}
        <div className="px-4 pb-6">
          <div className="grid grid-cols-2 gap-3">
            {items.filter(item => catTab === "全部" || item.category === catTab).map(item => (
              <button key={item.id} onClick={() => navigate(`/culture/product/${item.id}`)}
                className="nz-card bg-white border border-border/20 text-left active:scale-[0.97] transition-all">
                <div className="relative">
                  <SafeImage src={item.img} alt="" className="w-full h-32 object-cover" />
                  <button onClick={e => { e.stopPropagation(); toggleFav(item.id) }}
                    className={`absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center backdrop-blur-sm ${
                      favorites.includes(item.id) ? "bg-red-50 text-red-400" : "bg-white/60 text-muted-foreground"
                    }`}>
                    <Heart className={`w-3 h-3 ${favorites.includes(item.id) ? "fill-current" : ""}`} />
                  </button>
                  <span className="absolute top-2 left-2 bg-white/80 text-[9px] font-semibold px-1.5 py-0.5 rounded-md text-foreground/70">
                    {item.category}
                  </span>
                </div>
                <div className="p-2.5">
                  <h3 className="text-xs font-semibold leading-tight line-clamp-1">{td(item.name, item.nameEn)}</h3>
                  <p className="text-[10px] text-muted-foreground mt-0.5 line-clamp-2">{td(item.desc, item.descEn)}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs font-bold text-primary">{item.price}</span>
                    <span className="text-[10px] font-medium text-primary flex items-center gap-0.5">
                      {td("查看", "View")} <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ===== Stories Section ===== */}
        <div className="px-4 pb-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="notch" />
            <h2 className="section-title">{td("文化故事", "Cultural Stories")}</h2>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { id: "creation-myth",
                titleCn: "毛利创世神话：天父地母之分离",
                titleEn: "The Separation of Ranginui and Papatūānuku",
                excerptCn: "在毛利传说中，天父Ranginui和地母Papatūānuku紧紧拥抱，他们的孩子渴望光明……",
                excerptEn: "In the beginning, Ranginui (Sky Father) and Papatūānuku (Earth Mother) embraced in darkness. Their children longed for light..."
              },
              { id: "haka-story",
                titleCn: "哈卡战舞：新西兰的灵魂之舞",
                titleEn: "Haka: The Soul of New Zealand",
                excerptCn: "哈卡不只是战舞，它是毛利人表达情感的力量——从欢迎客人到婚礼庆典，从体育赛场到国葬仪式……",
                excerptEn: "Haka is more than a war dance—it's how Māori express emotion, from welcoming guests to celebrating weddings, from sports fields to state funerals..."
              },
            ].map(story => (
              <button key={story.id} onClick={() => navigate(`/culture/story/${story.id}`)}
                className="bg-muted/50 rounded-lg overflow-hidden active:scale-[0.98] transition-all text-left">
                <div className="flex">
                  <div className="w-20 h-20 bg-gradient-to-b from-primary/20 to-accent/10 flex items-center justify-center shrink-0">
                    <span className="text-3xl opacity-30">📖</span>
                  </div>
                  <div className="p-3 flex-1 min-w-0">
                    <h3 className="text-xs font-semibold leading-snug line-clamp-2">{td(story.titleCn, story.titleEn)}</h3>
                    <p className="text-[10px] text-foreground/60 mt-1 leading-relaxed line-clamp-2">{td(story.excerptCn, story.excerptEn)}</p>
                    <span className="text-[10px] text-primary font-medium mt-1.5 flex items-center gap-0.5">
                      {td("阅读更多", "Read more")} <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
