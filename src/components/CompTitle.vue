<template>
  <div class="page-header">
    <h1>Project 01 - ToDo List <small>VueJs 000</small></h1>
    <hr class="my-4">{{ countX }}
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'CompTitle',
  data() {
    return {
      //title: ''
    };
  },
  computed: {
    ...mapState(['countX'])
  }
};
</script>

<style></style>
