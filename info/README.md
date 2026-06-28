# Rotorua Scraped Data

> 从 newzealand.com 官方旅游网站爬取的罗托鲁瓦数据。
> 爬取时间：2026-06-28
> 来源：https://www.newzealand.com/nz/rotorua/

## 数据结构

```
info/
├── README.md                 ← 本文件
├── attractions/              ← 景点
│   ├── 01-skyline-mountain-bike.json   ← 天空线山地自行车公园
│   ├── 02-lake-rotorua.json            ← 罗托鲁瓦湖
│   └── rotorua-central.json            ← 罗托鲁瓦市中心
├── nature/                   ← 自然风光
│   ├── whakarewarewa-forest.json       ← 华卡雷瓦雷瓦森林
│   ├── hamurana-springs.json           ← 哈穆拉纳泉
│   └── mount-tarawera.json            ← 塔拉韦拉火山
├── culture/                  ← 文化
│   └── ohi nemutu.json                ← 奥希内穆图毛利村
└── picture/                  ← 图片资源（已有）
```

## 已合并到小程序的更新

| # | 操作 | 原数据 | 新数据 |
|:-:|:----:|:------:|:------:|
| 1 | ⬆️ 增强 | 法卡雷瓦雷瓦森林 | 实景描述 + 官方评语 + 360度全景 |
| 2 | ⬆️ 增强 | 罗托鲁瓦湖 | Hinemoa爱情故事详情 + 地质背景 |
| 3 | ✨ 新增 | — | 奥希内穆图毛利村（免费） |
| 4 | ✨ 新增 | — | 天空线山地自行车公园 |
| 5 | ✨ 新增 | — | 哈穆拉纳泉（免费） |
| 6 | ✨ 新增 | — | 塔拉韦拉火山 |

## 已有但无法直接获取的

以下罗托鲁瓦热门景点在原网站上通过 JS 动态加载，内容已经在小程序中但无法用 API 获取到增强数据：
- 怀奥塔普地热世界 / 香槟池
- 蒂普亚毛利文化村 / 波胡图间歇泉
- 地狱之门
- 波利尼西亚温泉
