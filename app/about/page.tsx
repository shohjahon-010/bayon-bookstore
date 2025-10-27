"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function AboutPage() {
  const team = [
    {
      id: 1,
      name: "Abdulla Qahhor",
      role: "Asos Kuruvchi",
      bio: "Kitob sevuvchi va o'zbek adabiyotining chuqur biluvchisi",
    },
    {
      id: 2,
      name: "Miroj Abdullayev",
      role: "Bosh Direktori",
      bio: "20 yildan ortiq kitob biznesida tajribaga ega",
    },
    {
      id: 3,
      name: "Gulnoza Xolmatova",
      role: "Xizmat Boshlig'i",
      bio: "Mijozlar bilan ishlashda mutaxassis",
    },
  ]

  const values = [
    {
      id: 1,
      title: "Sifat",
      description: "Biz faqat eng yaxshi va asl kitoblarni taqdim etamiz",
      icon: "✓",
    },
    {
      id: 2,
      title: "Ishonch",
      description: "Bizning mijozlar bizga to'liq ishonadi va biz bu ishonchni qadrlayamiz",
      icon: "❤",
    },
    {
      id: 3,
      title: "Tezlik",
      description: "Tez yetkazib berish va samarali xizmat bizning asosiy maqsadimiz",
      icon: "⚡",
    },
    {
      id: 4,
      title: "Innovatsiya",
      description: "Biz doimo yangi texnologiyalar va usullarni qo'llaymiz",
      icon: "🚀",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation cartCount={0} onCartClick={() => {}} />

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 animate-fade-up">Biz Haqida</h1>
          <p className="text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Bayon kitob dokonining tarixiy yo'li va maqsadlari
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="text-4xl font-bold text-primary mb-6">Bizning Hikoya</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Bayon kitob dokonini 2010 yilda asos qo'yilgan. Biz o'zbek tilida eng yaxshi kitoblarni o'quvchilarga
                yetkazish uchun tashkil etilgan.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Bugungi kunda biz 10,000 dan ortiq kitobni o'z katalogimizda saqlayapman va har yil yangi kitoblarni
                qo'shamiz.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Bizning maqsad - har bir o'zbek oilasida yaxshi kitoblar bo'lishi va o'qish madaniyatini rivojlantirish.
              </p>
            </div>
            <div className="relative h-96 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/30 rounded-2xl blur-2xl"></div>
              <div className="relative h-full bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📖</div>
                  <p className="text-2xl font-bold text-primary">15 Yil</p>
                  <p className="text-muted-foreground">Xizmat Ko'rsatish</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-4xl font-bold text-primary mb-4">Bizning Qadriyatlar</h2>
            <p className="text-lg text-muted-foreground">Biz qanday ishlayapman va nima uchun</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.id}
                className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-all animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-4xl font-bold text-primary mb-4">Bizning Jamoa</h2>
            <p className="text-lg text-muted-foreground">Bayon kitob dokonini boshqaradigan shaxslar</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={member.id}
                className="bg-card rounded-xl p-8 shadow-md hover:shadow-lg transition-all text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                  👤
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                <p className="text-accent font-semibold mb-3">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
