import { useNavigate } from "react-router-dom"
import { ArrowLeft, Sun, Cloud, Wind, Snowflake } from "lucide-react"
import { useI18n } from "@/lib/useI18n"

const seasons = [
  {
    icon: "☀️", cn: "夏季", en: "Summer",
    months: "12月 - 2月 | Dec - Feb",
    temp: "20°C - 28°C",
    vibes: ["地热景点全天开放", "湖泊水上活动旺季", "夜晚温泉观星"],
    vibesEn: ["Geothermal sites open late", "Lake activities at peak", "Hot pool stargazing"],
    color: "from-amber-50 to-yellow-100",
    border: "border-amber-200"
  },
  {
    icon: "🍂", cn: "秋季", en: "Autumn",
    months: "3月 - 5月 | Mar - May",
    temp: "10°C - 20°C",
    vibes: ["游客较少，体验更宁静", "红木森林秋色如画", "徒步和山地车最佳季节"],
    vibesEn: ["Fewer crowds, peaceful", "Redwoods in autumn colors", "Best for hiking & MTB"],
    color: "from-orange-50 to-red-100",
    border: "border-orange-200"
  },
  {
    icon: "❄️", cn: "冬季", en: "Winter",
    months: "6月 - 8月 | Jun - Aug",
    temp: "5°C - 12°C",
    vibes: ["温泉体验最佳季节", "Matariki毛利新年庆典", "地热蒸汽景观最梦幻"],
    vibesEn: ["Best for hot springs", "Matariki Māori New Year", "Most dramatic steam scenes"],
    color: "from-blue-50 to-sky-100",
    border: "border-blue-200"
  },
  {
    icon: "🌸", cn: "春季", en: "Spring",
    months: "9月 - 11月 | Sep - Nov",
    temp: "8°C - 18°C",
    vibes: ["花园和公园鲜花盛开", "瀑布水量充沛", "户外活动全面恢复"],
    vibesEn: ["Gardens in full bloom", "Waterfalls at their best", "Outdoor activities return"],
    color: "from-pink-50 to-purple-100",
    border: "border-purple-200"
  },
]

export default function BestTimePage() {
  const navigate = useNavigate()
  const { td, toggle: toggleLang, lang } = useI18n()

  return (
    <div className="h-full flex flex-col bg-white">
      <div className="flex items-center gap-3 px-4 pt-3 pb-2 border-b border-border/30 shrink-0">
        <button onClick={() => navigate(-1)} className="p-1 -ml-1">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="font-display font-bold text-base">{td("最佳旅行季节", "Best time to visit")}</h1>
      </div>

      <main className="flex-1 overflow-y-auto pb-8">
        {/* Hero */}
        <div className="mx-4 mt-4 mb-5">
          <div className="relative h-36 bg-gradient-to-br from-dark to-primary/80 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <Sun className="w-12 h-12 text-white/10" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent p-5 flex flex-col justify-end">
              <div className="notch mb-1.5" />
              <h2 className="text-white font-display font-bold text-lg">{td("罗托鲁瓦全年皆宜", "Rotorua, a year-round destination")}</h2>
              <p className="text-white/60 text-[11px] mt-0.5">
                {td("每个季节都有独特魅力", "Each season offers something unique")}
              </p>
            </div>
          </div>
        </div>

        {/* Seasons */}
        <div className="px-4 space-y-4">
          {seasons.map(s => (
            <div key={s.cn} className={`rounded-lg border ${s.border} ${s.color} overflow-hidden`}>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{s.icon}</span>
                    <div>
                      <h3 className="font-display font-semibold text-sm">{td(s.cn, s.en)}</h3>
                      <p className="text-[10px] text-muted-foreground">{s.months}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold">{s.temp}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 mt-2">
                  {(lang === "zh" ? s.vibes : s.vibesEn).map((v, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                      <span className="text-[11px] text-foreground/70">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tip */}
        <div className="mx-4 mt-6 bg-primary/5 border border-primary/20 rounded-lg p-3.5">
          <p className="text-[11px] text-primary/80 leading-relaxed">
            {td(
              "小贴士：罗托鲁瓦的地热景点全年开放，冬季泡温泉最爽，夏季水上活动最嗨。Matariki毛利新年（6-7月）是年度盛事！",
              "Tip: Geothermal sites are open year-round. Winter is best for hot springs, summer for water activities. Matariki (Jun-Jul) is a must-see!"
            )}
          </p>
        </div>
      </main>
    </div>
  )
}
