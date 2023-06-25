import {createRouter, createWebHashHistory} from 'vue-router'
import BeerIndex from "../components/BeerIndex.vue";
import BeerItem from "../components/BeerItem.vue";
import Error404 from "../components/Error404.vue";

const routes = [
    {
        path: "/:pathMatch(.*)*",
        name: "404",
        component: Error404,
    },
    {
        path: '/',
        name: 'Beers',
        component: BeerIndex,
    },
    {
        path: '/beers/:id',
        name: 'Beer',
        component: BeerItem
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;
