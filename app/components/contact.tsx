"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-purple-950/50 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Contacto</span>
          </h2>

          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-md rounded-xl p-8 border border-purple-500/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">Información de contacto</h3>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-900/50 rounded-lg">
                      <Mail className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <a
                        href="mailto:contratacionesarib@gmail.com"
                        className="text-white hover:text-purple-400 transition-colors"
                      >
                        contratacionesarib@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-900/50 rounded-lg">
                      <Phone className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Teléfono</p>
                      <a href="tel:+573017228626" className="text-white hover:text-purple-400 transition-colors">
                        +57 301 722 86 26
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-900/50 rounded-lg">
                      <MapPin className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Ubicación</p>
                      <p className="text-white">Medellín - Colombia</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">Envía un mensaje</h3>

                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Nombre"
                      className="w-full bg-white/10 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full bg-white/10 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Mensaje"
                      rows={4}
                      className="w-full bg-white/10 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
                    >
                      Enviar mensaje
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
