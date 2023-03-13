import { routes, AppRoutes } from "@app/router";

export interface ISidebarItem {
  title: string;
  to: string;
  authOnly?: boolean;
}

export const SidebarItemsList: ISidebarItem[] = [
  {
    title: "sidebar-home",
    to: routes[AppRoutes.MAIN].path!,
  },
  {
    title: "sidebar-about",
    to: routes[AppRoutes.ABOUT].path!,
  },
  {
    title: "sidebar-articles",
    to: routes[AppRoutes.ARTICLES].path!,
    authOnly: true,
  },
  {
    title: "sidebar-profile",
    to: routes[AppRoutes.PROFILE].path!,
    authOnly: true,
  },
];
