import { motion } from "framer-motion"
import { 
  Database, HardDrive, 
  Brain, Video, 
  Calendar, MessageSquare, Link, 
  Mic2, Video as VideoIcon, PenTool, LayoutGrid,
  Zap, Globe, Shield, Cpu, ChevronRight, Binary
} from "lucide-react"

import { ServiceCard } from "./components/ServiceCard"
import { FlowLines } from "./components/FlowLines"

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  }

  const sections = [
    {
      title: "Real-time Engine",
      icon: Zap,
      services: [
        {
          title: "Durable Objects",
          description: "Room-based State",
          icon: Database,
          details: "Creates a dedicated mini-server for every single whiteboard room. All synchronization logic happens here for 50ms latency.",
          color: "bg-blue-500 from-blue-500"
        },
        {
          title: "Cloudflare Workers",
          description: "Edge Gateway",
          icon: Globe,
          details: "The global entry point. Handles routing, authentication, and connects users to their regional Durable Object instance instantly.",
          color: "bg-indigo-500 from-indigo-500"
        },
        {
          title: "R2 Storage",
          description: "The Media Vault",
          icon: HardDrive,
          details: "Highly durable storage for heavy assets like images and videos, plus periodic snapshots of room state for disaster recovery.",
          color: "bg-cyan-500 from-cyan-500"
        }
      ]
    },
    {
      title: "Intelligence Layer",
      icon: Brain,
      services: [
        {
          title: "Gemini 3.1 Pro",
          description: "The Mastermind",
          icon: Brain,
          details: "Powers text generation, code analysis, and canvas-aware responses. It understands your entire drawing context.",
          color: "bg-purple-500 from-purple-500"
        },
        {
          title: "Higgsfield & Kling",
          description: "Video Generation",
          icon: Video,
          details: "Native video generation services that turn text prompts into high-quality cinematic clips directly on your canvas.",
          color: "bg-pink-500 from-pink-500"
        },
        {
          title: "Handwriting OCR",
          description: "Ink to Text",
          icon: PenTool,
          details: "Advanced machine learning that converts your stylus sketches and handwriting into structured digital data.",
          color: "bg-orange-500 from-orange-500"
        }
      ]
    },
    {
      title: "Ecosystem & Integration",
      icon: LayoutGrid,
      services: [
        {
          title: "Google Calendar",
          description: "Dynamic Planning",
          icon: Calendar,
          details: "Syncs your canvas events directly to your personal calendar. Drag events from the board into your real schedule.",
          color: "bg-emerald-500 from-emerald-500"
        },
        {
          title: "Telegram Bot",
          description: "Cross-platform Sync",
          icon: MessageSquare,
          details: "Send updates to your whiteboard via Telegram. The AI agent listens and responds to commands from your phone.",
          color: "bg-sky-500 from-sky-500"
        },
        {
          title: "Unfurl/Bookmarks",
          description: "Web Intelligence",
          icon: Link,
          details: "Analyzes pasted URLs and generates rich visual previews, extracting the most important images and data.",
          color: "bg-yellow-500 from-yellow-500"
        }
      ]
    },
    {
      title: "Advanced Interaction",
      icon: Cpu,
      services: [
        {
          title: "LiveKit Audio/Video",
          description: "Presence Engine",
          icon: VideoIcon,
          details: "Real-time communication layer for spontaneous collaboration. Built-in video bubbles and spatial audio for better focus.",
          color: "bg-rose-500 from-rose-500"
        },
        {
          title: "Agent Voice",
          description: "AI Avatar",
          icon: Mic2,
          details: "An AI agent you can talk to. Includes low-latency speech-to-text, reasoning, and synthesis with natural expression.",
          color: "bg-teal-500 from-teal-500"
        },
        {
          title: "Supabase Vault",
          description: "Persistent DB",
          icon: Shield,
          details: "Secure user profiles, room metadata, and global configuration stored with enterprise-grade encryption and speed.",
          color: "bg-green-500 from-green-500"
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-50 selection:bg-purple-500/30 font-sans relative overflow-x-hidden selection:text-white">
      {/* Premium Background Elements */}
      <FlowLines />
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[60%] h-[60%] rounded-full opacity-[0.08] bg-gradient-to-br from-indigo-500/50 via-purple-500/50 to-blue-800/50 blur-[130px]" />
        <div className="absolute bottom-[0%] right-[-5%] w-[50%] h-[70%] rounded-full opacity-[0.06] bg-gradient-to-tl from-cyan-600/50 to-emerald-800/50 blur-[120px]" />
        
        {/* Subtle Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] contrast-150" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-6 py-20 md:py-32 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <header className="text-center mb-32 space-y-8 relative">
          <motion.div 
             initial={{ opacity: 0, scale: 0.9, y: 10 }}
             animate={{ opacity: 1, scale: 1, y: 0 }}
             transition={{ duration: 0.5 }}
             className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/[0.03] border border-white/10 text-xs text-indigo-300 font-bold tracking-[0.2em] shadow-xl backdrop-blur-md uppercase"
          >
            <Shield className="w-3.5 h-3.5 text-indigo-400" /> System Architecture Overview
          </motion.div>
          
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter bg-gradient-to-b from-white via-white to-neutral-500/40 bg-clip-text text-transparent drop-shadow-sm leading-[1.1]">
              The HackNU <span className="text-indigo-400">Super-App</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto font-medium leading-relaxed tracking-tight">
              An edge-first, intelligence-native ecosystem built for deep collaboration and real-time world class interactions.
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 pt-4">
             <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/10" />
             <Binary className="w-5 h-5 text-neutral-600" />
             <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/10" />
          </div>
        </header>

        <div className="space-y-40">
          {sections.map((section, idx) => (
            <section key={idx} className="relative group/section">
              <div className="flex items-center gap-5 mb-14">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white shadow-2xl group-hover/section:border-indigo-500/30 transition-colors duration-500">
                  <section.icon className="w-6 h-6 text-neutral-300 group-hover/section:text-indigo-400 transition-colors duration-500" />
                </div>
                <div className="space-y-1">
                  <h2 className="text-3xl font-black text-white tracking-tighter uppercase">{section.title}</h2>
                  <div className="h-[2px] w-12 bg-indigo-500/40 group-hover/section:w-24 transition-all duration-700" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.services.map((service, sIdx) => (
                  <ServiceCard 
                    key={sIdx}
                    {...service}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-40 py-20 border-t border-white/[0.03] relative">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-px h-px w-32 bg-indigo-500/50" />
           
           <div className="flex flex-col items-center gap-8">
             <div className="flex gap-12 font-mono text-[10px] text-neutral-600 font-bold uppercase tracking-[0.25em]">
                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" /> Latency: 50ms avg</span>
                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500/50" /> Uptime: 99.99%</span>
                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500/50" /> Nodes: 300+ Edge</span>
             </div>
             
             <p className="text-neutral-500 text-xs font-mono tracking-tighter uppercase opacity-40 hover:opacity-100 transition-opacity">
               Built for HackNU 2026 // Distributed World Class Collaboration // Enterprise Neural Network
             </p>
           </div>
        </footer>
      </motion.div>

      {/* Futuristic Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        className="fixed left-8 bottom-8 hidden lg:flex flex-col items-center gap-4 z-50"
      >
        <div className="w-px h-24 bg-gradient-to-t from-white/20 to-transparent" />
        <span className="text-[9px] font-bold text-white uppercase tracking-[0.4em] [writing-mode:vertical-lr] rotate-180">Protocol Scroll</span>
      </motion.div>
    </div>
  )
}
