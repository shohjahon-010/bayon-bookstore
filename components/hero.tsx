"use client"

import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 md:py-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              Bayon Kitob Dokoniga Xush Kelibsiz
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Eng yaxshi kitoblarni topish va o'qish uchun sizning eng yaxshi hamkoringiz. Millionlab kitoblar, eng
              yaxshi narxlar va tez yetkazib berish.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="/books"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 hover:shadow-lg transition-all"
              >
                Kitoblarni Ko'rish
              </Link>
              <Link
                href="/about"
                className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-all"
              >
                Batafsil Ma'lumot
              </Link>
            </div>
          </div>

          <div className="relative h-96 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/30 rounded-2xl blur-2xl"></div>
            <div className="relative h-full bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center overflow-hidden">
              <div className="text-center">
                <div className="text-6xl mb-4">📚</div>
                <p className="text-2xl font-bold text-primary">10,000+</p>
                <p className="text-muted-foreground">Kitoblar Mavjud</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
