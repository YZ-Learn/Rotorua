import { useNavigate } from "react-router-dom"
import { ArrowLeft, TrendingUp, Building, Lightbulb, Leaf } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/useI18n"

const projects = [
  { icon: "🏨", title: "高端度假酒店开发", titleEn: "Luxury Resort Development", desc: "罗托鲁瓦湖滨地块，规划建设150间客房五星级度假酒店，配套温泉SPA中心。", descEn: "Lakefront site for a 150-room 5-star resort with thermal spa.", status: "招商中", statusEn: "Open", budget: "预估 NZ$50M", budgetEn: "Est. NZ$50M" },
  { icon: "♨️", title: "地热能源综合利用", titleEn: "Geothermal Energy Park", desc: "利用罗托鲁瓦丰富地热资源，建设集发电、供暖、温泉旅游于一体的综合项目。", descEn: "Integrated geothermal power, heating & tourism project.", status: "规划中", statusEn: "Planning", budget: "预估 NZ$30M", budgetEn: "Est. NZ$30M" },
  { icon: "🎭", title: "毛利文化体验中心", titleEn: "Māori Cultural Centre", desc: "新建世界级毛利文化展示与表演中心，含博物馆、剧场、手工艺工坊和餐厅。", descEn: "World-class Māori cultural centre with museum, theatre & workshops.", status: "招商中", statusEn: "Open", budget: "预估 NZ$20M", budgetEn: "Est. NZ$20M" },
  { icon: "🚲", title: "山地自行车公园扩建", titleEn: "MTB Park Expansion", desc: "在现有红木森林步道基础上扩建30公里国际标准赛道，配套服务中心和租赁站。", descEn: "30km expansion of world-class MTB trails with service centre.", status: "招商中", statusEn: "Open", budget: "预估 NZ$8M", budgetEn: "Est. NZ$8M" },
  { icon: "🍖", title: "地热美食工坊", titleEn: "Geothermal Food Hub", desc: "集合毛利地热烹饪体验、本地农产品加工与新派新西兰美食餐厅的美食综合体。", descEn: "Māori geothermal cooking, local produce & modern NZ cuisine hub.", status: "种子轮", statusEn: "Seed", budget: "预估 NZ$5M", budgetEn: "Est. NZ$5M" },
]

const advantages = [
  { icon: "📈", title: "旅游增长强劲", titleEn: "Strong Tourism Growth", desc: "罗托鲁瓦年接待游客超350万人次，中国市场增长最快", descEn: "3.5M+ visitors annually, fastest growth from China" },
  { icon: "🏗️", title: "政府支持", titleEn: "Government Backing", desc: "RotoruaNZ 政府控股，提供税收优惠和一站式审批服务", descEn: "Council-backed with tax incentives & streamlined approvals" },
  { icon: "🌏", title: "国际枢纽", titleEn: "Global Gateway", desc: "奥克兰2.5小时车程，直飞澳大利亚和太平洋岛屿", descEn: "2.5h from Auckland, direct flights to Australia & Pacific" },
]

export default function InvestPage() {
  const nav = useNavigate()
  const { td, lang } = useI18n()
  return (
    <div className="h-full flex flex-col bg-background">
      <header className="flex items-center gap-3 px-4 pt-3 pb-2 bg-white border-b border-border/50 shrink-0">
        <button onClick={() => nav(-1)} className="p-1 -ml-1"><ArrowLeft className="w-5 h-5" /></button>
        <h1 className="font-display font-bold text-base">{lang === "zh" ? "项目招商" : "Investment"}</h1>
      </header>
      <main className="flex-1 overflow-y-auto pb-6">
        <div className="px-4 pt-4 pb-3">
          <div className="h-28 bg-gradient-to-br from-primary to-primary/70 rounded-xl p-4 flex items-end">
            <div>
              <Badge className="bg-white/20 text-white border-0 mb-1 text-[10px]">🤝 Investment</Badge>
              <h2 className="text-white font-display font-bold text-lg">{lang === "zh" ? "投资罗托鲁瓦" : "Invest in Rotorua"}</h2>
              <p className="text-white/70 text-xs">{lang === "zh" ? "携手共赢新西兰旅游黄金赛道" : "Partner with us in NZ's tourism gold rush"}</p>
            </div>
          </div>
        </div>
        <div className="px-4 pb-3">
          <h3 className="font-display font-semibold text-sm mb-3">{lang === "zh" ? "招商项目" : "Open Projects"}</h3>
          <div className="space-y-3">
            {projects.map((p, i) => (
              <Card key={i} className="active:scale-[0.98]">
                <CardContent className="p-3.5">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{p.icon}</span>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display font-semibold text-sm">{td(p.title, p.titleEn)}</h4>
                      <p className="text-[10px] text-muted-foreground mt-1">{td(p.desc, p.descEn)}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge className="text-[9px] px-2 py-0.5 bg-amber-50 text-amber-700 border-0">{td(p.status, p.statusEn)}</Badge>
                        <span className="text-[10px] font-medium text-primary">{td(p.budget, p.budgetEn)}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="px-4">
          <h3 className="font-display font-semibold text-sm mb-3">{lang === "zh" ? "投资优势" : "Why Invest"}</h3>
          <div className="space-y-2">
            {advantages.map((a, i) => (
              <div key={i} className="bg-white rounded-xl border border-border/50 p-3 flex items-center gap-3">
                <span className="text-xl">{a.icon}</span>
                <div>
                  <p className="text-xs font-medium">{td(a.title, a.titleEn)}</p>
                  <p className="text-[10px] text-muted-foreground">{td(a.desc, a.descEn)}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-primary/5 rounded-xl p-4 text-center">
            <p className="text-xs text-primary font-medium mb-2">{lang === "zh" ? "对以上项目感兴趣？" : "Interested in these projects?"}</p>
            <Button size="sm" variant="outline" className="text-xs">{lang === "zh" ? "联系我们" : "Contact Us"}</Button>
          </div>
        </div>
      </main>
    </div>
  )
}
