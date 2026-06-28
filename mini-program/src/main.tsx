import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom/client"
import { createHashRouter, RouterProvider, Outlet, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { FavProvider } from "@/lib/useFavorites"
import { I18nProvider } from "@/lib/useI18n"
import { ToastProvider } from "@/lib/useToast"
import "./index.css"

import TabLayout from "@/components/layout/TabLayout"
import SplashPage from "@/pages/SplashPage"
import TravelPage from "@/pages/TravelPage"
import MapPage from "@/pages/MapPage"
import CulturePage from "@/pages/CulturePage"
import ProfilePage from "@/pages/ProfilePage"
import ProductDetailPage from "@/pages/ProductDetailPage"
import SearchPage from "@/pages/SearchPage"
import CultureProductDetailPage from "@/pages/CultureProductDetailPage"
import SettingsPage from "@/pages/SettingsPage"
import BookingPage from "@/pages/BookingPage"
import StoryDetailPage from "@/pages/StoryDetailPage"
import OrderSuccessPage from "@/pages/OrderSuccessPage"
import FlightsPage from "@/pages/sub/FlightsPage"
import EventsPage from "@/pages/sub/EventsPage"
import RoutesPage from "@/pages/sub/RoutesPage"
import InvestPage from "@/pages/sub/InvestPage"
import RentalPage from "@/pages/sub/RentalPage"
import CategoryPage from "@/pages/CategoryPage"
import GettingHerePage from "@/pages/GettingHerePage"
import GettingAroundPage from "@/pages/GettingAroundPage"
import BestTimePage from "@/pages/BestTimePage"

function AppShell() {
  const [splash, setSplash] = useState(true)
  const location = useLocation()

  if (splash) {
    return (
      <div className="h-full w-full max-w-md mx-auto relative overflow-hidden bg-black"
        style={{ height: "100dvh" }}>
        <SplashPage onDone={() => setSplash(false)}
          onNavigate={(productId: string) => {
            setSplash(false)
            // 直接操作 hash，绕过 React Router 的 navigate API
            window.location.hash = `/product/${productId}`
          }} />
      </div>
    )
  }

  return (
    <div className="h-full w-full max-w-md mx-auto relative bg-background shadow-xl overflow-hidden"
      style={{ height: "100dvh" }}>
      <AnimatePresence mode="wait">
        <motion.div key={location.pathname}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.15 }}
          className="h-full overflow-hidden">
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

const router = createHashRouter([
  {
    path: "/",
    element: <AppShell />,
    children: [
      {
        element: <TabLayout />,
        children: [
          { index: true, element: <TravelPage /> },
          { path: "map", element: <MapPage /> },
          { path: "culture", element: <CulturePage /> },
          { path: "profile", element: <ProfilePage /> },
        ],
      },
      { path: "product/:id", element: <ProductDetailPage /> },
      { path: "booking/:productId", element: <BookingPage /> },
      { path: "order/success/:id", element: <OrderSuccessPage /> },
      { path: "search", element: <SearchPage /> },
      { path: "culture/story/:id", element: <StoryDetailPage /> },
      { path: "culture/product/:id", element: <CultureProductDetailPage /> },
      { path: "settings", element: <SettingsPage /> },
      { path: "flights", element: <FlightsPage /> },
      { path: "events", element: <EventsPage /> },
      { path: "routes", element: <RoutesPage /> },
      { path: "invest", element: <InvestPage /> },
      { path: "rental", element: <RentalPage /> },
      { path: "category/:id", element: <CategoryPage /> },
      { path: "getting-here", element: <GettingHerePage /> },
      { path: "getting-around", element: <GettingAroundPage /> },
      { path: "best-time", element: <BestTimePage /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nProvider>
      <ToastProvider>
        <FavProvider>
          <RouterProvider router={router} />
        </FavProvider>
      </ToastProvider>
    </I18nProvider>
  </React.StrictMode>
)
