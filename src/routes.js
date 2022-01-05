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
    path: "/politician/:category/:name",
    name: "politician",
    component: () => import("./pages/PoliticianPage")
  },
  {
    path: "/posts/:id",
    name: "posts",
    component: () => import("./pages/PostPage")
  },
  {
    path: "/categories/:name",
    name: "categories",
    component: () => import("./pages/CategoriesPage"),
    props: true
  },


  {
    path: "*",
    name: "notFound",
    component: NotFound
  }
];

export default routes;
