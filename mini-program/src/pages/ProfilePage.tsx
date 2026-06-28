import { useNavigate } from "react-router-dom"
import { useState, useMemo } from "react"
import { Settings, ChevronRight, Heart, Clock, Ticket, Star, User } from "lucide-react"
import SafeImage from "@/components/ui/SafeImage"
import { useFavorites } from "@/lib/useFavorites"
import { useI18n } from "@/lib/useI18n"
import { catBlocks, foodItems, eventItems, stayItems, type AttractionItem } from "@/data/attractions"

interface OrderItem {
  id: string; productName: string; productEn: string; image: string
  price: string; date: string; status: "paid" | "completed" | "pending"; quantity: number
}

const mockOrders: OrderItem[] = [
  { id: "RO20260627001", productName: "怀奥塔普地热世界", productEn: "Wai-O-Tapu", image: "/images/waio-1.jpg", price: "NZ$45", date: "2026-06-27", status: "paid", quantity: 2 },
  { id: "RO20260627002", productName: "蒂普亚毛利文化村", productEn: "Te Puia", image: "/images/tepuia-1.jpg", price: "NZ$60", date: "2026-06-28", status: "completed", quantity: 1 },
  { id: "RO20260625003", productName: "Hangi 地热大餐", productEn: "Hangi Feast", image: "/images/hangi-1.jpg", price: "NZ$65", date: "2026-06-25", status: "completed", quantity: 3 },
]

const orderTabs = ["all", "pending", "paid", "done"]
const orderTabKeys: Record<string, string> = { all: "全部", pending: "待付款", paid: "已付款", done: "已完成" }
const orderTabKeysEn: Record<string, string> = { all: "All", pending: "Pending", paid: "Paid", done: "Done" }
const statusColors: Record<string, string> = { pending: "text-amber-600 bg-amber-50", paid: "text-green-600 bg-green-50", completed: "text-blue-600 bg-blue-50" }

export default function ProfilePage() {
  const navigate = useNavigate()
  const { favorites, toggleFav } = useFavorites()
  const { t, td, lang } = useI18n()
  const [orderTab, setOrderTab] = useState("all")
  const [showFav, setShowFav] = useState(false)

  const allItemsMap = useMemo(() => {
    const m = new Map<string, AttractionItem>()
    for (const block of catBlocks)
      for (const item of block.items) m.set(item.id, item)
    for (const item of [...foodItems, ...eventItems, ...stayItems]) m.set(item.id, item)
    return m
  }, [])

  const statusLabel = (s: string) => lang === "zh" ? 
    ({ paid: "已付款", completed: "已完成", pending: "待付款" }[s] || s) :
    ({ paid: "Paid", completed: "Done", pending: "Pending" }[s] || s)

  return (
    <div className="h-full flex flex-col bg-white">
      {/* ===== Header ===== */}
      <div className="flex items-center justify-between px-4 pt-3 pb-2 border-b border-border/30 shrink-0">
        <h1 className="font-display font-bold text-base">{t("profile.title")}</h1>
        <button onClick={() => navigate("/settings")} className="text-muted-foreground">
          <Settings className="w-4 h-4" />
        </button>
      </div>

      <main className="flex-1 overflow-y-auto pb-20">
        {/* ===== User Card ===== */}
        <div className="mx-4 mt-4 mb-5 bg-gradient-to-br from-primary/10 via-primary/5 to-white border border-primary/10 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
              {t("profile.avatar") || "Y"}
            </div>
            <div>
              <h2 className="font-display font-semibold text-sm">{td("旅行者", "Traveller")}</h2>
              <p className="text-[10px] text-muted-foreground">{td("探索100%纯净新西兰", "Explore 100% Pure NZ")}</p>
            </div>
            <span className="ml-auto text-2xl opacity-20">🇳🇿</span>
          </div>
          <div className="flex gap-4 mt-3 pt-3 border-t border-primary/10">
            <div className="flex-1 text-center">
              <p className="font-display font-bold text-sm">{favorites.length}</p>
              <p className="text-[9px] text-muted-foreground">{t("profile.favorites")}</p>
            </div>
            <div className="flex-1 text-center">
              <p className="font-display font-bold text-sm">{mockOrders.length}</p>
              <p className="text-[9px] text-muted-foreground">{t("profile.orders")}</p>
            </div>
            <div className="flex-1 text-center">
              <p className="font-display font-bold text-sm">2</p>
              <p className="text-[9px] text-muted-foreground">{td("天数", "Days")}</p>
            </div>
          </div>
        </div>

        {/* ===== Quick Links ===== */}
        <div className="px-4 mb-5 flex gap-2.5">
          {[
            { icon: Heart, label: td("我的收藏", "Favorites"), action: () => setShowFav(!showFav) },
            { icon: Ticket, label: td("我的订单", "Orders") },
            { icon: Star, label: td("旅行计划", "Trip Plan") },
          ].map(link => (
            <button key={link.label} onClick={() => link.action?.()}
              className="flex-1 flex flex-col items-center gap-1.5 bg-muted/50 rounded-lg py-3 active:scale-95 transition-all">
              <link.icon className="w-4 h-4 text-primary" />
              <span className="text-[10px] font-medium text-foreground/70">{link.label}</span>
            </button>
          ))}
        </div>

        {/* ===== Favorites Sheet ===== */}
        {showFav && (
          <div className="mx-4 mb-5 bg-muted/30 rounded-lg p-4 border border-border/20">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-semibold flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-red-400" /> {td("我的收藏", "Favorites")}
                <span className="text-[10px] text-muted-foreground font-normal">({favorites.length})</span>
              </h3>
              <button onClick={() => setShowFav(false)} className="text-muted-foreground">
                <ChevronRight className="w-3.5 h-3.5 rotate-90" />
              </button>
            </div>
            {favorites.length === 0 ? (
              <p className="text-[11px] text-muted-foreground text-center py-4">{td("还没有收藏", "No favorites yet")}</p>
            ) : (
              <div className="flex flex-col gap-2">
                {favorites.slice(0, 5).map(id => {
                  const item = allItemsMap.get(id)
                  if (!item) return null
                  return (
                    <button key={id} onClick={() => navigate(`/product/${id}`)}
                      className="flex items-center gap-2.5 bg-white rounded-lg p-2 active:scale-[0.98] transition-all text-left">
                      <SafeImage src={item.img} alt="" className="w-10 h-10 rounded object-cover shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-[11px] font-semibold truncate">{td(item.name, item.en)}</p>
                        <p className="text-[9px] text-muted-foreground">{item.price}</p>
                      </div>
                      <button onClick={e => { e.stopPropagation(); toggleFav(id) }}
                        className="text-red-300 text-[9px]">{td("移除", "Remove")}</button>
                    </button>
                  )
                })}
              </div>
            )}
          </div>
        )}

        {/* ===== Orders ===== */}
        <div className="px-4 mb-3">
          <div className="flex items-center gap-2 mb-2.5">
            <div className="notch" />
            <h2 className="section-title">{t("profile.orders")}</h2>
          </div>
          <div className="flex items-center gap-4 border-b border-border/30">
            {orderTabs.map(tab => (
              <button key={tab} onClick={() => setOrderTab(tab)}
                className={`text-[11px] font-medium pb-2 transition-all ${
                  orderTab === tab
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground"
                }`}>
                {td(orderTabKeys[tab], orderTabKeysEn[tab])}
              </button>
            ))}
          </div>
        </div>
        <div className="px-4 flex flex-col gap-2.5">
          {mockOrders.filter(o => orderTab === "all" || o.status === orderTab || (orderTab === "done" && o.status === "completed")).map(order => (
            <div key={order.id} className="bg-muted/50 rounded-lg overflow-hidden">
              <div className="flex">
                <SafeImage src={order.image} alt="" className="w-20 h-20 object-cover shrink-0" />
                <div className="p-2.5 flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div className="min-w-0 mr-2">
                      <h4 className="text-xs font-semibold truncate">{td(order.productName, order.productEn)}</h4>
                      <p className="text-[9px] text-muted-foreground mt-0.5">{order.date}</p>
                    </div>
                    <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-full shrink-0 ${statusColors[order.status]}`}>
                      {statusLabel(order.status)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-1.5">
                    <span className="text-[11px] font-semibold">{order.price} × {order.quantity}</span>
                    <span className="text-[10px] text-primary font-medium">{td("查看详情", "Details")}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button className="text-[11px] text-primary text-center py-3 font-medium">
            {t("profile.viewAllOrders")}
          </button>
        </div>

        {/* ===== Info footer ===== */}
        <div className="mx-4 mt-5 mb-4 bg-dark rounded-lg p-3.5">
          <p className="text-[10px] text-white/50 leading-relaxed">
            {td(
              "此应用是罗托鲁瓦旅游资讯小程序。数据来源于100% Pure New Zealand官方旅游网站。",
              "This app provides Rotorua travel information. Data sourced from 100% Pure New Zealand official tourism site."
            )}
          </p>
        </div>
      </main>
    </div>
  )
}
