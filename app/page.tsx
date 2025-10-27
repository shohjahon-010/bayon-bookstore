"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import FeaturedBooks from "@/components/featured-books"
import Testimonials from "@/components/testimonials"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"
import Cart from "@/components/cart"

export default function Home() {
  const [cartItems, setCartItems] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (book) => {
    const existingItem = cartItems.find((item) => item.id === book.id)
    if (existingItem) {
      setCartItems(
        cartItems.map((item) => (item.id === book.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item)),
      )
    } else {
      setCartItems([...cartItems, { ...book, id: book.id, quantity: 1 }])
    }
  }

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id)
    } else {
      setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity } : item)))
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation cartCount={cartItems.length} onCartClick={() => setShowCart(!showCart)} />
      {showCart && <Cart items={cartItems} onRemove={removeFromCart} onUpdateQuantity={updateQuantity} />}
      <Hero />
      <FeaturedBooks onAddToCart={addToCart} />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  )
}
