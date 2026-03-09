import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layout/root-layout';
import NotFound from './pages/NotFound';
import HomePage from './pages/Home';
import CompoundPage from './pages/Compound';
import SRPPage from './pages/SRP';
import ContainerPage from './pages/Container';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'compound',
        element: <CompoundPage />,
      },
      {
        path: 'srp',
        element: <SRPPage />,
      },
      {
        path: 'container',
        element: <ContainerPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;