import { ShoppingCart, CheckCircle2, Zap, TrendingUp, Shield } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { SEO } from "../components/SEO";

export function SmartScales() {
  const features = [
    {
      icon: Zap,
      title: "Мгновенное распознавание",
      description: "Определение товара за доли секунды с точностью 99.5%"
    },
    {
      icon: TrendingUp,
      title: "Повышение эффективности",
      description: "Ускорение обслуживания клиентов до 40%"
    },
    {
      icon: Shield,
      title: "Защита от ошибок",
      description: "Исключение человеческого фактора при взвешивании"
    }
  ];

  const benefits = [
    "Распознавание более 5000 наименований товаров",
    "Работа в режиме 24/7 без перерывов",
    "Интеграция с любыми кассовыми системами",
    "Автоматическое обновление базы товаров",
    "Аналитика и отчетность в реальном времени",
    "Снижение очередей на кассах"
  ];

  return (
    <>
      <SEO
        title="Умные весы с распознаванием товаров - Система автоматического взвешивания"
        description="Умные весы с компьютерным зрением для автоматического распознавания весовых товаров. Точность 99.5%, работа 24/7, интеграция с кассовыми системами. Решение для магазинов и торговли."
        keywords="умные весы, весы с распознаванием, автоматическое взвешивание, распознавание товаров, кассовые весы с AI, система для магазина, торговые весы"
      />
      <div className="pt-20">
      <section className="relative min-h-[600px] flex items-center bg-gradient-to-br from-orange-50 via-white to-orange-50 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-orange-200 rounded-full mb-6 shadow-lg">
              <ShoppingCart className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-medium text-gray-700">Ритейл решение</span>
            </div>

            <h1 className="mb-6 text-5xl md:text-6xl leading-tight">
              Умные весы
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Система автоматического распознавания весовых товаров на базе компьютерного зрения.
              Революционное решение для магазинов самообслуживания и торговых точек.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-500 text-white rounded-2xl hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 hover:scale-105 font-medium"
              >
                Связаться с нами
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-500 rounded-[2.5rem] blur-3xl opacity-20"></div>
            <div className="relative bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?w=600&h=400&fit=crop"
                alt="Умные весы в действии"
                className="w-full h-80 object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-4xl">Преимущества системы</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Технология компьютерного зрения нового поколения для точного распознавания товаров
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-[2.5rem] p-12 border border-gray-100">
            <h3 className="mb-8 text-center text-2xl text-gray-900">Возможности платформы</h3>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="mt-1">
                    <CheckCircle2 className="w-6 h-6 text-orange-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-gray-700 leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-[2.5rem] p-12 md:p-16 border border-gray-100 shadow-xl">
            <h2 className="mb-6 text-3xl md:text-4xl">Готовы начать?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Закажите демонстрацию и убедитесь в эффективности решения
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-500 text-white rounded-2xl hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 hover:scale-105 font-medium"
            >
              Связаться с нами
            </a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
