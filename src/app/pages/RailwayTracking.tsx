import { Train, Camera, MapPin, Clock, CheckCircle2, Zap, Cpu, Radio, Server } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { SEO } from "../components/SEO";

export function RailwayTracking() {
  const components = [
    {
      icon: Server,
      title: "Серверное оборудование",
      description: "Для обработки данных"
    },
    {
      icon: Radio,
      title: "GPS трекеры",
      description: "Отслеживание местоположения"
    },
    {
      icon: Camera,
      title: "Камеры на ричтраках",
      description: "Идентификация номеров"
    },
    {
      icon: Cpu,
      title: "Нейросетевые модели",
      description: "Автоматическая обработка изображений"
    }
  ];

  const workflow = [
    {
      step: "1",
      title: "Распознавание номеров",
      description: "Камеры на ричтраке распознают номера контейнеров"
    },
    {
      step: "2",
      title: "Перемещение контейнера",
      description: "Ричтрак перемещает контейнер по заданному маршруту"
    },
    {
      step: "3",
      title: "GPS отслеживание",
      description: "GPS трекеры отслеживают местоположение контейнера"
    },
    {
      step: "4",
      title: "Передача данных",
      description: "Вся информация передается в базу данных для анализа и учета"
    }
  ];

  const benefits = [
    {
      title: "Регулярные обновления",
      description: "О местоположении контейнеров, что позволяет оперативно передавать информацию в базу данных о местоположении, времени погрузки/разгрузки"
    },
    {
      title: "Автоматическая идентификация",
      description: "Контейнеров, исключающая необходимость ручного ввода данных"
    },
    {
      title: "Автоматизированный учет",
      description: "Погрузки и разгрузки, что снижает вероятность ошибок"
    },
    {
      title: "Собственная разработка",
      description: "Программно-аппаратного комплекса обеспечивает гибкость и возможность добавления дополнительных функций под требования заказчика"
    },
    {
      title: "Система сигнализации",
      description: "Об ошибках позволяет быстро реагировать на любые проблемы и минимизировать риски"
    }
  ];

  const additionalFeatures = [
    "Дефектоскопия контейнеров и вагонов для проверки технического состояния",
    "Дефектоскопия парных колес для обнаружения дефектов в колесах транспортных средств",
    "Интеграция с другими системами заказчика для расширения функционала",
    "Гибкость настроек: возможность изменения принципа считывания и выгрузки данных в зависимости от специфики задачи"
  ];

  return (
    <>
      <SEO
        title="Автоматический учет вагонов и контейнеров - Распознавание номеров с AI"
        description="Система автоматического учета железнодорожных вагонов и контейнеров с компьютерным зрением. Распознавание номеров, GPS-трекинг, интеграция с учетными системами."
        keywords="учет вагонов, учет контейнеров, распознавание номеров вагонов, железнодорожная логистика, автоматизация учета транспорта, система учета РЖД"
      />
      <div className="pt-20">
      <section className="relative min-h-[600px] flex items-center bg-gradient-to-br from-orange-50 via-white to-orange-50 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-20 left-20 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-orange-200 rounded-full mb-6 shadow-lg">
              <Train className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-medium text-gray-700">Железнодорожная логистика</span>
            </div>

            <h1 className="mb-6 text-5xl md:text-6xl leading-tight">
              Учет вагонов и контейнеров
            </h1>

            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Модуль для автоматического распознавания номеров контейнеров и вагонов, который помогает значительно оптимизировать процессы логистики.
            </p>

            <p className="text-lg text-gray-700 mb-8">
              Модуль легко интегрируется с любыми существующими учетными системами.
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
                src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=600&h=400&fit=crop"
                alt="Учет вагонов и контейнеров"
                className="w-full h-80 object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-4xl">Состав программно-аппаратного комплекса</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полноценная система для автоматизации логистических процессов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {components.map((component, index) => {
              const Icon = component.icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 border border-gray-100 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="mb-2 text-gray-900 font-semibold">{component.title}</h4>
                  <p className="text-sm text-gray-600">{component.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mb-20">
            <h3 className="mb-12 text-center text-3xl text-gray-900">Принцип работы</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {workflow.map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg text-white font-bold text-lg">
                    {item.step}
                  </div>
                  <h4 className="mb-3 mt-4 text-gray-900 font-semibold">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-white rounded-[2.5rem] p-12 border border-orange-100 mb-20">
            <h3 className="mb-8 text-center text-2xl text-gray-900">Преимущества системы</h3>
            <div className="space-y-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="mt-1">
                    <CheckCircle2 className="w-6 h-6 text-orange-600 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-[2.5rem] p-10 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-500 rounded-2xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl text-gray-900">Стационарное применение</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Данный модуль можно эффективно использовать в различных сферах логистики. Стационарный комплекс позволяет автоматически передавать информацию о времени прибытия и ухода вагонов, грузовиков, локомотивов.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Система автоматически определит номера вагонов, гос номера и иные идентификационные маркировки на поверхности.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white rounded-[2.5rem] p-10 border border-orange-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-500 rounded-2xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl text-gray-900">Дополнительные функции</h3>
              </div>
              <div className="space-y-3">
                {additionalFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#EC7036] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-white rounded-[2.5rem] p-12 border border-orange-100 text-center">
            <h3 className="mb-4 text-2xl text-gray-900">
              Повышение эффективности логистики
            </h3>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Этот модуль помогает значительно повысить эффективность и снизить издержки в сфере логистики.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-[2.5rem] p-12 md:p-16 border border-gray-100 shadow-xl">
            <Zap className="w-16 h-16 text-orange-600 mx-auto mb-6" />
            <h2 className="mb-6 text-3xl md:text-4xl">Автоматизируйте учет</h2>
            <p className="text-xl text-gray-600 mb-8">
              Внедрите систему и сократите время на оформление документов
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-500 text-white rounded-2xl hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 hover:scale-105 font-medium"
              >
                Связаться с нами
              </a>
            </div>
            <div className="mt-6">
              <a
                href="https://disk.yandex.ru/d/NCyFxLKxHyD7LQ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-600 transition-colors inline-flex items-center gap-2 font-medium"
              >
                <Camera className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
