import { Scan, Shield, Brain, Video, Database, Layers, Gauge, AlertCircle, LineChart, ShieldCheck } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { SEO } from "../components/SEO";

export function ThermalControl() {
  const features = [
    {
      icon: Layers,
      title: "Многоканальность",
      description: "Обработка данных с нескольких тепловизоров, одновременное подключение до 12 камер"
    },
    {
      icon: Video,
      title: "Патрулирование",
      description: "Движение по заданному маршруту для полного покрытия зоны контроля"
    },
    {
      icon: Gauge,
      title: "Удобный интерфейс",
      description: "Простота конфигурирования зон анализа, настройки маршрутов и ручное управление"
    }
  ];

  const architecture = [
    {
      icon: Scan,
      title: "Тепловизионные камеры",
      description: "Установлены на ключевых точках контроля, фиксируют температуру и её изменения"
    },
    {
      icon: ShieldCheck,
      title: "Взрывозащищённые ПТЗ-платформы",
      description: "Непрерывная работа в опасных условиях, на производственных площадках с повышенной температурой"
    },
    {
      icon: Database,
      title: "Серверное оборудование",
      description: "Обеспечивает хранение данных и обучение ИИ-моделей"
    },
    {
      icon: Brain,
      title: "Модели машинного обучения",
      description: "Автоматическое распознавание пиковых температурных значений, контроль всего видимого диапазона"
    },
    {
      icon: AlertCircle,
      title: "Регистрация событий",
      description: "SOS-сигналы на пульт управления при обнаружении аномальной температуры"
    },
    {
      icon: LineChart,
      title: "Расширенная аналитика",
      description: "Мультиэкранная панель для анализа данных с разных тепловизоров и их зон"
    },
    {
      icon: Gauge,
      title: "Многопользовательский режим",
      description: "Разные уровни доступа и функционала для нескольких пользователей"
    }
  ];

  const benefits = [
    {
      title: "Повышенная безопасность",
      description: "Система позволяет вовремя выявлять и предотвращать аварийные ситуации, связанные с перегревом оборудования или потенциальной опасностью"
    },
    {
      title: "Автоматизация процессов",
      description: "Уменьшается нагрузка на оператора, так как система автоматически определяет аномальные температурные отклонения и сообщает об этом"
    },
    {
      title: "Гибкость и адаптивность",
      description: "Система может быть настроена под конкретные условия эксплуатации, включая использование различных платформ и тепловизоров"
    },
    {
      title: "Интеграция с инфраструктурами",
      description: "Система легко интегрируется с имеющимся оборудованием и программными системами"
    }
  ];

  return (
    <>
      <SEO
        title="Тепловизионный контроль температурных режимов - Система мониторинга с AI"
        description="Система тепловизионного контроля с искусственным интеллектом для мониторинга температурных режимов. Автоматическое обнаружение аномалий, 24/7 мониторинг, интеграция с оборудованием."
        keywords="тепловизионный контроль, система контроля температуры, мониторинг температурных режимов, тепловизор с AI, промышленная безопасность, контроль перегрева, тепловизионная камера"
      />
      <div className="pt-20">
      <section className="relative min-h-[600px] flex items-center bg-gradient-to-br from-orange-50 via-white to-orange-50 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-orange-200 rounded-full mb-6 shadow-lg">
              <Scan className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-medium text-gray-700">Тепловизионный AI</span>
            </div>

            <h1 className="mb-6 text-5xl md:text-6xl leading-tight">
              Тепловизионный контроль
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Технологическое решение для мониторинга температурных режимов в реальном времени, которое использует возможности машинного зрения для обеспечения безопасности и точности измерений.
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
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-400 rounded-[2.5rem] blur-3xl opacity-20"></div>
            <div className="relative bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop"
                alt="Тепловизионный контроль"
                className="w-full h-80 object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-4xl">Основные характеристики</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Мощная система для контроля температурных режимов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
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

          <div className="mb-20">
            <h3 className="mb-12 text-center text-3xl text-gray-900">Архитектура системы</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {architecture.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-3xl p-6 border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                        <Icon className="w-5 h-5 text-orange-500" />
                      </div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-white rounded-[2.5rem] p-12 border border-orange-100">
            <h3 className="mb-8 text-center text-2xl text-gray-900">Преимущества использования</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1">
                    <Shield className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-[2.5rem] p-12 md:p-16 border border-gray-100 shadow-xl">
            <Shield className="w-16 h-16 text-orange-500 mx-auto mb-6" />
            <h2 className="mb-6 text-3xl md:text-4xl">Улучшите систему безопасности до нового поколения</h2>
            <p className="text-xl text-gray-600 mb-8">
              Внедрите систему тепловизионного контроля и обеспечьте максимальную безопасность
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-500 text-white rounded-2xl hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 hover:scale-105 font-medium"
              >
                Связаться с нами
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
