import { motion } from "framer-motion"
import { 
  Database, HardDrive, 
  Brain, Video, 
  Calendar, MessageSquare, Link, 
  Mic2, Video as VideoIcon, PenTool, LayoutGrid,
  Zap, Globe, Shield, Cpu
} from "lucide-react"

import { ServiceCard } from "./components/ServiceCard"
import { FlowLines } from "./components/FlowLines"

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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
    <div className="min-h-screen bg-neutral-950 text-neutral-50 selection:bg-purple-500/30 font-sans relative overflow-x-hidden">
      <FlowLines />
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[40%] h-[40%] rounded-full opacity-[0.07] bg-gradient-to-br from-indigo-500 to-purple-800 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[35%] h-[50%] rounded-full opacity-[0.07] bg-gradient-to-tl from-cyan-600 to-blue-800 blur-[100px]" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] opacity-[0.03] border border-white/5 rounded-full scale-110" />
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <header className="text-center mb-24 space-y-6">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-indigo-300 font-medium tracking-wide"
          >
            <Shield className="w-4 h-4" /> Comprehensive System Architecture
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-br from-white via-white to-neutral-500 bg-clip-text text-transparent">
            The HackNU Super-App
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto font-light leading-relaxed">
            Discover the 12+ interconnected services that make our collaborative canvas faster, smarter, and more integrated than anything else.
          </p>
        </header>

        <div className="space-y-32">
          {sections.map((section, idx) => (
            <section key={idx} className="relative">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400">
                  <section.icon className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-semibold text-white tracking-tight">{section.title}</h2>
                <div className="h-px flex-grow bg-gradient-to-r from-white/10 to-transparent ml-4" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        <footer className="mt-32 pt-16 border-t border-white/5 text-center">
           <p className="text-neutral-500 text-sm font-mono tracking-tighter uppercase">
             HackNU 2026 // World Class Collaboration // Edge-First Architecture
           </p>
        </footer>
      </motion.div>
    </div>
  )
}
