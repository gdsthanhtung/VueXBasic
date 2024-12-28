<template>
  <div>
    <h2>Counter Three</h2>
    <p>{{ countX }}</p>
    <button @click="plus">Plus</button>
    <button @click="minus">Minus</button>
    <input type="text" v-model="value">
    <button @click="plusvalue">plusvalue</button>
    <hr>
    <button @click="plusAsync">Plus</button>
    <button @click="minusAsync">Minus</button>
    <input type="text" v-model="value">
    <button @click="plusvalueAsync">plusvalueAsync</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { mapActions, mapMutations } from 'vuex/dist/vuex.common.js';
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
      ...mapMutations([
        'increment',
      ]), // Lay nhanh cac mutations
      plus() {
        //this.$store.commit('increment')
        this.increment()
      },
      minus() {
        this.$store.commit('decrement')
      },
      plusvalue() {
        this.$store.commit('incrementByValue', this.value)
      },
      //================================================================
      plusAsync() {
        this.$store.dispatch('incrementAsync')
      },
      minusAsync() {
        let obj = {
          number: this.value,
          time: 2000
        }
        this.$store.dispatch('decrementAsync', obj)
      },
      //
      // ...mapActions([
      //   'incrementByValueAsync'
      // ]),
      ...mapActions({
        'ABC': 'incrementByValueAsync' // Rename function, mapMutations cung co the dung nhu the nay
      }),
      plusvalueAsync() {
        ///this.$store.dispatch('incrementByValueAsync', this.value)
        let obj = {
          number: this.value,
          time: 2000
        }
        //this.incrementByValueAsync(obj);
        this.ABC(obj);
      }
    }
  }
</script>
