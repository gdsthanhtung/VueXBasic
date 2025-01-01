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
export default {
  name: 'ControlSearch',
  props: {
    strSearch: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      //text: ''
    }
  },
  methods: {
    handleStrSearch(e) {
      this.$emit('handleStrSearch', e.target.value);
    },
    handleClearSearch() {
      this.$emit('handleStrSearch', '');
    }
  }
}
</script>

<style></style>
