import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react"

interface Toast {
  id: number
  message: string
  type: "success" | "info"
}

interface ToastContextType {
  toast: (message: string, type?: "success" | "info") => void
}

const ToastContext = createContext<ToastContextType | null>(null)

let nextId = 0

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = useCallback((message: string, type: "success" | "info" = "success") => {
    const id = nextId++
    setToasts(prev => [...prev, { id, message, type }])
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id))
    }, 1800)
  }, [])

  // 监听收藏事件
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail
      const msg = detail.added ? "❤️ 已收藏" : "已取消收藏"
      addToast(msg)
    }
    window.addEventListener('fav-toast', handler)
    return () => window.removeEventListener('fav-toast', handler)
  }, [addToast])

  return (
    <ToastContext.Provider value={{ toast: addToast }}>
      {children}
      {/* Toast 容器 */}
      <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[9999] flex flex-col items-center gap-2 pointer-events-none">
        {toasts.map(t => (
          <div key={t.id}
            className={`animate-[fadeIn_0.2s_ease-out] px-4 py-2 rounded-full shadow-lg text-xs font-medium pointer-events-auto ${
              t.type === "success"
                ? "bg-primary text-white"
                : "bg-muted text-foreground"
            }`}>
            {t.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error("useToast must be used within ToastProvider")
  return ctx
}
