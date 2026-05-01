import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout/Layout.jsx";
import Loader from "./components/Loader/Loader.jsx";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage.jsx"));
const CamperDetailsPage = lazy(() =>
  import("./pages/CamperDetailsPage/CamperDetailsPage.jsx")
);
const CamperFeatures = lazy(() =>
  import("./pages/CamperFeatures/CamperFeatures.jsx")
);
const CamperReviews = lazy(() =>
  import("./pages/CamperReviews/CamperReviews.jsx")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage.jsx"));

export default function App() {
  return (
    <Suspense fallback={<Loader fullscreen />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="catalog/:id" element={<CamperDetailsPage />}>
            <Route index element={<Navigate to="features" replace />} />
            <Route path="features" element={<CamperFeatures />} />
            <Route path="reviews" element={<CamperReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
