import { Link } from "react-router";
import { Scale, HardHat, Users, Weight, Forklift, Scan, Store, Train, Wrench, Eye, Code, Sparkles, ArrowRight, TrendingUp, Heart, Flag } from "lucide-react";
import { SEO } from "../components/SEO";
import { EditableText } from "../components/EditableText";

const products = [
  {
    id: 1,
    title: "Инвентаризатор",
    description: "Автоматизированная инвентаризация складских помещений",
    icon: Forklift,
    link: "/inventory",
    gradient: "from-amber-500 to-orange-500"
  },
  {
    id: 2,
    title: "Тепловизионный контроль",
    description: "Мониторинг температурных режимов и выявление аномалий",
    icon: Scan,
    link: "/thermal-control",
    gradient: "from-red-500 to-pink-500"
  },
  {
    id: 3,
    title: "ВендИИ",
    description: "Интеллектуальная система управления торговыми автоматами",
    icon: Store,
    link: "/vend-ai",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    id: 4,
    title: "Учет вагонов и контейнеров",
    description: "Автоматизированный учет железнодорожного транспорта",
    icon: Train,
    link: "/railway-tracking",
    gradient: "from-slate-500 to-gray-600"
  },
  {
    id: 5,
    title: "Заказная разработка",
    description: "Индивидуальные решения компьютерного зрения для вашего бизнеса",
    icon: Code,
    link: "/custom-cv",
    gradient: "from-rose-500 to-orange-500"
  },
  {
    id: 6,
    title: "Электромеханические конструкции",
    description: "Разработка и производство специализированного оборудования",
    icon: Wrench,
    link: "/electromechanical",
    gradient: "from-teal-500 to-cyan-500"
  },
  {
    id: 7,
    title: "Умные весы",
    description: "Система распознавания весовых товаров",
    icon: Scale,
    link: "/smart-scales",
    gradient: "from-orange-500 to-red-500"
  },
  {
    id: 8,
    title: "Подсчет трафика",
    description: "Подсчёт количества входящих клиентов",
    icon: Users,
    link: "/traffic",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: 9,
    title: "Контроль СИЗ",
    description: "Следим за санитарными нормами на предприятии",
    icon: HardHat,
    link: "/siz",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: 10,
    title: "Весовая платформа",
    description: "Автоматический учет весовых товаров",
    icon: Weight,
    link: "/shelves",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    id: 11,
    title: "Smart Eye Vector",
    description: "Система детекции и классификации биологических объектов",
    icon: Eye,
    link: "/smart-eye-vector",
    gradient: "from-violet-500 to-purple-500"
  }
];

const features = [
  {
    icon: TrendingUp,
    title: "ROI до 200%",
    description: "Окупаемость в течение 6-12 месяцев"
  },
  {
    icon: Heart,
    title: "Индивидуальный подход",
    description: "Решения под специфику вашего бизнеса"
  },
  {
    icon: Flag,
    title: "Отечественное ПО",
    description: "Российская разработка и поддержка"
  }
];

export function Home() {
  return (
    <div>
      <SEO
        title="Компьютерное зрение и AI решения для бизнеса"
        description="INERU - разработка систем компьютерного зрения, искусственного интеллекта и видеоаналитики. Автоматизация складского учета, тепловизионный контроль, распознавание товаров. Российская разработка, импортозамещение."
        keywords="компьютерное зрение, искусственный интеллект, AI решения, видеоаналитика, автоматизация склада, инвентаризация, тепловизионный контроль, распознавание товаров, машинное обучение, импортозамещение, российское ПО"
      />
      <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-red-50">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#EC7036] rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-orange-200 rounded-full mb-8 shadow-lg shadow-orange-500/10">
            <Sparkles className="w-4 h-4 text-[#EC7036]" />
            <span className="text-sm font-medium text-gray-700">Инновации в области AI</span>
          </div>

          <h1 className="mb-8 text-5xl md:text-7xl leading-tight">
            <EditableText
              id="home-hero-title"
              as="span"
              defaultValue="Системы компьютерного зрения и искусственного интеллекта"
              className="bg-gradient-to-r from-[#EC7036] to-[#ff8c5a] bg-clip-text text-transparent"
            />
            {" "}от российского разработчика
          </h1>

          <EditableText
            id="home-hero-description"
            as="p"
            defaultValue="Решения на основе AI и машинного обучения для видеоаналитики, автоматизации бизнес-процессов и промышленной безопасности. Импортозамещение с полным циклом разработки и производства в России."
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
          />

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#products"
              className="group px-8 py-4 bg-gradient-to-r from-[#EC7036] to-[#ff8c5a] text-white rounded-2xl hover:shadow-2xl hover:shadow-[#EC7036]/30 transition-all duration-300 hover:scale-105 font-medium inline-flex items-center gap-2"
            >
              Наши продукты
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/contact"
              className="px-8 py-4 bg-white border-2 border-gray-200 rounded-2xl hover:border-[#EC7036] hover:shadow-lg transition-all duration-300 font-medium text-gray-700 hover:text-[#EC7036]"
            >
              Связаться с нами
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-[#EC7036]/30 hover:shadow-xl hover:shadow-[#EC7036]/10 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#EC7036] to-[#ff8c5a] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#EC7036]/20 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="products" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full mb-6">
              <span className="text-sm font-medium text-[#EC7036]">11 готовых решений</span>
            </div>
            <h2 className="mb-6 text-4xl md:text-5xl bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Решения на базе компьютерного зрения
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Готовые программно-аппаратные комплексы с искусственным интеллектом для автоматизации бизнеса, логистики, торговли и промышленной безопасности
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <Link
                  key={product.id}
                  to={product.link}
                  className="group relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-transparent hover:shadow-2xl hover:shadow-[#EC7036]/10 transition-all duration-500 overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                  <div className="relative">
                    <div className={`w-16 h-16 bg-gradient-to-br ${product.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="mb-3 text-xl group-hover:text-[#EC7036] transition-colors">
                      {product.title}
                    </h3>

                    <p className="text-gray-600 mb-6 min-h-[48px] leading-relaxed">
                      {product.description}
                    </p>

                    <div className="flex items-center gap-2 text-[#EC7036] font-medium group-hover:gap-4 transition-all">
                      <span>Подробнее</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-br from-orange-50 via-white to-red-50">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-white rounded-[2.5rem] p-12 md:p-16 border border-gray-100 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#EC7036] to-[#ff8c5a] rounded-full blur-3xl opacity-20"></div>

            <div className="relative text-center">
              <h2 className="mb-6 text-3xl md:text-4xl">
                Экспертиза в компьютерном зрении и AI
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Специализируемся на разработке <span className="text-[#EC7036] font-semibold">систем компьютерного зрения</span> и решений на основе <span className="text-[#EC7036] font-semibold">искусственного интеллекта</span> для промышленности, ритейла и логистики. Реализуем проекты любой сложности в области <span className="text-[#EC7036] font-semibold">видеоаналитики</span> и <span className="text-[#EC7036] font-semibold">машинного обучения</span>. Российская разработка, полный цикл производства, техническая поддержка 24/7.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
