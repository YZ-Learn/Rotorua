# RotoruaNZ — 新西兰罗托鲁瓦旅游局微信小程序

> 笔试作品 | WeChat Mini Program DEMO
> 目标：内容到转化的完整链路 — 打通"看到→想去→下单"

---

## 📸 截图预览

| 首页 | 详情页 | 预订页 |
|:----:|:------:|:------:|
| ![首页](screenshots/home.png) | ![详情](screenshots/detail.png) | ![预订](screenshots/booking.png) |

| 地图 | 特色文化 | 我的 |
|:----:|:--------:|:---:|
| ![地图](screenshots/map.png) | ![文化](screenshots/culture.png) | ![我的](screenshots/profile.png) |

> 截图占位，实际预览请运行 `npm run dev`

---

## 🚀 快速开始

```bash
# 1. 进入项目目录
cd mini-program

# 2. 安装依赖
npm install

# 3. 启动开发服务器
npm run dev
# → http://localhost:5173
```

## 📦 构建生产版本

```bash
npm run build
# 输出目录: dist/
```

## 🗂️ 项目结构

```
Rotorua/
├── mini-program/              ← 小程序前端（主项目）
│   ├── public/images/         ← 景点图片（35张）
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/        ← BottomTabBar, TabLayout
│   │   │   └── ui/            ← Button, Card, Badge, Avatar
│   │   ├── data/              ← 数据层（attractions.ts）
│   │   ├── lib/               ← 工具库（useFavorites, useI18n）
│   │   ├── pages/             ← 所有页面（7个）
│   │   ├── main.tsx           ← 入口 + 路由
│   │   └── index.css          ← Tailwind 样式
│   ├── package.json
│   └── vite.config.ts
│
├── admin-system/              ← 后台管理系统（独立HTML）
│   └── index.html             ← 完整的管理界面
│
├── info/picture/              ← 原始图片素材（中文命名）
├── 小程序设计框架.md           ← 完整设计文档
├── 新西兰.md                   ← 笔试题目原稿
└── 项目进度.md                 ← 开发进度存档
```

---

## ✨ 功能特性

### ✅ Part 1 — 基础框架
- [x] 开屏页（5张大图轮播 + 倒计时跳过 + zoomIn动画）
- [x] 底部4Tab导航（旅游/地图/特色/我的）
- [x] 首页（功能导航 + 全宽Banner + 官方精选Tab）
- [x] 心形收藏按钮（localStorage 持久化）
- [x] 页面切换动画（Framer Motion）

### ✅ Part 2 — 转化链路
- [x] 数据层提取（20个景点/美食/住宿/活动）
- [x] **产品详情页** — 大图展示 + 基本信息 + 文字介绍 + 特色亮点 + 标签 + 地图入口 + 固定预订按钮
- [x] **预订下单页** — 日期选择 + 人数选择（成人/儿童） + 联系表单 + 价格计算 + 表单验证
- [x] **订单成功页** — 成功动画 + 订单编号 + 温馨提示 + 继续探索/查看订单
- [x] **完整转化流程**：首页卡片 → 详情页 → 预订页 → 成功页

### ✅ Part 3 — 互动地图
- [x] 深色罗托鲁瓦湖 SVG 地图背景
- [x] 20个可点击标注点（含 emoji 图标 + 名称 + 评分气泡）
- [x] 筛选标签（全部/景点/住宿/美食/活动）
- [x] 选中底卡（缩略图 + 评分 + 时长 + 价格 + 查看详情）
- [x] 装饰元素（指北针、比例尺、湖泊标注）

### ✅ Part 4 — 特色文化
- [x] 文化 Banner（渐变背景 + 毛利纹样装饰）
- [x] 4个商品分类（文创/特产/美食/纪念品）
- [x] 6件特色好物（含描述 + 价格 + 收藏）
- [x] 2篇文化故事（毛利创世神话 + 哈卡战舞）

### ✅ Part 5 — 个人中心
- [x] 用户信息卡片 + 统计数据（订单/收藏/浏览）
- [x] 订单列表（4个Tab筛选 + 产品缩略图 + 状态标签）
- [x] 功能列表（收藏/历史/优惠券/设置/客服/关于）
- [x] 收藏数量实时同步（从 localStorage 读取）

### ✅ Part 6 — 后台管理系统
- [x] 仪表盘（4个统计卡片 + 7日订单趋势图 + 最新订单表）
- [x] 产品管理（20个产品列表 + 新增弹窗 + 编辑/删除）
- [x] 订单管理（8个订单 + 状态标签 + 详情查看）
- [x] 内容管理（故事列表 + 新增故事）
- [x] Banner 管理
- [x] 系统设置

### ✅ Part 7 — 工程化完善
- [x] 收藏 localStorage 持久化（跨页面同步）
- [x] 中英文切换基础设施（i18n Provider + 翻译字典）
- [x] 底部Tab + 首页语言切换按钮
- [x] README 文档

---

## 🛠️ 技术栈

| 层 | 技术 | 版本 |
|----|------|:----:|
| 构建 | Vite | 8.x |
| 框架 | React + TypeScript | 19.x |
| 样式 | Tailwind CSS v4 | 4.x |
| 动画 | Framer Motion | 12.x |
| 图标 | Lucide React | 1.x |
| 路由 | react-router-dom | 7.x（createHashRouter） |
| 数据 | 本地硬编码 + localStorage | - |
| 后台 | 独立 HTML + Vanilla JS | - |

### 配色方案

| 用途 | 色值 | CSS变量 |
|------|------|---------|
| 主色（深蓝绿） | `#0B4F4A` | `--color-primary` |
| 背景（自然白） | `#F8F9F7` | `--color-background` |
| 文字（深炭） | `#1C1E21` | `--color-foreground` |
| 强调（哑光金） | `#C4933F` | `--color-accent` |

---

## 🌐 页面路由

| 路由 | 页面 | 描述 |
|------|------|------|
| `/` | TravelPage | 首页（旅游Tab） |
| `/map` | MapPage | 互动旅游地图 |
| `/culture` | CulturePage | 特色文化 |
| `/profile` | ProfilePage | 个人中心 |
| `/product/:id` | ProductDetailPage | 产品详情 |
| `/booking/:productId` | BookingPage | 预订下单 |
| `/order/success/:id` | OrderSuccessPage | 订单成功 |

---

## 📋 核心转化链路

```
首页浏览官方精选
  ↓ 点击卡片
产品详情页（图片+文字+亮点+标签）
  ↓ 点击「立即预订」
预订下单页（日期+人数+联系人+价格）
  ↓ 点击确认支付
订单成功页（订单编号+温馨提示）
  ↓
回到首页 / 查看我的订单
```

---

## 🔧 后台管理系统

独立 HTML 文件，无需构建，直接浏览器打开：

```bash
# 方式一：双击打开
admin-system/index.html

# 方式二：用 Live Server 启动
cd admin-system && npx live-server
```

功能：仪表盘、产品CRUD、订单管理、内容管理、Banner管理、系统设置

---

## 📝 笔试题目背景

RotoruaNZ 是新西兰 Rotorua 地区的经济发展机构与区域旅游组织。
核心需求：依托微信小程序拉动预订转化与产品曝光，同时通过协同内容、KOL合作以及顺畅的转化链路，强化 Rotorua 在中国市场的品牌存在感。

> 完整题目见 `新西兰.md`

---

## 🚨 注意事项

- 所有数据为示例数据，非真实商业数据
- 支付功能为模拟演示，不涉及真实资金交易
- 图片来源于 Bing 图片搜索，仅供 DEMO 用途
- 后台管理系统为独立页面，与小程序不联调

---

## 👨‍💻 开发信息

- 开发：虾米老师3.0 + 杨同学
- 启动日期：2026-06-27
- 完成日期：2026-06-27
