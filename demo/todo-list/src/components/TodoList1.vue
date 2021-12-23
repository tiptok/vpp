<template>
     <ul>
        <todo-item @delete="handleDelete" v-for="(item, index) in list" :key="index" :index="index" :title="item.title" :del="item.del"></todo-item>
    </ul>
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
    props:['list'],
    methods:{
        handleDelete(val){
            console.log('handle delete',val)
        }
    },
    components:{
        'todo-item':TodoItem
    },
    // setup() {
    //     const item= {
    //        title:'course X',
    //        del:false     
    //     }
    //     return {item}
    // }
}
</script>