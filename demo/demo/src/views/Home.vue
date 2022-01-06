<template>
    <div id="nav">
        <span v-for="{ key, name } in list" :key="key"  style="padding: 10px 10px">
            <router-link :to="`/${key}`"> {{key}} {{name}} </router-link>
        </span>
    </div>
</template>

<script>
export default {
  name: "Home",
  data(){
      return{
          list:[
            {
              key:"1.4",
              name:"如何触发组件的更新"
            },
           {
                key: "1.5",
                name: "合理应用计算属性和侦听器"
            }
        ]
      }
  }
}
</script>