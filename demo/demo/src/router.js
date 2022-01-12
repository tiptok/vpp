
import {createRouter, createWebHistory } from "vue-router"
import Home from "./views/Home.vue"

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:"/",
            name:"home",
            component:Home
        },
        {
            path:"/1.4",
            name:"如何触发组件的更新",
            component:() =>import("./views/1.4")
        }
    ]
})

export default router