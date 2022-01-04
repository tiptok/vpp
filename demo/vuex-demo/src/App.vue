<template>
<div>
   {{count}}
   <button @click="increment">count++</button>
    <button @click="incrementN(2)">count+N</button>
    <br/>
    <label>Vuex Getters :</label>
    {{this.$store.getters.doubleCount}}
    <br/>
    <label>Vuex Actions:</label>
    <button @click="asyncIncrement">count++</button>
    <br/>
    {{counter}}
</div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    
  },
  computed:{
    count(){
      return this.$store.state.count
    },
    // ...mapGetters([
    //   'doubleCount',
    // ])
    ...mapGetters({
      counter:'doubleCount', // 别名
    })
  },
  methods: {
    increment(){
      this.$store.commit('increment')
    },
    incrementN(n){
      this.$store.commit('incrementN',n)
    },
    asyncIncrement(){
      this.$store.dispatch('increment')
    }
  }
}
</script>

