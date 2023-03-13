import { FC, Suspense, memo } from "react";
import { Routes, Route, RouteProps } from "react-router-dom";

import { Home, About, Error, Profile } from "@pages";
import { Loader } from "@shared";
import { RequireAuth } from "./require-auth";

type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
  element: JSX.Element;
};

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  PROFILE = "profile",
  ATHER = "*",
}

export const routes: Record<AppRoutes, AppRoutesProps> = {
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
    authOnly: true,
  },
  [AppRoutes.ATHER]: {
    path: "*",
    element: <Error />,
  },
};

export const AppRouter: FC = memo(() => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {Object.values(routes).map(rout => (
          <Route
            key={rout.path}
            path={rout.path}
            element={
              rout.authOnly ? (
                <RequireAuth>{rout.element}</RequireAuth>
              ) : (
                rout.element
              )
            }
          />
        ))}
      </Routes>
    </Suspense>
  );
});
