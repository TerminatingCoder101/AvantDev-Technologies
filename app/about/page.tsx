"use client"

import { motion } from "framer-motion"
import { Award, Clock, Heart, Users } from "lucide-react"
import Image from "next/image"
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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200">👋 Nice to meet you!</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">About Me</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              I'm a passionate web developer dedicated to creating exceptional digital experiences that help businesses
              thrive online.
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <Image
                src="/Logo2.png?height=500&width=500"
                alt="Developer at work"
                width={500}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-800">Crafting Digital Solutions Since 2019</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                With over 5 years of experience in web development, I've helped dozens of businesses establish their
                online presence with custom, high-performance websites. My journey started with a simple belief: every
                business deserves a website that truly represents their brand and drives results.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                I specialize in creating fully customized websites that not only look stunning but also perform
                exceptionally. From small local businesses to growing startups, I've worked with clients across various
                industries to bring their digital visions to life.
              </p>
              <div className="flex flex-wrap gap-3">
                {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "WordPress"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { icon: <Users className="h-8 w-8 text-blue-600" />, number: "50+", label: "Happy Clients" },
              { icon: <Award className="h-8 w-8 text-green-600" />, number: "75+", label: "Projects Completed" },
              { icon: <Clock className="h-8 w-8 text-purple-600" />, number: "5+", label: "Years Experience" },
              { icon: <Heart className="h-8 w-8 text-red-600" />, number: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center p-6 bg-white/70 backdrop-blur-sm border-0 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="mb-4 flex justify-center">{stat.icon}</div>
                    <div className="text-3xl font-bold text-slate-800 mb-2">{stat.number}</div>
                    <div className="text-slate-600">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-4">My Core Values</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">These principles guide every project I work on</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Quality First",
                description: "I never compromise on quality. Every line of code is written with precision and care.",
              },
              {
                title: "Client-Focused",
                description:
                  "Your success is my success. I work closely with you to ensure your vision becomes reality.",
              },
              {
                title: "Transparent Pricing",
                description: "No hidden fees, no surprises. You know exactly what you're paying for upfront.",
              },
              {
                title: "Timely Delivery",
                description: "I respect your time and deadlines. Projects are delivered on schedule, every time.",
              },
              {
                title: "Ongoing Support",
                description:
                  "My relationship with clients doesn't end at launch. I'm here for ongoing support and updates.",
              },
              {
                title: "Innovation",
                description: "I stay current with the latest technologies to deliver modern, cutting-edge solutions.",
              },
            ].map((value, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full bg-white/70 backdrop-blur-sm border-0 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">{value.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-4">How I Work</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A streamlined process that ensures exceptional results
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We discuss your vision, goals, and requirements in detail.",
              },
              {
                step: "02",
                title: "Design",
                description: "I create mockups and prototypes for your approval.",
              },
              {
                step: "03",
                title: "Development",
                description: "Your website comes to life with clean, efficient code.",
              },
              {
                step: "04",
                title: "Launch",
                description: "We go live and I provide training and ongoing support.",
              },
            ].map((process, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">{process.title}</h3>
                  <p className="text-slate-600">{process.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
