import { Outlet, Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { FloatingContact } from "./FloatingContact";
import { EditModeToggle } from "./EditModeToggle";
import { AdminPanel } from "./AdminPanel";

export function Layout() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <FloatingContact />
      <EditModeToggle />
      <AdminPanel />
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-[#EC7036] to-[#ff8c5a] rounded-2xl flex items-center justify-center shadow-lg shadow-[#EC7036]/20 group-hover:shadow-xl group-hover:shadow-[#EC7036]/30 transition-all duration-300 group-hover:scale-105">
                <span className="text-2xl font-bold text-white">I</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#EC7036] to-[#ff8c5a] bg-clip-text text-transparent">INERU</span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <nav className="hidden md:flex items-center gap-8">
              <Link
                to="/"
                className={`relative font-medium transition-colors hover:text-[#EC7036] ${isHome ? 'text-[#EC7036]' : 'text-gray-700'}`}
              >
                Главная
                {isHome && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#EC7036] to-[#ff8c5a] rounded-full"></span>
                )}
              </Link>
              <a
                href="/#products"
                className="font-medium text-gray-700 hover:text-[#EC7036] transition-colors"
              >
                Продукты
              </a>
              <Link
                to="/contact"
                className="px-6 py-2.5 bg-gradient-to-r from-[#EC7036] to-[#ff8c5a] text-white rounded-xl hover:shadow-lg hover:shadow-[#EC7036]/30 transition-all duration-300 hover:scale-105 font-medium"
              >
                Связаться
              </Link>
            </nav>
          </div>

          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3 border-t border-gray-100 pt-4">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`font-medium transition-colors ${isHome ? 'text-[#EC7036]' : 'text-gray-700'}`}
              >
                Главная
              </Link>
              <a
                href="/#products"
                onClick={() => setMobileMenuOpen(false)}
                className="font-medium text-gray-700 hover:text-[#EC7036] transition-colors"
              >
                Продукты
              </a>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-2.5 bg-gradient-to-r from-[#EC7036] to-[#ff8c5a] text-white rounded-xl text-center font-medium"
              >
                Связаться
              </Link>
            </nav>
          )}
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="bg-white border-t border-gray-100 py-12 mt-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">О компании</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                INERU — российский разработчик систем компьютерного зрения и искусственного интеллекта для бизнеса
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Контакты</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-gray-500 mb-1">По любым вопросам</p>
                  <a
                    href="tel:+79064622585"
                    className="block text-gray-600 hover:text-[#EC7036] transition-colors text-sm font-medium"
                  >
                    +7 (906) 462 25 85
                  </a>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">По любым вопросам</p>
                  <a
                    href="mailto:info@ine.ru"
                    className="block text-gray-600 hover:text-[#EC7036] transition-colors text-sm font-medium"
                  >
                    info@ine.ru
                  </a>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Карьера</p>
                  <a
                    href="mailto:job@ine.ru"
                    className="block text-gray-600 hover:text-[#EC7036] transition-colors text-sm font-medium"
                  >
                    job@ine.ru
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Навигация</h3>
              <div className="space-y-2">
                <Link to="/" className="block text-gray-600 hover:text-[#EC7036] transition-colors text-sm">
                  Главная
                </Link>
                <a href="/#products" className="block text-gray-600 hover:text-[#EC7036] transition-colors text-sm">
                  Продукты
                </a>
                <Link to="/contact" className="block text-gray-600 hover:text-[#EC7036] transition-colors text-sm">
                  Связаться с нами
                </Link>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 INERU. Все права защищены.
            </p>
            <Link to="/privacy" className="text-sm text-gray-600 hover:text-[#EC7036] transition-colors">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
