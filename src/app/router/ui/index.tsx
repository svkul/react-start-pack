import { FC, Suspense } from "react";
import { Routes, Route, RouteProps } from "react-router-dom";

import { Home, About, Error, Profile } from "@pages";
import { Loader } from "@shared";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  PROFILE = "profile",
  ATHER = "*",
}

export const routes: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: "/",
    element: <Home />,
  },
  [AppRoutes.ABOUT]: {
    path: "/about",
    element: <About />,
  },
  [AppRoutes.PROFILE]: {
    path: "/profile",
    element: <Profile />,
  },
  [AppRoutes.ATHER]: {
    path: "*",
    element: <Error />,
  },
};

export const AppRouter: FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {Object.entries(routes).map(([rout, routData]) => (
          <Route key={rout} path={routData.path} element={routData.element} />
        ))}
      </Routes>
    </Suspense>
  );
};
