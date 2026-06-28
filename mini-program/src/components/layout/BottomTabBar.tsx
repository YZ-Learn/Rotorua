import { Home, Map, Palette, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { useI18n } from "@/lib/useI18n"

export interface TabItem {
  id: string
  label: string
  icon: React.ReactNode
}

export const tabs: TabItem[] = [
  { id: "travel", label: "旅游", icon: <Home className="w-5 h-5" /> },
  { id: "map", label: "地图", icon: <Map className="w-5 h-5" /> },
  { id: "culture", label: "特色", icon: <Palette className="w-5 h-5" /> },
  { id: "profile", label: "我的", icon: <User className="w-5 h-5" /> },
]

interface Props {
  activeTab: string
  onTabChange: (id: string) => void
}

export default function BottomTabBar({ activeTab, onTabChange }: Props) {
  const { t } = useI18n()
  const labels: Record<string, string> = {
    travel: t("nav.travel"),
    map: t("nav.map"),
    culture: t("nav.culture"),
    profile: t("nav.profile"),
  }

  return (
    <nav className="tab-bar">
      {tabs.map((tab) => (
        <button key={tab.id} onClick={() => onTabChange(tab.id)}
          className={cn("tab-item", activeTab === tab.id ? "active" : "inactive")}>
          <div className={cn("transition-colors", activeTab === tab.id ? "text-primary" : "text-muted-foreground")}>
            {tab.icon}
          </div>
          <span className="text-[10px] leading-none">{labels[tab.id]}</span>
        </button>
      ))}
    </nav>
  )
}
