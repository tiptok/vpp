<template>
  <div>
    <p>props.info: {{ info }}</p>
    <p>props.name: {{ name }}</p>
    <p>props.list: {{ list }}</p>
    <p>data.a: {{ a }}</p>
    <p>
      <button @click="handleBChange">change data.b</button>
    </p>
  </div>
</template>

<script>
export default {
    name:"pad",
    props:{
        info:Object,
        name:string,
        list:Array
    },
    data(){
        return {
            a: "hello",
            b: "world"
        }
    },
    methods: {
        handleBChange(){
            this.b ="vue"+Date.now()
        }
    },
}
</script>