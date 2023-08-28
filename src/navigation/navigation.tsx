import { AnimeDetails, Home, NotFoundPage, Root } from 'pages/index';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

export const RoutersProvider = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="anime" element={<AnimeDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
};
