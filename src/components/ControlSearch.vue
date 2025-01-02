<template>
  <b-col cols="12">
    <div class="input-group">
      <input type="text" class="form-control" placeholder="Search for..."
        v-bind:value="strSearch"
        v-on:input="handleStrSearch($event)"
      />

      <span class="input-group-append">
        <button v-on:click="handleClearSearch()" class="btn btn-info" type="button">Clear!</button>
      </span>
    </div>
  </b-col>

</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'ControlSearch',
  data() {
    return {
      //text: ''
    }
  },
  computed: {
    ...mapState(['strSearch'])
  },
  methods: {
    ...mapActions(['actHandleSearch']),
    handleStrSearch(e) {
      this.actHandleSearch(e.target.value);
    },
    handleClearSearch() {
      this.actHandleSearch('');
    }
  }
}
</script>

<style></style>
