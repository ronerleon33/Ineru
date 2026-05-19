import { useEditMode } from '../contexts/EditModeContext';
import { Edit3, Save } from 'lucide-react';

export function EditModeToggle() {
  const { isEditMode, toggleEditMode } = useEditMode();

  return (
    <button
      onClick={toggleEditMode}
      className={`fixed top-24 right-6 z-50 px-4 py-2 rounded-xl shadow-lg transition-all duration-300 flex items-center gap-2 ${
        isEditMode
          ? 'bg-green-500 text-white hover:bg-green-600'
          : 'bg-blue-500 text-white hover:bg-blue-600'
      }`}
      title={isEditMode ? 'Выключить режим редактирования' : 'Включить режим редактирования'}
    >
      {isEditMode ? (
        <>
          <Save className="w-4 h-4" />
          <span className="text-sm font-medium">Сохранено</span>
        </>
      ) : (
        <>
          <Edit3 className="w-4 h-4" />
          <span className="text-sm font-medium">Редактировать</span>
        </>
      )}
    </button>
  );
}
