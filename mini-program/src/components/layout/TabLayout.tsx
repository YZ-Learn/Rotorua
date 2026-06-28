import { useLocation, useNavigate, Outlet } from "react-router-dom"
import BottomTabBar from "./BottomTabBar"

const tabRoutes: Record<string, string> = {
  travel: "/",
  map: "/map",
  culture: "/culture",
  profile: "/profile",
}

export default function TabLayout() {
  const location = useLocation()
  const navigate = useNavigate()

  const activeTab = location.pathname === "/" ? "travel"
    : location.pathname.replace("/", "")

  return (
    <>
      <div className="h-full pb-[72px] overflow-hidden">
        <Outlet />
      </div>
      <BottomTabBar
        activeTab={activeTab}
        onTabChange={(id) => navigate(tabRoutes[id])}
      />
    </>
  )
}
