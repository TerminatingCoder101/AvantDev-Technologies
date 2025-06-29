"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import emailjs from "@emailjs/browser"

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null)
  const [isSending, setIsSending] = useState(false)

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSending(true)

    emailjs
      .sendForm(
        "service_wdah8wl",
        "template_wbrzgpe",
        form.current!,
        "67wyOWjBX5oQYW_im"
      )
      .then(
        () => {
          alert("Your Message Was Sent Successfully!")
          setIsSending(false)
          form.current?.reset()
        },
        (error) => {
          alert("Failed to send message. Please try again later.")
          console.error(error)
          setIsSending(false)
        }
      )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200">💬 Let's Talk</Badge>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl font-bold text-slate-800 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get Your Project Started
          </motion.h1>

          <motion.p
            className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ready to bring your vision to life? Let's discuss your project and create something amazing together.
          </motion.p>
        </div>
      </section>

      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-6">Send Me a Message</h2>
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="first_name" className="block text-sm font-medium text-slate-700 mb-2">
                        First Name *
                      </label>
                      <Input id="first_name" name="first_name" required placeholder="John" />
                    </div>
                    <div>
                      <label htmlFor="last_name" className="block text-sm font-medium text-slate-700 mb-2">
                        Last Name *
                      </label>
                      <Input id="last_name" name="last_name" required placeholder="Doe" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <Input id="email" name="email" type="email" required placeholder="john@example.com" />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 123-4567" />
                  </div>

                  <div>
                    <label htmlFor="project_type" className="block text-sm font-medium text-slate-700 mb-2">
                      Project Type *
                    </label>
                    <select
                      id="project_type"
                      name="project_type"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                    >
                      <option value="">Select a project type</option>
                      <option value="starter">Starter Website ($299)</option>
                      <option value="professional">Professional Website ($599)</option>
                      <option value="ecommerce">E-commerce Store</option>
                      <option value="redesign">Website Redesign</option>
                      <option value="maintenance">Website Maintenance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-500">Under $500</option>
                      <option value="500-1000">$500 - $1,000</option>
                      <option value="1000-2500">$1,000 - $2,500</option>
                      <option value="2500-5000">$2,500 - $5,000</option>
                      <option value="5000-plus">$5,000+</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-slate-700 mb-2">
                      Project Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-2-weeks">1-2 weeks</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="2-3-months">2-3 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell me about your project, goals, and any specific requirements..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3" disabled={isSending}>
                    {isSending ? "Sending..." : "Send Message"}
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
