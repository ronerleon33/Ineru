import { RouterProvider } from 'react-router';
import { router } from './routes';
import { EditModeProvider } from './contexts/EditModeContext';
import { ImageManagementProvider } from './contexts/ImageManagementContext';

export default function App() {
  return (
    <ImageManagementProvider>
      <EditModeProvider>
        <RouterProvider router={router} />
      </EditModeProvider>
    </ImageManagementProvider>
  );
}