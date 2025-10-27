"use client"

import { useState } from "react"

export default function BookCard({ book, onAddToCart }) {
  const [isAdding, setIsAdding] = useState(false)
  const [showNotification, setShowNotification] = useState(false)

  const handleAddToCart = () => {
    setIsAdding(true)
    setShowNotification(true)
    onAddToCart(book)
    setTimeout(() => setIsAdding(false), 1000)
    setTimeout(() => setShowNotification(false), 2000)
  }

  return (
    <div className="group relative">
      <div className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-2">
        {/* Book Image */}
        <div className="relative h-64 overflow-hidden bg-muted">
          <img
            src={book.image || "/placeholder.svg"}
            alt={book.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

          {/* Rating Badge */}
          <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
            {book.rating} ★
          </div>
        </div>

        {/* Book Info */}
        <div className="p-4">
          <p className="text-sm text-accent font-semibold mb-2">{book.category}</p>
          <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {book.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-2">{book.author}</p>
          <p className="text-xs text-muted-foreground mb-4">({book.reviews} reviews)</p>

          {/* Price and Button */}
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-primary">{book.price.toLocaleString()} so'm</span>
            <button
              onClick={handleAddToCart}
              className={`p-2 rounded-lg transition-all ${
                isAdding
                  ? "bg-accent text-accent-foreground animate-book-fall scale-110"
                  : "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-110"
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Add to Cart Notification */}
      {showNotification && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-accent text-accent-foreground px-4 py-2 rounded-lg font-semibold animate-bounce">
            Savatga Qo'shildi!
          </div>
        </div>
      )}
    </div>
  )
}
