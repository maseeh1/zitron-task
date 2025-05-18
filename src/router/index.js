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
});
