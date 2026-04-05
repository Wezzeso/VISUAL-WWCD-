import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { cn } from "../lib/utils"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  details: string
  color: string
  className?: string
}

export function ServiceCard({ title, description, icon: Icon, details, color, className }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className={cn("relative group h-full", className)}
    >
      <div className={cn("absolute -inset-0.5 rounded-xl blur opacity-20 group-hover:opacity-60 transition duration-500 z-0", color)}></div>
      <Card className="relative z-10 bg-neutral-900/90 border-neutral-800 backdrop-blur-xl h-full flex flex-col">
        <CardHeader className="pb-2">
          <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-opacity-10", color.replace('bg-', 'text-').replace('from-', 'text-'))}>
            <Icon className="w-5 h-5 shadow-sm" />
          </div>
          <CardTitle className="text-white text-lg">{title}</CardTitle>
          <CardDescription className="text-neutral-400 text-xs uppercase tracking-wider">{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-neutral-300 text-sm leading-relaxed">
            {details}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
