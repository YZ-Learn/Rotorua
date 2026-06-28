// ============================================================
// RotoruaNZ — 完整数据层
// 所有景点/美食/住宿/活动数据统一管理
// ============================================================

// ==================== TYPES ====================

export interface AttractionItem {
  id: string
  name: string
  en: string
  r: number
  img: string        // 主图
  images: string[]   // 所有可用图片（主图第一张）
  price: string
  priceValue?: number // 纯数字价格，用于订购计算

  // 详情页补充字段
  description: string        // 中文介绍
  descriptionEn: string      // 英文介绍
  address: string
  addressEn: string
  category: string
  categoryEn: string
  categoryIcon: string
  tags: string[]
  duration: string           // 建议游览时长
  highlights: string[]       // 特色亮点

  // 预订相关信息
  isFree: boolean
  availableSlots?: string[]  // 可选时段
}

export interface CategoryBlock {
  title: string
  en: string
  em: string
  items: AttractionItem[]
}

// ==================== IMAGE HELPERS ====================
const im = (name: string, ...extras: string[]) =>
  extras.length > 0
    ? [`/images/${name}`, ...extras.map(e => `/images/${e}`)]
    : [`/images/${name}`]

// ==================== 地热温泉 ====================
const geothermal: AttractionItem[] = [
  {
    id: "a1",
    name: "怀奥塔普地热世界",
    en: "Wai-O-Tapu Thermal Wonderland",
    r: 4.9,
    img: "/images/waio-1.jpg",
    images: ["/images/waio-1.jpg", "/images/waio-2.jpg", "/images/waio-3.jpg"],
    price: "NZ$45",
    priceValue: 45,
    description:
      "怀奥塔普地热世界是罗托鲁瓦最负盛名的地热景区，以其色彩斑斓的火山地貌而闻名。园区内最著名的当属香槟池（Champagne Pool）——新西兰最大的温泉池，直径65米，深62米，因大量二氧化碳释放如香槟气泡而得名。翡翠绿的池水与橙黄色的矿物沉淀交相辉映，宛如调色盘。诺克斯夫人间歇泉每天上午10:15准时喷发，水柱高达20米，是游客必看的奇观。此外还有艺术家调色板（Artist's Palette）、硫磺洞（Sulphur Cave）等20余处地热景点。漫步在步道上，蒸汽缭绕、色彩斑斓，仿佛行走在另一个星球。",
    descriptionEn:
      "Wai-O-Tapu Thermal Wonderland is Rotorua's most famous geothermal attraction, renowned for its vibrant and colorful volcanic landscape. The star attraction is Champagne Pool, New Zealand's largest hot spring at 65m in diameter and 62m deep, named for its effervescent carbon dioxide release. The emerald-green waters contrast spectacularly with orange mineral deposits. Lady Knox Geyser erupts daily at 10:15am, shooting water up to 20 meters high. Other highlights include Artist's Palette and Sulphur Cave, with over 20 geothermal features to discover along well-maintained walking trails.",
    address: "201 Waiotapu Loop Road, Rotorua",
    addressEn: "201 Waiotapu Loop Road, Rotorua",
    category: "geothermal",
    categoryEn: "Geothermal",
    categoryIcon: "♨️",
    tags: ["地热奇观", "拍照圣地", "间歇泉", "家庭游"],
    duration: "2-3小时",
    highlights: [
      "香槟池——新西兰最大温泉池，65米宽的天然翡翠",
      "诺克斯夫人间歇泉——每日10:15准时喷发，水柱高达20米",
      "艺术家调色板——五彩斑斓的矿物沉积奇观",
    ],
    isFree: false,
    availableSlots: ["08:00-10:00", "10:00-12:00", "12:00-14:00", "14:00-16:00"],
  },
  {
    id: "a2",
    name: "香槟池",
    en: "Champagne Pool",
    r: 4.8,
    img: "/images/champagne-1.jpg",
    images: ["/images/champagne-1.jpg", "/images/champagne-2.jpg"],
    price: "NZ$45",
    priceValue: 45,
    description:
      "香槟池是怀奥塔普地热世界内最标志性的温泉景点，也是新西兰出镜率最高的自然奇观之一。池水温度约74°C，因地底岩浆加热形成，富含金、银、汞、硫等矿物元素。池水呈深邃的翡翠绿色，边缘是耀眼的橙黄色硅华沉积。大量二氧化碳气泡不断从池底升起，在阳光照射下如同无数颗闪烁的钻石。香槟池直径约65米，深约62米，形成于900年前的一次火山喷发。最佳观赏时间为上午，阳光斜射时池水最为艳丽动人。",
    descriptionEn:
      "Champagne Pool is the most iconic feature within Wai-O-Tapu and one of New Zealand's most photographed natural wonders. The pool maintains a temperature of approximately 74°C, heated by geothermal activity deep underground. Rich in minerals including gold, silver, mercury, and sulphur, the pool displays a stunning emerald-green color with bright orange silica sinter edges. Continuous streams of carbon dioxide bubbles rise from the depths, creating a champagne-like effect. Formed 900 years ago in a volcanic eruption, the pool measures 65 meters in diameter and 62 meters deep. Best viewed in morning light.",
    address: "201 Waiotapu Loop Road, Rotorua (怀奥塔普地热世界内)",
    addressEn: "201 Waiotapu Loop Road, Rotorua (within Wai-O-Tapu)",
    category: "geothermal",
    categoryEn: "Geothermal",
    categoryIcon: "♨️",
    tags: ["拍照圣地", "地热奇观", "自然遗产", "必打卡"],
    duration: "30分钟-1小时（含园区游览2-3小时）",
    highlights: [
      "新西兰出镜率最高的自然奇观之一",
      "74°C翡翠绿池水配橙黄色边缘，色彩对比惊艳",
      "气泡如香槟般升起，阳光下如钻石闪烁",
    ],
    isFree: false,
  },
  {
    id: "a3",
    name: "波胡图间歇泉",
    en: "Pohutu Geyser",
    r: 4.8,
    img: "/images/pohutu-1.jpg",
    images: ["/images/pohutu-1.jpg", "/images/pohutu-2.jpg", "/images/pohutu-3.jpg"],
    price: "NZ$60",
    priceValue: 60,
    description:
      "波胡图间歇泉位于蒂普亚（Te Puia）地热保护区内，是南半球最大的活跃间歇泉。'Pohutu'在毛利语中意为'大爆炸'或'喷溅'，每天喷发多达20次，水柱最高可达30米，场面极为壮观。波胡图间歇泉的喷发不受人工控制，完全依靠自然力量——雨水渗入地下被岩浆加热后，蒸汽压力累积到临界点爆发而出。观看时你会先听到地底传来沉闷的轰鸣声，紧接着白色蒸汽与滚烫的热水冲天而起，伴随硫磺的特殊气味，是大自然最震撼的表演之一。",
    descriptionEn:
      "The Pohutu Geyser, located within the Te Puia geothermal reserve, is the largest active geyser in the Southern Hemisphere. 'Pohutu' means 'big splash' or 'explosion' in Māori, and it lives up to its name by erupting up to 20 times daily, reaching heights of up to 30 meters. The geyser operates entirely by natural forces—rainwater seeps underground, heated by magma, and builds steam pressure until it erupts. Visitors first hear a deep rumbling from beneath the earth before the spectacular eruption of steam and hot water, accompanied by the distinct scent of sulphur—one of nature's most awe-inspiring performances.",
    address: "Hemo Road, Tihi, Rotorua (蒂普亚园区内)",
    addressEn: "Hemo Road, Tihi, Rotorua (within Te Puia)",
    category: "geothermal",
    categoryEn: "Geothermal",
    categoryIcon: "♨️",
    tags: ["间歇泉", "地热奇观", "喷发表演", "自然力量"],
    duration: "1-2小时（含蒂普亚园区游览）",
    highlights: [
      "南半球最大的活跃间歇泉，水柱高达30米",
      "每日喷发多达20次，纯自然力量驱动",
      "喷发前地底轰鸣先至，视觉与听觉的双重震撼",
    ],
    isFree: false,
  },
  {
    id: "a4",
    name: "诺克斯夫人间歇泉",
    en: "Lady Knox Geyser",
    r: 4.7,
    img: "/images/ladyknox-1.jpg",
    images: ["/images/ladyknox-1.jpg"],
    price: "NZ$45",
    priceValue: 45,
    description:
      "诺克斯夫人间歇泉位于怀奥塔普地热世界入口附近，以每天上午10:15准时喷发而闻名。与波胡图间歇泉不同，诺克斯夫人间歇泉的喷发通过加入天然生物可降解皂粉触发——皂粉降低水的表面张力，使地下蒸汽更容易释放，从而引发喷发。喷发水柱可达10-20米，持续约1小时。这一独特的'人工触发'演示是怀奥塔普游览的经典开篇。间歇泉以英国贵族Lady Constance Knox命名，她曾在20世纪初到访此地。",
    descriptionEn:
      "Lady Knox Geyser, located near the entrance of Wai-O-Tapu, is famous for its daily eruption at 10:15am sharp. Unlike Pohutu, Lady Knox is triggered by adding a natural biodegradable surfactant—this reduces water surface tension, allowing underground steam pressure to release and trigger the eruption. The water column reaches 10-20 meters and lasts approximately one hour. This unique 'human-assisted' demonstration serves as a spectacular opening to any Wai-O-Tapu visit. Named after British aristocrat Lady Constance Knox, who visited the area in the early 1900s.",
    address: "201 Waiotapu Loop Road, Rotorua (怀奥塔普入口处)",
    addressEn: "201 Waiotapu Loop Road, Rotorua (at Wai-O-Tapu entrance)",
    category: "geothermal",
    categoryEn: "Geothermal",
    categoryIcon: "♨️",
    tags: ["间歇泉", "每日表演", "趣味体验", "拍照"],
    duration: "30分钟",
    highlights: [
      "每日10:15准时喷发，是怀奥塔普游览的经典开篇",
      "独特的皂粉触发演示，兼具科普与趣味性",
      "喷发持续约1小时，水柱10-20米",
    ],
    isFree: false,
  },
]

// ==================== 毛利文化 ====================
const maori: AttractionItem[] = [
  {
    id: "b1",
    name: "蒂普亚毛利文化村",
    en: "Te Puia Māori Culture Village",
    r: 4.8,
    img: "/images/tepuia-1.jpg",
    images: ["/images/tepuia-1.jpg"],
    price: "NZ$60",
    priceValue: 60,
    description:
      "蒂普亚是罗托鲁瓦最综合的毛利文化与地热体验中心，集间歇泉观赏、毛利文化沉浸、手工艺展示于一体。园区内有南半球最大的波胡图间歇泉、毛利雕刻与编织学校的现场演示、新西兰国鸟几维鸟的保育中心。游客可以参加毛利文化导览，了解毛利人的历史、传说和传统生活方式。每天有定时的毛利歌舞表演（Kapa Haka），包括著名的战舞（Haka）——那充满力量的呐喊、瞪眼和拍胸动作，会让每个观众热血沸腾。园区餐厅还提供地热烹饪的传统Hangi大餐。",
    descriptionEn:
      "Te Puia is Rotorua's most comprehensive Māori culture and geothermal experience center, combining geyser viewing, cultural immersion, and artisan demonstrations. The site features the Southern Hemisphere's largest active geyser (Pohutu), live demonstrations at the Māori carving and weaving schools, and the National Kiwi Hatchery for New Zealand's iconic bird. Guided tours explore Māori history, legends, and traditional life. Daily Kapa Haka performances feature the powerful Haka war dance—the fierce shouting, eye-rolling, and chest-slapping will stir every visitor. The on-site restaurant serves traditional Hangi feasts cooked using geothermal steam.",
    address: "Hemo Road, Tihi, Rotorua",
    addressEn: "Hemo Road, Tihi, Rotorua",
    category: "maori",
    categoryEn: "Māori Culture",
    categoryIcon: "🎭",
    tags: ["毛利文化", "间歇泉", "几维鸟", "雕刻", "歌舞表演"],
    duration: "2-4小时",
    highlights: [
      "观摩波胡图间歇泉——从地底轰鸣到冲天而起",
      "全国仅有的几维鸟保育中心，近距离看国鸟",
      "震撼的毛利歌舞+战舞表演，体哈卡的力量",
      "毛利雕刻与编织学校现场演示",
    ],
    isFree: false,
    availableSlots: ["09:00-12:00", "10:30-13:30", "12:00-15:00", "13:30-16:30"],
  },
  {
    id: "b2",
    name: "蒂帕图毛利村",
    en: "Te Patu Māori Village",
    r: 4.7,
    img: "/images/tepatu-1.jpg",
    images: ["/images/tepatu-1.jpg", "/images/tepatu-2.jpg", "/images/tepatu-3.jpg"],
    price: "NZ$55",
    priceValue: 55,
    description:
      "蒂帕图毛利村是一个沉浸式的夜间文化体验项目。与白天的景点不同，蒂帕图在夜晚点亮火把，带领游客穿越到前欧洲时代的毛利世界。游客抵达时首先体验传统的Powhiri（欢迎仪式），包括挑战（Wero）与问候（Hongi）——碰鼻礼。随后在火光中游览重建的毛利村落，聆听古老的传说与歌谣。最后享用地热烹饪的Hangi传统晚宴——羊肉、鸡肉、红薯（Kumara）等食材用加热的石头埋在地下蒸煮数小时，肉质酥烂、带有淡淡的烟熏香气。这是一个深度了解毛利文化和历史的绝佳方式。",
    descriptionEn:
      "Te Patu Māori Village offers an immersive nighttime cultural experience unlike any other. As darkness falls, the village comes alive with torchlight, transporting visitors back to pre-European Māori times. The experience begins with a traditional Pōwhiri (welcoming ceremony), including the Wero (challenge) and Hongi (pressing of noses). Guided torchlit tours wind through the reconstructed village, sharing ancient legends and songs. The experience culminates in a Hangi feast—lamb, chicken, and kumara (sweet potato) slow-cooked for hours in an earth oven heated by volcanic stones, resulting in tender, smoky-flavored food. This is a profound way to connect with Māori culture and history.",
    address: "1220 Fenton Street, Rotorua",
    addressEn: "1220 Fenton Street, Rotorua",
    category: "maori",
    categoryEn: "Māori Culture",
    categoryIcon: "🎭",
    tags: ["夜间体验", "毛利文化", "Hangi晚宴", "火把导览"],
    duration: "3-4小时（傍晚开始）",
    highlights: [
      "火把照亮的模拟毛利村落，如同时光倒流",
      "传统Powhiri欢迎仪式，体验碰鼻礼Hongi",
      "地热Hangi晚宴——石头蒸煮数小时的经典毛利美食",
    ],
    isFree: false,
    availableSlots: ["17:00-20:00", "18:00-21:00", "19:00-22:00"],
  },
  {
    id: "b3",
    name: "奥希内穆图毛利村",
    en: "Ohinemutu Māori Village",
    r: 4.6,
    img: "/images/ohinemutu-1.jpg",
    images: ["/images/ohinemutu-1.jpg"],
    price: "免费",
    priceValue: 0,
    description:
      "距罗托鲁瓦市中心步行仅10分钟的活态毛利村庄。Ngāti Whakaue部落（Te Arawa独木舟后裔）自1350年起定居于此。免费参观这座活态村庄，观看利用地热蒸汽做饭的场景和户外沐浴棚。村内有精美的Tama-te-Kapua会堂——雕刻精美、镶嵌数百片闪亮鲍鱼壳。建于1914年的圣菲斯教堂（St Faith's Church）都铎式外观但内部毛利风格浓郁，一扇窗户上雕刻着身穿毛利斗篷的耶稣，仿佛行走在湖面上。参观者欢迎每周日9:00参加双语礼拜。教堂每天10:00-15:00开放。",
    descriptionEn:
      "Just 10 minutes walk from downtown Rotorua, a living Māori village home to the Ngāti Whakaue tribe since 1350AD. Free entry to walk around the village, viewing cooking arrangements over boiling hot water vents and outdoor bathing sheds. Features the Tama-te-Kapua meeting house with exquisite carvings and hundreds of inlaid pāua shells. St Faith's Church (completed 1914) has a Tudor-style exterior with strong Māori interior—a remarkable window etched with Jesus wearing a Māori cloak, appearing to walk across the lake surface. Bilingual services Sundays at 9am.",
    address: "Ohinemutu, Rotorua",
    addressEn: "Ohinemutu, Rotorua",
    category: "maori",
    categoryEn: "Māori Culture",
    categoryIcon: "🎭",
    tags: ["毛利文化", "免费", "活态村庄", "教堂", "地热"],
    duration: "30分钟-1小时",
    highlights: [
      "免费参观活态毛利村庄——地热蒸汽做饭的日常",
      "圣菲斯教堂——耶稣穿毛利斗篷走在湖面",
      "Tama-te-Kapua会堂——鲍鱼壳镶嵌的精美雕刻",
    ],
    isFree: true,
  },
  {
    id: "b4",
    name: "毛利歌舞表演",
    en: "Kapa Haka Performance",
    r: 4.6,
    img: "/images/haka-1.webp",
    images: ["/images/haka-1.webp", "/images/haka-2.webp"],
    price: "NZ$30",
    priceValue: 30,
    description:
      "Kapa Haka是毛利文化表演艺术的统称，融合了歌曲（Waiata）、舞蹈和战舞（Haka）的表演形式。'Kapa'意为队列，'Haka'意为舞蹈。这是一场充满力量与情感的演出——女舞者优雅地舞动Poi球，男舞者则以极具攻击性的面部表情和动作表演战舞。演出中不仅展现毛利人的战斗精神和自豪感，也包含柔和的情歌与摇篮曲。表演者身着传统草裙和羽毛斗篷，配合吉他和木制打击乐器。这是感受毛利文化灵魂最直接的方式，很多观众在离开时都忍不住学着做瞪眼吐舌的动作。",
    descriptionEn:
      "Kapa Haka is the collective term for traditional Māori performing arts, combining song (Waiata), dance, and the powerful Haka. 'Kapa' means 'rank' or 'row', and 'Haka' means 'dance'. This is an emotionally charged performance—female dancers gracefully twirl Poi balls while male performers deliver fierce facial expressions and movements in the Haka. The repertoire spans from warrior pride and tribal identity to gentle love songs and lullabies. Performers wear traditional flax skirts and feathered cloaks, accompanied by guitar and wooden percussion instruments. It's the most direct way to experience the soul of Māori culture.",
    address: "多家场馆提供，可在蒂普亚、蒂帕图或文化中心观看",
    addressEn: "Available at multiple venues including Te Puia, Te Patu, and cultural centers",
    category: "maori",
    categoryEn: "Māori Culture",
    categoryIcon: "🎭",
    tags: ["歌舞表演", "战舞Haka", "文化体验", "家庭友好"],
    duration: "45分钟-1小时",
    highlights: [
      "Haka战舞——感受雄性力量的巅峰表达",
      "Poi舞蹈——女性舞者以柔克刚的优雅表演",
      "传统毛利服饰与音乐，全感官的沉浸体验",
    ],
    isFree: false,
    availableSlots: ["11:00", "14:00", "19:00"],
  },
]

// ==================== 户外探险 ====================
const outdoor: AttractionItem[] = [
  {
    id: "c1",
    name: "法卡雷瓦雷瓦森林（红木森林）",
    en: "Whakarewarewa Forest (The Redwoods)",
    r: 4.8,
    img: "/images/redwoods-1.jpg",
    images: ["/images/redwoods-1.jpg", "/images/redwoods-2.jpg", "/images/redwoods-3.jpg"],
    price: "免费",
    priceValue: 0,
    description:
      "占地55,000公顷的华卡雷瓦雷瓦森林，当地人简称为'The Redwoods'。1901年种植的加利福尼亚红木如今已长成参天大树，笔直树干在雾气中如巨人矗立。红牛评级将这里的山地车道列入世界前八，澳大利亚山地自行车杂志评为全球最佳。超过160公里的世界级山地自行车道覆盖了从新手到专家的所有水平。步道穿梭在红木、辐射松、花旗松、桉树和落叶松的参天林冠之下。一旦登上林冠之上，骑手可以欣赏到罗托鲁瓦湖、地热区和塔拉韦拉火山的360度全景。",
    descriptionEn:
      "A 55,000ha playground for mountain bikers, walkers, hikers and horse riders, known locally as 'The Redwoods'. Red Bull rated the Whakarewarewa trails in the top eight in the world. Over 160km of world-class mountain biking trails cater for everyone from beginners to experts. The trails weave through native ferns beneath soaring forest canopies of Redwood, Radiata, Douglas Fir, Eucalyptus and Larch trees. Once above the canopy, riders get panoramic views of Rotorua's beautiful lakes, geothermal activity and brooding Mt Tarawera.",
    address: "Long Mile Road, Rotorua",
    addressEn: "Long Mile Road, Rotorua",
    category: "outdoor",
    categoryEn: "Outdoor Adventure",
    categoryIcon: "🚲",
    tags: ["红木森林", "山地自行车", "徒步", "骑马", "免费"],
    duration: "1-4小时（自由选择）",
    highlights: [
      "红牛评级世界前八的山地车道，160公里赛道",
      "悬在树冠间的Redwoods Treewalk，夜间灯光如梦",
      "参天红木林，徒步/跑步/骑马多种方式探索",
    ],
    isFree: true,
  },
  {
    id: "c2",
    name: "罗托鲁瓦湖",
    en: "Lake Rotorua",
    r: 4.9,
    img: "/images/lake-1.jpg",
    images: ["/images/lake-1.jpg", "/images/lake-2.jpg"],
    price: "免费",
    priceValue: 0,
    description:
      "罗托鲁瓦湖是新西兰北岛第二大湖，约80平方公里，形成于约20万年前火山喷发后岩浆房塌陷的火山口。湖水因硫磺含量高呈奇妙的蓝绿色，湖畔地热活动频繁，白色蒸汽袅袅飘浮湖面，宛如仙境。湖心摩库伊阿岛（Mokoia Island）是新西兰最著名的爱情故事发生地——美丽少女Hinemoa不顾部落反对，在夜间用葫芦制成救生衣游过寒冷湖水，与岛上恋人在温泉中相会。如今的Hinemoa温泉池（Waikimihia）仍可在岛上体验。湖上活动丰富：巡游、鳟鱼钓鱼、皮划艇、喷射快艇和水上飞机。",
    descriptionEn:
      "The North Island's second largest lake, formed when a magma chamber collapsed after a massive volcanic eruption around 200,000 years ago. The water has a magical green-blue colouration due to high sulphur content, with geothermal steam often drifting across the surface. Mokoia Island in the centre is the setting for New Zealand's most famous love story of Hinemoa and Tutanekai—the beautiful maiden swam across the cold lake at night using empty gourds as a life-belt to meet her lover. Waikimihia (Hinemoa's Pool) can still be visited on the island. Activities include cruises, trout fishing, kayaking, jet boating, and seaplane rides.",
    address: "Rotorua 湖滨沿岸",
    addressEn: "Lakefront, Rotorua",
    category: "outdoor",
    categoryEn: "Outdoor Adventure",
    categoryIcon: "🚲",
    tags: ["湖泊", "水上活动", "免费", "拍照", "日落"],
    duration: "1-3小时",
    highlights: [
      "蒸汽飘浮的蓝绿色火山湖，极具神秘感",
      "丰富的水上活动——巡游、钓鱼、皮划艇、喷射快艇",
      "夕阳时分的湖景——金色与粉红色的水面",
    ],
    isFree: true,
  },
  {
    id: "c3",
    name: "天空线山地自行车公园",
    en: "Skyline Rotorua Mountain Bike Park",
    r: 4.8,
    img: "/images/skyline-mtb-1.jpg",
    images: ["/images/skyline-mtb-1.jpg"],
    price: "NZ$45",
    priceValue: 45,
    description:
      "新西兰唯一全年运营的缆车直达山地自行车公园，也是Crankworx山地车节的举办地。被评为IMBA金牌骑行中心——全球仅六个之一。Skyline观光滑车将骑手和自行车送到200米高的Mt Ngongotahā山顶，俯瞰罗托鲁瓦湖全景。山顶有12条从新手到专业级的赛道：新手可以挑战La Dee Da和Hipster的流畅路径，中级的Sprint Warrior有优美的护坡和阶梯落差，高级骑手则垂涎Ten Fifty One的陡峭技术地形和Moss Piglet的刁钻跳台。缆车山下还有旱地雪橇、高空滑索和天空秋千等刺激项目，以及餐厅和酒吧。",
    descriptionEn:
      "New Zealand's only year-round, gondola-access mountain bike park and a Crankworx venue. Awarded gold-level ride centre status by IMBA—one of only six in the world. The gondola transports riders and their bikes 200m up Mt Ngongotahā with panoramic views across Rotorua. Choose from 12 trails: mellow flow trails like La Dee Da and Hipster for beginners, berms and step downs of Sprint Warrior for intermediates, and steep technical terrain of Ten Fifty One for advanced. Also features luge, zipline, Skyswing, restaurants and bars at the bottom complex.",
    address: "Skyline Rotorua, Rotorua",
    addressEn: "Skyline Rotorua, Rotorua",
    category: "outdoor",
    categoryEn: "Outdoor Adventure",
    categoryIcon: "🚲",
    tags: ["山地自行车", "缆车", "Crankworx", "极限运动", "滑车"],
    duration: "2-4小时",
    highlights: [
      "12条赛道，新手到专业级全覆盖",
      "缆车载你和车上山顶，俯瞰罗托鲁瓦全景",
      "下载还有旱地雪橇、高空滑索等刺激项目",
    ],
    isFree: false,
  },
  {
    id: "c4",
    name: "摩库伊阿岛",
    en: "Mokoia Island",
    r: 4.5,
    img: "/images/mokoia-1.jpg",
    images: ["/images/mokoia-1.jpg"],
    price: "NZ$45",
    priceValue: 45,
    description:
      "摩库伊阿岛是罗托鲁瓦湖中央的一座小型火山岛，面积约1.35平方公里。这座岛不仅是一个鸟类保护区和重要生态栖息地，更是新西兰最经典的毛利爱情故事的发生地——Hinemoa与Tutanekai的浪漫传说。故事中，年轻的首领之女Hinemoa爱上了平民Tutanekai，她夜间游过冰冷的湖水到岛上与爱人相会。今天，岛上仍有一处温泉叫做'Hinemoa's Bath'，据说她在游完冰冷湖水后来此取暖。上岛需要参加导览团，可以观赏到珍稀鸟类如北岛鞍背鸦（Saddleback）和卡卡鹦鹉（Kaka）。",
    descriptionEn:
      "Mokoia Island is a small volcanic island in the center of Lake Rotorua, spanning approximately 1.35 square kilometers. Beyond being a bird sanctuary and important ecological habitat, the island is the setting of New Zealand's most beloved Māori love story—the romance of Hinemoa and Tutanekai. According to legend, Hinemoa, a chief's daughter, swam across the cold lake at night to be with her lover Tutanekai, a commoner. Today, a thermal spring called 'Hinemoa's Bath' still exists on the island, where she was said to warm herself after the swim. Access is by guided tour only, offering sightings of rare birds including the North Island Saddleback and Kaka parrot.",
    address: "罗托鲁瓦湖中央，需乘船前往",
    addressEn: "Central Lake Rotorua, accessible by boat",
    category: "outdoor",
    categoryEn: "Outdoor Adventure",
    categoryIcon: "🚲",
    tags: ["爱情故事", "观鸟", "导览", "火山岛", "历史文化"],
    duration: "2-3小时（含交通）",
    highlights: [
      "Hinemoa与Tutanekai——新西兰版'梁山伯与祝英台'",
      "珍稀鸟类保护区——北岛鞍背鸦、卡卡鹦鹉等",
      "岛上的温泉'Hinemoa's Bath'，传说中渡湖后的暖身之处",
    ],
    isFree: false,
  },
]

// ==================== 自然风光 ====================
const nature: AttractionItem[] = [
  {
    id: "d1",
    name: "法卡雷瓦雷瓦地热保护区",
    en: "Whakarewarewa Geothermal Reserve",
    r: 4.7,
    img: "/images/whaka-1.jpg",
    images: ["/images/whaka-1.jpg", "/images/whaka-2.jpg", "/images/whaka-3.jpg"],
    price: "NZ$45",
    priceValue: 45,
    description:
      "法卡雷瓦雷瓦地热保护区位于罗托鲁瓦南部，以密集的地热活动而闻名。保护区内有超过500个地热特征，包括间歇泉、沸腾的泥浆池、温泉和蒸汽喷口，是南半球最活跃的地热带之一。毛利人的Tuhourangi部落在此居住了超过600年，利用地热烹饪、取暖和洗浴。其中最具代表性的当属波胡图间歇泉（Pohutu Geyser），它每天的喷发无数次。保护区的毛利村落是目前仍有人居住的地热村落之一，游客可以亲眼目睹当地人如何利用地热蒸汽烹饪Hangi大餐。这里的一切都在提醒你：大地是活的。",
    descriptionEn:
      "Whakarewarewa Geothermal Reserve, located south of Rotorua's city center, is renowned for its intense geothermal activity. The reserve features over 500 geothermal features including geysers, boiling mud pools, hot springs, and steam vents, making it one of the most active geothermal areas in the Southern Hemisphere. The Tuhourangi Māori tribe has lived here for over 600 years, using geothermal heat for cooking, heating, and bathing. The reserve is home to Pohutu Geyser. The living Māori village here is one of the few still-inhabited geothermal villages where visitors can see locals using geothermal steam to cook Hangi meals. Everything here reminds you: the earth is alive.",
    address: "17 Tryon Street, Whakarewarewa, Rotorua",
    addressEn: "17 Tryon Street, Whakarewarewa, Rotorua",
    category: "nature",
    categoryEn: "Natural Scenery",
    categoryIcon: "🌿",
    tags: ["地热", "毛利村落", "沸腾泥浆", "活着的村庄"],
    duration: "1-2小时",
    highlights: [
      "超过500个地热特征的'活的'地热保护区",
      "600年毛利村落至今仍有人居住，用蒸汽做饭",
      "沸腾泥浆池——泥浆咕嘟咕嘟冒着泡，如同大地在呼吸",
    ],
    isFree: false,
  },
  {
    id: "d2",
    name: "地狱之门",
    en: "Hell's Gate Geothermal Reserve",
    r: 4.5,
    img: "/images/hellsgate-1.jpg",
    images: ["/images/hellsgate-1.jpg"],
    price: "NZ$35",
    priceValue: 35,
    description:
      "地狱之门是罗托鲁瓦最狂野的地热保护区，以新西兰最大的沸腾泥浆池和独特的硫磺色景观而闻名。19世纪欧洲传教士看到这里冒泡的黑色泥浆和刺鼻的硫磺气味时，惊呼这里是'通往地狱之门'，地名由此而来。园区内最壮观的是卡卡希瀑布（Kakahi Falls）——南半球唯一的热水瀑布，水温约40°C，可以在瀑布下泡温泉。泥浆池中富含矿物质的火山泥以其美容功效而闻名，游客可以体验泥浆浴和硫磺温泉。园区步道沿途经过蒸汽喷口、沸腾的泥浆火山和多彩的矿物沉积，视觉冲击力极强。",
    descriptionEn:
      "Hell's Gate is Rotorua's wildest geothermal reserve, famous for New Zealand's largest boiling mud pool and its distinctive sulfur-yellow landscape. When 19th-century European missionaries saw the bubbling black mud and smelled the pungent sulfur, they exclaimed it must be the 'Gates of Hell'—and the name stuck. The star attraction is Kakahi Falls, the Southern Hemisphere's only hot waterfall (approximately 40°C), where visitors can soak beneath the cascading thermal water. The mineral-rich volcanic mud is renowned for its skincare benefits, with mud bath and sulfur spa experiences available. Walking trails pass steaming vents, boiling mud volcanoes, and colorful mineral deposits.",
    address: "361 State Highway 30, Tikitere, Rotorua",
    addressEn: "361 State Highway 30, Tikitere, Rotorua",
    category: "nature",
    categoryEn: "Natural Scenery",
    categoryIcon: "🌿",
    tags: ["泥浆浴", "热水瀑布", "硫磺奇观", "SPA体验", "刺激"],
    duration: "1.5-3小时",
    highlights: [
      "新西兰最大沸腾泥浆池，黑色泥浆如火山般喷涌",
      "南半球唯一的热水瀑布——40°C天然热水",
      "火山泥浆浴 + 硫磺温泉，美容养颜一举两得",
    ],
    isFree: false,
    availableSlots: ["09:00-12:00", "10:30-13:30", "12:00-15:00", "13:30-16:30"],
  },
  {
    id: "d3",
    name: "哈穆拉纳泉",
    en: "Hamurana Springs",
    r: 4.7,
    img: "/images/hamurana-1.jpg",
    images: ["/images/hamurana-1.jpg"],
    price: "免费",
    priceValue: 0,
    description:
      "北岛最深的天然泉水，距罗托鲁瓦仅15分钟车程。泉水来自周边高原，在地下旅行70年后从15米深的火山岩中涌出，每小时喷射400万升清水——足以每天填满两个奥运会标准泳池。泉水温度全年恒定10°C，蓝宝石般清澈透亮。有一条45分钟的环线步道穿越加州红木和原生森林，是当地人最喜欢的野餐地。可以观赏巨大的虹鳟鱼和多种鸟类（包括濒危的dabchick和黑鸭）。夏季还可参加Rotorua Paddle Tours的SUP站立桨板探索哈穆拉纳溪流。",
    descriptionEn:
      "The deepest natural spring in the North Island, just 15 minutes drive from Rotorua. Water travels 70 years underground before rising through 15m of volcanic rock, spouting 4 million litres per hour—enough to fill two Olympic pools daily. The water remains a constant 10°C year-round with crystal-clear turquoise colour. A 45-minute loop track through California Redwood and native forest is a favourite local picnic spot. See huge rainbow trout and numerous bird species including the endangered dabchick. Summer SUP tours available with Rotorua Paddle Tours along the Hamurana Stream.",
    address: "Hamurana Springs, Rotorua",
    addressEn: "Hamurana Springs, Rotorua",
    category: "nature",
    categoryEn: "Natural Scenery",
    categoryIcon: "🌿",
    tags: ["天然泉", "蓝泉", "徒步", "观鸟", "免费"],
    duration: "45分钟-1.5小时",
    highlights: [
      "北岛最深天然泉——每小时400万升蓝宝石水",
      "45分钟环线步道穿越红木林，四季皆宜",
      "观赏巨大虹鳟鱼和珍稀鸟类",
    ],
    isFree: true,
  },
  {
    id: "d4",
    name: "塔拉韦拉火山",
    en: "Mount Tarawera",
    r: 4.8,
    img: "/images/tarawera-1.jpg",
    images: ["/images/tarawera-1.jpg"],
    price: "NZ$150+",
    priceValue: 150,
    description:
      "1886年6月10日凌晨，塔拉韦拉火山猛烈喷发，熔岩柱抛向数千米高空。更可怕的是岩浆遇上了罗托马哈纳湖的地下水，形成过热水蒸气炸开湖底，沸腾泥浆散落四方。喷发摧毁了举世闻名的粉白梯田（Pink and White Terraces）——当时被誉为世界第八大奇迹。如今火山休眠，6公里长的裂口火山口清晰见证着当年的力量。上山必须参加导览团（Kaitiaki Adventures每日发团），可选火山口徒步或直升机着陆+导览徒步，360度全景无限壮观。",
    descriptionEn:
      "On June 10, 1886, Mount Tarawera erupted violently, thrusting columns of molten rock thousands of metres into the air. Hot magma met the underground waterways of Lake Rotomahana, creating superheated steam that blew the bottom out of the lake—scalding mud rained far and wide. The eruption destroyed the Pink and White Terraces (eighth wonder of the world). Today the sleeping giant's 6km rift crater testifies to that ferocious night. Access is by guided tour only—Kaitiaki Adventures runs daily walking tours, or take a scenic flight/helicopter landing with Volcanic Air.",
    address: "Mount Tarawera, Rotorua",
    addressEn: "Mount Tarawera, Rotorua",
    category: "nature",
    categoryEn: "Natural Scenery",
    categoryIcon: "🌿",
    tags: ["火山", "徒步导览", "直升机", "地质奇观", "历史"],
    duration: "半天（导览团）",
    highlights: [
      "6公里裂口火山口——1886年大喷发的铁证",
      "导览团徒步或直升机着陆+火山口徒步",
      "360度俯瞰罗托鲁瓦湖泊与地热区全景",
    ],
    isFree: false,
  },
  {
    id: "d5",
    name: "怀阿里基温泉水疗",
    en: "Waikite Valley Thermal Pools",
    r: 4.6,
    img: "/images/waikite-1.jpg",
    images: ["/images/waikite-1.jpg", "/images/waikite-2.jpg"],
    price: "NZ$40",
    priceValue: 40,
    description:
      "怀阿里基温泉位于罗托鲁瓦以南约20公里的怀阿里基山谷中，以其100%纯天然、未经循环利用的硅质矿泉水而闻名。温泉水源来自Te Manaroa温泉——新西兰最大的单一沸水温泉源，水温高达98°C，每24小时流量超过300万升。经过冷却池自然降温后注入各个温泉池。园区设有多个不同温度的露天温泉池，嵌入原生灌木丛中，环境清幽自然。这里的硅质水对皮肤有益，泡完皮肤会变得光滑细腻。夜间泡温泉可以仰望南半球的星空，享受无与伦比的宁静体验。",
    descriptionEn:
      "Waikite Valley Thermal Pools, located about 20km south of Rotorua, is renowned for its 100% natural silica-rich mineral water that is never recycled or reheated. The water source is Te Manaroa Spring—New Zealand's largest single boiling geothermal spring at 98°C, producing over 3 million liters of water every 24 hours. After natural cooling, the water flows into several outdoor pools set among native bush. The silica-rich water is excellent for skin health, leaving it silky smooth after bathing. Night soaks offer incredible stargazing opportunities in the crystal-clear southern hemisphere sky.",
    address: "648 Waikite Valley Road, Rotorua",
    addressEn: "648 Waikite Valley Road, Rotorua",
    category: "nature",
    categoryEn: "Natural Scenery",
    categoryIcon: "🌿",
    tags: ["天然温泉", "硅质水", "夜间星空", "养生"],
    duration: "2-3小时",
    highlights: [
      "100%纯天然矿泉水，不循环、不加热，纯正到底",
      "新西兰最大沸水温泉源，每天300万升流量",
      "夜间泡汤观星——南半球星空的绝佳体验",
    ],
    isFree: false,
    availableSlots: ["10:00-13:00", "12:00-15:00", "14:00-17:00", "16:00-19:00", "18:00-21:00"],
  },
  {
    id: "d6",
    name: "波利尼西亚国际温泉",
    en: "Polynesian Spa",
    r: 4.7,
    img: "/images/polyspa-1.webp",
    images: ["/images/polyspa-1.webp", "/images/polyspa-2.webp"],
    price: "NZ$25",
    priceValue: 25,
    description:
      "波利尼西亚国际温泉位于罗托鲁瓦湖畔，曾多次荣获世界最佳温泉奖项。这个历史悠久的温泉早在19世纪就被欧洲移民发现和利用，经过百年发展已成为新西兰最负盛名的温泉之一。温泉的矿泉水来源于Rakura泉和Koura泉，富含钠、钾、钙、镁、硅等多种矿物质。设有26个不同温度和矿化度的温泉池，包括私人池、家庭池和湖景池。在迷人的湖景池中，你可以一边泡着42°C的温泉，一边俯瞰罗托鲁瓦湖的绝美景色——尤其在日落时分，湖面被染成金色和粉色，让人心旷神怡。",
    descriptionEn:
      "Polynesian Spa, located on the shores of Lake Rotorua, has won multiple World's Best Spa awards. This historic thermal spa was discovered and used by European settlers in the 19th century and has since developed into New Zealand's most renowned spa destination. The mineral water comes from the Rakura and Koura springs, rich in sodium, potassium, calcium, magnesium, and silica. The spa features 26 pools of varying temperatures and mineral compositions, including private pools, family pools, and the iconic lake-view pools. Soak in 42°C thermal water while overlooking Lake Rotorua's stunning scenery—especially magical during sunset when the lake turns gold and pink.",
    address: "Lakeside, Hinemoa Street, Rotorua",
    addressEn: "Lakeside, Hinemoa Street, Rotorua",
    category: "nature",
    categoryEn: "Natural Scenery",
    categoryIcon: "🌿",
    tags: ["温泉", "湖景", "获奖", "养生", "日落"],
    duration: "2-4小时",
    highlights: [
      "世界最佳温泉奖得主，品质有保障",
      "26个温泉池，私人池/家庭池/景观池任选",
      "湖景池泡汤 + 罗托鲁瓦湖日落，人间值得",
    ],
    isFree: false,
    availableSlots: ["08:00-11:00", "10:00-13:00", "12:00-15:00", "14:00-17:00", "16:00-20:00"],
  },
]

// ==================== 美食 ====================
const food: AttractionItem[] = [
  {
    id: "f1",
    name: "Hangi 地热大餐",
    en: "Hangi Feast",
    r: 4.7,
    img: "/images/hangi-1.jpg",
    images: ["/images/hangi-1.jpg", "/images/hangi-2.jpg", "/images/hangi-3.jpg"],
    price: "NZ$65",
    priceValue: 65,
    description:
      "Hangi是毛利人传统的烹饪方式，利用地热蒸汽将食物慢慢焖熟。制作方法：在土地上挖一个坑，将火山岩加热到红热状态，放入装有食材的铁丝篮中，盖上湿布和泥土，利用地底的热量和蒸汽焖煮3-4小时。食材包括羊肉、猪肉、鸡肉、红薯（Kumara）、南瓜和传统毛利面包（Rewena Paraoa）。成品肉质酥烂脱骨，蔬菜软糯香甜，带着独特的烟熏和泥土气息。Hangi常作为毛利文化体验的一部分呈现，在蒂普亚、蒂帕图毛利村和法卡雷瓦雷瓦地热村都可以品尝到。这不只是一顿饭，更是一种传承了千年的文化仪式。",
    descriptionEn:
      "Hangi is the traditional Māori cooking method using geothermal steam to slowly cook food. The process involves digging a pit, heating volcanic stones until red-hot, placing food baskets on the stones, covering with wet cloth and earth, and slow-cooking for 3-4 hours. Ingredients include lamb, pork, chicken, kumara (sweet potato), pumpkin, and traditional Māori bread (Rewena Paraoa). The result is incredibly tender, fall-off-the-bone meat and soft, sweet vegetables with a unique smoky, earthy flavor. Hangi is typically served as part of a Māori cultural experience at Te Puia, Te Patu Māori Village, and Whakarewarewa Living Village. It's not just a meal—it's a thousand-year-old cultural ritual.",
    address: "蒂普亚 / 蒂帕图毛利村 / 法卡雷瓦雷瓦地热村",
    addressEn: "Te Puia / Te Patu Māori Village / Whakarewarewa Living Village",
    category: "food",
    categoryEn: "Food",
    categoryIcon: "🍖",
    tags: ["毛利美食", "地热烹饪", "文化体验", "传统风味"],
    duration: "1-1.5小时（用餐时间）",
    highlights: [
      "千年传统的毛利地热烹饪方式，石坑焖蒸",
      "羊肉红薯泥土香——用嘴感受火山的馈赠",
      "吃Hangi不只是吃饭，是一场文化仪式",
    ],
    isFree: false,
  },
  {
    id: "f2",
    name: "毛利传统烤肉",
    en: "Traditional Hangi Grill",
    r: 4.6,
    img: "/images/hangi-2.jpg",
    images: ["/images/hangi-2.jpg", "/images/hangi-3.jpg"],
    price: "NZ$55",
    priceValue: 55,
    description:
      "除了经典的坑式Hangi，罗托鲁瓦还有多种地热烹饪的烤肉美食。利用地热蒸汽慢烤的羊腿和猪肩肉是当地特色——肉质极为鲜嫩多汁，外焦里嫩。搭配毛利传统调味料和当地新鲜蔬菜，蘸着Kumara泥和Mint sauce食用，是新西兰南岛田园风味的完美呈现。在罗托鲁瓦的各大餐厅均可品尝到地热烤肉，尤其是几家历史悠久的毛利餐厅，提供原汁原味的部落烹饪秘方。偶尔还会有现场毛利音乐表演伴随用餐，氛围独特。",
    descriptionEn:
      "Beyond the classic pit Hangi, Rotorua offers various geothermal-cooked grilled meats. Lamb leg and pork shoulder slow-cooked using geothermal steam are local specialties—incredibly tender and juicy with a perfect crispy exterior. Served with traditional Māori seasonings and fresh local vegetables, accompanied by kumara mash and mint sauce, this is a perfect representation of New Zealand's pastoral culinary tradition. Several historic Māori restaurants in Rotorua offer authentic tribal recipes passed down through generations, sometimes accompanied by live Māori music performances.",
    address: "罗托鲁瓦各大餐厅",
    addressEn: "Various restaurants in Rotorua",
    category: "food",
    categoryEn: "Food",
    categoryIcon: "🍖",
    tags: ["烤肉", "地热烹饪", "毛利风味", "音乐伴餐"],
    duration: "1-1.5小时",
    highlights: [
      "地热蒸汽慢烤的羊腿，嫩到可以'抿着吃'",
      "传统部落烹饪秘方，传承数百年的味道",
      "偶尔有现场毛利音乐表演，吃喝玩乐一体",
    ],
    isFree: false,
  },
]

// ==================== 活动 ====================
const events: AttractionItem[] = [
  {
    id: "e1",
    name: "欢迎仪式",
    en: "Pōwhiri Welcome Ceremony",
    r: 4.5,
    img: "/images/powhiri-1.jpg",
    images: ["/images/powhiri-1.jpg", "/images/powhiri-2.jpg", "/images/powhiri-3.jpg"],
    price: "NZ$25",
    priceValue: 25,
    description:
      "Pōwhiri是毛利部落传统的欢迎仪式，也是新西兰最庄重、最具仪式感的文化体验之一。仪式通常在毛利会堂（Marae）前的草坪上进行：来访者列队等待，部落的女性长者发出召唤（Karanga）——那悠扬的声音穿透空气，让每个人都瞬间安静。随后部落勇士会进行挑战（Wero），投下一根树枝或绿玉——来访者需要捡起它表示和平之意。最后，来访者与部落长者行碰鼻礼（Hongi），表示双方气息交融、成为一体。整个仪式庄重而温暖，充满了信任与尊重的力量。",
    descriptionEn:
      "Pōwhiri is the traditional Māori welcoming ceremony and one of New Zealand's most dignified and meaningful cultural experiences. The ceremony typically takes place on the lawn in front of the Marae (Māori meeting house): visitors line up as elder women of the tribe issue the Karanga (call)—a hauntingly beautiful cry that silences everyone instantly. A warrior then performs the Wero (challenge), placing a branch or greenstone on the ground—visitors must pick it up as a sign of peaceful intent. Finally, visitors perform the Hongi (pressing of noses) with the elders, symbolizing the blending of breath and becoming one. The ceremony is both solemn and deeply moving, filled with trust and respect.",
    address: "蒂普亚 / 蒂帕图毛利村",
    addressEn: "Te Puia / Te Patu Māori Village",
    category: "events",
    categoryEn: "Events & Activities",
    categoryIcon: "📅",
    tags: ["毛利仪式", "文化体验", "欢迎仪式", "神圣体验"],
    duration: "30-45分钟",
    highlights: [
      "女性长老的Karanga呼唤——一声穿透灵魂的歌谣",
      "Wero挑战——用捡起树枝的动作表达和平",
      "Hongi碰鼻礼——气息交融，从陌生人变成一体",
    ],
    isFree: false,
  },
  {
    id: "e2",
    name: "Matariki 毛利新年庆典",
    en: "Matariki Māori New Year",
    r: 4.8,
    img: "/images/waio-2.jpg",
    images: ["/images/waio-2.jpg"],
    price: "NZ$40",
    priceValue: 40,
    description:
      "Matariki是毛利人的新年，标志着昴星团（七姐妹星）在冬季黎明前再次出现在南半球天空中的时刻。在毛利文化中，Matariki的出现意味着过去一年的结束和新一年的开始——这是一个告别逝者、庆祝新生、展望未来的时刻。罗托鲁瓦每年6-7月都会举办盛大的Matariki庆祝活动，包括烟火表演、毛利歌舞、传统美食集市、天文讲座和灯笼放飞。整个罗托鲁瓦夜空被烟花点亮，湖面上漂浮着数百盏许愿灯，场面极为壮观和感人。这是体验毛利文化最盛大节日的最佳时机。",
    descriptionEn:
      "Matariki is the Māori New Year, marking the reappearance of the Pleiades star cluster (the Seven Sisters) in the Southern Hemisphere's winter dawn sky. In Māori culture, Matariki signifies the end of the past year and the beginning of a new one—a time to farewell the departed, celebrate the living, and look toward the future. Rotorua hosts spectacular Matariki celebrations in June-July each year, featuring fireworks, Kapa Haka performances, traditional food markets, astronomy talks, and lantern releases. The entire Rotorua night sky lights up with fireworks while hundreds of floating lanterns drift across the lake's surface. This is the best time to experience Māori culture's grandest festival.",
    address: "罗托鲁瓦湖滨及文化场馆（每年6-7月）",
    addressEn: "Rotorua Lakefront & cultural venues (June-July annually)",
    category: "events",
    categoryEn: "Events & Activities",
    categoryIcon: "📅",
    tags: ["新年庆典", "烟花", "毛利文化", "星空", "年度盛事"],
    duration: "全天至夜间（庆典活动）",
    highlights: [
      "昴星团升起之时——毛利人迎新的神圣时刻",
      "烟花 + 灯笼 + 歌舞 + 美食集市，全城狂欢",
      "湖面许愿灯漂流——在星空下许下新年的愿望",
    ],
    isFree: false,
  },
  {
    id: "e3",
    name: "凯图纳河漂流",
    en: "Kaituna River Rafting",
    r: 4.8,
    img: "/images/kaitiaki-1.jpg",
    images: ["/images/kaitiaki-1.jpg"],
    price: "NZ$125",
    priceValue: 125,
    description:
      "凯图纳河漂流是罗托鲁瓦最刺激的水上冒险之一。14个急流让你肾上腺素飙升，而最大的亮点是Tutea Falls——世界最高商业漂流瀑布，7米落差直冲而下！由经验丰富的Kiwi和毛利向导带领，Kaitiaki Adventures是120%气候正效益、本地毛利人拥有的运营商。也有河流滑板项目——俯卧在滑板上零距离感受急流。支持中文书面沟通。",
    descriptionEn:
      "One of Rotorua's most thrilling water adventures. 14 rapids build the adrenaline, culminating in Tutea Falls—the world's highest commercially rafted waterfall at 7 metres! Led by expert Kiwi and Māori guides. Kaitiaki Adventures is 120% climate positive, locally Māori-owned. Also offers river sledging—a raw, face-to-face ride through rapids. Chinese written support available.",
    address: "1135 Te Ngae Road, Rotorua",
    addressEn: "1135 Te Ngae Road, Rotorua",
    category: "events",
    categoryEn: "Events & Activities",
    categoryIcon: "📅",
    tags: ["漂流", "瀑布", "探险", "凯图纳河", "毛利向导"],
    duration: "半天",
    highlights: ["世界最高商业漂流瀑布——7米Tutea Falls", "14个急流连续冲击", "河流滑板可选——零距离感受急流"],
    isFree: false,
  },
]

// ==================== 住宿 ====================
const stays: AttractionItem[] = [
  {
    id: "s1",
    name: "铂尔曼罗托鲁瓦酒店",
    en: "Pullman Rotorua Hotel",
    r: 4.6,
    img: "/images/lake-1.jpg",
    images: ["/images/lake-1.jpg", "/images/lake-2.jpg"],
    price: "NZ$199/晚",
    description:
      "铂尔曼罗托鲁瓦酒店位于罗托鲁瓦市中心，是一家四星级半的高档酒店。酒店距离政府花园和罗托鲁瓦湖仅数分钟步行距离，位置极佳。客房宽敞现代，配备完善设施，部分房间可看到湖景。酒店拥有室内温泉泳池、健身中心和餐厅。是商务旅客和家庭游客的不二之选。",
    descriptionEn:
      "Pullman Rotorua is an upscale 4.5-star hotel located in central Rotorua, just minutes walk from Government Gardens and Lake Rotorua. Rooms are spacious and modern with full amenities, some offering lake views. The hotel features an indoor thermal pool, fitness center, and restaurant. An excellent choice for business travelers and families alike.",
    address: "6-8 Hinemoa Street, Rotorua",
    addressEn: "6-8 Hinemoa Street, Rotorua",
    category: "stay",
    categoryEn: "Accommodation",
    categoryIcon: "🏨",
    tags: ["高档酒店", "市中心", "湖景房", "室内温泉"],
    duration: "按需",
    highlights: ["市中心核心位置", "步行可达主要景点", "室内温泉泳池"],
    isFree: false,
  },
  {
    id: "s2",
    name: "哈卡旅舍",
    en: "Haka Lodge Rotorua",
    r: 4.4,
    img: "/images/whaka-2.jpg",
    images: ["/images/whaka-2.jpg"],
    price: "NZ$45/晚",
    description:
      "哈卡旅舍是一家精品背包客旅舍，以新西兰标志性的哈卡战舞命名。提供经济实惠的住宿选择，包括宿舍床位和私人房间。旅舍氛围友好活跃，有公共厨房、休息区和社交空间。位于市区步行可达的范围内，是预算有限的年轻旅行者和背包客的理想选择。",
    descriptionEn:
      "Haka Lodge is a boutique backpacker hostel named after New Zealand's iconic Haka dance. Offering budget-friendly accommodation including dorm beds and private rooms, the lodge has a friendly, social atmosphere with communal kitchen, lounge areas, and social spaces. Within walking distance of the city center, it's ideal for budget-conscious young travelers and backpackers.",
    address: "60 Tarewa Road, Rotorua",
    addressEn: "60 Tarewa Road, Rotorua",
    category: "stay",
    categoryEn: "Accommodation",
    categoryIcon: "🏨",
    tags: ["旅舍", "经济实惠", "社交氛围", "背包客"],
    duration: "按需",
    highlights: ["价格实惠", "社交氛围好", "公共厨房可做饭"],
    isFree: false,
  },
  {
    id: "s3",
    name: "千禧罗托鲁瓦酒店",
    en: "Millennium Hotel Rotorua",
    r: 4.6,
    img: "/images/millennium-1.jpg",
    images: ["/images/millennium-1.jpg"],
    price: "NZ$199/晚",
    description:
      "位于罗托鲁瓦市中心湖畔，毗邻波利尼西亚温泉。227间空调客房配备大理石浴室和现代装饰，利用酒店自有地热资源供暖。Poolside Brasserie提供早午餐，Nikau餐厅供应本地美食晚餐，Bar Zazu每日营业至深夜。内设Spa按摩和身体理疗、恒温泳池、温泉池和健身房。免费停车+3个EV充电站。接受支付宝和微信支付。",
    descriptionEn:
      "Centrally located beside Lake Rotorua, adjacent to Polynesian Spa. 227 air-conditioned rooms with marble bathrooms and modern décor, heated by geothermal resource. Poolside Brasserie, Restaurant Nikau, Bar Zazu, Spa, heated pool, hot pools, gym. Free parking with 3 EV charging stations. Alipay and WePay accepted.",
    address: "Cnr Eruera and Hinemaru Streets, Rotorua",
    addressEn: "Cnr Eruera and Hinemaru Streets, Rotorua",
    category: "stay",
    categoryEn: "Accommodation",
    categoryIcon: "🏨",
    tags: ["酒店", "湖景", "温泉", "Spa", "EV充电"],
    duration: "按需",
    highlights: ["湖畔位置，毗邻波利尼西亚温泉", "自有地热供暖+温泉池+Spa", "免费停车+EV充电站，支持支付宝微信"],
    isFree: false,
  },
  {
    id: "s4",
    name: "科伯恩罗托鲁瓦酒店",
    en: "Copthorne Hotel Rotorua",
    r: 4.4,
    img: "/images/copthorne-1.jpg",
    images: ["/images/copthorne-1.jpg"],
    price: "NZ$150/晚",
    description:
      "位于独特的地热仙境中，距市中心短途距离，完美位置探索罗托鲁瓦的一切。临近波利尼西亚温泉、罗托鲁瓦湖和蒂普亚毛利文化村。2个室外温泉池+恒温泳池。餐厅供应丰盛早餐，酒吧晚间开放。",
    descriptionEn:
      "Situated in a unique geothermal wonderland, a short distance from the city centre and perfectly located for exploring Rotorua. Close to Polynesian Spa, Lake Rotorua, and Te Puia. Features 2 outdoor spa pools and heated pool. Restaurant serves hearty breakfast, bar open evenings.",
    address: "328-348 Fenton Street, Rotorua",
    addressEn: "328-348 Fenton Street, Rotorua",
    category: "stay",
    categoryEn: "Accommodation",
    categoryIcon: "🏨",
    tags: ["酒店", "地热", "温泉池", "市中心"],
    duration: "按需",
    highlights: ["地热仙境中的绝佳位置", "2个室外温泉池", "步行可达蒂普亚和波利尼西亚温泉"],
    isFree: false,
  },
  {
    id: "s5",
    name: "罗托鲁瓦地热假日公园",
    en: "Rotorua Thermal Holiday Park",
    r: 4.3,
    img: "/images/thermal-park-1.jpg",
    images: ["/images/thermal-park-1.jpg"],
    price: "NZ$32/晚起",
    description:
      "距市中心几分钟车程，离法卡雷瓦雷瓦森林（红木森林）和山地自行车道最近的假日公园。提供露营地、小木屋、宿舍和现代汽车旅馆单元等多种选择。公共厨房、燃气烧烤、浴室、洗衣房、电视室、季节性泳池、儿童游乐区。温泉池对住客免费开放。",
    descriptionEn:
      "Just minutes from the city centre, the closest park to Whakarewarewa Forest and mountain biking tracks. Offers campsites, cabins, dorms, and motel units. Communal kitchen, gas BBQs, bathrooms, laundry, TV rooms, seasonal pool, kids play area. Hot pools free for guests.",
    address: "463 Old Taupo Road, Rotorua",
    addressEn: "463 Old Taupo Road, Rotorua",
    category: "stay",
    categoryEn: "Accommodation",
    categoryIcon: "🏨",
    tags: ["假日公园", "经济", "露营地", "木屋", "红木森林"],
    duration: "按需",
    highlights: ["离红木森林最近的经济住宿", "露营/木屋/宿舍/汽车旅馆多种选择", "温泉池免费享用"],
    isFree: false,
  },
]

// ==================== Banner 数据 ====================
export interface BannerData {
  img: string
  cn: string
  en: string
  desc: string
  descEn: string
}

export const banners: BannerData[] = [
  {
    img: "/images/champagne-1.jpg",
    cn: "香槟池",
    en: "Champagne Pool",
    desc: "新西兰最大的温泉池，翡翠绿池水与橙黄色矿沉积交相辉映",
    descEn: "NZ's largest hot spring — emerald green pool with orange mineral deposits",
  },
  {
    img: "/images/lake-1.jpg",
    cn: "罗托鲁瓦湖",
    en: "Lake Rotorua",
    desc: "蒸汽飘浮的火山湖，夕阳下湖面如金色绸缎",
    descEn: "Steaming volcanic lake, golden silk at sunset",
  },
  {
    img: "/images/redwoods-2.jpg",
    cn: "法卡雷瓦雷瓦森林",
    en: "Whakarewarewa Forest",
    desc: "百年红木林中徒步，世界级山地自行车道",
    descEn: "Century-old redwoods, world-class MTB trails",
  },
]

// ==================== 分类导航 ====================
export interface NavCategory {
  id: string
  em: string
  label: string
  labelEn: string
}

export const categories: NavCategory[] = [
  { id: "flights", em: "✈️", label: "机票", labelEn: "Flights" },
  { id: "events", em: "📅", label: "近日活动", labelEn: "Events" },
  { id: "routes", em: "🗺️", label: "路线推荐", labelEn: "Routes" },
  { id: "invest", em: "🤝", label: "项目招商", labelEn: "Investment" },
  { id: "rental", em: "🚗", label: "租车", labelEn: "Car Rental" },
]

// ==================== 归类 & 导出 ====================
export const catBlocks: CategoryBlock[] = [
  { title: "地热温泉", en: "Geothermal Springs", em: "♨️", items: geothermal },
  { title: "毛利文化", en: "Māori Culture", em: "🎭", items: maori },
  { title: "户外探险", en: "Outdoor Adventure", em: "🚲", items: outdoor },
  { title: "自然风光", en: "Natural Scenery", em: "🌿", items: nature },
]

export const foodItems: AttractionItem[] = food
export const eventItems: AttractionItem[] = events
export const stayItems: AttractionItem[] = stays

// 全量景点查找表（ID → AttractionItem）
export const attractionMap = new Map<string, AttractionItem>()

function buildMap() {
  for (const block of catBlocks) {
    for (const item of block.items) {
      attractionMap.set(item.id, item)
    }
  }
  for (const item of [...foodItems, ...eventItems, ...stayItems]) {
    attractionMap.set(item.id, item)
  }
}
buildMap()

export function getAttractionById(id: string): AttractionItem | undefined {
  return attractionMap.get(id)
}

export function getCategoryLabel(id: string): string {
  const labels: Record<string, string> = {
    geothermal: "地热温泉", maori: "毛利文化", outdoor: "户外探险", nature: "自然风光",
    food: "美食", events: "活动", stay: "住宿",
  }
  return labels[id] || "其他"
}

// 官方精选 Tab 数据 — ID 驱动
const rawRecTabs = [
  { id: "attractions", zh: "景点", en: "Attractions" },
  { id: "stays", zh: "食宿", en: "Stays" },
  { id: "food", zh: "美食", en: "Food" },
  { id: "events", zh: "活动", en: "Activities" },
]

export { rawRecTabs as recTabs }
export type RecTabId = "attractions" | "stays" | "food" | "events"

export const recTabData: Record<string, AttractionItem[]> = {
  attractions: catBlocks.flatMap(b => b.items),
  stays: stayItems,
  food: foodItems,
  events: eventItems,
}
