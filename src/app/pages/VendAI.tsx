import { Store, Scan, CreditCard, ShoppingBag, Shield, Smartphone, Eye, Scale, CheckCircle2, Zap } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { SEO } from "../components/SEO";

export function VendAI() {
  const features = [
    {
      icon: Smartphone,
      title: "Простота использования",
      description: "Отсканировал QR-код — дверь открылась, взял товары — готово"
    },
    {
      icon: Shield,
      title: "Полная безопасность",
      description: "Автоматический контроль того, что и в каком количестве было взято"
    },
    {
      icon: CreditCard,
      title: "Автоматическая оплата",
      description: "Деньги списываются после закрытия двери, как в каршеринге"
    }
  ];

  const customerSteps = [
    {
      step: "1",
      icon: Scan,
      title: "Сканируете QR-код",
      description: "Наводите камеру телефона на код — приложение открывает сессию"
    },
    {
      step: "2",
      icon: ShoppingBag,
      title: "Берёте товары",
      description: "Дверь автоматически открывается — выбираете всё что нужно"
    },
    {
      step: "3",
      icon: CreditCard,
      title: "Закрываете дверь",
      description: "Система списывает деньги автоматически — ничего вводить не нужно"
    }
  ];

  const systemComponents = [
    {
      icon: Scan,
      title: "QR-идентификация",
      description: "Открывает персональную сессию пользователя через уникальный идентификатор"
    },
    {
      icon: Scale,
      title: "Весовые платформы",
      description: "Фиксируют изменения веса товаров в режиме реального времени"
    },
    {
      icon: Eye,
      title: "Камеры с AI",
      description: "Распознают, какие товары и в каком количестве взял покупатель"
    },
    {
      icon: CreditCard,
      title: "Автоматический расчёт",
      description: "При закрытии двери анализируется сессия, выставляется счёт и списываются средства"
    }
  ];

  const advantages = [
    "Нет необходимости выбирать товары на экране и нажимать кнопки",
    "Оплата без участия кассира и кассового терминала",
    "Исключены ошибки при выборе товаров",
    "Защита от мошенничества с AI-контролем",
    "Работает по принципу каршеринга и кикшеринга",
    "Полностью автономная система"
  ];

  return (
    <>
      <SEO
        title="Умные вендинговые автоматы с AI - Автоматическая система оплаты"
        description="Вендинговые автоматы нового поколения с искусственным интеллектом. Автоматическое распознавание товаров, оплата как в каршеринге. Российская разработка для торговли без кассира."
        keywords="вендинговые автоматы, умные торговые автоматы, автоматическая система оплаты, торговый автомат с AI, вендинг, система распознавания товаров, бесконтактная торговля"
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
              <Store className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-medium text-gray-700">Российский вендор</span>
            </div>

            <h1 className="mb-6 text-5xl md:text-6xl leading-tight">
              Вендинговый аппарат на основе ИИ
            </h1>

            <h2 className="mb-6 text-2xl text-gray-700">
              с интеллектуальной системой безопасности
            </h2>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Вендинговый аппарат нового поколения от российского вендора. Просто сканируете QR-код, берёте товары и уходите — оплата происходит автоматически.
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
                src="https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&h=400&fit=crop"
                alt="Вендинговый аппарат INERU"
                className="w-full h-80 object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-4xl">Удобно и безопасно</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Максимальное удобство для клиента при полном контроле для владельца
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
            <h3 className="mb-12 text-center text-3xl text-gray-900">Как это работает для клиента</h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {customerSteps.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg text-white font-bold text-lg">
                      {item.step}
                    </div>
                    <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 mt-4">
                      <Icon className="w-7 h-7 text-orange-600" />
                    </div>
                    <h4 className="mb-3 text-gray-900 font-semibold">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-white rounded-[2.5rem] p-12 border border-orange-100 mb-20">
            <h3 className="mb-12 text-center text-3xl text-gray-900">Как это работает для сервиса</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {systemComponents.map((component, index) => {
                const Icon = component.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-3xl p-6 border border-orange-100 hover:shadow-xl transition-all"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900">{component.title}</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{component.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-[2.5rem] p-12 border border-gray-100">
            <h3 className="mb-8 text-center text-2xl text-gray-900">Преимущества системы</h3>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="mt-1">
                    <CheckCircle2 className="w-6 h-6 text-orange-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-gray-700 leading-relaxed">{advantage}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-[2.5rem] p-12 md:p-16 border border-gray-100 shadow-xl">
            <Zap className="w-16 h-16 text-orange-500 mx-auto mb-6" />
            <h2 className="mb-6 text-3xl md:text-4xl">Вендинг нового поколения</h2>
            <p className="text-xl text-gray-600 mb-8">
              Российская разработка с уникальной технологией автоматического распознавания и оплаты.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-500 text-white rounded-2xl hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 hover:scale-105 font-medium"
            >
              Узнать подробности
            </a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
