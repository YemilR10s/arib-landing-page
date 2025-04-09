import { Music, Youtube, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-white">ARI B</h3>
            <p className="text-gray-400 mt-2">Artista del género urbano</p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <a
              href="https://open.spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-400 transition-colors"
            >
              <Music className="w-6 h-6" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-500 transition-colors"
            >
              <Youtube className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com/ariboficial"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Ari B. Todos los derechos reservados.</p>
            <p className="text-gray-400">Coded by | <a href="https://www.instagram.com/yemil.r10s/" target="_blank" className="text-gray-400">Yemil Rios</a></p>
          </div>
        </div>
      </div>
    </footer>
  )
}
