import { Cog, Wrench, Cpu, Zap, CheckCircle2, Settings, Camera, Lightbulb, Award } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { SEO } from "../components/SEO";

export function Electromechanical() {
  const advantages = [
    {
      icon: Settings,
      title: "Гибкость решений",
      description: "Мы работаем под конкретное техническое задание. Готовы создать электромеханическое устройство конкретно под ваши задачи"
    },
    {
      icon: Lightbulb,
      title: "Опыт в реализации проектов",
      description: "Многолетний опыт в конструировании электромеханических устройств"
    },
    {
      icon: Award,
      title: "Надёжность",
      description: "Используем только проверенные материалы и технологии"
    }
  ];

  const workflow = [
    {
      step: "1",
      title: "Обсуждение задачи и составление ТЗ",
      description: "Вы рассказываете о своей идее или задаче, а мы помогаем сформировать требования"
    },
    {
      step: "2",
      title: "Проектирование",
      description: "Создаём макет, который соответствует вашим потребностям и задачам"
    },
    {
      step: "3",
      title: "Производство",
      description: "Изготавливаем и проверяем работоспособность устройства"
    },
    {
      step: "4",
      title: "Ввод в эксплуатацию",
      description: "Запускаем систему и обеспечиваем поддержку"
    }
  ];

  return (
    <>
      <SEO
        title="Электромеханические конструкции и оборудование - Разработка и производство"
        description="Проектирование и производство электромеханических конструкций и специализированного оборудования. Российская разработка, индивидуальные решения для промышленности."
        keywords="электромеханические конструкции, проектирование оборудования, производство конструкций, промышленное оборудование, электромеханика, инженерные конструкции"
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
              <Cog className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-medium text-gray-700">Инженерные решения</span>
            </div>

            <h1 className="mb-6 text-5xl md:text-6xl leading-tight">
              Электромеханические конструкции
            </h1>

            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Команда INERU создает надёжные и функциональные электромеханические конструкции для предприятий, складов, заводов и других предприятий.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Наша команда реализует проекты на основе ваших требований, чтобы помочь автоматизировать процессы, повысить производительность и оптимизировать ресурсы.
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
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&h=400&fit=crop"
                alt="Электромеханические конструкции"
                className="w-full h-80 object-cover rounded-3xl"
              />
              <div className="mt-4 text-center space-y-2">
                <a
                  href="https://disk.yandex.ru/d/8kIvArXoPJYhRA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-orange-500 hover:text-orange-600 transition-colors"
                >
                  <Camera className="w-4 h-4 inline mr-2" />
                  Фото примеры на Яндекс.Диске
                </a>
                <a
                  href="https://cloud.ine.ru/s/QdgobkbCmQe4nTJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-orange-500 hover:text-orange-600 transition-colors"
                >
                  <Camera className="w-4 h-4 inline mr-2" />
                  Дополнительные материалы
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-orange-50 to-white rounded-[2.5rem] p-12 border border-orange-100 mb-20">
            <h3 className="mb-6 text-2xl text-gray-900 text-center">Возможности разработки</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-6 border border-orange-100">
                <Cpu className="w-10 h-10 text-orange-500 mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Проектирование с нуля</h4>
                <p className="text-gray-600 text-sm">
                  Наши инженеры спроектируют электромеханическую конструкцию с нуля
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-orange-100">
                <Wrench className="w-10 h-10 text-orange-500 mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">По наработкам</h4>
                <p className="text-gray-600 text-sm">
                  Создание конструкции по уже имеющимся наработкам
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-orange-100">
                <Settings className="w-10 h-10 text-orange-500 mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Доработка</h4>
                <p className="text-gray-600 text-sm">
                  Доработка уже имеющихся электромеханических конструкций
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="mb-4 text-4xl">Наши преимущества</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Профессиональный подход к каждому проекту
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-[#EC7036]/30 hover:shadow-xl hover:shadow-[#EC7036]/10 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="mb-3 text-gray-900">{advantage.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                </div>
              );
            })}
          </div>

          <div>
            <h3 className="mb-12 text-center text-3xl text-gray-900">Этапы работы</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {workflow.map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-[#EC7036]/30 hover:shadow-xl transition-all duration-300"
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
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-[2.5rem] p-12 md:p-16 border border-gray-100 shadow-xl">
            <Zap className="w-16 h-16 text-orange-500 mx-auto mb-6" />
            <h2 className="mb-6 text-3xl md:text-4xl">Нужно уникальное решение?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Расскажите о вашей задаче, и мы разработаем оптимальную конструкцию
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
