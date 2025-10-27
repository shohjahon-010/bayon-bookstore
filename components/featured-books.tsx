"use client"

import { useState } from "react"
import BookCard from "./book-card"

const BOOKS = [
  {
    id: 1,
    title: "O'zbek Tilining Tarixi",
    author: "Abdulaziz Abdullayev",
    price: 45000,
    image: "/uzbek-language-history-book.jpg",
    category: "Tarix",
  },
  {
    id: 2,
    title: "Alisher Navoiy - Hayoti va Ijodi",
    author: "Miroj Abdullayev",
    price: 52000,
    image: "/alisher-navoi-biography.jpg",
    category: "Adabiyot",
  },
  {
    id: 3,
    title: "Temur Devleti",
    author: "Vasfi Mahmudov",
    price: 58000,
    image: "/timur-empire-history.jpg",
    category: "Tarix",
  },
  {
    id: 4,
    title: "Samarqand Shahrining Sirlar",
    author: "Qodirjon Qodirov",
    price: 48000,
    image: "/samarkand-city-secrets.jpg",
    category: "Sayohat",
  },
  {
    id: 5,
    title: "Bukhara - Ilm va Madaniyat Markazi",
    author: "Shukur Xolmatov",
    price: 55000,
    image: "/bukhara-science-culture.jpg",
    category: "Tarix",
  },
  {
    id: 6,
    title: "Xorazm Madaniyatining Asoslari",
    author: "Abdulla Qahhor",
    price: 50000,
    image: "/khorezm-culture-foundation.jpg",
    category: "Madaniyat",
  },
  {
    id: 7,
    title: "Firdavsi - Shahname",
    author: "Firdavsi",
    price: 65000,
    image: "/firdawsi-shahnameh-epic.jpg",
    category: "Adabiyot",
  },
  {
    id: 8,
    title: "O'zbek Xalq Rivoyatlari",
    author: "Turgun Tullayev",
    price: 42000,
    image: "/uzbek-folk-traditions.jpg",
    category: "Folklo",
  },
]

export default function FeaturedBooks({ onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState("Barchasi")

  const categories = ["Barchasi", "Tarix", "Adabiyot", "Madaniyat", "Sayohat", "Folklo"]

  const filteredBooks =
    selectedCategory === "Barchasi" ? BOOKS : BOOKS.filter((book) => book.category === selectedCategory)

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Eng Mashhur Kitoblar</h2>
          <p className="text-lg text-muted-foreground">
            Bizning eng yaxshi tanlovlari va o'quvchilar tomonidan sevimli kitoblar
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book, index) => (
            <div key={book.id} style={{ animationDelay: `${index * 0.1}s` }} className="animate-fade-up">
              <BookCard book={book} onAddToCart={onAddToCart} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
