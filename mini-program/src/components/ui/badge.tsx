import * as React from "react"
import { cn } from "@/lib/utils"

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "gold" | "outline" | "secondary"
}

const variantMap: Record<string, string> = {
  default: "bg-primary/10 text-primary border border-primary/15",
  gold: "bg-[#EAB308]/10 text-[#9A7B06] border border-[#EAB308]/20",
  outline: "border border-input bg-background text-muted-foreground",
  secondary: "bg-white/20 text-white border-0",
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        "transition-colors",
        variantMap[variant],
        className
      )}
      {...props}
    />
  )
}

export { Badge }
