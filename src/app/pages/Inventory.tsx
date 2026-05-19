import { Package, Scan, BarChart3, Clock, CheckCircle2, Zap, Container, Camera, Gauge, Maximize2 } from "lucide-react";
import { SEO } from "../components/SEO";
import { ImageGallery } from "../components/ImageGallery";
import { inventoryImages } from "./inventory-images";
import { useState } from "react";
import { ImageZoom } from "../components/ImageZoom";
import { useImageManagement } from "../contexts/ImageManagementContext";

function ImageGridItem({ image, allImages, initialIndex }: {
  image: { src: string; alt: string },
  allImages: Array<{ src: string; alt: string }>,
  initialIndex: number
}) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div
        className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-gray-50"
        onClick={() => setIsZoomed(true)}
      >
        <div className="flex items-center justify-center min-h-[320px]">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
            style={{
              filter: 'contrast(1.15) brightness(1.08) saturate(1.25)',
              imageRendering: 'crisp-edges'
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6">
          <p className="text-white text-sm flex-1">{image.alt}</p>
          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0 ml-2">
            <Maximize2 className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>

      {isZoomed && (
        <ImageZoom
          images={allImages}
          currentIndex={currentIndex}
          onClose={() => setIsZoomed(false)}
          onPrevious={goToPrevious}
          onNext={goToNext}
        />
      )}
    </>
  );
}

export function Inventory() {
  const { getImages } = useImageManagement();
  const currentImages = getImages('inventory', inventoryImages);

  const features = [
    {
      icon: Scan,
      title: "Автоматическое сканирование",
      description: "QR и бар-коды на упаковках без остановки работы склада"
    },
    {
      icon: Gauge,
      title: "Высокая скорость",
      description: "До 12,600 ячеек в час"
    },
    {
      icon: Clock,
      title: "Автономная работа",
      description: "4 часа без подзарядки"
    }
  ];

  const specifications = [
    {
      label: "Высота мачты",
      value: "До 15 метров",
      description: "Сканирование верхних ярусов склада"
    },
    {
      label: "Автономность",
      value: "До 8 часов",
      description: "Без подключения внешних источников"
    },
    {
      label: "Скорость сканирования",
      value: "12,600 ячеек/час",
      description: "Быстрая обработка больших складов"
    },
    {
      label: "Дальность сканирования",
      value: "До 4 метров",
      description: "Эффективное покрытие зоны"
    }
  ];

  const benefits = [
    {
      title: "Скорость и эффективность",
      description: "Система ускоряет процесс инвентаризации и снижает время на операционные затраты"
    },
    {
      title: "Автоматизация учета",
      description: "Снижение ошибок и упрощение процессов благодаря автоматическому сканированию"
    },
    {
      title: "Снижение затрат",
      description: "Меньше времени и людей, вовлеченных в процесс инвентаризации"
    },
    {
      title: "Интеграция с WMS",
      description: "Прямое подключение к складской системе учета товаров"
    },
    {
      title: "Бесперебойная работа",
      description: "Процесс инвентаризации не мешает обычной работе склада"
    },
    {
      title: "Универсальность кодов",
      description: "Возможность работы с QR-кодами и бар-кодами"
    }
  ];

  return (
    <>
      <SEO
        title="Автоматизированная инвентаризация склада - Система складского учета с AI"
        description="Система автоматизированной инвентаризации складских помещений с компьютерным зрением. Точность 99%, автономная работа до 8 часов. Решение для автоматизации складского учета и инвентаризации."
        keywords="инвентаризация склада, автоматизация складского учета, система инвентаризации, компьютерное зрение для склада, складская автоматизация, инвентаризационный учет, AI для склада"
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
              <Package className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-medium text-gray-700">Складская автоматизация</span>
            </div>

            <h1 className="mb-6 text-5xl md:text-6xl leading-tight">
              Автоматизированная инвентаризация склада с AI
            </h1>

            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Инвентаризация на складах остаётся долгим и трудоемким процессом. Регулярные перерывы склада для проведения инвентаризации приводят к потере времени и снижению эффективности работы склада.
            </p>

            <p className="text-xl font-medium text-gray-900 mb-8">
              Мы предлагаем решение, которое позволит автоматизировать процесс инвентаризации, не требующую остановку работы склада.
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

          <ImageGallery images={currentImages} />
        </div>
      </section>

      <section id="features" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-4xl">Как работает система</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Система автоматически сканирует QR/бар-коды на упаковках и сопоставляет их с кодами ячеек на складе.
              Данные передаются в систему учета, что обеспечивает полную и актуальную информацию о местоположении товаров.
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

          <div className="bg-gradient-to-br from-orange-50 to-white rounded-[2.5rem] p-12 border border-orange-100 mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Camera className="w-8 h-8 text-orange-500" />
              <h3 className="text-2xl text-gray-900">Технология сканирования</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Автоматизированная инвентаризация склада с AI оснащен камерами и системой компьютерного зрения, обученной сканировать как QR, так и бар-коды.
              Система работает в режиме реального времени и мгновенно передает данные в вашу складскую систему учета.
            </p>
          </div>

          <div className="mb-20">
            <h3 className="mb-12 text-center text-3xl text-gray-900">Технические характеристики</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {specifications.map((spec, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-[#EC7036]/30 hover:shadow-xl transition-all"
                >
                  <div className="flex items-baseline gap-3 mb-3">
                    <div className="text-4xl font-bold text-orange-500">{spec.value}</div>
                    <div className="text-lg text-gray-700 font-medium">{spec.label}</div>
                  </div>
                  <p className="text-gray-600">{spec.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-[2.5rem] p-12 border border-gray-100 mb-20">
            <h3 className="mb-8 text-center text-2xl text-gray-900">Преимущества решения</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="mt-1">
                    <CheckCircle2 className="w-6 h-6 text-orange-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-white rounded-[2.5rem] p-12 border border-orange-100">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-500 rounded-3xl flex items-center justify-center shadow-xl">
                  <Container className="w-12 h-12 text-white" />
                </div>
              </div>
              <div>
                <h3 className="mb-3 text-2xl text-gray-900">Универсальная установка</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Автоматизированная инвентаризация склада с AI можно установить на любой вилочный погрузчик — как на беспилотный, так и на стандартный.
                  Гибкость в использовании позволяет максимально быстро адаптироваться под существующие складские процессы.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-4xl">Фотографии Инвентаризатора</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Реальные фотографии системы автоматизированной инвентаризации в работе
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {currentImages.map((image, index) => (
              <ImageGridItem key={index} image={image} allImages={currentImages} initialIndex={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-[2.5rem] p-12 md:p-16 border border-gray-100 shadow-xl">
            <Zap className="w-16 h-16 text-orange-500 mx-auto mb-6" />
            <h2 className="mb-6 text-3xl md:text-4xl">Повысьте эффективность склада</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Автоматизированная инвентаризация склада с AI INERU повысит точность и скорость инвентаризации, что в свою очередь ускорит все логистические процессы и повысит общую эффективность работы склада.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-500 text-white rounded-2xl hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 hover:scale-105 font-medium"
              >
                Связаться с нами
              </a>
            </div>
            <div className="mt-6 text-center">
              <a
                href="https://cloud.ine.ru/s/R5Hw56x8BDis23L"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-600 transition-colors inline-flex items-center gap-2 font-medium"
              >
                <Camera className="w-5 h-5" />
                Больше фотографий на облаке
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
