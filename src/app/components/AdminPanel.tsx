import { useState } from 'react';
import { Settings, X, Image as ImageIcon, Save } from 'lucide-react';
import { useImageManagement } from '../contexts/ImageManagementContext';
import { ImageUploader } from './ImageUploader';
import { inventoryImages } from '../pages/inventory-images';

const PAGE_CONFIGS = [
  {
    key: 'inventory',
    title: 'Инвентаризатор',
    description: 'Галерея на странице автоматизированной инвентаризации',
    defaultImages: inventoryImages,
    maxImages: 10
  },
  // Можно добавить другие страницы с галереями
];

export function AdminPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState<string | null>(null);
  const { getImages, updateImages } = useImageManagement();
  const [tempImages, setTempImages] = useState<Array<{ src: string; alt: string }>>([]);

  const handleOpenPage = (pageKey: string) => {
    const pageConfig = PAGE_CONFIGS.find(p => p.key === pageKey);
    if (pageConfig) {
      setSelectedPage(pageKey);
      setTempImages(getImages(pageKey, pageConfig.defaultImages));
    }
  };

  const handleSave = () => {
    if (selectedPage) {
      updateImages(selectedPage, tempImages);
      setSelectedPage(null);
      alert('Изображения сохранены!');
    }
  };

  const handleReset = () => {
    if (selectedPage && confirm('Вы уверены, что хотите вернуть изображения по умолчанию?')) {
      const pageConfig = PAGE_CONFIGS.find(p => p.key === selectedPage);
      if (pageConfig) {
        setTempImages(pageConfig.defaultImages);
        updateImages(selectedPage, []);
      }
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-50"
        aria-label="Открыть админ-панель"
      >
        <Settings className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[200] flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ImageIcon className="w-8 h-8" />
            <div>
              <h2 className="text-2xl font-bold">Управление изображениями</h2>
              <p className="text-orange-100 text-sm">Загружайте и редактируйте фотографии на страницах</p>
            </div>
          </div>
          <button
            onClick={() => {
              setIsOpen(false);
              setSelectedPage(null);
            }}
            className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            aria-label="Закрыть"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {!selectedPage ? (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Выберите страницу для редактирования</h3>
              <div className="grid gap-4">
                {PAGE_CONFIGS.map((page) => {
                  const currentImages = getImages(page.key, page.defaultImages);
                  return (
                    <button
                      key={page.key}
                      onClick={() => handleOpenPage(page.key)}
                      className="bg-gray-50 hover:bg-gray-100 rounded-2xl p-6 text-left transition-colors border-2 border-transparent hover:border-orange-200"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">{page.title}</h4>
                          <p className="text-gray-600 text-sm mb-3">{page.description}</p>
                          <p className="text-sm text-gray-500">
                            Текущее количество изображений: {currentImages.length}
                          </p>
                        </div>
                        <ImageIcon className="w-8 h-8 text-orange-500" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <button
                    onClick={() => setSelectedPage(null)}
                    className="text-orange-500 hover:text-orange-600 text-sm mb-2 inline-flex items-center gap-1"
                  >
                    ← Назад к списку страниц
                  </button>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {PAGE_CONFIGS.find(p => p.key === selectedPage)?.title}
                  </h3>
                </div>
                <button
                  onClick={handleReset}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 text-sm transition-colors"
                >
                  Вернуть по умолчанию
                </button>
              </div>

              <ImageUploader
                images={tempImages}
                onImagesChange={setTempImages}
                maxImages={PAGE_CONFIGS.find(p => p.key === selectedPage)?.maxImages || 10}
              />
            </div>
          )}
        </div>

        {/* Footer */}
        {selectedPage && (
          <div className="border-t border-gray-200 p-6 bg-gray-50 flex gap-3 justify-end">
            <button
              onClick={() => setSelectedPage(null)}
              className="px-6 py-3 text-gray-700 hover:text-gray-900 transition-colors"
            >
              Отмена
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:shadow-lg transition-all flex items-center gap-2"
            >
              <Save className="w-5 h-5" />
              Сохранить изменения
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
