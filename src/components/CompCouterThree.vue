<template>
  <div>
    <h2>Counter Three</h2>
    <p>{{ countX }}</p>
    <button @click="plus">Plus</button>
    <button @click="minus">Minus</button>
    <input type="text" v-model="value">
    <button @click="plusvalue">Minus</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
  export default {
    name: 'CompCouterThree',
    data() {
      return {
        //count: 0
        value: 0
      }
    },
    computed: {
      ...mapGetters([
        'countX'
      ]),
    },
    methods: {
      plus() {
        this.$store.commit('increment')
      },
      minus() {
        this.$store.commit('decrement')
      },
      plusvalue() {
        this.$store.commit('incrementByValue', this.value)
      }
    }
  }
</script>
