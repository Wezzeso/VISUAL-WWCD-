import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
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
      whileHover={{ y: -8, scale: 1.01 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn("relative group h-full", className)}
    >
      {/* Dynamic Glow Background */}
      <div className={cn(
        "absolute -inset-1 rounded-2xl blur-2xl opacity-0 group-hover:opacity-30 transition duration-1000 z-0",
        color
      )}></div>
      
      {/* Card Body */}
      <div className="relative z-10 h-full p-6 rounded-2xl bg-neutral-900/40 border border-white/5 backdrop-blur-2xl flex flex-col transition-all duration-500 group-hover:bg-neutral-900/60 group-hover:border-white/10 shadow-2xl">
        <div className="flex items-start justify-between mb-8">
           <div className={cn(
             "w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500",
             color.replace('bg-', 'text-').replace('from-', 'text-')
           )}>
             <Icon className="w-6 h-6" />
           </div>
           
           <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 bg-white/5 px-2 py-1 rounded border border-white/5">
             ACTIVE
           </div>
        </div>

        <div className="space-y-2 mb-6">
          <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-500 transition-all duration-500">
            {title}
          </h3>
          <p className="text-[11px] font-mono font-medium text-indigo-400/80 uppercase tracking-widest bg-indigo-500/5 w-fit px-2 py-0.5 rounded">
            {description}
          </p>
        </div>

        <div className="flex-grow">
          <p className="text-neutral-400 text-sm leading-relaxed font-light">
            {details}
          </p>
        </div>

        {/* Action / "Learn More" Hint */}
        <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span className="text-[10px] font-semibold text-neutral-500 uppercase tracking-widest">Protocol Stats</span>
          <div className="flex gap-1">
             <div className="w-4 h-1 rounded-full bg-white/20"></div>
             <div className="w-2 h-1 rounded-full bg-white/20"></div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
