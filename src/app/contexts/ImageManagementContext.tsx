import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface ImageItem {
  src: string;
  alt: string;
}

interface PageImages {
  [pageKey: string]: ImageItem[];
}

interface ImageManagementContextType {
  images: PageImages;
  updateImages: (pageKey: string, images: ImageItem[]) => void;
  getImages: (pageKey: string, defaultImages: ImageItem[]) => ImageItem[];
}

const ImageManagementContext = createContext<ImageManagementContextType | undefined>(undefined);

export function ImageManagementProvider({ children }: { children: ReactNode }) {
  const [images, setImages] = useState<PageImages>(() => {
    const saved = localStorage.getItem('managedImages');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('managedImages', JSON.stringify(images));
  }, [images]);

  const updateImages = (pageKey: string, newImages: ImageItem[]) => {
    setImages(prev => ({
      ...prev,
      [pageKey]: newImages
    }));
  };

  const getImages = (pageKey: string, defaultImages: ImageItem[]): ImageItem[] => {
    return images[pageKey] && images[pageKey].length > 0 ? images[pageKey] : defaultImages;
  };

  return (
    <ImageManagementContext.Provider value={{ images, updateImages, getImages }}>
      {children}
    </ImageManagementContext.Provider>
  );
}

export function useImageManagement() {
  const context = useContext(ImageManagementContext);
  if (!context) {
    throw new Error('useImageManagement must be used within ImageManagementProvider');
  }
  return context;
}
