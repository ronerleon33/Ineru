import { useEditMode } from '../contexts/EditModeContext';
import { useRef, useEffect } from 'react';

interface EditableTextProps {
  id: string;
  defaultValue: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  className?: string;
}

export function EditableText({ id, defaultValue, as: Component = 'p', className = '' }: EditableTextProps) {
  const { isEditMode, content, updateContent } = useEditMode();
  const ref = useRef<HTMLElement>(null);

  const value = content[id] || defaultValue;

  useEffect(() => {
    if (ref.current && !content[id]) {
      ref.current.innerText = defaultValue;
    }
  }, [defaultValue, content, id]);

  const handleBlur = () => {
    if (ref.current && isEditMode) {
      updateContent(id, ref.current.innerText);
    }
  };

  const handleInput = () => {
    if (ref.current && isEditMode) {
      updateContent(id, ref.current.innerText);
    }
  };

  return (
    <Component
      ref={ref as any}
      contentEditable={isEditMode}
      suppressContentEditableWarning
      onBlur={handleBlur}
      onInput={handleInput}
      className={`${className} ${isEditMode ? 'outline outline-2 outline-dashed outline-blue-400 bg-blue-50/10 cursor-text' : ''}`}
      style={isEditMode ? { minHeight: '1.5em' } : {}}
    >
      {value}
    </Component>
  );
}
