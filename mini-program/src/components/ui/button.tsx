import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "accent" | "outline" | "ghost" | "link"
  size?: "sm" | "default" | "lg" | "full"
}

const variantStyles: Record<string, string> = {
  default: "bg-primary text-white hover:bg-[#0A6B58] shadow-sm",
  accent: "bg-accent text-white hover:bg-[#E8924F] shadow-sm",
  outline: "border border-input bg-white hover:bg-accent/10 text-foreground",
  ghost: "hover:bg-accent/10 text-foreground",
  link: "text-primary underline-offset-4 hover:underline",
}

const sizeStyles: Record<string, string> = {
  sm: "h-9 rounded-lg px-3 text-xs",
  default: "h-10 rounded-xl px-4 py-2 text-sm",
  lg: "h-12 rounded-xl px-6 text-base",
  full: "h-12 rounded-xl px-6 text-base w-full",
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap font-medium",
          "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50 active:scale-95 transition-all duration-200",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
