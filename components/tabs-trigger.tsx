import { TabsTrigger as ShadTabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

export function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof ShadTabsTrigger>) {
  return (
    <ShadTabsTrigger
      className={cn(
        // Styles using your theme
        "data-[state=active]:bg-rangrez-gold data-[state=active]:text-white",
        "text-rangrez-indigo_text hover:bg-rangrez-sand_hover",
        "rounded px-4 text-sm mb-2 font-medium transition-colors duration-200",
        className
      )}
      {...props}
    />
  )
}
