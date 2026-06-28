export interface StoryContent {
  id: string
  title: string
  titleEn: string
  subtitle: string
  subtitleEn: string
  emoji: string
  bgGradient: string
  paragraphs: { zh: string; en: string }[]
  image?: string
}

export const stories: StoryContent[] = [
  {
    id: "creation-myth",
    title: "毛利创世神话",
    titleEn: "Māori Creation Myth",
    subtitle: "从黑暗到光明",
    subtitleEn: "From Darkness to Light",
    emoji: "🌌",
    bgGradient: "from-indigo-900 via-purple-800 to-indigo-700",
    paragraphs: [
      {
        zh: "在时间长河的起点，没有光，没有声音，只有无边无际的黑暗。天父朗吉努伊（Ranginui）和地母帕帕图阿努库（Papatūānuku）紧紧相拥，他们的身体贴得如此紧密，以至于他们的孩子们——众神——被夹在父母之间，生活在永恒的黑暗中，无法呼吸，无法看到一丝光明。",
        en: "At the beginning of time, there was no light, no sound — only endless darkness. Ranginui, the Sky Father, and Papatūānuku, the Earth Mother, were locked in a tight embrace. Their children — the gods — were trapped between them, living in eternal darkness, unable to breathe or see a glimmer of light.",
      },
      {
        zh: "众神渴望光明和自由。他们聚在一起讨论，认为必须将父母分开，让光明进入这个世界。有的神主张杀死父母，但森林之神塔内马胡塔（Tāne Mahuta）提出了一个更温和的方案——将他们推开。",
        en: "The gods yearned for light and freedom. They gathered to discuss how to bring light into the world. Some suggested killing their parents, but Tāne Mahuta, god of the forest, proposed a gentler plan — to push them apart.",
      },
      {
        zh: "众神轮流尝试。风暴之神塔维里马泰阿（Tawhirimatea）的猛烈尝试只让父母抱得更紧。战争之神图马图恩加（Tūmatauenga）的力量也不足以分开他们的拥抱。最终，塔内马胡塔站了出来。他深吸一口气，将双脚抵住母亲的身体，用肩膀顶住父亲的胸膛，用尽全力——一点一点地——将天父推向了高空。",
        en: "One by one, the gods tried. Tawhirimatea, god of wind and storms, only made the parents cling tighter. Tūmatauenga, god of war, lacked the strength. Finally, Tāne Mahuta stepped forward. Taking a deep breath, he braced his feet against his mother and pushed his shoulders against his father's chest — slowly, inch by inch — lifting the sky father high above.",
      },
      {
        zh: "随着天父被推远，光明第一次涌入了世界。阳光洒在大地上，海洋、森林、山川在光芒中显现。然而，塔维里马泰阿愤怒于父母的分离，化作狂风暴雨，向大地发起攻击。而天父的泪水化为雨露，洒向大地——那是他对地母永恒的思念。",
        en: "As the sky father was pushed away, light flooded the world for the first time. Sunlight bathed the earth — oceans, forests, and mountains emerged from the darkness. But Tawhirimatea, enraged by the separation, unleashed storms upon the earth. Meanwhile, the sky father's tears fell as rain — his eternal longing for the earth mother.",
      },
      {
        zh: "这个创世神话是毛利文化的基石。它讲述了光明如何从黑暗中诞生，秩序如何从混沌中建立。每一个自然现象——风、雨、阳光、森林——都被赋予了神圣的意义。当你站在罗托鲁瓦的蒸汽地热区，看着雾气从大地升起，仿佛还能感受到天地分离时刻的震撼。",
        en: "This creation myth is the foundation of Māori culture. It tells how light emerged from darkness, how order was born from chaos. Every natural phenomenon — wind, rain, sunlight, forest — carries sacred meaning. Standing in Rotorua's geothermal fields, watching steam rise from the earth, you can almost feel the power of that primordial separation.",
      },
    ],
  },
  {
    id: "haka-story",
    title: "哈卡战舞：不只战争之舞",
    titleEn: "Haka: More Than a War Dance",
    subtitle: "灵魂的表达，民族的脉搏",
    subtitleEn: "The Soul of a People",
    emoji: "🔥",
    bgGradient: "from-amber-800 via-red-700 to-orange-600",
    paragraphs: [
      {
        zh: "当新西兰全黑队（All Blacks）在赛场上跳起哈卡时，整个世界都能感受到那股震撼人心的力量。但哈卡远不止是一种战前仪式——它是毛利人的灵魂表达，是千年来传承的文化密码。",
        en: "When the All Blacks perform the Haka before a rugby match, the world feels its power. But the Haka is far more than a pre-battle ritual — it is the soul of Māori people, a cultural code passed down through a millennium.",
      },
      {
        zh: "在毛利语中，“哈卡“（Haka）意为“点燃火焰“或“鼓舞生命“。每一个动作都有精确的含义——瞪大的眼睛（pūkana）象征着警觉和生命力；吐舌头（whetero）是挑战和勇气的表现；拍打胸脯表示心跳和生命的节奏；跺脚则震动大地，宣告自己的存在。",
        en: "In Māori, 'Haka' means 'to ignite' or 'to breathe life.' Every movement carries precise meaning — the wide eyes (pūkana) symbolize alertness and vitality; the protruding tongue (whetero) is a challenge and expression of courage; slapping the chest represents the heartbeat and rhythm of life; stamping feet shakes the earth, declaring one's presence.",
      },
      {
        zh: "哈卡有很多种。最著名的卡马特哈卡（Ka Mate）创作于1820年代，讲述了一位毛利酋长从敌人手中逃脱的故事，是庆祝生命战胜死亡的胜利之歌。而卡帕奥庞戈（Kapa o Pango）则是全黑队专属的哈卡，2005年创作，更加强调球队的力量和凝聚力。",
        en: "There are many types of Haka. The most famous 'Ka Mate' was composed in the 1820s, telling the story of a Māori chief escaping his enemies — a song celebrating life's triumph over death. 'Kapa o Pango' is the All Blacks' exclusive Haka, created in 2005, emphasizing the team's strength and unity.",
      },
      {
        zh: "哈卡不仅用于战争和体育。在毛利人的生活中，哈卡出现在葬礼上表达哀思，在婚礼上传递祝福，在欢迎仪式上表示尊重，在庆祝活动中释放喜悦。每一个哈卡都在讲述一个故事，传递一种情感，连接着过去与现在。",
        en: "Haka is not only for war and sports. In Māori life, Haka appears at funerals to express grief, at weddings to convey blessings, at welcome ceremonies to show respect, and at celebrations to release joy. Every Haka tells a story, conveys an emotion, and connects past with present.",
      },
      {
        zh: "今天，你仍然可以在罗托鲁瓦的蒂普亚毛利文化村（Te Puia）亲身感受哈卡的力量。当舞者们的目光与你对视，当他们跺脚的声音在大地上回荡，你会发现——哈卡不只是舞蹈，它是活着的历史，是毛利民族的心跳。",
        en: "Today, you can still experience the power of Haka at Te Puia in Rotorua. When the performers lock eyes with you, when the stamping echoes through the earth, you'll discover — the Haka is not just a dance, it's living history, the heartbeat of the Māori people.",
      },
    ],
  },
]
