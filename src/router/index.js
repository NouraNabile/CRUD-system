import { createRouter, createWebHistory } from "vue-router"
//eager loading
// const Home=()=> import( "../views/Home.vue")
//lasy loding
import Product from "../views/Product.vue"
import ProductDetails from "../views/ProductDetails.vue"
import AddProduct from "../views/AddProduct.vue"
import UpdateProduct from "../views/UpdateProduct.vue"
const NotFound = () => import("../views/NotFound.vue")
const Login = () => import("../views/Login.vue")

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: Login,meta: { hideNavBar: true }},
  { path: "/products", component: Product },
  { path: "/products/:id", component: ProductDetails },
  { path: "/addProduct", component: AddProduct },
  { path: "/updateProduct/:id", component: UpdateProduct },
  { path: "/:pathMatch(.*)*", component: NotFound,
    meta:{
        hideNavBar:true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem("token");

  if (to.path !== "/login" && !isLoggedIn) {
    next("/login");
  } else {
    next();
  }
});

export default router