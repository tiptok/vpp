import { createApp,h } from 'vue'
import App from './App.vue'
import {createStore} from 'vuex'

// npm install --save vuex@next
// npm uninstall  --save vuex@next

const store = createStore({
    state(){
        return {
            count:1
        }
    },
    mutations:{
        increment(state){
            state.count++
        },
        incrementN(state,n){
            state.count +=n
        }
    },
    actions:{
        increment(context){
            setTimeout(()=>{
                // state.count++ // 不要对state进行更改操作，应该通过commit交给mutations去处理
                context.commit('increment')
            },2000)
        }
    },
    getters:{
        doubleCount(state){
            return state.count * 2
        }
    }
})

const app = createApp({
    render: ()=>h(App)
})
app.use(store)
app.mount('#app')

