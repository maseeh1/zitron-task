import { createRouter, createWebHistory } from "vue-router";
import ProductList from "../pages/ProductList.vue";
import ProductDetails from "../pages/ProductDetails.vue";
import ProductDescription from "../components/ProductDescription.vue";
import ProductComments from "../components/ProductComments.vue";
import About from "../pages/About.vue";
import NotFound from "../pages/NotFound.vue";

const routes = [
  { path: "/", component: ProductList },
  {
    path: "/product/:id",
    component: ProductDetails,
    children: [
      { path: "", component: ProductDescription },
      { path: "comments", component: ProductComments },
    ],
  },
  { path: "/about", component: About },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // If navigating between product description and comments tab
    if (
      to.path.startsWith("/products/") &&
      from.path.startsWith("/products/") &&
      (to.path.endsWith("/comments") || from.path.endsWith("/comments"))
    ) {
      // Don't scroll here, we'll handle it in component
      return false;
    }

    // Default scroll to top for all other routes
    return { top: 0, behavior: "smooth" };
  },
});
