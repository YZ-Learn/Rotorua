import { useNavigate } from "react-router-dom"
import { ArrowLeft, Bus, Car, Bike, Info, CarTaxiFront } from "lucide-react"
import { useI18n } from "@/lib/useI18n"

export default function GettingAroundPage() {
  const navigate = useNavigate()
  const { td, lang } = useI18n()

  const options = [
    {
      icon: Car, label: td("租车自驾", "Rent a Car"),
      desc: td("罗托鲁瓦景点分散，租车是最灵活的方式。各大租车公司在机场和市中心都设有服务点。", "Best way to explore Rotorua's spread-out attractions. Major rental companies at airport and city centre."),
      detail: td("约NZ$60起/天", "From NZ$60/day"),
    },
    {
      icon: Bus, label: td("城市巴士", "City Bus"),
      desc: td("Baybus 运营本地公交线路，覆盖主要景点。可购买Bee Card乘车更优惠。", "Baybus operates local routes covering major attractions. Get a Bee Card for discounted fares."),
      detail: td("单程NZ$2-4", "Single trip NZ$2-4"),
    },
    {
      icon: CarTaxiFront, label: td("出租车 / Uber", "Taxi / Ride-share"),
      desc: td("市区内打车方便，Uber和当地出租车均可使用。从市中心到大部分景点不超过15分钟。", "Taxis and Uber available in the city. Most attractions are within 15 min from city centre."),
      detail: td("起步约NZ$3.50", "Flagfall approx NZ$3.50"),
    },
    {
      icon: Bike, label: td("自行车", "Bicycle"),
      desc: td("罗托鲁瓦有完善的自行车道网络。可在市区多家店铺租用普通自行车或电动自行车。", "Rotorua has an excellent cycle network. Rent standard or e-bikes from various shops in town."),
      detail: td("约NZ$30起/天", "From NZ$30/day"),
    },
  ]

  return (
    <div className="h-full flex flex-col bg-white">
      <div className="flex items-center gap-3 px-4 pt-3 pb-2 border-b border-border/30 shrink-0">
        <button onClick={() => navigate(-1)} className="p-1 -ml-1">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="font-display font-bold text-base">{td("本地交通", "Getting Around")}</h1>
      </div>

      <main className="flex-1 overflow-y-auto pb-8">
        <div className="px-4 pt-4">
          <div className="relative h-36 bg-gradient-to-br from-dark via-dark to-primary/30 rounded-lg overflow-hidden mb-5">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center opacity-20">
                <div className="text-6xl">🚌</div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent p-5 flex flex-col justify-end">
              <div className="notch mb-1.5" />
              <h2 className="text-white font-display font-bold text-lg">{td("玩遍罗托鲁瓦", "Getting Around Rotorua")}</h2>
              <p className="text-white/50 text-[11px] mt-0.5">
                {td("多种方式探索这座城市", "Multiple ways to explore the city")}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {options.map(o => (
              <div key={o.label} className="bg-muted/50 rounded-lg p-3.5 flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <o.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold">{o.label}</h3>
                    <span className="text-[10px] text-primary font-medium">{o.detail}</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-0.5 leading-relaxed">{o.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 bg-amber-50 border border-amber-200 rounded-lg p-3.5 flex gap-2.5">
            <Info className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <p className="text-[11px] text-amber-700 leading-relaxed">
              {td(
                "罗托鲁瓦的 isite 游客信息中心（1167 Fenton St）可以获取免费地图、巴士时刻表和旅游咨询。",
                "Rotorua i-SITE visitor centre (1167 Fenton St) offers free maps, bus timetables, and travel advice."
              )}
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
