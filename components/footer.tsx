export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Bayon</h3>
            <p className="text-primary-foreground/80">
              O'zbekistondagi eng yaxshi kitob dokonlaridan biri. Biz kitoblarni sevuvchi har bir odam uchun eng yaxshi
              kitoblarni topishga yordam beramiz.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Tezkor Havolalar</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Bosh sahifa
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Kitoblar
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Biz haqida
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Aloqa
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold mb-4">Kategoriyalar</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Tarix
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Adabiyot
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Madaniyat
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Sayohat
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Aloqa</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>📞 +998 (71) 200-00-00</li>
              <li>📧 info@bayon.uz</li>
              <li>📍 Tashkent, O'zbekiston</li>
              <li className="pt-2 flex gap-3">
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Facebook
                </a>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/80">
          <p>&copy; 2025 Bayon Kitob Dokon. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  )
}
