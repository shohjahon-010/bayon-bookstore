"use client"

import Link from "next/link"
import { useState } from "react"

export default function Cart({ items, onRemove, onUpdateQuantity }) {
  const [removingId, setRemovingId] = useState(null)

  const total = items.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0)

  const handleRemove = (id) => {
    setRemovingId(id)
    setTimeout(() => {
      onRemove(id)
      setRemovingId(null)
    }, 300)
  }

  return (
    <div className="fixed right-0 top-16 w-full max-w-md bg-card border-l border-border shadow-2xl z-40 max-h-[calc(100vh-4rem)] overflow-y-auto animate-cart-pop">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-primary mb-6">Savat</h2>

        {items.length === 0 ? (
          <div className="text-center py-12 animate-fade-up">
            <div className="text-4xl mb-4">📚</div>
            <p className="text-muted-foreground text-lg">Savat bo'sh</p>
            <p className="text-sm text-muted-foreground mt-2">Kitoblarni qo'shish uchun katalogga o'ting</p>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className={`flex gap-4 p-4 bg-muted rounded-lg hover:bg-muted/80 transition-all animate-fade-up ${
                    removingId === item.id ? "opacity-50 scale-95" : ""
                  }`}
                >
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-16 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground line-clamp-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{item.author}</p>
                    <p className="text-lg font-bold text-primary mb-2">
                      {(item.price * (item.quantity || 1)).toLocaleString()} so'm
                    </p>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onUpdateQuantity(item.id, (item.quantity || 1) - 1)}
                        className="px-2 py-1 bg-background rounded hover:bg-primary/20 transition-all hover:scale-110"
                      >
                        −
                      </button>
                      <span className="px-2 font-semibold">{item.quantity || 1}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, (item.quantity || 1) + 1)}
                        className="px-2 py-1 bg-background rounded hover:bg-primary/20 transition-all hover:scale-110"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-muted-foreground hover:text-accent transition-all hover:scale-125"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="border-t border-border pt-4 mb-6 animate-fade-up">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-foreground">Jami:</span>
                <span className="text-2xl font-bold text-primary">{total.toLocaleString()} so'm</span>
              </div>
              <Link
                href="/checkout"
                className="block w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg text-center hover:scale-105"
              >
                Sotib Olish
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
