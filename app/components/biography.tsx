"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

export function Biography() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="biografía" className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Biografía
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="rounded-xl overflow-hidden shadow-2xl shadow-purple-500/10">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative aspect-square"
              >
                <Image src="/placeholder.svg?height=600&width=600" alt="Ari B" width={600} height={500} className="w-full h-full object-cover" />
              </motion.div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-gray-200 space-y-4"
              >
                <p>
                  Esteban Felipe Aristizabal conocido artísticamente como Ari B es un artista del género urbano, que
                  llega con una propuesta musical basada en fusiones rítmicas con géneros como el funky, merengue,
                  bachata, entre otros. El resultado son canciones que transmiten su gran energía, con melodías
                  contagiosas que se convierten en una invitación constante a bailar y disfrutar.
                </p>
                <p>
                  En su trayectoria musical ya cuenta con recorrido y reconocimiento internacional, siendo semifinalista
                  del concurso Latino Show Awards en el año 2020, como participante del evento internacional Abrazarte, realizado en Chile y finalista en el concurso bpm en España.
                </p>
                <p>
                  Desde sus inicios, Ari B, se ha enfocado en constituir cada show y cada producción musical como una
                  experiencia inolvidable llena de entretenimiento para el público, pues además de la buena música los
                  fortalece con su experiencia como bailarín y coreógrafo, lo cual puede evidenciarse en sus más
                  recientes canciones cómo ata que fue ganadora del premio a mejor canción de perreo en los premios
                  Hit music awards 2021, y canciones también cómo Nena y Siempre linda.
                </p>
                <p>
                  Su inspiración, además del amor y la pasión hacia la música urbana, son las experiencias de vida en su
                  natal Medellín, una de las ciudades exponentes de este género a nivel mundial.
                </p>
                <p>
                  Ari B, se consolida poco a poco como una de las promesas de la música urbana y trabaja cada día por
                  cumplir su meta: convertirse en un representante de este género musical, así como de su país,
                  Colombia.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
