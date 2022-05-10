import React from "react";
const link = "./Display/general/all-screens";

const allPages = {
  general: {
    Home: React.lazy(() => import(`${link}/Home`)),
    ProductListPage: React.lazy(() => import(`${link}/ProductListPage`)),
    PlayerPage: React.lazy(() => import(`${link}/PlayerPage`)),
  },
};

const pubRoutes = [
  { path: "/", exact: true, name: "Home", element: allPages.general.Home },
  // {path: "/:slug", name: "Product name", element: allPages.general.ProductListPage },
  {
    path: "/player-page",
    name: "Player page",
    element: allPages.general.PlayerPage,
  },
];

const privRoutes = {};

export { privRoutes, pubRoutes };
