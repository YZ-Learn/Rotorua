import { useNavigate } from "react-router-dom"
import { ArrowLeft, Calendar, MapPin, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useI18n } from "@/lib/useI18n"

const events = [
  { date: "6月-7月", dateEn: "Jun-Jul", name: "Matariki 毛利新年庆典", nameEn: "Matariki Māori New Year", desc: "昴星团升起，烟花+灯笼+歌舞+美食集市", descEn: "Fireworks, lanterns, Kapa Haka & food markets", loc: "罗托鲁瓦湖滨", locEn: "Lake Rotorua", img: "" },
  { date: "5月", dateEn: "May", name: "罗托鲁瓦马拉松", nameEn: "Rotorua Marathon", desc: "环罗托鲁瓦湖，被誉为新西兰最美马拉松赛道", descEn: "Around the lake, NZ's most scenic marathon", loc: "政府花园出发", locEn: "Start at Government Gardens", img: "" },
  { date: "3月", dateEn: "Mar", name: "Crankworx 山地车节", nameEn: "Crankworx Rotorua", desc: "世界级山地自行车赛事，红木森林赛道", descEn: "World-class MTB event at Whakarewarewa Forest", loc: "法卡雷瓦雷瓦森林", locEn: "Whakarewarewa Forest", img: "" },
  { date: "全年", dateEn: "Year-round", name: "毛利文化表演", nameEn: "Māori Cultural Shows", desc: "每日多场，在蒂普亚和蒂帕图毛利村", descEn: "Daily shows at Te Puia & Te Patu Village", loc: "蒂普亚 / 蒂帕图", locEn: "Te Puia / Te Patu", img: "" },
  { date: "10月", dateEn: "Oct", name: "罗托鲁瓦美食节", nameEn: "Rotorua Food Festival", desc: "地热烹饪+本地农产品+毛利传统美食", descEn: "Geothermal cooking, local produce & Māori cuisine", loc: "政府花园", locEn: "Government Gardens", img: "" },
]

export default function EventsPage() {
  const nav = useNavigate()
  const { td, lang } = useI18n()
  return (
    <div className="h-full flex flex-col bg-background">
      <header className="flex items-center gap-3 px-4 pt-3 pb-2 bg-white border-b border-border/50 shrink-0">
        <button onClick={() => nav(-1)} className="p-1 -ml-1"><ArrowLeft className="w-5 h-5" /></button>
        <h1 className="font-display font-bold text-base">{lang === "zh" ? "近日活动" : "Upcoming Events"}</h1>
      </header>
      <main className="flex-1 overflow-y-auto pb-6">
        <div className="px-4 pt-4 pb-3">
          <div className="h-28 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl p-4 flex items-end">
            <div>
              <Badge className="bg-white/20 text-white border-0 mb-1 text-[10px]">📅 Events</Badge>
              <h2 className="text-white font-display font-bold text-lg">{lang === "zh" ? "罗托鲁瓦精彩活动" : "Rotorua Events"}</h2>
              <p className="text-white/70 text-xs">{lang === "zh" ? "全年不断的文化与自然盛宴" : "Year-round cultural & natural celebrations"}</p>
            </div>
          </div>
        </div>
        <div className="px-4 space-y-3">
          {events.map((e, i) => (
            <Card key={i} className="cursor-pointer active:scale-[0.98]">
              <CardContent className="p-3.5">
                <div className="flex items-start gap-3">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex flex-col items-center justify-center shrink-0">
                    <span className="text-[9px] font-bold text-primary">{(e.dateEn || e.date).split("-")[0]}</span>
                    <span className="text-[8px] text-muted-foreground">{(e.dateEn || e.date).split("-").slice(-1)[0]}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display font-semibold text-sm">{td(e.name, e.nameEn)}</h4>
                    <p className="text-[10px] text-muted-foreground mt-1">{td(e.desc, e.descEn)}</p>
                    <div className="flex items-center gap-2 mt-1.5 text-[9px] text-muted-foreground">
                      <span className="flex items-center gap-0.5"><Calendar className="w-2.5 h-2.5" /> {td(e.date, e.dateEn)}</span>
                      <span className="flex items-center gap-0.5"><MapPin className="w-2.5 h-2.5" /> {td(e.loc, e.locEn)}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
