import { createRouter, createWebHistory } from 'vue-router'
import Home from '@views/Home.vue';
import Categories from '@views/Categories.vue';
import Product from '@views/Product/Product.vue';
import Contact from '@views/Contact/Contact.vue';
import Cart from '@views/Cart/CartPage.vue';
import Checkout from '@views/Checkout/Checkout.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/categories',
    name: 'categories',
    component: Categories,
  },
  {
    path: '/catalog/:id',
    name: 'product',
    component: Product,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: Checkout,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
