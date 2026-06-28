import { useParams, useNavigate } from "react-router-dom"
import { ArrowLeft, Heart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/useI18n"
import { useFavorites } from "@/lib/useFavorites"
import { stories } from "@/data/stories"

export default function StoryDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { t, td, lang } = useI18n()
  const { favorites, toggleFav } = useFavorites()

  const story = stories.find(s => s.id === id)

  if (!story) {
    return (
      <div className="h-full flex flex-col items-center justify-center bg-background gap-4">
        <p className="text-muted-foreground">{lang === "zh" ? "故事未找到" : "Story not found"}</p>
        <Button size="sm" onClick={() => navigate("/culture")}>{lang === "zh" ? "返回" : "Go Back"}</Button>
      </div>
    )
  }

  const isFav = favorites.includes(story.id)

  return (
    <div className="h-full flex flex-col bg-background">
      {/* ===== 头部 ===== */}
      <header className="shrink-0 bg-white border-b border-border/50">
        <div className="flex items-center gap-3 px-4 pt-3 pb-2">
          <button onClick={() => navigate(-1)} className="p-1 -ml-1">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="font-display font-bold text-base truncate">
            {lang === "zh" ? story.title : story.titleEn}
          </h1>
          <button onClick={() => toggleFav(story.id)} className="ml-auto">
            <Heart className={`w-5 h-5 ${isFav ? "fill-red-400 text-red-400" : "text-muted-foreground"}`} />
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto">
        {/* ===== 顶部 Banner ===== */}
        <div className={`bg-gradient-to-br ${story.bgGradient} px-6 pt-8 pb-10`}>
          <Badge variant="secondary" className="bg-white/20 text-white border-0 mb-2 text-[10px]">
            {story.emoji} {lang === "zh" ? "毛利文化" : "Māori Culture"}
          </Badge>
          <h1 className="text-white font-display font-bold text-2xl leading-tight">
            {td(story.title, story.titleEn)}
          </h1>
          <p className="text-white/60 text-sm mt-1">
            {td(story.subtitle, story.subtitleEn)}
          </p>
        </div>

        {/* ===== 正文 ===== */}
        <div className="px-5 py-6">
          <div className="space-y-5">
            {story.paragraphs.map((p, i) => (
              <div key={i} className="story-paragraph">
                <p className="text-sm text-foreground/85 leading-relaxed">
                  {lang === "zh" ? p.zh : p.en}
                </p>
                {lang === "en" && p.zh && (
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed border-l-2 border-muted pl-3 italic">
                    {p.zh}
                  </p>
                )}
                {lang === "zh" && (
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed border-l-2 border-muted pl-3">
                    {p.en}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* ===== 底部 ===== */}
          <div className="mt-8 pt-6 border-t border-border/50 text-center">
            <p className="text-xs text-muted-foreground">
              {lang === "zh" ? "在罗托鲁瓦，遇见千年毛利文化" : "Discover a thousand years of Māori culture in Rotorua"}
            </p>
            <div className="flex items-center justify-center gap-3 mt-4">
              <Button size="sm" variant="outline" onClick={() => navigate("/culture")}>
                {lang === "zh" ? "返回特色" : "Back to Culture"}
              </Button>
              <Button size="sm" onClick={() => navigate("/map")}>
                {lang === "zh" ? "探索地图" : "Explore Map"}
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
