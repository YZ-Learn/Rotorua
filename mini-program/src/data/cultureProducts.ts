// 文化商品数据 + 查找

export interface CultureProduct {
  id: string
  name: string
  nameEn: string
  desc: string
  descEn: string
  price: string
  category: string
  bg: string
  emoji: string
  img: string | null
  highlights: string[]
}

export const cultureProducts: CultureProduct[] = [
  {
    id: "pounamu",
    name: "毛利绿玉 Pounamu",
    nameEn: "Māori Greenstone Pounamu",
    desc: "新西兰翡翠，毛利文化的灵魂宝石，每块都有独特纹理。Pounamu（绿玉）在毛利文化中具有极高的精神价值，被视为珍宝（taonga）。它象征着力量、智慧和永恒。传统上，酋长和勇士佩戴绿玉饰品，相信能带来保护和好运。每一块 Pounamu 都来自新西兰南岛的西海岸，由冰川河流冲刷而成，独一无二。",
    descEn: "NZ jade, the spiritual gem of Māori culture, each piece unique. Pounamu (greenstone) holds immense spiritual value in Māori culture, regarded as a taonga (treasure). It symbolizes strength, wisdom, and eternity. Traditionally, chiefs and warriors wore pounamu for protection and good fortune. Each piece comes from the West Coast of NZ's South Island, shaped by glacial rivers — truly one of a kind.",
    price: "NZ$89起",
    category: "文创",
    bg: "from-emerald-400/30 to-emerald-600/20",
    emoji: "🟢",
    img: null,
    highlights: ["纯正新西兰翡翠", "每块纹理独一无二", "传统毛利雕刻工艺", "附赠文化故事卡"],
  },
  {
    id: "weaving",
    name: "毛利手工编织",
    nameEn: "Māori Weaving",
    desc: "传统亚麻编织技艺，每件独一无二的手工艺术品。毛利编织（Raranga）是毛利文化中代代相传的古老技艺，使用新西兰本土亚麻（Harakeke）作为材料。每一件编织品都需要数天甚至数周的手工制作，图案和纹样蕴含着部落的传说和智慧。从实用的篮筐到装饰性的壁挂，每件作品都凝聚着工匠的心血。",
    descEn: "Traditional flax weaving, each piece a unique art. Māori weaving (Raranga) is an ancient craft passed down through generations, using New Zealand native flax (Harakeke). Each piece takes days or weeks to complete by hand, with patterns and designs carrying tribal stories and wisdom. From practical baskets to decorative wall hangings, every piece embodies the artisan's dedication.",
    price: "NZ$55起",
    category: "文创",
    bg: "from-amber-400/30 to-amber-600/20",
    emoji: "🧶",
    img: null,
    highlights: ["纯手工编织", "天然亚麻材料", "传统毛利图案", "每一件独一无二"],
  },
  {
    id: "skincare",
    name: "地热护肤系列",
    nameEn: "Geothermal Skincare",
    desc: "罗托鲁瓦地热矿物质护肤品，深层滋养。利用罗托鲁瓦独特的地热资源，富含硫磺、硅、镁等天然矿物质，结合新西兰本土植物精华。纯天然配方，不含人工添加剂。",
    descEn: "Rotorua geothermal mineral skincare, deep nourishment. Harnesses Rotorua's unique geothermal resources, rich in sulfur, silica, magnesium, and other natural minerals, combined with NZ native plant extracts. All-natural formula, no artificial additives.",
    price: "NZ$35起",
    category: "特产",
    bg: "from-sky-400/30 to-sky-600/20",
    emoji: "🧴",
    img: null,
    highlights: ["地热矿物质", "纯天然配方", "新西兰本土植物精华", "适合敏感肌"],
  },
  {
    id: "hangi-spice",
    name: "Hangi 地热烤肉料",
    nameEn: "Hangi Seasoning",
    desc: "毛利风味香料，在家做出 Rotorua 的味道。Hangi 是毛利传统地热烹饪方式，用地下蒸汽慢烤数小时。这款独家调配的香料 blend 还原了 Hangi 的经典风味——烟熏、 earthy、微辣，让你在家也能感受地热之都的味道。",
    descEn: "Māori flavored seasoning, taste of Rotorua at home. Hangi is the traditional Māori method of cooking using underground steam for hours. This exclusive spice blend recreates the authentic Hangi flavor — smoky, earthy, with a gentle warmth. Bring the taste of Rotorua to your kitchen.",
    price: "NZ$18",
    category: "美食",
    bg: "from-red-400/30 to-red-600/20",
    emoji: "🌶️",
    img: null,
    highlights: ["独家毛利配方", "天然香料无添加", "适合烤肉/炖菜", "附Hangi烹饪指南"],
  },
  {
    id: "carving",
    name: "毛利骨雕摆件",
    nameEn: "Māori Bone Carving",
    desc: "鹿骨手工雕刻，Koru 蕨叶螺旋等毛利图腾。毛利骨雕（Whakairo）以鹿骨或牛骨为原材料，雕刻出精密的传统图腾。Koru（蕨叶螺旋）象征新生和成长，Manaia（神话生物）象征守护者，Tiki 象征祖先智慧。每件作品都承载着毛利文化的深层寓意。",
    descEn: "Hand-carved bone with traditional Māori koru patterns. Māori bone carving (Whakairo) uses deer or cattle bone to create intricate traditional symbols. Koru (fern spiral) represents new life and growth, Manaia (mythical creature) represents protection, and Tiki represents ancestral wisdom. Each piece carries deep Māori cultural meaning.",
    price: "NZ$120起",
    category: "文创",
    bg: "from-stone-400/40 to-stone-600/20",
    emoji: "🦴",
    img: null,
    highlights: ["手工雕刻", "鹿骨材质", "传统毛利图腾", "附寓意解说卡"],
  },
  {
    id: "merino",
    name: "美利奴羊毛围巾",
    nameEn: "Merino Scarf",
    desc: "新西兰纯净美利奴羊毛，融入毛利编织纹样。选用新西兰南岛高海拔美利奴羊的优质羊毛，触感柔软细腻。设计师将传统毛利编织纹样（Tāniko）融入现代围巾设计中，是传统与现代的完美结合。每条围巾都配有专属编号和故事卡。",
    descEn: "Pure NZ merino with Māori weaving patterns. Made from premium merino wool sourced from high-altitude South Island farms, incredibly soft to the touch. Designers blend traditional Māori weaving motifs (Tāniko) into contemporary scarf designs — a perfect marriage of tradition and modernity. Each scarf comes with a numbered certificate and story card.",
    price: "NZ$79",
    category: "纪念品",
    bg: "from-pink-300/30 to-pink-500/20",
    emoji: "🧣",
    img: null,
    highlights: ["100%美利奴羊毛", "毛利纹样设计", "柔软亲肤", "限量编号"],
  },
  {
    id: "honey",
    name: "麦卢卡蜂蜜",
    nameEn: "Mānuka Honey",
    desc: "新西兰国宝级蜂蜜，UMF 10+ 活性抗菌。麦卢卡蜂蜜采自新西兰偏远地区的麦卢卡树花，具有独特的抗菌活性。UMF™ 是国际公认的活性评级体系，UMF 10+ 代表具有治疗级别的抗菌效果。纯正新西兰原产，从蜂巢到罐装全程可追溯。",
    descEn: "NZ's treasured honey, UMF 10+ active antibacterial. Mānuka honey comes from the flowers of the mānuka tree in remote NZ regions, with unique antibacterial properties. UMF™ is the internationally recognized rating system — UMF 10+ indicates therapeutic-grade antibacterial effect. 100% NZ origin, fully traceable from hive to jar.",
    price: "NZ$45",
    category: "特产",
    bg: "from-yellow-400/30 to-yellow-600/20",
    emoji: "🍯",
    img: null,
    highlights: ["UMF 10+活性认证", "100%新西兰原产", "可追溯蜂巢来源", "抗菌抗氧化"],
  },
  {
    id: "kiwi",
    name: "几维鸟毛绒公仔",
    nameEn: "Kiwi Plush Toy",
    desc: "新西兰国鸟几维鸟，超萌软糯手感。Kiwi（几维鸟）是新西兰的国鸟和国民象征，这种不会飞的夜行鸟类仅在新西兰才有。公仔采用超柔短毛绒面料，填充饱满，手感软糯。造型忠实还原了几维鸟标志性的长喙和圆润身体。适合所有年龄段，是新西兰最经典的伴手礼。",
    descEn: "Super soft NZ kiwi plush toy. The kiwi is New Zealand's national bird and cultural icon — a flightless nocturnal bird found only in NZ. This plush toy uses ultra-soft short plush fabric with generous stuffing. The design faithfully captures the kiwi's iconic long beak and round body. Suitable for all ages, the most classic NZ souvenir.",
    price: "NZ$29",
    category: "纪念品",
    bg: "from-teal-300/30 to-teal-500/20",
    emoji: "🐥",
    img: null,
    highlights: ["超柔面料", "新西兰国鸟造型", "轻便可托运", "适合送礼"],
  },
]

export function getCultureProduct(id: string): CultureProduct | undefined {
  return cultureProducts.find(p => p.id === id)
}
