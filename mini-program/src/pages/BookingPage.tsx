import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { ArrowLeft, Minus, Plus, CalendarDays, User, Phone, Mail, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getAttractionById } from "@/data/attractions"
import { useI18n } from "@/lib/useI18n"

export default function BookingPage() {
  const { productId } = useParams()
  const navigate = useNavigate()
  const { t, td } = useI18n()
  const item = productId ? getAttractionById(productId) : undefined

  const today = new Date().toISOString().split("T")[0]

  const [date, setDate] = useState(today)
  const [adults, setAdults] = useState(1)
  const [children, setChildren] = useState(0)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [note, setNote] = useState("")

  if (!item) {
    return (
      <div className="h-full flex flex-col bg-background">
        <header className="flex items-center gap-3 px-4 pt-3 pb-2 bg-white border-b border-border/50">
          <button onClick={() => navigate(-1)} className="p-1 -ml-1">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="font-display font-bold text-base">{t("header.booking")}</h1>
        </header>
        <main className="flex-1 flex flex-col items-center justify-center text-muted-foreground px-6">
          <p className="text-xs">{t("detail.notFound")}</p>
          <Button className="mt-4" size="sm" onClick={() => navigate("/")}>Back</Button>
        </main>
      </div>
    )
  }

  const totalPrice = item.priceValue
    ? item.priceValue * (adults + children * 0.5)
    : 0

  const handleSubmit = () => {
    if (!name || !phone) {
      alert(t("booking.required"))
      return
    }
    const orderId = "RO" + Date.now().toString(36).toUpperCase()
    navigate(`/order/success/${orderId}`)
  }

  const isFree = item.isFree

  return (
    <div className="h-full flex flex-col bg-background">
      <header className="flex items-center gap-3 px-4 pt-3 pb-2 bg-white border-b border-border/50 shrink-0">
        <button onClick={() => navigate(-1)} className="p-1 -ml-1">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="font-display font-bold text-base">{t("header.booking")}</h1>
      </header>

      <main className="flex-1 overflow-y-auto">
        {/* ===== 产品摘要 ===== */}
        <div className="px-4 py-3.5 bg-white flex items-center gap-3 border-b border-border/30">
          <div className="w-16 h-12 rounded-lg overflow-hidden shrink-0">
            <img src={item.img} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="font-display font-semibold text-sm truncate">{item.name}</h2>
            <p className="text-[11px] text-muted-foreground truncate">{item.en}</p>
          </div>
          <div className="text-right shrink-0">
            <p className="font-display font-bold text-sm text-primary">
              {isFree ? t("detail.free") : item.price}
            </p>
            {item.r && (
              <Badge variant="gold" className="text-[10px] px-1.5 py-0 mt-0.5">★ {item.r}</Badge>
            )}
          </div>
        </div>

        {/* ===== 表单区域 ===== */}
        <div className="px-4 py-4 space-y-4">
          <div>
            <label className="flex items-center gap-1.5 text-xs font-medium text-foreground/70 mb-2">
              <CalendarDays className="w-3.5 h-3.5 text-primary" />
              {t("booking.date")}
            </label>
            <input type="date" value={date} min={today}
              onChange={e => setDate(e.target.value)}
              className="w-full h-10 px-3 bg-muted/40 rounded-lg text-xs outline-none border border-border/40 focus:border-primary transition-colors" />
          </div>

          <div>
            <label className="flex items-center gap-1.5 text-xs font-medium text-foreground/70 mb-2">
              <User className="w-3.5 h-3.5 text-primary" />
              {t("booking.people")}
            </label>
            <div className="flex items-center gap-4">
              <div className="flex-1 bg-muted/40 rounded-lg px-3 py-2.5 flex items-center justify-between">
                <span className="text-xs text-foreground/70">{t("booking.adult")}</span>
                <div className="flex items-center gap-3">
                  <button onClick={() => setAdults(Math.max(1, adults - 1))}
                    className="w-6 h-6 rounded-full bg-white border border-border flex items-center justify-center active:scale-90 transition-all">
                    <Minus className="w-3 h-3 text-muted-foreground" />
                  </button>
                  <span className="text-sm font-medium w-4 text-center">{adults}</span>
                  <button onClick={() => setAdults(Math.min(20, adults + 1))}
                    className="w-6 h-6 rounded-full bg-white border border-border flex items-center justify-center active:scale-90 transition-all">
                    <Plus className="w-3 h-3 text-muted-foreground" />
                  </button>
                </div>
              </div>
              <div className="flex-1 bg-muted/40 rounded-lg px-3 py-2.5 flex items-center justify-between">
                <span className="text-xs text-foreground/70">{t("booking.child")}</span>
                <div className="flex items-center gap-3">
                  <button onClick={() => setChildren(Math.max(0, children - 1))}
                    className="w-6 h-6 rounded-full bg-white border border-border flex items-center justify-center active:scale-90 transition-all">
                    <Minus className="w-3 h-3 text-muted-foreground" />
                  </button>
                  <span className="text-sm font-medium w-4 text-center">{children}</span>
                  <button onClick={() => setChildren(Math.min(10, children + 1))}
                    className="w-6 h-6 rounded-full bg-white border border-border flex items-center justify-center active:scale-90 transition-all">
                    <Plus className="w-3 h-3 text-muted-foreground" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border/40" />

          <div>
            <label className="flex items-center gap-1.5 text-xs font-medium text-foreground/70 mb-2">
              <User className="w-3.5 h-3.5 text-primary" />
              {t("booking.contact")} <span className="text-red-400">*</span>
            </label>
            <input type="text" value={name} onChange={e => setName(e.target.value)}
              placeholder={t("booking.contact")}
              className="w-full h-10 px-3 bg-muted/40 rounded-lg text-xs outline-none border border-border/40 focus:border-primary transition-colors" />
          </div>

          <div>
            <label className="flex items-center gap-1.5 text-xs font-medium text-foreground/70 mb-2">
              <Phone className="w-3.5 h-3.5 text-primary" />
              {t("booking.phone")} <span className="text-red-400">*</span>
            </label>
            <input type="tel" value={phone} onChange={e => setPhone(e.target.value)}
              placeholder={t("booking.phone")}
              className="w-full h-10 px-3 bg-muted/40 rounded-lg text-xs outline-none border border-border/40 focus:border-primary transition-colors" />
          </div>

          <div>
            <label className="flex items-center gap-1.5 text-xs font-medium text-foreground/70 mb-2">
              <Mail className="w-3.5 h-3.5 text-primary" />
              {t("booking.email")}
            </label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)}
              placeholder="example@email.com"
              className="w-full h-10 px-3 bg-muted/40 rounded-lg text-xs outline-none border border-border/40 focus:border-primary transition-colors" />
          </div>

          <div>
            <label className="flex items-center gap-1.5 text-xs font-medium text-foreground/70 mb-2">
              <MessageSquare className="w-3.5 h-3.5 text-primary" />
              {t("booking.note")}
            </label>
            <textarea value={note} onChange={e => setNote(e.target.value)}
              placeholder={t("booking.note")} rows={2}
              className="w-full px-3 py-2 bg-muted/40 rounded-lg text-xs outline-none border border-border/40 focus:border-primary transition-colors resize-none" />
          </div>
        </div>

        {/* ===== 底部提交栏 ===== */}
        <div className="sticky bottom-0 bg-white border-t border-border/50 px-4 py-3 mt-2">
          {!isFree && totalPrice > 0 && (
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-xs text-muted-foreground">
                {adults}{t("booking.adult")} + {children}{t("booking.child")}
              </span>
              <span className="font-display font-bold text-base text-primary">
                {t("booking.pricePrefix")} {totalPrice}
              </span>
            </div>
          )}
          <Button className="w-full h-11 text-sm font-semibold" onClick={handleSubmit}>
            {isFree ? t("booking.free") : `${t("booking.submit")} NZ$${totalPrice || 0}`}
          </Button>
          <p className="text-[10px] text-muted-foreground text-center mt-1.5">{t("booking.mock")}</p>
        </div>
      </main>
    </div>
  )
}
