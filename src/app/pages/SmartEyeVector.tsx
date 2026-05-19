import image_photo_2023_02_05_18_42_12__3_ from '@/imports/photo_2023-02-05_18-42-12__3_.jpg'
import { Eye, Microscope, LineChart, Leaf, CheckCircle2, Zap } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { SEO } from "../components/SEO";

export function SmartEyeVector() {
  const features = [
    {
      icon: Microscope,
      title: "Точная детекция",
      description: "Выявление объектов размером от 1 мм"
    },
    {
      icon: LineChart,
      title: "Классификация",
      description: "Определение видов и стадий развития"
    },
    {
      icon: Leaf,
      title: "Биологический анализ",
      description: "Оценка состояния растений и животных"
    }
  ];

  const applications = [
    "Мониторинг сельскохозяйственных культур",
    "Выявление вредителей и болезней",
    "Контроль качества семян",
    "Анализ роста и развития растений",
    "Подсчет популяций насекомых",
    "Экологический мониторинг"
  ];

  return (
    <>
      <SEO
        title="Smart Eye Vector - Система детекции биологических объектов с AI"
        description="Система компьютерного зрения для детекции и классификации биологических объектов. Выявление объектов от 1 мм, анализ сельскохозяйственных культур, экологический мониторинг."
        keywords="детекция объектов, компьютерное зрение для сельского хозяйства, анализ растений, биологический мониторинг, система классификации, AI для агро, экологический контроль"
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
              <Eye className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-medium text-gray-700">Биологическое зрение</span>
            </div>

            <h1 className="mb-6 text-5xl md:text-6xl leading-tight">
              Smart Eye Vector
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Система детекции и классификации биологических объектов.
              Продвинутое компьютерное зрение для сельского хозяйства и экологии.
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
                src={image_photo_2023_02_05_18_42_12__3_}
                alt="Smart Eye Vector"
                className="w-full h-80 object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-4xl">Технологии системы</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Передовое компьютерное зрение для биологических исследований
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

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="mb-6 text-2xl text-gray-900">Области применения</h3>
              <div className="space-y-3">
                {applications.map((app, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-gradient-to-r from-white to-gray-50 rounded-2xl p-4 border border-gray-100 hover:border-orange-200 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{app}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white rounded-[2.5rem] p-10 border border-orange-100">
              <h3 className="mb-6 text-2xl text-gray-900">Преимущества</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-500 rounded-xl flex items-center justify-center">
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-lg text-gray-900">Высокое разрешение</h4>
                  </div>
                  <p className="text-gray-600 ml-13">
                    Детальный анализ объектов на микроуровне
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-500 rounded-xl flex items-center justify-center">
                      <Microscope className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-lg text-gray-900">Научная точность</h4>
                  </div>
                  <p className="text-gray-600 ml-13">
                    Соответствие биологическим стандартам
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-500 rounded-xl flex items-center justify-center">
                      <LineChart className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-lg text-gray-900">Динамический мониторинг</h4>
                  </div>
                  <p className="text-gray-600 ml-13">
                    Отслеживание изменений во времени
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-500 rounded-xl flex items-center justify-center">
                      <Leaf className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-lg text-gray-900">Экологичность</h4>
                  </div>
                  <p className="text-gray-600 ml-13">
                    Бесконтактный неинвазивный анализ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-[2.5rem] p-12 md:p-16 border border-gray-100 shadow-xl">
            <Zap className="w-16 h-16 text-orange-500 mx-auto mb-6" />
            <h2 className="mb-6 text-3xl md:text-4xl">Нужен биологический анализ?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Внедрите Smart Eye Vector для точного мониторинга
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
