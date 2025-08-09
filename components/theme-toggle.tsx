"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { SidebarMenuButton } from "@/components/ui/sidebar"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <SidebarMenuButton>
        <div className="h-4 w-4" />
        <span>Carregando...</span>
      </SidebarMenuButton>
    )
  }

  return (
    <SidebarMenuButton
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      tooltip={`Alternar para tema ${theme === "light" ? "escuro" : "claro"}`}
    >
      {theme === "light" ? (
        <>
          <Moon className="h-4 w-4" />
          <span>Tema Escuro</span>
        </>
      ) : (
        <>
          <Sun className="h-4 w-4" />
          <span>Tema Claro</span>
        </>
      )}
    </SidebarMenuButton>
  )
}
