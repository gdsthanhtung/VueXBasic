<template>
  <b-col cols="12" lg="6">
    <b-row>
      <control-sort
        v-bind:orderSort="orderSort"
        v-on:handleOrderSort="handleOrderSort"
      />

      <control-search
        v-bind:strSearch="strSearch"
        v-on:handleStrSearch="handleStrSearch"
      />
    </b-row>

  </b-col>

</template>

<script>
import ControlSort from './ControlSort.vue'
import ControlSearch from './ControlSearch.vue'
export default {
  name: 'CompControl',
  components: {
    ControlSort,
    ControlSearch
  },
  props: {
    strSearch: {
      type: String,
      default: ''
    },
    orderSort: {
     type: Object,
     default() {
       return {
         by: 'name',
         dir: 'asc'
       };
     }
    }
  },
  data() {
    return {
      //text: ''
    }
  },
  methods: {
    handleStrSearch(data) {
      this.$emit('handleStrSearch', data);
    },
    handleOrderSort(data) {
      this.$emit('handleOrderSort', data);
    }
  }
}
</script>

<style></style>
