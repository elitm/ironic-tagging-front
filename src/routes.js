//import Main from "./pages/MainPage";
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
  // {
  //   path:"/search/:name",
  //   name:"search",
  //   component: () => import("./pages/SearchPage")
  // },
  {
    path: "*",
    name: "notFound",
    component: NotFound
  }
];

export default routes;
