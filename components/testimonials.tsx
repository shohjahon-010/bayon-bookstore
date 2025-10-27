export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Fatima Karimova",
      role: "O'quvchi",
      content: "Bayon kitob dokonida eng yaxshi kitoblarni topaman. Xizmat juda yaxshi va tez yetkazib berish.",
      rating: 5,
    },
    {
      id: 2,
      name: "Alisher Toshmatov",
      role: "Muallif",
      content: "Mening kitoblarim Bayon orqali ko'p o'quvchilarga yetib bordi. Rahmat shuning uchun!",
      rating: 5,
    },
    {
      id: 3,
      name: "Gulnoza Abdullayeva",
      role: "Kitob sevuvchi",
      content: "Narxlar juda munosib va kitoblar sifati yuqori. Har doim Bayondan buyuraman.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Mijozlar Fikri</h2>
          <p className="text-lg text-muted-foreground">Bizning xizmatidan foydalanayotgan o'quvchilar nima deyishadi</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-card rounded-xl p-8 shadow-md hover:shadow-lg transition-all animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-accent text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div>
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
