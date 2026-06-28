import * as React from "react"
import { cn } from "@/lib/utils"

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  fallback?: string
  size?: "sm" | "md" | "lg"
}

function Avatar({ className, src, alt, fallback, size = "md", ...props }: AvatarProps) {
  const sizeClasses = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-14 h-14 text-base",
  }
  const [error, setError] = React.useState(false)

  return (
    <div
      className={cn(
        "relative rounded-full overflow-hidden bg-primary/10 flex items-center justify-center font-medium text-primary shrink-0",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {src && !error ? (
        <img src={src} alt={alt || ""} className="w-full h-full object-cover" onError={() => setError(true)} />
      ) : (
        <span>{fallback || alt?.charAt(0) || "?"}</span>
      )}
    </div>
  )
}

export { Avatar }
