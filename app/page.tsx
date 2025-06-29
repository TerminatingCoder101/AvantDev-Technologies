"use client"

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Palette, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200">✨ Professional Web Development</Badge>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your Vision,
            <br />
            <span className="text-slate-800">My Code</span>
          </motion.h1>

          <motion.p
            className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transform your ideas into stunning, fully customized websites. Professional development at unbeatable prices
            with a simple one-time fee.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-2">
                View My Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Why Choose Me?</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              I deliver exceptional websites that perfectly match your vision and budget
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <Zap className="h-8 w-8 text-yellow-500" />,
                title: "Lightning Fast",
                description: "Optimized for speed and performance, your site will load instantly",
              },
              {
                icon: <Palette className="h-8 w-8 text-purple-500" />,
                title: "Fully Customizable",
                description: "Every pixel tailored to your brand and specific requirements",
              },
              {
                icon: <CheckCircle className="h-8 w-8 text-green-500" />,
                title: "One-Time Fee",
                description: "No hidden costs, no monthly subscriptions. Pay once, own forever",
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm">
                  <CardContent className="p-8 text-center">
                    <div className="mb-4 flex justify-center">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-3 text-slate-800">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Unbeatable Pricing</h2>
            <p className="text-xl text-slate-600">Professional websites at prices that won't break the bank</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <Card className="relative overflow-hidden border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white">
                <CardContent className="p-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Starter Website</h3>
                    <div className="text-4xl font-bold text-blue-600 mb-4">$299</div>
                    <p className="text-slate-600 mb-6">Perfect for small businesses and personal brands</p>
                    <ul className="text-left space-y-3 mb-8">
                      {[
                        "Up to 5 pages",
                        "Mobile responsive design",
                        "Contact form integration",
                        "Basic SEO optimization",
                        "1 month free support",
                      ].map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Get Started</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="relative overflow-hidden border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-white">
                <div className="absolute top-0 right-0 bg-purple-600 text-white px-4 py-1 text-sm font-semibold">
                  Most Popular
                </div>
                <CardContent className="p-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Professional Website</h3>
                    <div className="text-4xl font-bold text-purple-600 mb-4">$599</div>
                    <p className="text-slate-600 mb-6">Complete solution for growing businesses</p>
                    <ul className="text-left space-y-3 mb-8">
                      {[
                        "Up to 10 pages",
                        "Custom animations & interactions",
                        "E-commerce integration",
                        "Advanced SEO & analytics",
                        "3 months free support",
                        "Content management system",
                      ].map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">Get Started</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-4">What Clients Say</h2>
            <p className="text-xl text-slate-600">Don't just take my word for it</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                name: "Sarah Johnson",
                role: "Restaurant Owner",
                content:
                  "Absolutely amazing work! My restaurant's website looks incredible and has brought in so many new customers. The one-time fee was perfect for my budget.",
                rating: 5,
              },
              {
                name: "Mike Chen",
                role: "E-commerce Startup",
                content:
                  "The level of customization was beyond my expectations. Every detail was perfect, and the site performs flawlessly. Best investment I've made!",
                rating: 5,
              },
              {
                name: "Emily Rodriguez",
                role: "Freelance Designer",
                content:
                  "Professional, fast, and affordable. The website perfectly captures my brand aesthetic. I've already recommended to three other business owners!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full bg-white/70 backdrop-blur-sm border-0 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-lg">
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="text-slate-700 mb-4 italic">"{testimonial.content}"</p>
                    <div>
                      <div className="font-semibold text-slate-800">{testimonial.name}</div>
                      <div className="text-sm text-slate-600">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Bring Your Vision to Life?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's create something amazing together. Get your custom website today with no hidden fees or ongoing
              costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-blue hover:bg-white hover:text-blue-600 px-8 py-4 text-lg"
                >
                  Schedule a Call
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
