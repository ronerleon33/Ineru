import { FileText, Calendar, ArrowRight, Lightbulb, TrendingUp, Award } from "lucide-react";
import { Link } from "react-router";

export function Cases() {
  const caseStudies = [
    {
      id: 1,
      title: "Автоматизация складского учета в логистическом центре",
      category: "Логистика",
      date: "Март 2026",
      description: "Внедрение системы автоматизированной инвентаризации на складе площадью 15,000 м²",
      results: [
        "Сокращение времени инвентаризации на 85%",
        "Точность учета повысилась до 99.7%",
        "Окупаемость за 8 месяцев"
      ],
      gradient: "from-amber-500 to-orange-500"
    },
    {
      id: 2,
      title: "Контроль СИЗ на производственном предприятии",
      category: "Промышленность",
      date: "Февраль 2026",
      description: "Система мониторинга соблюдения норм безопасности на заводе с 500+ сотрудниками",
      results: [
        "Снижение нарушений техники безопасности на 92%",
        "Уменьшение несчастных случаев на 78%",
        "Автоматизация контроля на 100%"
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Умные весы в сети супермаркетов",
      category: "Ритейл",
      date: "Январь 2026",
      description: "Внедрение системы автоматического распознавания весовых товаров в 15 магазинах",
      results: [
        "Ускорение обслуживания клиентов на 40%",
        "Снижение ошибок кассиров на 95%",
        "Рост удовлетворенности покупателей на 35%"
      ],
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 4,
      title: "Тепловизионный мониторинг на нефтеперерабатывающем заводе",
      category: "Энергетика",
      date: "Декабрь 2025",
      description: "Система контроля температурных режимов критического оборудования",
      results: [
        "Предотвращено 12 потенциальных аварий",
        "Экономия на ремонтах более 15 млн ₽/год",
        "Мониторинг 24/7 без участия операторов"
      ],
      gradient: "from-red-500 to-pink-500"
    },
    {
      id: 5,
      title: "Подсчет посетителей в торговом центре",
      category: "Ритейл",
      date: "Ноябрь 2025",
      description: "Аналитика трафика и поведения посетителей в ТЦ площадью 45,000 м²",
      results: [
        "Оптимизация работы персонала на 30%",
        "Рост конверсии арендаторов на 25%",
        "Точность подсчета 98.5%"
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 6,
      title: "Учет вагонов на железнодорожной станции",
      category: "Транспорт",
      date: "Октябрь 2025",
      description: "Автоматизация учета железнодорожных вагонов и контейнеров",
      results: [
        "Ускорение обработки составов на 60%",
        "Исключение ошибок ручного учета",
        "Интеграция с системой РЖД"
      ],
      gradient: "from-slate-500 to-gray-600"
    }
  ];

  const benefits = [
    {
      icon: Lightbulb,
      title: "Индивидуальный подход",
      description: "Каждое решение адаптировано под специфику бизнеса"
    },
    {
      icon: TrendingUp,
      title: "Измеримые результаты",
      description: "Конкретные метрики эффективности в каждом проекте"
    },
    {
      icon: Award,
      title: "Гарантия качества",
      description: "Поддержка и сопровождение на всех этапах"
    }
  ];

  return (
    <div className="pt-20">
      <section className="relative min-h-[500px] flex items-center bg-gradient-to-br from-orange-50 via-white to-red-50 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#EC7036] rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-orange-200 rounded-full mb-6 shadow-lg">
              <FileText className="w-5 h-5 text-[#EC7036]" />
              <span className="text-sm font-medium text-gray-700">Истории успеха</span>
            </div>

            <h1 className="mb-6 text-5xl md:text-6xl leading-tight">
              Кейсы внедрения
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Реальные примеры применения наших решений в различных отраслях бизнеса.
              Измеримые результаты и доказанная эффективность.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-[#EC7036]/30 hover:shadow-xl hover:shadow-[#EC7036]/10 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#EC7036] to-[#ff8c5a] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#EC7036]/20 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="mb-3 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>

          <div className="space-y-8">
            {caseStudies.map((caseStudy) => (
              <div
                key={caseStudy.id}
                className="group bg-white rounded-3xl p-8 md:p-10 border border-gray-100 hover:border-[#EC7036]/30 hover:shadow-2xl hover:shadow-[#EC7036]/10 transition-all duration-300"
              >
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className={`px-4 py-1.5 bg-gradient-to-r ${caseStudy.gradient} text-white text-sm font-medium rounded-full`}>
                        {caseStudy.category}
                      </span>
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{caseStudy.date}</span>
                      </div>
                    </div>

                    <h3 className="mb-4 text-2xl text-gray-900 group-hover:text-[#EC7036] transition-colors">
                      {caseStudy.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {caseStudy.description}
                    </p>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 mb-3">Результаты:</h4>
                      {caseStudy.results.map((result, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="mt-1 w-1.5 h-1.5 bg-[#EC7036] rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-center md:justify-end">
                    <div className={`w-32 h-32 bg-gradient-to-br ${caseStudy.gradient} rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      <FileText className="w-16 h-16 text-white opacity-90" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-[2.5rem] p-12 md:p-16 border border-gray-100 shadow-xl">
            <h2 className="mb-6 text-3xl md:text-4xl">Станьте частью наших успешных историй</h2>
            <p className="text-xl text-gray-600 mb-8">
              Готовы внедрить передовые технологии в свой бизнес? Обсудим ваш проект.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#EC7036] to-[#ff8c5a] text-white rounded-2xl hover:shadow-xl hover:shadow-[#EC7036]/30 transition-all duration-300 hover:scale-105 font-medium"
            >
              Обсудить проект
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
