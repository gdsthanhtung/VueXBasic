<template>
  <div>
    <h2>Counter Two</h2>
    <p>{{ count }} | {{ countDouble }} | {{ valueX }}</p>
    <button @click="increment">++</button>
    <button @click="decrease">--</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
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
      ...mapGetters([
        'countDouble' // Lay nhanh gia tri khong can dung bien this.$store.getters.countDouble
      ]),
      ...mapState([
        'valueX' // Lay nhanh gia tri khong can khai bao trong getters
      ]),
      count: {
        get(){
          return this.$store.state.countX;
        },
        set(value){
          this.$store.state.countX = value; // Khong nen dung cach nay
        }
      }
    },
    mounted(){
      console.log(this.$store.getters.countDouble);
    }
  }
</script>
