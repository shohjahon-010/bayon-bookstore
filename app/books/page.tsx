"use client"

import { useState, useMemo } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import BookCard from "@/components/book-card"
import Cart from "@/components/cart"

const ALL_BOOKS = [
  {
    id: 1,
    title: "O'zbek Tilining Tarixi",
    author: "Abdulaziz Abdullayev",
    price: 45000,
    image: "/uzbek-language-history.jpg",
    category: "Tarix",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    title: "Alisher Navoiy - Hayoti va Ijodi",
    author: "Miroj Abdullayev",
    price: 52000,
    image: "/alisher-navoi-biography.jpg",
    category: "Adabiyot",
    rating: 4.9,
    reviews: 156,
  },
  {
    id: 3,
    title: "Temur Devleti",
    author: "Vasfi Mahmudov",
    price: 58000,
    image: "/timur-empire-history.jpg",
    category: "Tarix",
    rating: 4.7,
    reviews: 98,
  },
  {
    id: 4,
    title: "Samarqand Shahrining Sirlar",
    author: "Qodirjon Qodirov",
    price: 48000,
    image: "/samarkand-city-secrets.jpg",
    category: "Sayohat",
    rating: 4.6,
    reviews: 87,
  },
  {
    id: 5,
    title: "Bukhara - Ilm va Madaniyat Markazi",
    author: "Shukur Xolmatov",
    price: 55000,
    image: "/bukhara-science-culture.jpg",
    category: "Tarix",
    rating: 4.8,
    reviews: 112,
  },
  {
    id: 6,
    title: "Xorazm Madaniyatining Asoslari",
    author: "Abdulla Qahhor",
    price: 50000,
    image: "/khorezm-culture-foundation.jpg",
    category: "Madaniyat",
    rating: 4.5,
    reviews: 76,
  },
  {
    id: 7,
    title: "Firdavsi - Shahname",
    author: "Firdavsi",
    price: 65000,
    image: "/firdawsi-shahnameh-epic.jpg",
    category: "Adabiyot",
    rating: 5.0,
    reviews: 203,
  },
  {
    id: 8,
    title: "O'zbek Xalq Rivoyatlari",
    author: "Turgun Tullayev",
    price: 42000,
    image: "/uzbek-folk-traditions.jpg",
    category: "Folklo",
    rating: 4.4,
    reviews: 65,
  },
  {
    id: 9,
    title: "Qo'qon Xonligi",
    author: "Miroj Abdullayev",
    price: 54000,
    image: "/kokand-khanate-history.jpg",
    category: "Tarix",
    rating: 4.7,
    reviews: 91,
  },
  {
    id: 10,
    title: "Toshkent Shahrining Tarixi",
    author: "Abdulla Qahhor",
    price: 49000,
    image: "/tashkent-city-history.jpg",
    category: "Tarix",
    rating: 4.6,
    reviews: 78,
  },
  {
    id: 11,
    title: "O'zbek Adabiyotining Asoslari",
    author: "Miroj Abdullayev",
    price: 56000,
    image: "/uzbek-literature-foundation.jpg",
    category: "Adabiyot",
    rating: 4.8,
    reviews: 134,
  },
  {
    id: 12,
    title: "Sayohat Qo'llanmasi",
    author: "Qodirjon Qodirov",
    price: 47000,
    image: "/travel-guide-handbook.jpg",
    category: "Sayohat",
    rating: 4.5,
    reviews: 82,
  },
]

export default function BooksPage() {
  const [cartItems, setCartItems] = useState([])
  const [showCart, setShowCart] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("Barchasi")
  const [sortBy, setSortBy] = useState("popular")
  const [searchQuery, setSearchQuery] = useState("")

  const categories = ["Barchasi", "Tarix", "Adabiyot", "Madaniyat", "Sayohat", "Folklo"]

  const filteredAndSortedBooks = useMemo(() => {
    let result = ALL_BOOKS

    // Filter by category
    if (selectedCategory !== "Barchasi") {
      result = result.filter((book) => book.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery) {
      result = result.filter(
        (book) =>
          book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.author.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    // Sort
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        result.sort((a, b) => b.price - a.price)
        break
      case "rating":
        result.sort((a, b) => b.rating - a.rating)
        break
      case "newest":
        result.sort((a, b) => b.id - a.id)
        break
      default:
        result.sort((a, b) => b.reviews - a.reviews)
    }

    return result
  }, [selectedCategory, searchQuery, sortBy])

  const addToCart = (book) => {
    setCartItems([...cartItems, { ...book, id: Date.now() }])
  }

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation cartCount={cartItems.length} onCartClick={() => setShowCart(!showCart)} />
      {showCart && <Cart items={cartItems} onRemove={removeFromCart} />}

      <section className="py-12 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 animate-fade-up">Kitoblar Katalogi</h1>
          <p className="text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Bizning keng kitob to'plamidan o'zingizga yoqqan kitobni toping
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Bar */}
        <div className="mb-8 animate-fade-up">
          <input
            type="text"
            placeholder="Kitob yoki muallif bo'yicha qidirish..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1 animate-fade-up">
            <div className="bg-card rounded-xl p-6 shadow-md sticky top-24">
              <h3 className="text-lg font-bold text-foreground mb-4">Kategoriyalar</h3>
              <div className="space-y-2 mb-8">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                      selectedCategory === cat
                        ? "bg-primary text-primary-foreground font-semibold"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <h3 className="text-lg font-bold text-foreground mb-4">Saralash</h3>
              <div className="space-y-2">
                {[
                  { value: "popular", label: "Mashhur" },
                  { value: "rating", label: "Reyting" },
                  { value: "price-low", label: "Narx: Kam → Ko'p" },
                  { value: "price-high", label: "Narx: Ko'p → Kam" },
                  { value: "newest", label: "Eng Yangi" },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setSortBy(option.value)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                      sortBy === option.value
                        ? "bg-accent text-accent-foreground font-semibold"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Books Grid */}
          <div className="lg:col-span-3">
            <div className="mb-6 text-muted-foreground">{filteredAndSortedBooks.length} ta kitob topildi</div>
            {filteredAndSortedBooks.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAndSortedBooks.map((book, index) => (
                  <div key={book.id} style={{ animationDelay: `${index * 0.05}s` }} className="animate-fade-up">
                    <BookCard book={book} onAddToCart={addToCart} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">Hech qanday kitob topilmadi</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
