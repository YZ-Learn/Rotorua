import { useNavigate } from "react-router-dom"
import { ArrowLeft, Star, MapPin, Phone, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/useI18n"

const rentals = [
  { name: "Avis 罗托鲁瓦门店", nameEn: "Avis Rotorua", loc: "罗托鲁瓦机场到达厅", locEn: "Rotorua Airport Arrivals", types: "轿车/SUV/MPV", typesEn: "Sedan/SUV/MPV", price: "NZ$45/天起", priceEn: "from NZ$45/day", phone: "+64 7-348-334", rating: 4.5 },
  { name: "Hertz 罗托鲁瓦", nameEn: "Hertz Rotorua", loc: "1200 Fenton Street", locEn: "1200 Fenton Street", types: "轿车/四驱/豪华车", typesEn: "Sedan/4WD/Luxury", price: "NZ$50/天起", priceEn: "from NZ$50/day", phone: "+64 7-348-339", rating: 4.6 },
  { name: "Budget 租车", nameEn: "Budget Car Rental", loc: "罗托鲁瓦机场", locEn: "Rotorua Airport", types: "经济型/家庭车", typesEn: "Economy/Family", price: "NZ$35/天起", priceEn: "from NZ$35/day", phone: "+64 7-348-340", rating: 4.4 },
  { name: "Go Rentals", nameEn: "Go Rentals", loc: "1260 Fenton Street", locEn: "1260 Fenton Street", types: "露营车/房车", typesEn: "Campervan/RV", price: "NZ$89/天起", priceEn: "from NZ$89/day", phone: "+64 7-348-341", rating: 4.7 },
  { name: "Omega 租车", nameEn: "Omega Rental Cars", loc: "罗托鲁瓦机场 + 市区门店", locEn: "Airport & City", types: "经济型/中型车", typesEn: "Economy/Midsize", price: "NZ$38/天起", priceEn: "from NZ$38/day", phone: "+64 7-348-342", rating: 4.3 },
]

const tips = [
  { icon: "🪪", title: "驾照要求", titleEn: "License", desc: "中国驾照+官方英文翻译件或国际驾照", descEn: "Chinese license + official English translation or IDP" },
  { icon: "🛣️", title: "靠左行驶", titleEn: "Drive Left", desc: "新西兰靠左行驶，与中国相反，需要适应", descEn: "NZ drives on the LEFT, opposite to China" },
  { icon: "⛽", title: "加油", titleEn: "Fuel", desc: "自助加油，先加油后付款，通常使用91号汽油", descEn: "Self-service, pay after filling, regular 91 octane" },
]

export default function RentalPage() {
  const nav = useNavigate()
  const { td, lang } = useI18n()
  return (
    <div className="h-full flex flex-col bg-background">
      <header className="flex items-center gap-3 px-4 pt-3 pb-2 bg-white border-b border-border/50 shrink-0">
        <button onClick={() => nav(-1)} className="p-1 -ml-1"><ArrowLeft className="w-5 h-5" /></button>
        <h1 className="font-display font-bold text-base">{lang === "zh" ? "租车" : "Car Rental"}</h1>
      </header>
      <main className="flex-1 overflow-y-auto pb-6">
        <div className="px-4 pt-4 pb-3">
          <div className="h-28 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-4 flex items-end">
            <div>
              <Badge className="bg-white/20 text-white border-0 mb-1 text-[10px]">🚗 Car Rental</Badge>
              <h2 className="text-white font-display font-bold text-lg">{lang === "zh" ? "罗托鲁瓦租车" : "Rent a Car in Rotorua"}</h2>
              <p className="text-white/70 text-xs">{lang === "zh" ? "自驾探索，自由自在" : "Explore freely with your own wheels"}</p>
            </div>
          </div>
        </div>
        <div className="px-4 space-y-3 pb-4">
          {rentals.map((r, i) => (
            <Card key={i} className="active:scale-[0.98]">
              <CardContent className="p-3.5">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-display font-semibold text-sm">{r.name}</h4>
                    <div className="flex items-center gap-1 mt-0.5">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span className="text-[10px] text-muted-foreground">{r.rating}</span>
                    </div>
                  </div>
                  <Badge variant="gold" className="text-[10px]">{td(r.price, r.priceEn)}</Badge>
                </div>
                <p className="text-[10px] text-muted-foreground mt-1.5 flex items-center gap-1"><MapPin className="w-3 h-3" /> {td(r.loc, r.locEn)}</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">{lang === "zh" ? "车型" : "Types"}: {td(r.types, r.typesEn)}</p>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-border/30">
                  <span className="text-[10px] text-muted-foreground flex items-center gap-1"><Phone className="w-3 h-3" /> {r.phone}</span>
                  <Button size="sm" variant="outline" className="text-[10px] h-7 px-3">{lang === "zh" ? "预约" : "Book"}</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="px-4">
          <h3 className="font-display font-semibold text-sm mb-3">{lang === "zh" ? "租车须知" : "Rental Tips"}</h3>
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
      </main>
    </div>
  )
}
