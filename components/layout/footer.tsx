import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-slate-900 font-bold text-sm">F</span>
              </div>
              <span className="font-bold text-xl">FurniStore</span>
            </div>
            <p className="text-slate-300 mb-4">
              Transform your space with our premium furniture collection. Quality, style, and comfort for every home.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-slate-300 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-300 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-300 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-300 hover:text-white">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-slate-300 hover:text-white">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products?category=living-room" className="text-slate-300 hover:text-white">
                  Living Room
                </Link>
              </li>
              <li>
                <Link href="/products?category=bedroom" className="text-slate-300 hover:text-white">
                  Bedroom
                </Link>
              </li>
              <li>
                <Link href="/products?category=dining-room" className="text-slate-300 hover:text-white">
                  Dining Room
                </Link>
              </li>
              <li>
                <Link href="/products?category=office" className="text-slate-300 hover:text-white">
                  Office
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-slate-300 hover:text-white">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-slate-300 hover:text-white">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/warranty" className="text-slate-300 hover:text-white">
                  Warranty
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-300 hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-2 text-slate-300">
              <p>123 Furniture Street</p>
              <p>Design City, DC 12345</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@furnistore.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-300">
          <p>&copy; 2024 FurniStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
