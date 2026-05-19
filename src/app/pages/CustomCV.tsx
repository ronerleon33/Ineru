import { Code, Sparkles, Target, Users, CheckCircle2, Zap, Rocket } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { SEO } from "../components/SEO";

export function CustomCV() {
  const features = [
    {
      icon: Target,
      title: "Точно под задачу",
      description: "Разработка с учетом специфики вашего бизнеса"
    },
    {
      icon: Sparkles,
      title: "Передовые технологии",
      description: "Используем последние достижения в AI и CV"
    },
    {
      icon: Users,
      title: "Полное сопровождение",
      description: "От анализа до внедрения и поддержки"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Анализ потребностей",
      description: "Изучаем вашу задачу и формулируем требования"
    },
    {
      step: "2",
      title: "Разработка концепции",
      description: "Предлагаем оптимальное техническое решение"
    },
    {
      step: "3",
      title: "Прототипирование",
      description: "Создаем работающий прототип для тестирования"
    },
    {
      step: "4",
      title: "Обучение модели",
      description: "Тренируем AI на ваших данных"
    },
    {
      step: "5",
      title: "Интеграция",
      description: "Внедряем решение в вашу инфраструктуру"
    },
    {
      step: "6",
      title: "Поддержка",
      description: "Обеспечиваем стабильную работу системы"
    }
  ];

  const capabilities = [
    "Распознавание и классификация объектов",
    "Сегментация и трекинг",
    "Детекция аномалий и дефектов",
    "Оптическое распознавание символов (OCR)",
    "Анализ видеопотоков в реальном времени",
    "Создание цифровых двойников",
    "Интеграция с существующими системами",
    "Мобильные и edge-решения"
  ];

  return (
    <>
      <SEO
        title="Заказная разработка систем компьютерного зрения - Индивидуальные AI решения"
        description="Индивидуальная разработка решений на основе компьютерного зрения и искусственного интеллекта. Распознавание объектов, видеоаналитика, интеграция с системами. От прототипа до внедрения."
        keywords="разработка компьютерного зрения, заказная разработка AI, индивидуальные решения, распознавание объектов, видеоаналитика на заказ, разработка нейросетей, AI решения для бизнеса"
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
              <Code className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-medium text-gray-700">Custom Development</span>
            </div>

            <h1 className="mb-6 text-5xl md:text-6xl leading-tight">
              Заказная разработка
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Индивидуальные решения компьютерного зрения для вашего бизнеса.
              Создаем уникальные AI-системы, которые решают ваши конкретные задачи.
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
                src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=400&fit=crop"
                alt="Заказная разработка компьютерного зрения"
                className="w-full h-80 object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-4xl">Почему мы</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Экспертиза в разработке AI-решений любой сложности
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-[#EC7036]/30 hover:shadow-xl hover:shadow-[#EC7036]/10 transition-all duration-300"
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

          <div className="mb-20">
            <h3 className="mb-12 text-center text-3xl text-gray-900">Процесс разработки</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {process.map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-[#EC7036]/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg text-white font-bold text-lg">
                    {item.step}
                  </div>
                  <h4 className="mb-3 mt-4 text-gray-900">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-[2.5rem] p-12 border border-gray-100">
            <h3 className="mb-8 text-center text-2xl text-gray-900">Что мы можем разработать</h3>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="mt-1">
                    <CheckCircle2 className="w-6 h-6 text-orange-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-gray-700 leading-relaxed">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-xl">
              <Rocket className="w-14 h-14 text-orange-500 mb-6" />
              <h3 className="mb-4 text-2xl text-gray-900">Стартапы и MVP</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Быстрая разработка минимально жизнеспособного продукта для проверки гипотез.
                Готовое решение за 2-4 недели.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#EC7036] rounded-full"></div>
                  Фиксированная стоимость
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#EC7036] rounded-full"></div>
                  Короткие сроки
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#EC7036] rounded-full"></div>
                  Готовая инфраструктура
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-xl">
              <Zap className="w-14 h-14 text-orange-500 mb-6" />
              <h3 className="mb-4 text-2xl text-gray-900">Корпоративные решения</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Комплексные системы для крупного бизнеса с полной интеграцией в существующую инфраструктуру.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#EC7036] rounded-full"></div>
                  Масштабируемость
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#EC7036] rounded-full"></div>
                  Высокая надежность
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#EC7036] rounded-full"></div>
                  SLA и поддержка 24/7
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-white rounded-[2.5rem] p-12 md:p-16 border border-orange-100 text-center">
            <h2 className="mb-6 text-3xl md:text-4xl">Готовы начать проект?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Расскажите о вашей задаче, и мы предложим оптимальное решение с оценкой сроков и стоимости
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-500 text-white rounded-2xl hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 hover:scale-105 font-medium"
            >
              Обсудить проект
            </a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
