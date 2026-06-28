import { useNavigate } from "react-router-dom"
import { ArrowLeft, Plane, Bus, Car, Info } from "lucide-react"
import { useI18n } from "@/lib/useI18n"

export default function GettingHerePage() {
  const navigate = useNavigate()
  const { td, lang } = useI18n()

  return (
    <div className="h-full flex flex-col bg-white">
      <div className="flex items-center gap-3 px-4 pt-3 pb-2 border-b border-border/30 shrink-0">
        <button onClick={() => navigate(-1)} className="p-1 -ml-1">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="font-display font-bold text-base">{td("如何到达罗托鲁瓦", "Getting to Rotorua")}</h1>
      </div>

      <main className="flex-1 overflow-y-auto pb-8">
        {/* Plane */}
        <section className="px-4 pt-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Plane className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="font-display font-semibold text-sm">{td("✈️ 乘飞机", "✈️ By Air")}</h2>
              <p className="text-[11px] text-muted-foreground">{td("最快的方式", "The fastest way")}</p>
            </div>
          </div>

          <div className="relative h-44 bg-muted rounded-lg overflow-hidden mb-4">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl mb-2">✈️</div>
                <p className="text-sm font-semibold text-foreground/60">Rotorua Airport (ROT)</p>
                <p className="text-[11px] text-muted-foreground">{td("距市中心约10分钟车程", "Approx. 10 min drive to city")}</p>
              </div>
            </div>
            {/* Route line */}
            <svg className="absolute bottom-3 left-4 right-4 h-8" viewBox="0 0 300 30">
              <line x1="20" y1="15" x2="280" y2="15" stroke="#3C8637" strokeWidth="1" strokeDasharray="4,4" />
              <circle cx="20" cy="15" r="4" fill="#3C8637" />
              <circle cx="150" cy="15" r="3" fill="#3C8637" fillOpacity="0.5" />
              <circle cx="280" cy="15" r="4" fill="#3C8637" />
              <text x="20" y="28" fontSize="8" fill="#8C8C8C">AKL</text>
              <text x="140" y="28" fontSize="8" fill="#8C8C8C">WLG</text>
              <text x="268" y="28" fontSize="8" fill="#8C8C8C">CHC</text>
            </svg>
          </div>

          <div className="space-y-2">
            {[
              { from: "奥克兰 Auckland", time: "50分钟", freq: td("每日多班", "Multiple daily") },
              { from: "惠灵顿 Wellington", time: "1小时15分", freq: td("每日4班", "4 daily") },
              { from: "基督城 Christchurch", time: "1小时45分", freq: td("每日3班", "3 daily") },
            ].map(route => (
              <div key={route.from} className="flex items-center justify-between bg-muted/50 rounded-lg px-3.5 py-3">
                <div>
                  <p className="text-xs font-medium">{route.from}</p>
                  <p className="text-[10px] text-muted-foreground">{route.freq}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-semibold text-primary">{route.time}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Car/Bus */}
        <section className="px-4 pt-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Car className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="font-display font-semibold text-sm">{td("🚗 自驾 / 巴士", "🚗 Drive / Bus")}</h2>
              <p className="text-[11px] text-muted-foreground">{td("沿途风景本身也是旅程", "The journey is part of the experience")}</p>
            </div>
          </div>
          <div className="space-y-2">
            {[
              { from: "奥克兰 Auckland", time: "3h 车程", detail: td("经SH1 + SH29", "Via SH1 + SH29") },
              { from: "陶波 Taupō", time: "1h", detail: td("经SH1向北", "SH1 northbound") },
              { from: "汉密尔顿 Hamilton", time: "1.5h", detail: td("经SH1向南", "SH1 southbound") },
              { from: "陶朗加 Tauranga", time: "1h", detail: td("经SH36", "Via SH36") },
            ].map(route => (
              <div key={route.from} className="flex items-center justify-between bg-muted/50 rounded-lg px-3.5 py-3">
                <div>
                  <p className="text-xs font-medium">{route.from}</p>
                  <p className="text-[10px] text-muted-foreground">{route.detail}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-semibold text-primary">{route.time}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bus info */}
        <section className="px-4 pt-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Bus className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="font-display font-semibold text-sm">{td("🚌 长途巴士", "🚌 Intercity Bus")}</h2>
            </div>
          </div>
          <div className="bg-muted/50 rounded-lg p-4">
            <p className="text-xs leading-relaxed">
              {td(
                "InterCity 和 ManaBus 运营从奥克兰、惠灵顿、陶波和陶朗加出发的定期巴士线路到罗托鲁瓦。罗托鲁瓦的 isite 游客信息中心是主要巴士车站。",
                "InterCity and ManaBus operate regular services to Rotorua from Auckland, Wellington, Taupō, and Tauranga. The Rotorua i-SITE visitor centre is the main bus terminal."
              )}
            </p>
          </div>
        </section>

        {/* Tip */}
        <div className="mx-4 mt-6 bg-amber-50 border border-amber-200 rounded-lg p-3.5 flex gap-2.5">
          <Info className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-[11px] text-amber-700 leading-relaxed">
            {td(
              "罗托鲁瓦机场（ROT）距市中心约10分钟车程。机场有出租车和接驳车服务。从奥克兰自驾约3小时。",
              "Rotorua Airport (ROT) is approx. 10 min from the city centre. Taxis and shuttles available. Auckland to Rotorua is approx. 3 hours drive."
            )}
          </p>
        </div>
      </main>
    </div>
  )
}
