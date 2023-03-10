import { FC, Suspense, memo, useMemo } from "react";
import { Routes, Route, RouteProps } from "react-router-dom";

import { Home, About, Error, Profile } from "@pages";
import { Loader } from "@shared";
import { useAppSelector } from "@app/hooks";
import { getUserAuthData } from "@entities";

type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
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
  const isAuth = useAppSelector(getUserAuthData);

  const availibleRoutes = useMemo(() => {
    return Object.values(routes).filter(route => {
      if (route.authOnly && !isAuth) {
        return false;
      }

      return true;
    });
  }, [isAuth]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {Object.values(availibleRoutes).map(rout => (
          <Route key={rout.path} path={rout.path} element={rout.element} />
        ))}
      </Routes>
    </Suspense>
  );
});
