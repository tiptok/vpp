<template>
  <div id ="app">
    <input v-model="message"/>
    <input :value="message" @input="handleChange"/>
    <span>hello {{message}} {{list.length}}</span>
    <h2>1.直接遍历</h2>
    <li v-for="item in list" :key="item">{{item.title}}</li>

    <h2>2.组件遍历</h2>
    <todo-item v-for="item in list" :key="item" :title="item.title" :del="item.del"></todo-item>

    <h2>3.父级组件遍历</h2> 
    <todo-list>
      <todo-item @delete="handleDelete" v-for="(item, index) in list" :key="index" :index="index" :title="item.title" :del="item.del">
      </todo-item>
    </todo-list>
    
    <h2>4.父级组件</h2> 
    <todo-list-1 v-bind:list="list"></todo-list-1>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TodoList from './components/TodoList.vue'
import TodoItem from './components/TodoItem.vue'

import TodoList1 from './components/TodoList1.vue'

export default {
  name: 'app',
  components: {
    'todo-list':TodoList,
    'todo-item':TodoItem,
    'todo-list-1':TodoList1,
  },
  data(){
     return{
          message: ' 😁 vue',
          list :[
              {
                  title:'course 1',
                  del : false
              },
              {
                  title:'course 2',
                  del : true
              },
              {
                  title:'course 3',
                  del : false
              },
              {
                  title:'course 4',
                  del : false
              }
          ],
      }
  },
  methods: {
    handleChange(e){
      this.message = e.target.value
    },
    handleDelete(val){
      console.log('delete',val)
    }
  },
}
</script>
