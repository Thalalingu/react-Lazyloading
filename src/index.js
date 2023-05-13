import React, { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './styles.css';
import Home from './routes/home';
import Post from './routes/post';
import Error from './routes/Error';
import Linkks from './routes/Linkks';
import About from './routes/About';
import Shimmer from './routes/Shimmer';
const Lazycomp = lazy(() => import('./routes/Lazycomp'));

const container = document.getElementById('root');
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: '/post',
    element: <Post />,
  },
  {
    path: '/Linkks',
    element: <Linkks />,
  },
  {
    path: '/About',
    element: <About />,
  },
  {
    path: '/Lazycomp',
    element: (
      <Suspense fallback={<Shimmer />}>
        <Lazycomp />
      </Suspense>
    ),
  },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
