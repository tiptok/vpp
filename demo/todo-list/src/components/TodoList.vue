<template>
     <ul>
        <slot></slot>
    </ul>
</template>

<script>

export default {
    methods:{
        handleDelete(val){
            console.log('handle delete',val)
        }
    },
    data: function() {
      return {

      }
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