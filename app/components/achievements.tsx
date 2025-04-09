"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award, Music, Star, Calendar } from "lucide-react"

export function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const achievements = [
    {
      icon: <Award className="w-6 h-6 text-purple-400" />,
      title: "Semifinalista concurso Latino Show Awards",
      year: "2020",
    },
    {
      icon: <Star className="w-6 h-6 text-purple-400" />,
      title: "Finalista concurso internacional de España 'New Talent Battle'",
      year: "2020",
    },
    {
      icon: <Music className="w-6 h-6 text-purple-400" />,
      title: "Participación internacional en el evento 'Abrazarte' en Chile",
      year: "2020",
    },
    {
      icon: <Award className="w-6 h-6 text-purple-400" />,
      title: "Premio a mejor canción urbana premios Hit Music Awards, canción 'Sata'",
      year: "2021",
    },
    {
      icon: <Star className="w-6 h-6 text-purple-400" />,
      title: "Nominación mejor artista urbano premios Hit Music Awards",
      year: "2021",
    },
    {
      icon: <Music className="w-6 h-6 text-purple-400" />,
      title: "Nominación mejor canción urbana, canción 'Sata', premios Fusión",
      year: "2022",
    },
    {
      icon: <Star className="w-6 h-6 text-purple-400" />,
      title: "Nominación mejor artista revelación, premios Fusión",
      year: "2022",
    },
    {
      icon: <Award className="w-6 h-6 text-purple-400" />,
      title: "Nominación mejor artista urbano, premios Fusión",
      year: "2023",
    },
    {
      icon: <Calendar className="w-6 h-6 text-purple-400" />,
      title: "Participación con emisora oxígeno evento hospital mental de bello, Antioquia, Colombia",
      year: "2019",
    },
    {
      icon: <Calendar className="w-6 h-6 text-purple-400" />,
      title: "Artista principal de las ferias y fiestas del municipio Alejandría, Antioquia, Colombia",
      year: "2022",
    },
  ]

  return (
    <section id="logros" className="py-20 bg-gradient-to-b from-black/80 to-purple-950/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Logros y Reconocimientos
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-900/50 rounded-lg group-hover:bg-purple-900 transition-colors duration-300">
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">{achievement.title}</h3>
                    <p className="text-purple-300">{achievement.year}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
