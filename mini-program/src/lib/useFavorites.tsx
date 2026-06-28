// 收藏状态管理（localStorage 持久化）
import { createContext, useContext, useState, useCallback, useEffect } from "react"

interface FavContextType {
  favorites: string[]
  toggleFav: (id: string) => void
  isFav: (id: string) => boolean
  favCount: number
  clearFavs: () => void
}

const FavContext = createContext<FavContextType | null>(null)

const STORAGE_KEY = "rotorua_favorites"

function loadFavorites(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function FavProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>(loadFavorites)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
  }, [favorites])

  const toggleFav = useCallback((id: string) => {
    setFavorites(prev => {
      const added = !prev.includes(id)
      const next = added ? [...prev, id] : prev.filter(x => x !== id)
      // 触发自定义事件，供 Toast 层监听
      window.dispatchEvent(new CustomEvent('fav-toast', {
        detail: { added }
      }))
      return next
    })
  }, [])

  const isFav = useCallback((id: string) => favorites.includes(id), [favorites])

  const clearFavs = useCallback(() => setFavorites([]), [])

  return (
    <FavContext.Provider value={{
      favorites, toggleFav, isFav, favCount: favorites.length, clearFavs
    }}>
      {children}
    </FavContext.Provider>
  )
}

export function useFavorites() {
  const ctx = useContext(FavContext)
  if (!ctx) throw new Error("useFavorites must be used within FavProvider")
  return ctx
}
