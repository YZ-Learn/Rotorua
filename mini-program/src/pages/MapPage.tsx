// Tab 2: 地图 — Leaflet 真实地图 + 漫画风滤镜
import { useState, useEffect, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import { MapPin, Navigation, ArrowRight, Filter } from "lucide-react"
import SafeImage from "@/components/ui/SafeImage"
import { Badge } from "@/components/ui/badge"
import { useI18n } from "@/lib/useI18n"
import { catBlocks, foodItems, eventItems, stayItems, type AttractionItem } from "@/data/attractions"

// Leaflet
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet"

// ============ 景点坐标 ============
interface MapItem extends AttractionItem {
  lat: number; lng: number; markerEmoji: string
}

const attractionCoords: Record<string, { lat: number; lng: number; emoji: string }> = {
  a1: { lat: -38.3563, lng: 176.3699, emoji: "🌋" },
  a2: { lat: -38.3580, lng: 176.3700, emoji: "🟢" },
  a3: { lat: -38.1610, lng: 176.2570, emoji: "💨" },
  a4: { lat: -38.3560, lng: 176.3690, emoji: "💧" },
  b1: { lat: -38.1610, lng: 176.2570, emoji: "🎭" },
  b2: { lat: -38.1350, lng: 176.2900, emoji: "🔥" },
  b3: { lat: -38.1600, lng: 176.2560, emoji: "💃" },
  b4: { lat: -38.1370, lng: 176.2490, emoji: "💃" },
  c1: { lat: -38.1780, lng: 176.2720, emoji: "🌲" },
  c2: { lat: -38.0800, lng: 176.2700, emoji: "🌊" },
  c3: { lat: -38.1265, lng: 176.1890, emoji: "🚵" },
  c4: { lat: -38.0700, lng: 176.2900, emoji: "🏝️" },
  d1: { lat: -38.1650, lng: 176.2600, emoji: "🌿" },
  d2: { lat: -38.1950, lng: 176.3800, emoji: "👹" },
  d3: { lat: -38.2940, lng: 176.2980, emoji: "💎" },
  d4: { lat: -38.2200, lng: 176.5060, emoji: "🌋" },
  d5: { lat: -38.2700, lng: 176.3300, emoji: "♨️" },
  d6: { lat: -38.1350, lng: 176.2450, emoji: "🏊" },
  f1: { lat: -38.1620, lng: 176.2580, emoji: "🍖" },
  f2: { lat: -38.1630, lng: 176.2590, emoji: "🥩" },
  e1: { lat: -38.1600, lng: 176.2565, emoji: "🤝" },
  e2: { lat: -38.0780, lng: 176.2680, emoji: "🎆" },
  e3: { lat: -38.0852, lng: 176.3261, emoji: "🛶" },
  s1: { lat: -38.1360, lng: 176.2500, emoji: "🏨" },
  s2: { lat: -38.1400, lng: 176.2530, emoji: "🛏️" },
  s3: { lat: -38.1350, lng: 176.2480, emoji: "🏨" },
  s4: { lat: -38.1390, lng: 176.2510, emoji: "🏨" },
  s5: { lat: -38.1633, lng: 176.2447, emoji: "🏕️" },
}

// 设施标注
const facilityPoints = [
  { id: "park1", name: "市中心停车场", nameEn: "City Centre Parking", lat: -38.1370, lng: 176.2520, emoji: "🅿️", cat: "parking" },
  { id: "park2", name: "湖滨停车场", nameEn: "Lakeside Parking", lat: -38.0830, lng: 176.2720, emoji: "🅿️", cat: "parking" },
  { id: "park3", name: "蒂普亚停车场", nameEn: "Te Puia Parking", lat: -38.1600, lng: 176.2560, emoji: "🅿️", cat: "parking" },
  { id: "charge1", name: "特斯拉超充站", nameEn: "Tesla Supercharger", lat: -38.1380, lng: 176.2480, emoji: "⚡", cat: "charging" },
  { id: "charge2", name: "Z 加油站", nameEn: "Z Energy Station", lat: -38.1410, lng: 176.2550, emoji: "⛽", cat: "charging" },
  { id: "charge3", name: "BP 加油站", nameEn: "BP Station", lat: -38.1450, lng: 176.2600, emoji: "⛽", cat: "charging" },
  { id: "toilet1", name: "游客中心卫生间", nameEn: "i-SITE Toilet", lat: -38.1365, lng: 176.2495, emoji: "🚻", cat: "restroom" },
  { id: "toilet2", name: "政府花园卫生间", nameEn: "Govt Gardens Toilet", lat: -38.1330, lng: 176.2530, emoji: "🚻", cat: "restroom" },
  { id: "toilet3", name: "湖滨卫生间", nameEn: "Lakeside Toilet", lat: -38.0820, lng: 176.2710, emoji: "🚻", cat: "restroom" },
  { id: "bus1", name: "罗托鲁瓦公交总站", nameEn: "Rotorua Bus Terminal", lat: -38.1365, lng: 176.2520, emoji: "🚌", cat: "transport" },
  { id: "bus2", name: "湖滨公交站", nameEn: "Lakeside Bus Stop", lat: -38.0840, lng: 176.2730, emoji: "🚌", cat: "transport" },
  { id: "rent1", name: "Avis 机场门店", nameEn: "Avis Airport", lat: -38.1430, lng: 176.2450, emoji: "🚗", cat: "rental" },
  { id: "rent2", name: "Hertz 租车", nameEn: "Hertz Rental", lat: -38.1375, lng: 176.2540, emoji: "🚗", cat: "rental" },
  { id: "rent3", name: "Budget 租车", nameEn: "Budget Rental", lat: -38.1420, lng: 176.2440, emoji: "🚗", cat: "rental" },
  { id: "rent4", name: "Go Rentals 房车", nameEn: "Go Rentals RV", lat: -38.1390, lng: 176.2570, emoji: "🚐", cat: "rental" },
]

const filterOptions = [
  { key: "all", labelKey: "map.filterAll", labelEn: "" },
  { key: "attraction", labelKey: "map.filterSpot", labelEn: "" },
  { key: "stay", labelKey: "map.filterStay", labelEn: "" },
  { key: "food", labelKey: "map.filterFood", labelEn: "" },
  { key: "parking", labelKey: "停车场", labelEn: "Parking" },
  { key: "charging", labelKey: "充电加油", labelEn: "Charging" },
  { key: "restroom", labelKey: "卫生间", labelEn: "Restrooms" },
  { key: "transport", labelKey: "公交线路", labelEn: "Public Transport" },
  { key: "rental", labelKey: "租车", labelEn: "Car Rental" },
]

const itemCategoryMap: Record<string, string> = {
  geothermal: "attraction", maori: "attraction", outdoor: "attraction", nature: "attraction",
  food: "food", events: "attraction", stay: "stay",
}

// 修复 Leaflet 默认图标
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
})

// 瓦片加载监听器
function TileLoadListener({ onLoad }: { onLoad: () => void }) {
  const map = useMap()
  useEffect(() => {
    let loaded = false
    let fallbackTimer: ReturnType<typeof setTimeout>
    const handleLoad = () => {
      if (!loaded) { loaded = true; onLoad() }
    }
    map.whenReady(() => {
      // 瓦片加载完成或超时 5s 都视为加载完成
      map.on('load', handleLoad)
      fallbackTimer = setTimeout(handleLoad, 5000)
    })
    return () => {
      map.off('load', handleLoad)
      clearTimeout(fallbackTimer)
    }
  }, [map, onLoad])
  return null
}

export default function MapPage() {
  const navigate = useNavigate()
  const { t, td, lang } = useI18n()
  const [activeFilter, setActiveFilter] = useState("all")
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [mapLoaded, setMapLoaded] = useState(false)

  const allItems = useMemo(() => {
    const m = new Map<string, MapItem>()
    for (const block of catBlocks)
      for (const item of block.items) {
        const coord = attractionCoords[item.id]
        if (coord) m.set(item.id, { ...item, lat: coord.lat, lng: coord.lng, markerEmoji: coord.emoji })
      }
    for (const item of [...foodItems, ...eventItems, ...stayItems]) {
      const coord = attractionCoords[item.id]
      if (coord) m.set(item.id, { ...item, lat: coord.lat, lng: coord.lng, markerEmoji: coord.emoji })
    }
    return m
  }, [])

  const selectedItem = selectedId ? allItems.get(selectedId) : null

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") return [...allItems.values(), ...facilityPoints]
    if (["parking", "charging", "restroom", "transport", "rental"].includes(activeFilter))
      return facilityPoints.filter(f => f.cat === activeFilter)
    return [...allItems.values()].filter(item => itemCategoryMap[item.category] === activeFilter)
  }, [activeFilter, allItems])

  const curFilter = filterOptions.find(f => f.key === activeFilter)

  return (
    <div className="h-full flex flex-col bg-background">
      <header className="pt-3 pb-2 bg-white border-b border-border/50 shrink-0">
        <div className="px-4 flex items-center justify-between mb-2">
          <h1 className="font-display font-bold text-base">{t("map.title")}</h1>
          <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
            <Navigation className="w-3 h-3" /> Rotorua
          </div>
        </div>
        <div className="px-4 flex gap-1.5 overflow-x-auto scrollbar-hide pb-1">
          {filterOptions.map(f => (
            <button key={f.key}
              onClick={() => { setActiveFilter(f.key); setSelectedId(null) }}
              className={`shrink-0 px-2.5 py-1 rounded-full text-[10px] font-medium border transition-all whitespace-nowrap ${
                activeFilter === f.key
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-muted-foreground border-border/50 hover:border-primary/30"
              }`}>
              {f.labelEn ? td(f.labelKey, f.labelEn) : t(f.labelKey)}
            </button>
          ))}
        </div>
      </header>

      <main className="flex-1 relative">
        <MapContainer
          center={[-38.1368, 176.255]}
          zoom={13}
          style={{ width: "100%", height: "100%" }}
          zoomControl={true}
          scrollWheelZoom={true}
        >
          {/* 加载态监听 */}
          <TileLoadListener onLoad={() => setMapLoaded(true)} />

          {/* 加载遮罩 */}
          {!mapLoaded && (
            <div className="absolute inset-0 z-[2000] bg-background flex flex-col items-center justify-center gap-3">
              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              <p className="text-xs text-muted-foreground">{t("map.loading")}</p>
            </div>
          )}

          {/* 漫画风图层 */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />

          {/* 所有标注点 */}
          {filteredItems.map((item: any) => {
            const isSelected = selectedId === item.id
            const emoji = item.markerEmoji || item.emoji || "📍"
            const icon = L.divIcon({
              className: "",
              html: `<div style="
                width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;
                background:${isSelected ? "#3C8637" : "white"};
                border:2px solid #3C8637;
                box-shadow:0 2px 8px rgba(0,0,0,0.25);
                font-size:16px;cursor:pointer;
                transform:${isSelected ? "scale(1.25)" : "scale(1)"};
                transition:transform 0.2s;
              ">${emoji}</div>`,
              iconSize: [34, 34],
              iconAnchor: [17, 17],
            })
            return (
              <Marker key={item.id} position={[item.lat, item.lng]} icon={icon}
                eventHandlers={{
                  click: () => setSelectedId(item.id === selectedId ? null : item.id)
                }}
              />
            )
          })}
        </MapContainer>

        {/* 漫画风 CSS 覆盖 */}
        <style>{`
          .leaflet-tile-pane { filter: saturate(1.2) contrast(1.05) brightness(1.05) !important; }
          .leaflet-control-zoom a { background: white !important; color: #3C8637 !important; border-color: #3C8637 !important; }
        `}</style>

        {/* 底部浮卡 */}
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-2 z-[1000] pointer-events-none">
          {selectedItem && selectedItem.markerEmoji ? (
            <div className="bg-white rounded-2xl shadow-xl border border-border/50 overflow-hidden animate-fade-in pointer-events-auto">
              <div className="flex items-stretch">
                <div className="w-24 h-24 shrink-0">
                  <SafeImage src={selectedItem.img} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 p-3 flex flex-col justify-between min-w-0">
                  <div>
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-xs">{selectedItem.markerEmoji}</span>
                      <Badge variant="gold" className="text-[9px] px-1.5 py-0">★ {selectedItem.r}</Badge>
                      <span className="text-[9px] text-muted-foreground">{selectedItem.duration}</span>
                    </div>
                    <h4 className="font-display font-semibold text-sm truncate">{td(selectedItem.name, selectedItem.en)}</h4>
                    <p className="text-[10px] text-muted-foreground truncate">{selectedItem.en}</p>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <span className="font-display font-semibold text-xs text-primary">{selectedItem.price}</span>
                    <div className="flex items-center gap-2">
                      <button onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${selectedItem.lat},${selectedItem.lng}`, "_blank")}
                        className="text-[10px] font-medium text-primary flex items-center gap-0.5">
                        🧭 {lang === "zh" ? "导航" : "Navigate"}
                      </button>
                      {'id' in selectedItem && (selectedItem as any).markerEmoji && (
                        <button onClick={() => navigate(`/product/${selectedItem.id}`)}
                          className="text-[10px] font-medium text-primary flex items-center gap-0.5">
                          {t("map.viewDetail")} <ArrowRight className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-border/50 p-4 pointer-events-auto">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  {filteredItems.length > 0 ? (
                    <>
                      <p className="text-xs text-muted-foreground">{t("map.clickHint")}</p>
                      <p className="font-display font-semibold text-sm mt-0.5">{filteredItems.length} {lang === "zh" ? "个标注点" : "markers"}</p>
                    </>
                  ) : (
                    <>
                      <p className="text-xs text-muted-foreground">{lang === "zh" ? "没有匹配的标注点" : "No matching markers"}</p>
                      <p className="font-display font-semibold text-sm mt-0.5">{t("map.filterAll")}</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
