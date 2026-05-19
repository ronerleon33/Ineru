import { useState } from 'react';
import { Upload, X, Image as ImageIcon } from 'lucide-react';

interface ImageUploaderProps {
  images: Array<{ src: string; alt: string }>;
  onImagesChange: (images: Array<{ src: string; alt: string }>) => void;
  maxImages?: number;
}

export function ImageUploader({ images, onImagesChange, maxImages = 10 }: ImageUploaderProps) {
  const [dragActive, setDragActive] = useState(false);

  const handleFileInput = async (files: FileList | null) => {
    if (!files) return;

    const newImages: Array<{ src: string; alt: string }> = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (!file.type.startsWith('image/')) continue;

      const reader = new FileReader();
      const result = await new Promise<string>((resolve) => {
        reader.onload = (e) => resolve(e.target?.result as string);
        reader.readAsDataURL(file);
      });

      newImages.push({
        src: result,
        alt: file.name.replace(/\.[^/.]+$/, '')
      });
    }

    onImagesChange([...images, ...newImages].slice(0, maxImages));
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    handleFileInput(e.dataTransfer.files);
  };

  const removeImage = (index: number) => {
    onImagesChange(images.filter((_, i) => i !== index));
  };

  const updateAlt = (index: number, alt: string) => {
    const updated = [...images];
    updated[index] = { ...updated[index], alt };
    onImagesChange(updated);
  };

  return (
    <div className="space-y-4">
      <div
        className={`border-2 border-dashed rounded-2xl p-8 text-center transition-colors ${
          dragActive
            ? 'border-orange-500 bg-orange-50'
            : 'border-gray-300 hover:border-orange-400'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={(e) => handleFileInput(e.target.files)}
          className="hidden"
          id="file-upload"
        />
        <label htmlFor="file-upload" className="cursor-pointer">
          <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 mb-2">
            Перетащите изображения сюда или нажмите для выбора
          </p>
          <p className="text-sm text-gray-400">
            Поддерживаются JPG, PNG, GIF (максимум {maxImages} изображений)
          </p>
        </label>
      </div>

      {images.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {images.map((image, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-4 space-y-3">
              <div className="relative group">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 object-contain rounded-lg bg-white"
                />
                <button
                  onClick={() => removeImage(index)}
                  className="absolute top-2 right-2 w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Удалить изображение"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <input
                type="text"
                value={image.alt}
                onChange={(e) => updateAlt(index, e.target.value)}
                placeholder="Описание изображения"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
