<template>
  <div>
    <h2>Counter Two</h2>
    <p>{{ count }}</p>
    <button @click="increment">++</button>
    <button @click="decrease">--</button>
  </div>
</template>

<script>
  export default {
    name: 'CompCouterTwo',
    data() {
      return {
        //count: 0
      }
    },
    methods: {
      increment() {
        this.count++
      },
      decrease() {
        this.count--
      }
    },
    computed: {
      count: {
        get(){
          return this.$store.state.countX;
        },
        set(value){
          console.log('value', value);
          this.$store.state.countX = value;
        }
      }
    }
  }
</script>
