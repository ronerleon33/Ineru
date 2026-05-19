import { createContext, useContext, useState, ReactNode } from 'react';

interface EditModeContextType {
  isEditMode: boolean;
  toggleEditMode: () => void;
  content: Record<string, string>;
  updateContent: (key: string, value: string) => void;
}

const EditModeContext = createContext<EditModeContextType | undefined>(undefined);

export function EditModeProvider({ children }: { children: ReactNode }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [content, setContent] = useState<Record<string, string>>(() => {
    const saved = localStorage.getItem('editableContent');
    return saved ? JSON.parse(saved) : {};
  });

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const updateContent = (key: string, value: string) => {
    const newContent = { ...content, [key]: value };
    setContent(newContent);
    localStorage.setItem('editableContent', JSON.stringify(newContent));
  };

  return (
    <EditModeContext.Provider value={{ isEditMode, toggleEditMode, content, updateContent }}>
      {children}
    </EditModeContext.Provider>
  );
}

export function useEditMode() {
  const context = useContext(EditModeContext);
  if (context === undefined) {
    throw new Error('useEditMode must be used within an EditModeProvider');
  }
  return context;
}
