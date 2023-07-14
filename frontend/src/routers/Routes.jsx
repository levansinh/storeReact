//page client
import Home from "../pages/client/Home";
import Cart from "../pages/client/Cart"
import Catelog from "../pages/client/Catalog";
import Product from "../pages/client/Product";
import Login from "../pages/client/Login";

// page admin
import AdminLayout from "../layout/AdminLayout";
import Dashboard from "../pages/admin/dashboard";
import Category from "../pages/admin/Category";
import Products from "../pages/admin/Product";
const publicRouters = [
    // client layout 
    { path: '/', component: Home },
    { path: '/cart', component: Cart },
    { path: '/catalog', component: Catelog },
    { path: '/catalog/:slug', component: Product },
    
    // auth layout
    { path: '/auth', component: Login ,layout:null},

    // admin layout
    { path: '/admin', component: Dashboard ,layout:AdminLayout},
    { path: '/admin/category', component: Category ,layout:AdminLayout},
    { path: '/admin/product', component: Products ,layout:AdminLayout},
];

const privateRouters = [];

export { publicRouters, privateRouters };
