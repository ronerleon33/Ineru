import image_PXL_20220311_145119100 from '@/imports/PXL_20220311_145119100.jpg'
import { Box, Scale, Layers, Zap, BarChart, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { SEO } from "../components/SEO";

export function Shelves() {
  const features = [
    {
      icon: Scale,
      title: "Автоматическое взвешивание",
      description: "Непрерывный учет товаров без участия человека"
    },
    {
      icon: Layers,
      title: "Многоуровневый мониторинг",
      description: "Отслеживание товаров на всех полках одновременно"
    },
    {
      icon: BarChart,
      title: "Управление запасами",
      description: "Уведомления о необходимости пополнения"
    }
  ];

  const advantages = [
    "Точность измерения до 1 грамма",
    "Работа с неограниченным количеством SKU",
    "Интеграция с системами управления запасами",
    "Защита от краж и потерь",
    "Автоматическое формирование заказов",
    "Снижение операционных расходов до 35%"
  ];

  return (
    <>
      <SEO
        title="Весовая платформа для автоматического учета - Умные полки с датчиками"
        description="Весовая платформа с интегрированными датчиками для автоматического учета товаров. Контроль остатков в реальном времени, автоматическое формирование заказов, точность до 1 грамма."
        keywords="весовая платформа, умные полки, автоматический учет товаров, система учета остатков, весовые датчики, контроль запасов, управление остатками"
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
              <Box className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-medium text-gray-700">Автоматизация склада</span>
            </div>

            <h1 className="mb-6 text-5xl md:text-6xl leading-tight">
              Весовая платформа
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Инновационная система автоматического учета весовых товаров на полках.
              Контролируйте остатки в режиме реального времени без участия персонала.
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
                src={image_PXL_20220311_145119100}
                alt="Весовая платформа"
                className="w-full h-80 object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-4xl">Технология будущего</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Умные полки с интегрированными весовыми датчиками для непрерывного мониторинга
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
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-[2.5rem] p-10 border border-orange-100">
              <Zap className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="mb-6 text-2xl text-gray-900">Как это работает</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <p className="text-gray-600 pt-1">
                    Датчики непрерывно отслеживают вес товаров на каждой полке
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <p className="text-gray-600 pt-1">
                    AI анализирует изменения и определяет тип товара
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <p className="text-gray-600 pt-1">
                    Данные поступают в систему учета в реальном времени
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    4
                  </div>
                  <p className="text-gray-600 pt-1">
                    При низком уровне формируется автоматический заказ
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-2xl text-gray-900">Преимущества решения</h3>
              <div className="space-y-3">
                {advantages.map((advantage, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-gradient-to-r from-white to-gray-50 rounded-2xl p-4 border border-gray-100 hover:border-orange-200 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[2.5rem] p-12 md:p-16 border border-gray-100 shadow-xl text-center">
            <h2 className="mb-6 text-3xl md:text-4xl">Автоматизируйте учет товаров</h2>
            <p className="text-xl text-gray-600 mb-8">
              Забудьте о ручной инвентаризации и всегда знайте точные остатки
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-500 text-white rounded-2xl hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 hover:scale-105 font-medium"
            >
              Внедрить решение
            </a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
