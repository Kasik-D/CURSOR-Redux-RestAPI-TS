import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import { AnimeDetails, Home, NotFoundPage, Root } from 'pages/index';
// import { fetchGenres } from '@/store/slices/home.slicer';

// import { useAppDispatch } from '@/store/store';

export const RoutersProvider = () => {
  // const dispatch = useAppDispatch();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        {/* <Route index element={<Home />} loader={() => dispatch(fetchGenres())} />  */}
        <Route path="anime" element={<AnimeDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
};
