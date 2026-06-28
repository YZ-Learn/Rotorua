import { useNavigate } from "react-router-dom"
import { ArrowLeft, Clock, MapPin, Footprints } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useI18n } from "@/lib/useI18n"

const routes = [
  { days: "1日游", daysEn: "1 Day", title: "地热奇观一日游", titleEn: "Geothermal Wonders", stops: ["怀奥塔普地热世界", "蒂普亚毛利文化村", "波利尼西亚温泉"], stopsEn: ["Wai-O-Tapu", "Te Puia", "Polynesian Spa"], desc: "上午看间歇泉，下午泡温泉，体验最精华的罗托鲁瓦", descEn: "Morning geysers, afternoon hot springs — Rotorua's best", img: "" },
  { days: "2日游", daysEn: "2 Days", title: "文化与自然深度游", titleEn: "Culture & Nature Deep Dive", stops: ["Day 1: 蒂普亚 + 毛利文化村 + Hangi晚宴", "Day 2: 红木森林 + 罗托鲁瓦湖 + 地狱之门"], stopsEn: ["Day 1: Te Puia + Māori Village + Hangi Feast", "Day 2: Redwoods + Lake Rotorua + Hell's Gate"], desc: "两天时间，把毛利文化和自然奇观一网打尽", descEn: "Two days to experience Māori culture and natural wonders fully", img: "" },
  { days: "3日游", daysEn: "3 Days", title: "全家欢亲子路线", titleEn: "Family Adventure", stops: ["Day 1: 彩虹泉自然公园 + 波利尼西亚温泉", "Day 2: 爱歌顿皇家农场 + 蒂普亚", "Day 3: 红木森林Treewalk + 罗托鲁瓦湖游船"], stopsEn: ["Day 1: Rainbow Springs + Polynesian Spa", "Day 2: Agrodome + Te Puia", "Day 3: Redwoods Treewalk + Lake Cruise"], desc: "适合带孩子的家庭，既有玩又有学", descEn: "Perfect for families, fun and educational", img: "" },
  { days: "周末", daysEn: "Weekend", title: "周末微度假", titleEn: "Weekend Getaway", stops: ["周五晚: 入住湖边酒店 + 温泉", "周六: 蒂普亚 + 红木森林徒步 + Hangi晚宴", "周日: 怀奥塔普 + 回程"], stopsEn: ["Fri: Lakeside hotel + hot springs", "Sat: Te Puia + Redwoods + Hangi Feast", "Sun: Wai-O-Tapu + Departure"], desc: "周末两天搞定，不用请假也能玩好", descEn: "No leave needed, pack your weekend with adventure", img: "" },
]

export default function RoutesPage() {
  const nav = useNavigate()
  const { td, lang } = useI18n()
  return (
    <div className="h-full flex flex-col bg-background">
      <header className="flex items-center gap-3 px-4 pt-3 pb-2 bg-white border-b border-border/50 shrink-0">
        <button onClick={() => nav(-1)} className="p-1 -ml-1"><ArrowLeft className="w-5 h-5" /></button>
        <h1 className="font-display font-bold text-base">{lang === "zh" ? "路线推荐" : "Travel Routes"}</h1>
      </header>
      <main className="flex-1 overflow-y-auto pb-6">
        <div className="px-4 pt-4 pb-3">
          <div className="h-28 bg-gradient-to-br from-green-600 to-emerald-700 rounded-xl p-4 flex items-end">
            <div>
              <Badge className="bg-white/20 text-white border-0 mb-1 text-[10px]">🗺️ Routes</Badge>
              <h2 className="text-white font-display font-bold text-lg">{lang === "zh" ? "精选旅行路线" : "Curated Itineraries"}</h2>
              <p className="text-white/70 text-xs">{lang === "zh" ? "从一日到周末，总有一条适合你" : "From day trips to weekends — find your perfect route"}</p>
            </div>
          </div>
        </div>
        <div className="px-4 space-y-3">
          {routes.map((r, i) => (
            <Card key={i} className="cursor-pointer active:scale-[0.98]">
              <CardContent className="p-3.5">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="text-[9px] px-2 py-0.5 bg-primary/10 text-primary">{td(r.days, r.daysEn)}</Badge>
                </div>
                <h4 className="font-display font-semibold text-sm">{td(r.title, r.titleEn)}</h4>
                <p className="text-[10px] text-muted-foreground mt-1">{td(r.desc, r.descEn)}</p>
                <div className="mt-2 space-y-0.5">
                  {(lang === "zh" ? r.stops : r.stopsEn).map((s, j) => (
                    <div key={j} className="flex items-center gap-1.5 text-[9px] text-muted-foreground">
                      <Footprints className="w-2.5 h-2.5 shrink-0 text-primary" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
