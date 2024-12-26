<template>
  <div>
    <h2>Counter One</h2>
    <p>{{ count }}</p>
    <button @click="increment">++</button>
    <button @click="decrease">--</button>
  </div>
</template>

<script>
  export default {
    name: 'CompCouterOne',
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
      count () {
        return this.$store.state.countX
      }
    }
  }
</script>
