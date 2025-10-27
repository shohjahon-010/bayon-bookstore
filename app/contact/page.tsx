"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  const contactInfo = [
    {
      id: 1,
      title: "Telefon",
      value: "+998 (71) 200-00-00",
      icon: "📞",
    },
    {
      id: 2,
      title: "Email",
      value: "info@bayon.uz",
      icon: "📧",
    },
    {
      id: 3,
      title: "Manzil",
      value: "Tashkent, O'zbekiston",
      icon: "📍",
    },
    {
      id: 4,
      title: "Ish Vaqti",
      value: "Dushanba - Juma: 9:00 - 18:00",
      icon: "🕐",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation cartCount={0} onCartClick={() => {}} />

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 animate-fade-up">Aloqa</h1>
          <p className="text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Biz bilan bog'lanish va savollaringizni berishning eng oson yo'li
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-up">
            <h2 className="text-3xl font-bold text-primary mb-8">Bizga Xabar Yuboring</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Ism</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Sizning ismingiz"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Sizning emailingiz"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Mavzu</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Xabaringizning mavzusi"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Xabar</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Sizning xabaringiz"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg"
              >
                Yuborish
              </button>

              {submitted && (
                <div className="p-4 bg-accent/20 border border-accent rounded-lg text-accent font-semibold animate-fade-up">
                  Rahmat! Xabaringiz qabul qilindi. Biz tez orada sizga javob beramiz.
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-3xl font-bold text-primary mb-8">Aloqa Ma'lumotlari</h2>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={info.id}
                  className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{info.icon}</div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">{info.title}</h3>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-foreground mb-4">Ijtimoiy Tarmoqlar</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center hover:bg-primary/90 transition-all"
                >
                  f
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center hover:bg-primary/90 transition-all"
                >
                  📷
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center hover:bg-primary/90 transition-all"
                >
                  𝕏
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
