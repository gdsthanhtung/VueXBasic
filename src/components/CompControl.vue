<template>
  <b-col cols="12" lg="6">
    <b-row>
      <control-sort />
      <control-search />
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
  data() {
    return {
      //text: ''
    }
  }
}
</script>

<style></style>
