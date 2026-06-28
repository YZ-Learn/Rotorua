import { useParams, useNavigate } from "react-router-dom"
import { useMemo } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle, ChevronRight } from "lucide-react"
import { useI18n } from "@/lib/useI18n"

export default function OrderSuccessPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { t } = useI18n()
  const mockPrice = useMemo(() => "NZ$ " + (Math.floor(Math.random() * 200) + 25), [])

  return (
    <div className="h-full flex flex-col bg-background">
      <header className="flex items-center gap-3 px-4 pt-3 pb-2 bg-white border-b border-border/50 shrink-0">
        <button onClick={() => navigate("/")} className="p-1 -ml-1">
          <span className="text-xs text-muted-foreground">{t("header.success")}</span>
        </button>
        <h1 className="font-display font-bold text-base mx-auto">{t("header.success")}</h1>
        <div className="w-10" />
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="relative mb-6">
          <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-green-500" />
          </div>
          <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center animate-pulse">
            <span className="text-[10px]">🎉</span>
          </div>
        </div>

        <h1 className="font-display font-bold text-xl text-foreground">{t("success.title")}</h1>
        <p className="text-muted-foreground text-sm mt-1">{t("success.subtitle")}</p>

        <div className="w-full mt-8 bg-white rounded-xl border border-border/50 p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-muted-foreground">{t("success.order")}</span>
            <span className="text-[11px] font-mono font-medium text-foreground/80">{id}</span>
          </div>
          <div className="border-t border-border/30" />
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-muted-foreground">{t("success.status")}</span>
            <span className="text-[11px] font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">✅ {t("success.paid")}</span>
          </div>
          <div className="border-t border-border/30" />
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-muted-foreground">{t("success.amount")}</span>
            <span className="text-sm font-display font-bold text-primary">{mockPrice}</span>
          </div>
        </div>

        <div className="w-full mt-4 bg-amber-50/50 rounded-xl border border-amber-200/50 p-3.5">
          <p className="text-[11px] font-medium text-amber-700 mb-1">📌 {t("success.tip")}</p>
        </div>

        <div className="flex flex-col gap-2.5 w-full mt-8">
          <Button className="w-full h-11" onClick={() => navigate("/")}>
            {t("success.continue")}
          </Button>
          <Button variant="outline" className="w-full h-10 text-xs" onClick={() => navigate("/profile")}>
            {t("success.viewOrders")} <ChevronRight className="w-3.5 h-3.5 ml-1" />
          </Button>
        </div>
      </main>
    </div>
  )
}
