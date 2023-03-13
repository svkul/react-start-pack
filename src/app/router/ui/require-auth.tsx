import { FC } from "react";
import { useAppSelector } from "@app/hooks";
import { getUserAuthData } from "@entities";
import { Navigate, useLocation } from "react-router-dom";
import { AppRoutes, routes } from ".";

interface IRequireAuthProps {
  children: JSX.Element;
}

export const RequireAuth: FC<IRequireAuthProps> = ({ children }) => {
  const location = useLocation();
  const isAuth = useAppSelector(getUserAuthData);

  if (!isAuth) {
    return (
      <Navigate
        to={routes[AppRoutes.MAIN].path!}
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
};
