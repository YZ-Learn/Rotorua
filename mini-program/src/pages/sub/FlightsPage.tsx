import { useNavigate } from "react-router-dom"
import { ArrowLeft, Plane, Clock, MapPin, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useI18n } from "@/lib/useI18n"

const climateTips = [
  { season: "夏季 (12-2月)", seasonEn: "Summer (Dec-Feb)", temp: "20-28°C", tip: "短袖短裤+防晒霜+泳衣（泡温泉用）", tipEn: "T-shirts, shorts, sunscreen & swimwear for hot springs" },
  { season: "秋季 (3-5月)", seasonEn: "Autumn (Mar-May)", temp: "10-22°C", tip: "长袖+薄外套+牛仔裤，早晚温差大", tipEn: "Long sleeves, light jacket & jeans — big temperature swings" },
  { season: "冬季 (6-8月)", seasonEn: "Winter (Jun-Aug)", temp: "5-15°C", tip: "保暖外套+毛衣+围巾，温泉必泡", tipEn: "Warm coat, sweater & scarf — perfect for hot springs" },
  { season: "春季 (9-11月)", seasonEn: "Spring (Sep-Nov)", temp: "10-20°C", tip: "夹克+长裤+防水外套，时有阵雨", tipEn: "Jacket, pants & waterproof — occasional showers" },
]

const flightInfo = [
  { airline: "Air New Zealand", from: "奥克兰 (AKL)", fromEn: "Auckland (AKL)", to: "罗托鲁瓦 (ROT)", toEn: "Rotorua (ROT)", duration: "50分钟", durationEn: "50 min", freq: "每日 5 班", freqEn: "5 daily", price: "NZ$89起", priceEn: "from NZ$89" },
  { airline: "Air New Zealand", from: "基督城 (CHC)", fromEn: "Christchurch (CHC)", to: "罗托鲁瓦 (ROT)", toEn: "Rotorua (ROT)", duration: "1小时30分", durationEn: "1h 30min", freq: "每日 2 班", freqEn: "2 daily", price: "NZ$129起", priceEn: "from NZ$129" },
  { airline: "Jetstar", from: "奥克兰 (AKL)", fromEn: "Auckland (AKL)", to: "罗托鲁瓦 (ROT)", toEn: "Rotorua (ROT)", duration: "55分钟", durationEn: "55 min", freq: "每日 3 班", freqEn: "3 daily", price: "NZ$59起", priceEn: "from NZ$59" },
]

const tips = [
  { icon: "🛂", title: "提前到达", titleEn: "Arrival", desc: "国内航班建议提前45分钟到达机场", descEn: "Arrive 45 min before domestic flights" },
  { icon: "🚗", title: "机场交通", titleEn: "Transport", desc: "机场距市中心约10分钟车程，有出租车和穿梭巴士", descEn: "10 min to city center, taxis & shuttles available" },
  { icon: "🏢", title: "机场设施", titleEn: "Facilities", desc: "咖啡厅、租车柜台、纪念品店", descEn: "Cafe, car rental, souvenir shop" },
]

export default function FlightsPage() {
  const nav = useNavigate()
  const { t: _, td, lang } = useI18n()
  return (
    <div className="h-full flex flex-col bg-background">
      <header className="flex items-center gap-3 px-4 pt-3 pb-2 bg-white border-b border-border/50 shrink-0">
        <button onClick={() => nav(-1)} className="p-1 -ml-1"><ArrowLeft className="w-5 h-5" /></button>
        <div>
          <h1 className="font-display font-bold text-base">{lang === "zh" ? "机票" : "Flights"}</h1>
          <p className="text-[10px] text-muted-foreground">Rotorua Airport (ROT)</p>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto pb-6">
        <div className="px-4 pt-4 pb-3">
          <div className="h-28 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-4 flex items-end">
            <div>
              <Badge className="bg-white/20 text-white border-0 mb-1 text-[10px]">✈️ Rotorua Airport</Badge>
              <h2 className="text-white font-display font-bold text-lg">{lang === "zh" ? "飞往罗托鲁瓦" : "Fly to Rotorua"}</h2>
              <p className="text-white/70 text-xs">{lang === "zh" ? "新西兰北岛温泉之都" : "Geothermal capital of New Zealand"}</p>
            </div>
          </div>
        </div>
        <div className="px-4 pb-3">
          <h3 className="font-display font-semibold text-sm mb-3">{lang === "zh" ? "航班信息" : "Flight Info"}</h3>
          <div className="space-y-3">
            {flightInfo.map((f, i) => (
              <Card key={i} className="cursor-pointer active:scale-[0.98]">
                <CardContent className="p-3.5">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="gold" className="text-[10px]">{f.airline}</Badge>
                    <span className="text-[10px] text-muted-foreground">{f.freqEn || f.freq}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <span>{f.from}</span> <span className="text-muted-foreground">→</span> <span>{f.to}</span>
                  </div>
                  <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {td(f.duration, f.durationEn)}</span>
                    <span className="font-bold text-primary text-sm">{td(f.price, f.priceEn)}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="px-4">
          <h3 className="font-display font-semibold text-sm mb-3">{lang === "zh" ? "出行提示" : "Travel Tips"}</h3>
          <div className="space-y-2">
            {tips.map((t, i) => (
              <div key={i} className="bg-white rounded-xl border border-border/50 p-3 flex items-center gap-3">
                <span className="text-xl">{t.icon}</span>
                <div>
                  <p className="text-xs font-medium">{td(t.title, t.titleEn)}</p>
                  <p className="text-[10px] text-muted-foreground">{td(t.desc, t.descEn)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 衣物建议 */}
        <div className="px-4 mt-4">
          <h3 className="font-display font-semibold text-sm mb-3">{lang === "zh" ? "衣物建议" : "What to Pack"}</h3>
          <div className="bg-white rounded-xl border border-border/50 overflow-hidden divide-y divide-border/30">
            {climateTips.map((t, i) => (
              <div key={i} className="p-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium">{td(t.season, t.seasonEn)}</span>
                  <span className="text-[10px] text-primary font-semibold">{t.temp}</span>
                </div>
                <p className="text-[10px] text-muted-foreground">👕 {td(t.tip, t.tipEn)}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 text-[10px] text-muted-foreground bg-blue-50/50 rounded-xl p-3">
            💡 {lang === "zh" ? "罗托鲁瓦地热区硫磺味较重，建议不要穿浅色衣物游览地热景区" : "Geothermal areas smell strongly of sulfur — avoid light clothes when visiting thermal sites"}
          </div>
        </div>
      </main>
    </div>
  )
}
