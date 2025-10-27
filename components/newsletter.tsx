"use client"

import { useState } from "react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setEmail("")
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Yangi Kitoblar Haqida Bilib Oling</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Eng yangi kitoblar, chegirmalar va eksklyuziv takliflar uchun bizning xabar jadvali obuna bo'ling
        </p>

        <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Sizning email manzilingiz"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg"
          >
            {submitted ? "✓" : "Obuna"}
          </button>
        </form>

        {submitted && (
          <p className="text-accent font-semibold mt-4 animate-fade-up">Rahmat! Iltimos, emailingizni tasdiqlang.</p>
        )}
      </div>
    </section>
  )
}
