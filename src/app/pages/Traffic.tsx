import { Users, TrendingUp, MapPin, PieChart, Calendar, Target } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { SEO } from "../components/SEO";

export function Traffic() {
  const features = [
    {
      icon: Users,
      title: "Точный подсчет",
      description: "Определение количества посетителей с точностью 98%"
    },
    {
      icon: TrendingUp,
      title: "Анализ потоков",
      description: "Визуализация маршрутов движения клиентов"
    },
    {
      icon: PieChart,
      title: "Бизнес-аналитика",
      description: "Данные для принятия стратегических решений"
    }
  ];

  const useCases = [
    "Розничные магазины и торговые центры",
    "Офисные здания и бизнес-центры",
    "Музеи и выставочные пространства",
    "Рестораны и фуд-корты",
    "Фитнес-клубы и спортивные комплексы",
    "Банки и финансовые учреждения"
  ];

  return (
    <>
      <SEO
        title="Система подсчета посетителей - Анализ трафика покупателей с AI"
        description="Интеллектуальная система подсчета посетителей и анализа трафика покупателей. Точность 98%, визуализация маршрутов, бизнес-аналитика для торговых центров и магазинов."
        keywords="подсчет посетителей, анализ трафика, счетчик посетителей, система подсчета клиентов, трафик покупателей, аналитика посещаемости, тепловая карта магазина"
      />
      <div className="pt-20">
      <section className="relative min-h-[600px] flex items-center bg-gradient-to-br from-orange-50 via-white to-pink-50 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-orange-200 rounded-full mb-6 shadow-lg">
              <Users className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-medium text-gray-700">Аналитика посещаемости</span>
            </div>

            <h1 className="mb-6 text-5xl md:text-6xl leading-tight">
              Подсчет трафика
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Интеллектуальная система подсчета посетителей и анализа их поведения.
              Получайте точные данные о посещаемости и оптимизируйте бизнес-процессы.
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
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-pink-400 rounded-[2.5rem] blur-3xl opacity-20"></div>
            <div className="relative bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop"
                alt="Анализ трафика посетителей"
                className="w-full h-80 object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-4xl">Возможности системы</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Комплексное решение для анализа посещаемости и поведения клиентов
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
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-[2.5rem] p-10 border border-orange-100">
              <h3 className="mb-6 text-2xl text-gray-900">Ключевые метрики</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-2 text-gray-900">Посещаемость по времени</h4>
                    <p className="text-gray-600">
                      Анализ пиковых часов и дней недели
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-2 text-gray-900">Тепловые карты</h4>
                    <p className="text-gray-600">
                      Визуализация популярных зон
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-2 text-gray-900">Конверсия</h4>
                    <p className="text-gray-600">
                      Отношение посетителей к покупателям
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-2xl text-gray-900">Сферы применения</h3>
              <div className="space-y-3">
                {useCases.map((useCase, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-gradient-to-r from-white to-gray-50 rounded-2xl p-4 border border-gray-100 hover:border-orange-200 transition-colors"
                  >
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[2.5rem] p-12 md:p-16 border border-gray-100 shadow-xl">
            <div className="text-center mb-8">
              <h2 className="mb-4 text-3xl md:text-4xl">Принимайте решения на основе данных</h2>
              <p className="text-xl text-gray-600">
                Получите полную картину посещаемости вашего объекта
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl border border-orange-100">
                <div className="text-5xl font-bold text-orange-500 mb-2">98%</div>
                <div className="text-gray-600">Точность подсчета</div>
              </div>
              <div className="text-center bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl border border-orange-100">
                <div className="text-5xl font-bold text-orange-500 mb-2">24/7</div>
                <div className="text-gray-600">Мониторинг</div>
              </div>
              <div className="text-center bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl border border-orange-100">
                <div className="text-5xl font-bold text-orange-500 mb-2">∞</div>
                <div className="text-gray-600">Зон отслеживания</div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-2xl hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 hover:scale-105 font-medium"
              >
                Получить предложение
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
