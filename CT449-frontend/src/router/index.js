
import Pokemon from "@/views/Pokemon.vue";
import { createWebHistory, createRouter } from "vue-router";

// import { authenticationService } from '@/services';
// import { Role } from '@/router';
// import AdminPage from '@/views/AdminPage.vue';
// import LoginPage from '@/views/LoginView.vue';
const routes = [
    // {
    //     path: "/",
    //     name: "LoginPage",
    //     component: LoginPage,
    // },
    {
        path: "/",
        name: "pokemon",
        component: Pokemon,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
    // {
    //     path: '/admin',
    //     component: AdminPage,
    //     meta: { authorize: [Role.Admin] }
    // },
    {
        path: "/pokemons/:id",
        name: "pokemon.edit",
        component: () => import("@/views/PokemonEdit.vue"),
        props: true // Truyền các biến trong $route.params vào làm props
    },
    {
        path: "/pokemons/add-pokemon",
        name: "pokemon.add",
        component: () => import("@/views/PokemonCreate.vue"),
    },
]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;


