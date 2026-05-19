import { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { ImageZoom } from './ImageZoom';

interface ImageGalleryProps {
  images: Array<{
    src: string;
    alt: string;
  }>;
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  if (!images || images.length === 0) {
    return (
      <div className="bg-gray-100 rounded-2xl p-8 text-center text-gray-500">
        Изображения не загружены
      </div>
    );
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentImage = images[currentIndex];

  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-500 rounded-[2.5rem] blur-3xl opacity-20"></div>
        <div className="relative bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-2xl">
          <div className="relative overflow-hidden rounded-3xl bg-gray-50 group">
            {currentImage && currentImage.src ? (
              <>
                <img
                  src={currentImage.src}
                  alt={currentImage.alt}
                  className="w-full h-auto max-h-[500px] object-contain cursor-pointer"
                  onClick={() => setIsZoomed(true)}
                  onError={(e) => {
                    console.error('Ошибка загрузки изображения:', currentImage.src);
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23ddd" width="400" height="300"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EИзображение не загрузилось%3C/text%3E%3C/svg%3E';
                  }}
                />
                <button
                  onClick={() => setIsZoomed(true)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Увеличить изображение"
                >
                  <Maximize2 className="w-5 h-5 text-white" />
                </button>
              </>
            ) : (
              <div className="w-full h-80 flex items-center justify-center bg-gray-200 text-gray-500">
                Нет изображения
              </div>
            )}

          {images.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all hover:scale-110"
                aria-label="Предыдущее изображение"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all hover:scale-110"
                aria-label="Следующее изображение"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-white w-8'
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Перейти к изображению ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {images.length > 1 && (
          <div className="mt-4 text-center text-sm text-gray-500">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>
    </div>

    {isZoomed && (
      <ImageZoom
        images={images}
        currentIndex={currentIndex}
        onClose={() => setIsZoomed(false)}
        onPrevious={goToPrevious}
        onNext={goToNext}
      />
    )}
    </>
  );
}
