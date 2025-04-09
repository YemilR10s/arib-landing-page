"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Music, Youtube, Instagram } from "lucide-react"

export function Statistics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const stats = [
    {
      icon: <Music className="w-10 h-10 text-green-400" />,
      platform: "Spotify",
      count: "+170 mil",
      label: "streams",
      color: "from-green-500 to-green-700",
    },
    {
      icon: <Youtube className="w-10 h-10 text-red-400" />,
      platform: "Youtube",
      count: "+80 mil",
      label: "reproducciones",
      color: "from-red-500 to-red-700",
    },
    {
      icon: <Instagram className="w-10 h-10 text-pink-400" />,
      platform: "Instagram",
      count: "+3 mil",
      label: "seguidores",
      username: "@ariboficial",
      color: "from-pink-500 to-purple-700",
    },
  ]

  return (
    <section id="estadísticas" className="py-20 bg-black/70">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Estadísticas
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className={`bg-gradient-to-br ${stat.color} rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{stat.platform}</h3>
                {stat.username && <p className="text-white/80 mb-2">{stat.username}</p>}
                <p className="text-3xl font-bold text-white mb-1">{stat.count}</p>
                <p className="text-white/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
