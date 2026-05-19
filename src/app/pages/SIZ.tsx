import image_image43 from '@/imports/image43.png'
import image_shot0006 from '@/imports/shot0006.png'
import { HardHat, Eye, AlertTriangle, BarChart3, Clock, Shield } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { SEO } from "../components/SEO";

export function SIZ() {
  const features = [
    {
      icon: Eye,
      title: "Контроль в реальном времени",
      description: "Мониторинг соблюдения требований СИЗ 24/7"
    },
    {
      icon: AlertTriangle,
      title: "Мгновенные оповещения",
      description: "Автоматические уведомления о нарушениях"
    },
    {
      icon: BarChart3,
      title: "Детальная аналитика",
      description: "Статистика и отчеты по соблюдению норм"
    }
  ];

  const detectableItems = [
    "Защитная каска",
    "Защитные очки",
    "Респиратор и маска",
    "Специальная одежда",
    "Защитные перчатки",
    "Защитная обувь",
    "Наушники и беруши",
    "Жилет безопасности"
  ];

  return (
    <>
      <SEO
        title="Контроль СИЗ на производстве - Автоматическая система безопасности"
        description="Автоматическая система контроля средств индивидуальной защиты (СИЗ) с компьютерным зрением. Распознавание касок, масок, спецодежды. Повышение безопасности на производстве."
        keywords="контроль СИЗ, система контроля безопасности, распознавание СИЗ, средства индивидуальной защиты, промышленная безопасность, контроль касок, AI для производства"
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
              <HardHat className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-medium text-gray-700">Безопасность производства</span>
            </div>

            <h1 className="mb-6 text-5xl md:text-6xl leading-tight">
              Контроль СИЗ
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Автоматическая система контроля использования средств индивидуальной защиты на предприятии.
              Обеспечьте безопасность сотрудников и соблюдение нормативов.
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
                src={image_image43}
                alt="Контроль СИЗ"
                className="w-full h-80 object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-4xl">Как это работает</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Система на базе компьютерного зрения автоматически распознает наличие и правильность использования СИЗ
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

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="mb-6 text-2xl text-gray-900">Что распознает система</h3>
              <div className="space-y-3">
                {detectableItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-gradient-to-r from-white to-gray-50 rounded-2xl p-4 border border-gray-100 hover:border-orange-200 transition-colors"
                  >
                    <Shield className="w-5 h-5 text-orange-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white rounded-[2.5rem] p-10 border border-orange-100">
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-500 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg text-gray-900">Экономия времени</h4>
                  </div>
                  <p className="text-gray-600 ml-15">
                    Автоматический контроль вместо ручных проверок
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-500 rounded-xl flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg text-gray-900">Полная статистика</h4>
                  </div>
                  <p className="text-gray-600 ml-15">
                    Детальные отчеты по каждому сотруднику и зоне
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-500 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg text-gray-900">Повышение безопасности</h4>
                  </div>
                  <p className="text-gray-600 ml-15">
                    Снижение производственного травматизма до 60%
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
            <h2 className="mb-6 text-3xl md:text-4xl">Обеспечьте безопасность</h2>
            <p className="text-xl text-gray-600 mb-8">
              Внедрите систему контроля СИЗ и защитите своих сотрудников
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-500 text-white rounded-2xl hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 hover:scale-105 font-medium"
            >
              Заказать внедрение
            </a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
