import { useState, type ImgHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface SafeImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string
}

export default function SafeImage({ src, alt, className, fallback, ...props }: SafeImageProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className={cn("flex items-center justify-center bg-muted/50 text-muted-foreground/40", className)}
        {...props as any}>
        <span className="text-lg">{fallback || "📷"}</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt || ""}
      className={className}
      onError={() => setFailed(true)}
      {...props}
    />
  )
}
