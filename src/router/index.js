import { createRouter, createWebHistory } from "vue-router";
import ProductList from "../pages/ProductList.vue";
import ProductDetails from "../pages/ProductDetails.vue";
import ProductDescription from "../components/ProductDescription.vue";
import ProductComments from "../components/ProductComments.vue";
import About from "../pages/About.vue";
import NotFound from "../pages/NotFound.vue";

const routes = [
  // default page
  { path: "/", component: ProductList },
  // product details page with id param
  {
    path: "/product/:id",
    component: ProductDetails,
    // children for tab changes in the product details page
    children: [
      { path: "", component: ProductDescription },
      { path: "comments", component: ProductComments },
    ],
  },
  // about page
  { path: "/about", component: About },
  // 404 page for not found pages
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // If navigating between product description and comments tab
    if (
      to.path.startsWith("/product/") &&
      from.path.startsWith("/product/") &&
      (to.path.endsWith("/comments") || from.path.endsWith("/comments"))
    ) {
      // Don't scroll here
      return false;
    }

    // Default scroll to top for all other routes
    return { top: 0, behavior: "smooth" };
  },
});
