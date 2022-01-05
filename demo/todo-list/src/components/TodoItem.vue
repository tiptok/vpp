<template>
     <li>
        <span class="red" v-if="!del">{{title}}</span>
        <span v-else style="text-decoration: line-through;">{{title}}</span>
        <button v-show="!del" @click="handleClick">删除</button>
    </li>
</template>

<script>
export default {
    props:{
      title: String,
      del: {
          type: Boolean,
          default: false,
      },
    },
    data: function() {
      return {
          value: Math.random()
      }
    },
    methods: {
        handleClick(){
            console.log('点击删除按钮')
            if (this.del){
                //this.del = false
            }
            this.$emit('delete',this.title) //子组件通过$emit让父组件可以监听到事件
        }
    }
}
</script>

<style scoped>
.red{
    color: red;
}
</style>