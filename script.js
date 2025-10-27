let cart = []
const STORAGE_KEY = "bayon_cart"
const FAVORITES_KEY = "bayon_favorites"
const THEME_KEY = "bayon_theme"
const LANGUAGE_KEY = "bayon_language"

const translations = {
  uz: {
    home: "Bosh Sahifa",
    books: "Kitoblar",
    about: "Biz Haqida",
    contact: "Aloqa",
    cart: "Savatcha",
    favorites: "Sevimli Kitoblar",
    profile: "Profil",
    settings: "Sozlamalar",
    logout: "Chiqish",
    addToCart: "Savatga Qo'shish",
    addedToCart: "savatga qo'shildi!",
    addedToFavorites: "sevimli kitoblar ro'yxatiga qo'shildi!",
    removedFromFavorites: "sevimli kitoblar ro'yxatidan o'chirildi!",
    emptyCart: "Savatcha bo'sh",
    emptyFavorites: "Sevimli kitoblar yo'q",
    total: "Jami:",
    checkout: "Sotib Olish",
    subscribe: "Obuna Bo'lish",
    subscribed: "Muvaffaqiyatli obuna bo'ldingiz!",
  },
  ru: {
    home: "Главная",
    books: "Книги",
    about: "О нас",
    contact: "Контакты",
    cart: "Корзина",
    favorites: "Избранное",
    profile: "Профиль",
    settings: "Настройки",
    logout: "Выход",
    addToCart: "Добавить в корзину",
    addedToCart: "добавлено в корзину!",
    addedToFavorites: "добавлено в избранное!",
    removedFromFavorites: "удалено из избранного!",
    emptyCart: "Корзина пуста",
    emptyFavorites: "Нет избранных книг",
    total: "Итого:",
    checkout: "Оформить заказ",
    subscribe: "Подписаться",
    subscribed: "Вы успешно подписались!",
  },
  en: {
    home: "Home",
    books: "Books",
    about: "About",
    contact: "Contact",
    cart: "Cart",
    favorites: "Favorites",
    profile: "Profile",
    settings: "Settings",
    logout: "Logout",
    addToCart: "Add to Cart",
    addedToCart: "added to cart!",
    addedToFavorites: "added to favorites!",
    removedFromFavorites: "removed from favorites!",
    emptyCart: "Cart is empty",
    emptyFavorites: "No favorite books",
    total: "Total:",
    checkout: "Checkout",
    subscribe: "Subscribe",
    subscribed: "Successfully subscribed!",
  },
}

let currentLanguage = "uz"
let favorites = []

function toggleMenu() {
  const hamburger = document.getElementById("hamburger")
  const navLinks = document.getElementById("navLinks")

  hamburger.classList.toggle("active")
  navLinks.classList.toggle("active")

  // Add animation effect
  if (hamburger.classList.contains("active")) {
    createMenuAnimation()
  }
}

function createMenuAnimation() {
  const navLinks = document.getElementById("navLinks")
  const links = navLinks.querySelectorAll("a")

  links.forEach((link, index) => {
    link.style.animation = `slideInLeft 0.4s ease ${0.1 + index * 0.1}s both`
  })
}

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.getElementById("navLinks")
  const hamburger = document.getElementById("hamburger")

  if (navLinks) {
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navLinks.classList.remove("active")
      })
    })
  }

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (navLinks && hamburger && !navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      hamburger.classList.remove("active")
      navLinks.classList.remove("active")
    }
  })
})

function loadCart() {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved) {
    cart = JSON.parse(saved)
    updateCartUI()
  }
}

function saveCart() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart))
}

function toggleCart() {
  const sidebar = document.getElementById("cartSidebar")
  sidebar.classList.toggle("active")

  // Add animation effect
  if (sidebar.classList.contains("active")) {
    createRippleEffect()
  }
}

function createRippleEffect() {
  const ripple = document.createElement("div")
  ripple.style.cssText = `
    position: fixed;
    width: 50px;
    height: 50px;
    background: radial-gradient(circle, rgba(218, 165, 32, 0.5) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 150;
    right: 30px;
    top: 30px;
    animation: pulse 0.8s ease-out forwards;
  `
  document.body.appendChild(ripple)
  setTimeout(() => ripple.remove(), 800)
}

function addToCart(id, name, price, image) {
  // Create multiple falling books for visual effect
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      const container = document.getElementById("fallingContainer")
      const fallingBook = document.createElement("div")
      const randomX = Math.random() * window.innerWidth
      const randomRotation = Math.random() * 360

      fallingBook.style.cssText = `
        position: fixed;
        width: 80px;
        height: 120px;
        background: linear-gradient(135deg, #8B4513 0%, #A0522D 100%);
        border-radius: 4px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        pointer-events: none;
        z-index: 300;
        left: ${randomX}px;
        top: 0;
        animation: bookFall 1.5s ease-in forwards;
        transform: rotate(${randomRotation}deg);
      `
      container.appendChild(fallingBook)
      setTimeout(() => fallingBook.remove(), 1500)
    }, i * 100)
  }

  // Add to cart
  const existingItem = cart.find((item) => item.id === id)
  if (existingItem) {
    existingItem.quantity += 1
  } else {
    cart.push({ id, name, price, image, quantity: 1 })
  }

  saveCart()
  updateCartUI()

  // Show notification with animation
  showNotification(`"${name}" ${translations[currentLanguage].addedToCart}`)

  // Animate cart icon
  animateCartIcon()
}

function animateCartIcon() {
  const cartIcon = document.querySelector(".cart-icon")
  cartIcon.style.animation = "none"
  setTimeout(() => {
    cartIcon.style.animation = "bounce 0.6s ease"
  }, 10)
}

function updateCartUI() {
  const cartCount = document.getElementById("cartCount")
  const cartItems = document.getElementById("cartItems")
  const cartTotal = document.getElementById("cartTotal")

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  // Animate cart count change
  if (cartCount.textContent !== totalItems.toString()) {
    cartCount.style.animation = "none"
    setTimeout(() => {
      cartCount.style.animation = "pulse 0.6s ease"
    }, 10)
  }

  cartCount.textContent = totalItems

  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="empty-cart">Savatcha bo\'sh</p>'
    cartTotal.textContent = "0 so'm"
    return
  }

  cartItems.innerHTML = cart
    .map(
      (item, index) => `
        <div class="cart-item" style="animation-delay: ${index * 0.1}s">
            <div class="cart-item-image">
                <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #DAA520 0%, #B8860B 100%);"></div>
            </div>
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${item.price.toLocaleString()} so'm</div>
                <div class="cart-item-quantity">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">O'chirish</button>
                </div>
            </div>
        </div>
    `,
    )
    .join("")

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  cartTotal.textContent = total.toLocaleString() + " so'm"
}

function updateQuantity(id, change) {
  const item = cart.find((item) => item.id === id)
  if (item) {
    item.quantity += change
    if (item.quantity <= 0) {
      removeFromCart(id)
    } else {
      saveCart()
      updateCartUI()
      showNotification(`Miqdor yangilandi: ${item.quantity}`)
    }
  }
}

function removeFromCart(id) {
  const item = cart.find((item) => item.id === id)
  if (item) {
    showNotification(`"${item.name}" savatdan o'chirildi`)
  }
  cart = cart.filter((item) => item.id !== id)
  saveCart()
  updateCartUI()
}

function checkout() {
  if (cart.length === 0) {
    alert("Savatcha bo'sh!")
    return
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const message = `Buyurtma:\n${cart.map((item) => `${item.name} x${item.quantity}`).join("\n")}\n\nJami: ${total.toLocaleString()} so'm`

  alert(message + "\n\nRahmat! Buyurtmangiz qabul qilindi.")

  // Create celebration animation
  createCelebrationAnimation()

  cart = []
  saveCart()
  updateCartUI()
  toggleCart()
}

function createCelebrationAnimation() {
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      const confetti = document.createElement("div")
      const randomX = Math.random() * window.innerWidth
      const randomDelay = Math.random() * 0.5

      confetti.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        background: ${["#DAA520", "#8B4513", "#D2B48C"][Math.floor(Math.random() * 3)]};
        border-radius: 50%;
        pointer-events: none;
        z-index: 400;
        left: ${randomX}px;
        top: 0;
        animation: bookFall 2s ease-in forwards;
        animation-delay: ${randomDelay}s;
      `
      document.body.appendChild(confetti)
      setTimeout(() => confetti.remove(), 2500)
    }, i * 50)
  }
}

function subscribeNewsletter(e) {
  e.preventDefault()
  const email = e.target.querySelector('input[type="email"]').value

  // Create success animation
  const button = e.target.querySelector("button")
  const originalText = button.textContent
  button.textContent = "✓ Muvaffaqiyatli!"
  button.style.animation = "pulse 0.6s ease"

  alert(`${email} uchun obuna muvaffaqiyatli bo'ldi!`)

  setTimeout(() => {
    button.textContent = originalText
    button.style.animation = "none"
  }, 2000)

  e.target.reset()
}

function showNotification(message) {
  const notification = document.createElement("div")
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--primary);
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 4px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    z-index: 400;
    animation: slideInRight 0.4s ease, slideInLeft 0.4s ease 2.6s forwards;
    font-weight: 500;
  `
  notification.textContent = message
  document.body.appendChild(notification)

  setTimeout(() => notification.remove(), 3000)
}

function addScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = "fadeInScale 0.8s ease forwards"
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 },
  )

  document.querySelectorAll(".book-card, .category-card").forEach((el) => {
    observer.observe(el)
  })
}

function toggleTheme() {
  const body = document.body
  const themeToggle = document.getElementById("themeToggle")

  body.classList.toggle("dark-mode")

  const isDarkMode = body.classList.contains("dark-mode")
  themeToggle.textContent = isDarkMode ? "☀️" : "🌙"
  themeToggle.style.animation = "rotate 0.6s ease"

  localStorage.setItem(THEME_KEY, isDarkMode ? "dark" : "light")
  showNotification(isDarkMode ? "Tun rejimi yoqildi" : "Kun rejimi yoqildi")
}

function changeLanguage(lang) {
  currentLanguage = lang
  localStorage.setItem(LANGUAGE_KEY, lang)
  updateLanguage()
  showNotification(`Til o'zgartirildi: ${lang.toUpperCase()}`)
}

function updateLanguage() {
  // Update navigation links
  const navLinks = document.querySelectorAll(".nav-links a")
  if (navLinks[0]) navLinks[0].textContent = translations[currentLanguage].home
  if (navLinks[1]) navLinks[1].textContent = translations[currentLanguage].books
  if (navLinks[2]) navLinks[2].textContent = translations[currentLanguage].about
  if (navLinks[3]) navLinks[3].textContent = translations[currentLanguage].contact
}

function loadFavorites() {
  const saved = localStorage.getItem(FAVORITES_KEY)
  if (saved) {
    favorites = JSON.parse(saved)
    updateFavoritesUI()
  }
}

function saveFavorites() {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
}

function toggleFavorite(bookId, bookName) {
  const index = favorites.findIndex((fav) => fav.id === bookId)

  if (index > -1) {
    favorites.splice(index, 1)
    showNotification(`"${bookName}" ${translations[currentLanguage].removedFromFavorites}`)
  } else {
    favorites.push({ id: bookId, name: bookName })
    showNotification(`"${bookName}" ${translations[currentLanguage].addedToFavorites}`)
  }

  saveFavorites()
  updateFavoritesUI()
}

function updateFavoritesUI() {
  const favoritesCount = document.getElementById("favoritesCount")
  favoritesCount.textContent = favorites.length

  // Update book cards to show favorite status
  document.querySelectorAll(".book-card").forEach((card) => {
    const bookId = card.dataset.bookId
    if (bookId && favorites.some((fav) => fav.id === Number.parseInt(bookId))) {
      card.classList.add("favorited")
    } else {
      card.classList.remove("favorited")
    }
  })
}

function toggleFavorites() {
  const favoritesPage = document.getElementById("favoritesPage")
  if (favoritesPage) {
    favoritesPage.style.display = favoritesPage.style.display === "none" ? "block" : "none"
    favoritesPage.style.animation = "slideInUp 0.4s ease"
  }
}

function toggleProfile() {
  const profileDropdown = document.getElementById("profileDropdown")
  profileDropdown.classList.toggle("active")
}

function viewProfile(e) {
  e.preventDefault()
  alert("Profil sahifasi")
}

function viewOrders(e) {
  e.preventDefault()
  alert("Buyurtmalarim")
}

function viewFavorites(e) {
  e.preventDefault()
  alert("Sevimli kitoblar")
}

function viewSettings(e) {
  e.preventDefault()
  alert("Sozlamalar")
}

function logout(e) {
  e.preventDefault()
  alert("Chiqish muvaffaqiyatli!")
  document.getElementById("profileDropdown").classList.remove("active")
}

window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem(THEME_KEY)
  const savedLanguage = localStorage.getItem(LANGUAGE_KEY)

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode")
    document.getElementById("themeToggle").textContent = "☀️"
  }

  if (savedLanguage) {
    currentLanguage = savedLanguage
    document.getElementById("languageSelect").value = savedLanguage
    updateLanguage()
  }

  loadFavorites()
  document.body.style.animation = "fadeIn 0.8s ease"
})

document.addEventListener("click", (e) => {
  const profileDropdown = document.getElementById("profileDropdown")
  const profileSection = document.querySelector(".profile-section")

  if (profileDropdown && profileSection && !profileDropdown.contains(e.target) && !profileSection.contains(e.target)) {
    profileDropdown.classList.remove("active")
  }
})

loadCart()
addScrollAnimations()
