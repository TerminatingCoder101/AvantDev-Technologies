import { Code, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/Logo.png"
                alt="AvantDev Logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-bold text-xl">AvantDev Technologies</span>
            </Link>

            <p className="text-slate-300 mb-6 max-w-md">
              Creating exceptional websites that help businesses thrive online. Professional development at unbeatable
              prices.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-slate-300">+1 (714)-406-4102</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Contact", href: "/contact" }
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-slate-300 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {["Web Development", "E-commerce", "SEO Optimization", "Maintenance", "Consulting"].map((service) => (
                <li key={service}>
                  <h5 className="text-slate-300 hover:text-white transition-colors">
                    {service}
                  </h5>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center">
          <p className="text-slate-400">
            © {new Date().getFullYear()} AvantDev Technologies. All rights reserved. Built with ❤️ and lots of coffee.
          </p>
        </div>
      </div>
    </footer>
  )
}
