import { createApp,h } from 'vue'
import App from './App.vue'
// import TodoList from './components/TodoList.vue'

// Vue.component('todo-list', TodoList)

const app = createApp({render: ()=>h(App)})
app.mount('#app')
