import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

// ============ UI TEXT TRANSLATIONS ============
const zh: Record<string, string> = {
  "nav.travel": "旅游",
  "nav.map": "地图",
  "nav.culture": "特色",
  "nav.profile": "我的",
  "search.placeholder": "搜索",
  "header.travel": "旅游",
  "header.map": "探索地图",
  "header.culture": "特色 · 文化",
  "header.profile": "我的",
  "header.detail": "产品详情",
  "header.booking": "预订下单",
  "header.success": "预订结果",
  "banner.flights": "机票",
  "banner.events": "近日活动",
  "banner.routes": "路线推荐",
  "banner.invest": "项目招商",
  "rec.attractions": "景点",
  "rec.stays": "食宿",
  "rec.food": "美食",
  "rec.events": "活动",
  "rec.official": "官方精选",
  "block.geothermal": "地热温泉",
  "block.maori": "毛利文化",
  "block.outdoor": "户外探险",
  "block.nature": "自然风光",
  "detail.notFound": "未找到该产品",
  "detail.intro": "景点介绍",
  "detail.highlights": "必看亮点",
  "detail.map": "查看地图位置",
  "detail.free": "免费入场",
  "detail.book": "立即预订",
  "booking.date": "选择日期",
  "booking.people": "选择人数",
  "booking.adult": "成人",
  "booking.child": "儿童",
  "booking.contact": "联系人",
  "booking.phone": "手机号",
  "booking.email": "邮箱（选填）",
  "booking.note": "特殊要求（选填）",
  "booking.required": "请填写联系人和电话",
  "booking.submit": "确认支付",
  "booking.free": "确认预约（免费）",
  "booking.mock": "支付功能为模拟演示，点击即生成订单",
  "booking.pricePrefix": "NZ$",
  "booking.summary": "份",
  "success.title": "预订成功！",
  "success.subtitle": "感谢你的信任，Rotorua 期待你的到来",
  "success.order": "订单编号",
  "success.status": "订单状态",
  "success.paid": "已支付",
  "success.amount": "支付金额",
  "success.tip": "请凭订单编号到景区售票处兑换入场凭证。如需修改或取消订单，请在「我的」页面操作。",
  "success.continue": "继续探索 Rotorua",
  "success.viewOrders": "查看我的订单",
  "profile.orders": "我的订单",
  "profile.all": "全部",
  "profile.pending": "待支付",
  "profile.paid": "已支付",
  "profile.done": "已完成",
  "profile.empty": "暂无订单",
  "profile.goExplore": "去发现 Rotorua 的精彩体验吧",
  "profile.noPending": "没有待支付的订单",
  "profile.noPaid": "没有已支付的订单",
  "profile.noDone": "没有已完成的订单",
  "profile.fav": "我的收藏",
  "profile.history": "浏览历史",
  "profile.coupon": "优惠券",
  "profile.settings": "设置",
  "profile.service": "客服",
  "profile.about": "关于",
  "profile.statsOrder": "订单",
  "profile.statsFav": "收藏",
  "profile.statsView": "浏览",
  "profile.goShop": "去逛逛",
  "profile.viewAll": "查看全部",
  "map.title": "探索地图",
  "map.filterAll": "全部",
  "map.filterSpot": "景点",
  "map.filterStay": "住宿",
  "map.filterFood": "美食",
  "map.filterEvent": "活动",
  "map.summary": "共 {n} 个景点与设施",
  "map.filtered": "{n} 个 {cat} 点位",
  "map.clickHint": "点击地图标记",
  "map.viewDetail": "查看详情",
  "map.scale": "2km",
  "map.loading": "正在加载地图...",
  "culture.header": "特色 · 文化",
  "culture.subtitle": "Māori Culture",
  "culture.bannerBadge": "Māori Culture",
  "culture.bannerTitle": "千年传承的毛利文化",
  "culture.bannerDesc": "将 Rotorua 的灵魂与故事，带回家",
  "culture.title": "特色好物",
  "culture.all": "全部",
  "culture.stories": "文化故事",
  "culture.readMore": "阅读更多",
  "culture.view": "查看",
  "cat.geothermal": "地热温泉",
  "cat.maori": "毛利文化",
  "cat.outdoor": "户外探险",
  "cat.nature": "自然风光",
  "cat.food": "美食",
  "cat.events": "活动",
  "cat.stay": "住宿",
  "lang.switch": "中/EN",
  "lang.zh": "EN",
  "lang.en": "中",
}

const en: Record<string, string> = {
  "nav.travel": "Travel",
  "nav.map": "Map",
  "nav.culture": "Culture",
  "nav.profile": "Profile",
  "search.placeholder": "Search",
  "header.travel": "Travel",
  "header.map": "Explore Map",
  "header.culture": "Culture",
  "header.profile": "Profile",
  "header.detail": "Details",
  "header.booking": "Booking",
  "header.success": "Confirmation",
  "banner.flights": "Flights",
  "banner.events": "Events",
  "banner.routes": "Routes",
  "banner.invest": "Investment",
  "rec.attractions": "Attractions",
  "rec.stays": "Stays",
  "rec.food": "Food",
  "rec.events": "Activities",
  "rec.official": "Official Picks",
  "block.geothermal": "Geothermal Springs",
  "block.maori": "Māori Culture",
  "block.outdoor": "Outdoor Adventure",
  "block.nature": "Natural Scenery",
  "detail.notFound": "Product not found",
  "detail.intro": "Introduction",
  "detail.highlights": "Highlights",
  "detail.map": "View on Map",
  "detail.free": "Free Entry",
  "detail.book": "Book Now",
  "booking.date": "Select Date",
  "booking.people": "Group Size",
  "booking.adult": "Adults",
  "booking.child": "Children",
  "booking.contact": "Contact Name",
  "booking.phone": "Phone",
  "booking.email": "Email (optional)",
  "booking.note": "Special Requests (optional)",
  "booking.required": "Please fill in contact name and phone",
  "booking.submit": "Pay Now",
  "booking.free": "Confirm (Free)",
  "booking.mock": "Payment is simulated. Click to confirm.",
  "booking.pricePrefix": "NZ$",
  "booking.summary": " pax",
  "success.title": "Booking Confirmed!",
  "success.subtitle": "Thank you! Rotorua can't wait to welcome you.",
  "success.order": "Order ID",
  "success.status": "Status",
  "success.paid": "Paid",
  "success.amount": "Amount",
  "success.tip": "Use the order ID to redeem at the attraction. For changes, visit Profile.",
  "success.continue": "Explore More",
  "success.viewOrders": "My Orders",
  "profile.orders": "My Orders",
  "profile.all": "All",
  "profile.pending": "Pending",
  "profile.paid": "Paid",
  "profile.done": "Completed",
  "profile.empty": "No orders yet",
  "profile.goExplore": "Discover Rotorua's amazing experiences",
  "profile.noPending": "No pending orders",
  "profile.noPaid": "No paid orders",
  "profile.noDone": "No completed orders",
  "profile.fav": "Favorites",
  "profile.history": "History",
  "profile.coupon": "Coupons",
  "profile.settings": "Settings",
  "profile.service": "Service",
  "profile.about": "About",
  "profile.statsOrder": "Orders",
  "profile.statsFav": "Favorites",
  "profile.statsView": "Views",
  "profile.goShop": "Explore Now",
  "profile.viewAll": "View All",
  "map.title": "Explore Map",
  "map.filterAll": "All",
  "map.filterSpot": "Attractions",
  "map.filterStay": "Stays",
  "map.filterFood": "Food",
  "map.filterEvent": "Events",
  "map.summary": "{n} attractions & facilities",
  "map.filtered": "{n} {cat} points",
  "map.clickHint": "Tap a marker",
  "map.viewDetail": "View Details",
  "map.scale": "2km",
  "map.loading": "Loading map...",
  "culture.header": "Culture",
  "culture.subtitle": "Māori Culture",
  "culture.bannerBadge": "Māori Culture",
  "culture.bannerTitle": "1,000 Years of Māori Culture",
  "culture.bannerDesc": "Take the soul of Rotorua home",
  "culture.title": "Featured Items",
  "culture.all": "All",
  "culture.stories": "Cultural Stories",
  "culture.readMore": "Read More",
  "culture.view": "View",
  "cat.geothermal": "Geothermal",
  "cat.maori": "Māori Culture",
  "cat.outdoor": "Outdoor",
  "cat.nature": "Nature",
  "cat.food": "Food",
  "cat.events": "Events",
  "cat.stay": "Stay",
  "lang.switch": "中/EN",
  "lang.zh": "EN",
  "lang.en": "中",
}

type Lang = "zh" | "en"

interface I18nContextType {
  lang: Lang
  t: (key: string) => string
  td: (zhText: string, enText: string) => string
  tc: (key: string) => string
  toggle: () => void
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("zh")

  const t = useCallback((key: string): string => {
    const dict = lang === "zh" ? zh : en
    return dict[key] ?? key
  }, [lang])

  const td = useCallback((zhText: string, enText: string): string => {
    return lang === "zh" ? zhText : enText
  }, [lang])

  const tc = useCallback((key: string): string => {
    return t("cat." + key)
  }, [t])

  const toggle = useCallback(() => {
    setLang(prev => prev === "zh" ? "en" : "zh")
  }, [])

  return (
    <I18nContext.Provider value={{ lang, t, td, tc, toggle }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useI18n must be used within I18nProvider")
  return ctx
}
