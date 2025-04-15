"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Props {
  className?: string
}

const ThemeChanger: React.FC<Props> = ({className}) => {
  const { setTheme, theme } = useTheme()

  return ( 
    <Button onClick={() => {
       if (theme === 'light')  {setTheme('dark') } else {setTheme('light');}
    }} variant="outline" size="icon" className={cn("rounded-full hover:dark:bg-zinc-800 dark:bg-zinc-800 bg-zinc-100 hover:bg-zinc-100 cursor-pointer",  className)}>
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

export default ThemeChanger