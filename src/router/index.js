import { createRouter, createWebHashHistory} from "vue-router";
// import Cookies from 'js-cookie'

// const BpLogin = () => import("../components/HelloWorld")
const login = () => import("../components/ChatLogin.vue")
const chatSmart = () => import("../components/ChatSmart.vue")

const routes = [
    // { path: "/", redirect: "" },
    {
        path: "",
        name: "Login",
        component: login,
        meta:{auth:true,keepAlive: false},
    },
    {
        path: "/chatSmart",
        name: "ChatSmart",
        component: chatSmart,
        meta:{auth:true,keepAlive: false},
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})


router.beforeEach((to, from, next) => {
    // isAuthenticated
    if (to.name !== 'Login') next({ name: 'Login' })
    else next()
})