"use client"

import { motion } from "framer-motion"
import {
  Code,
  Smartphone,
  ShoppingCart,
  Search,
  Wrench,
  Headphones,
  CheckCircle,
  ArrowRight,
  Zap,
  Palette,
  Shield,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

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

export default function ServicesPage() {
  const services = [
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: "Custom Web Development",
      description: "Fully customized websites built from scratch to match your exact requirements and brand identity.",
      features: [
        "Responsive design for all devices",
        "Modern, clean code structure",
        "Fast loading speeds",
        "Cross-browser compatibility",
        "SEO-friendly architecture",
      ],
      pricing: "Starting at $299",
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-green-600" />,
      title: "E-commerce Solutions",
      description: "Complete online stores with payment processing, inventory management, and customer accounts.",
      features: [
        "Secure payment integration",
        "Product catalog management",
        "Order tracking system",
        "Customer account portal",
        "Mobile-optimized checkout",
      ],
      pricing: "Starting at $799",
    },
    {
      icon: <Smartphone className="h-8 w-8 text-purple-600" />,
      title: "Mobile Optimization",
      description: "Ensure your website looks and works perfectly on all mobile devices and tablets.",
      features: [
        "Mobile-first design approach",
        "Touch-friendly interfaces",
        "Fast mobile loading",
        "App-like user experience",
        "Progressive Web App features",
      ],
      pricing: "Included in all projects",
    },
    {
      icon: <Search className="h-8 w-8 text-orange-600" />,
      title: "SEO Optimization",
      description: "Get found on Google with comprehensive search engine optimization strategies.",
      features: [
        "Keyword research & optimization",
        "Meta tags & descriptions",
        "Site speed optimization",
        "Schema markup implementation",
        "Google Analytics setup",
      ],
      pricing: "Starting at $199",
    },
    {
      icon: <Wrench className="h-8 w-8 text-red-600" />,
      title: "Website Maintenance",
      description: "Keep your website secure, updated, and running smoothly with ongoing maintenance.",
      features: [
        "Regular security updates",
        "Content updates & changes",
        "Performance monitoring",
        "Backup management",
        "Technical support",
      ],
      pricing: "Starting at $99/month",
    },
    {
      icon: <Headphones className="h-8 w-8 text-indigo-600" />,
      title: "Consulting & Support",
      description: "Get expert advice on web strategy, technology choices, and digital growth.",
      features: [
        "Technology consultation",
        "Website strategy planning",
        "Performance audits",
        "Training & documentation",
        "Ongoing technical support",
      ],
      pricing: "Starting at $75/hour",
    },
  ]

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We discuss your goals, target audience, and project requirements in detail.",
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "I create wireframes and mockups to visualize your website before development.",
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Your website is built with clean code and thoroughly tested across all devices.",
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "We go live and I provide training plus ongoing support for your peace of mind.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200">🚀 Professional Services</Badge>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl font-bold text-slate-800 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Services That Drive Results
          </motion.h1>

          <motion.p
            className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            From custom web development to ongoing maintenance, I provide comprehensive solutions to help your business
            succeed online.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">{service.title}</h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">{service.description}</p>

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-blue-600">{service.pricing}</span>
                      <Link href="/contact">
                        <Button size="sm" variant="outline">
                          Get Quote
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose My Services */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Why Choose My Services?</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              I deliver exceptional value through quality, transparency, and dedicated support
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
                title: "Fast Delivery",
                description: "Most projects completed within 2-4 weeks, with regular updates throughout the process.",
              },
              {
                icon: <Palette className="h-8 w-8 text-purple-500" />,
                title: "Custom Solutions",
                description:
                  "Every website is built specifically for your business - no templates or cookie-cutter designs.",
              },
              {
                icon: <Shield className="h-8 w-8 text-green-500" />,
                title: "Quality Guarantee",
                description: "100% satisfaction guarantee with unlimited revisions until you're completely happy.",
              },
            ].map((benefit, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center p-6 bg-white/70 backdrop-blur-sm border-0 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="mb-4 flex justify-center">{benefit.icon}</div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">{benefit.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-4">My Process</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A proven 4-step process that ensures exceptional results every time
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {processSteps.map((step, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a custom solution that perfectly fits your needs and budget.
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
