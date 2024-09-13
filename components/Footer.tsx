
import Link from 'next/link'
import { Bell } from 'lucide-react'
import TimeDisplay from './TimeDisplay'

export default function Footer() {


  return (
    <footer className="bg-[#1C1C1C] text-zinc-400 py-8 px-4 sm:px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-semibold mb-3">Index</h3>
            <ul className="space-y-2">
              <li><Link href="/explore" className="hover:text-white transition-colors">Explore</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Products</h3>
            <ul className="space-y-2">
              <li><Link href="https://prismic-rho.vercel.app/" className="hover:text-white transition-colors">Glisten Ai</Link></li>
              <li><Link href="https://imaginify-mauve.vercel.app/" className="hover:text-white transition-colors">Imaginify</Link></li>
              <li><Link href="https://evently-mern-full.vercel.app/" className="hover:text-white transition-colors">Evently</Link></li>
              <li><Link href="/https://www.deliciousrestro.com/" className="hover:text-white transition-colors">Delicious cafe</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/stack" className="hover:text-white transition-colors">Stack</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Connect</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="https://x.com/NexaDevsPro" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</Link></li>
              <li><Link href="https://www.linkedin.com/company/nexadevs-pro/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</Link></li>
              <li><Link href="https://www.instagram.com/nexadevs.pro_/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">YouTube</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-zinc-800 pt-8">
          <div className="flex items-center mb-4 sm:mb-0">
            <Bell className="w-5 h-5 mr-2" />
            <span className="mr-2">Currently working</span>
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <Link href="/contact" className="ml-2 text-zinc-500 hover:text-white transition-colors">
              Reach out →
            </Link>
          </div>
         <TimeDisplay />
        </div>
      </div>
    </footer>
  )
}