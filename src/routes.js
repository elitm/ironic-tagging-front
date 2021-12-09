import Main from "./pages/MainPage";
import NotFound from "./pages/NotFoundPage";

const routes = [
  {
    path: "/",
    name: "main",
    component: () => import("./pages/MainPage")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./pages/RegisterPage")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./pages/LoginPage")
  },
  {
    path: "/search",
    name: "search",
    component: () => import("./pages/SearchPage")
  },
  {
    path: "/about",
    name: "about",
    component: () => import("./pages/AboutPage")
  },
  {
    path: "/player/:id",
    name: "player",
    component: () => import("./pages/PlayerPage")
  },
  {
    path:"/favoriteGames",
    name: "favoriteGames",
    component: () => import("./pages/FavoriteGamesPage")
  },
  {
    path:"/games",
    name: "games",
    component: () => import("./pages/GamesPage")
  },
  {
    path:"/team/:id",
    name: "team",
    component: () => import("./pages/TeamPage")
  },
  // {
  //   path:"/search/:name",
  //   name:"search",
  //   component: () => import("./pages/SearchPage")
  // },
  {
    path:"/manager",
    name: "manager",
    component: () => import("./pages/ManagerPage")
  },
  {
    path:"/favoritePlayers",
    name: "favoritePlayers",
    component: () => import("./pages/FavoritePlayersPage")
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound
  }
];

export default routes;
