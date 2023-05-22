import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.scss';
import Colors from './pages/Colors';
import Contacts from './pages/Contacts';
import Examples from './pages/Examples';
import FrontPage from './pages/FrontPage';
import Price from './pages/Price';
import Root from './routes/root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <FrontPage />
      },
      {
        path: 'contacts',
        element: <Contacts />
      },
      {
        path: 'price',
        element: <Price />
      },
      {
        path: 'colors',
        element: <Colors />
      },
      {
        path: 'examples',
        element: <Examples />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
