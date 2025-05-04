// "use client"

// import { usePathname, useRouter } from "next/navigation"
// import { useTransition } from "react"

// const LanguageSwitcher = () => {
//   const pathname = usePathname()
//   const router = useRouter()
//   const [, startTransition] = useTransition()

//   const changeLanguage = (lang: string) => {
//     const segments = pathname.split("/")
//     segments[1] = lang
//     const newPath = segments.join("/")
//     startTransition(() => {
//       router.push(newPath)
//     })
//   }

//   return (
//     <div className="flex items-center gap-2 text-sm">
//       <button onClick={() => changeLanguage("en")} className="hover:text-[#B7410E]">
//         🇬🇧 EN
//       </button>
//       <span>|</span>
//       <button onClick={() => changeLanguage("hi")} className="hover:text-[#B7410E]">
//         🇮🇳 HI
//       </button>
//     </div>
//   )
// }

// export default LanguageSwitcher


"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { usePathname, useRouter } from "next/navigation"
import { useTransition } from "react"
import { Button } from "@/components/ui/button"

const LanguageSwitcher = () => {
  const pathname = usePathname()
  const router = useRouter()
  const [, startTransition] = useTransition()

  const changeLanguage = (lang: string) => {
    const segments = pathname.split("/")
    segments[1] = lang
    const newPath = segments.join("/")
    startTransition(() => {
      router.push(newPath)
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          🌐
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLanguage("en")}>
          🇬🇧 en
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage("hi")}>
          🇮🇳 hi
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LanguageSwitcher
