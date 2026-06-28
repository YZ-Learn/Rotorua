import { useNavigate } from "react-router-dom"
import { ArrowLeft, Globe, MessageCircle, Info, Smartphone, Mail } from "lucide-react"
import { useI18n } from "@/lib/useI18n"
import { Badge } from "@/components/ui/badge"

export default function SettingsPage() {
  const navigate = useNavigate()
  const { t, lang, toggle } = useI18n()

  return (
    <div className="h-full flex flex-col bg-background">
      <header className="shrink-0 bg-white border-b border-border/50">
        <div className="flex items-center gap-3 px-4 pt-3 pb-2">
          <button onClick={() => navigate(-1)} className="p-1 -ml-1">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="font-display font-bold text-base">{t("profile.settings")}</h1>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto">
        {/* 语言设置 */}
        <section className="px-4 pt-4 pb-2">
          <h3 className="text-xs text-muted-foreground font-medium mb-2 uppercase tracking-wider">
            {lang === "zh" ? "偏好设置" : "Preferences"}
          </h3>
          <div className="bg-white rounded-xl border border-border/50 overflow-hidden">
            <div className="flex items-center gap-3 px-4 py-3.5">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <Globe className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">{lang === "zh" ? "语言" : "Language"}</p>
                <p className="text-[10px] text-muted-foreground">{lang === "zh" ? "当前：中文" : "Current: English"}</p>
              </div>
              <button onClick={toggle}
                className="text-xs font-medium text-primary bg-primary/5 px-3 py-1.5 rounded-full">
                {lang === "zh" ? "切换至 English" : "切换到 中文"}
              </button>
            </div>
          </div>
        </section>

        {/* 客服 */}
        <section className="px-4 pb-2">
          <h3 className="text-xs text-muted-foreground font-medium mb-2 uppercase tracking-wider">
            {lang === "zh" ? "客服支持" : "Support"}
          </h3>
          <div className="bg-white rounded-xl border border-border/50 overflow-hidden divide-y divide-border/30">
            <div className="flex items-center gap-3 px-4 py-3.5">
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                <Mail className="w-4 h-4 text-blue-500" />
              </div>
              <div>
                <p className="text-sm font-medium">{lang === "zh" ? "电子邮箱" : "Email"}</p>
                <p className="text-xs text-muted-foreground">hello@rotoruanz.app</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-3.5">
              <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-green-500" />
              </div>
              <div>
                <p className="text-sm font-medium">{lang === "zh" ? "在线客服" : "Live Chat"}</p>
                <p className="text-xs text-muted-foreground">
                  {lang === "zh" ? "工作日 9:00-18:00（新西兰时间）" : "Weekdays 9:00-18:00 (NZ Time)"}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 关于 */}
        <section className="px-4 pb-6">
          <h3 className="text-xs text-muted-foreground font-medium mb-2 uppercase tracking-wider">
            {lang === "zh" ? "关于" : "About"}
          </h3>
          <div className="bg-white rounded-xl border border-border/50 p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">R</span>
              </div>
              <div>
                <p className="font-display font-bold text-base">RotoruaNZ</p>
                <Badge variant="gold" className="text-[9px] px-1.5 py-0">v1.0.0</Badge>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {lang === "zh"
                ? "一款探索新西兰罗托鲁瓦的旅游小程序。涵盖景点、文化、美食、住宿、地图导航等全方位旅游信息，助你规划完美的罗托鲁瓦之旅。"
                : "A travel mini-program for exploring Rotorua, New Zealand. Covering attractions, culture, food, accommodation, map navigation and more — helping you plan the perfect Rotorua trip."}
            </p>
            <div className="flex items-center gap-4 mt-3 pt-3 border-t border-border/30">
              <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                <Smartphone className="w-3 h-3" /> v1.0.0
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                <Info className="w-3 h-3" />
                {lang === "zh" ? "演示版本" : "Demo Version"}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
