<template>
  <b-col cols="12">
    <div class="form-group">
      <div class="dropdown">
        <b-dropdown id="dropdown-1" text="Sort by" class="">
          <b-dropdown-item v-on:click="handleSort('name', 'asc')">Name ASC</b-dropdown-item>
          <b-dropdown-item v-on:click="handleSort('name', 'desc')">Name DESC</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item v-on:click="handleSort('level', 'asc')">Level ASC</b-dropdown-item>
          <b-dropdown-item v-on:click="handleSort('level', 'desc')">Level DESC</b-dropdown-item>
        </b-dropdown>
        <span class="badge badge-success badge-medium">{{ orderSortText }}</span>
      </div>
    </div>
  </b-col>
</template>

<script>
export default {
  name: 'ControlSort',
  props: {
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
    handleSort(orderBy, orderDir) {
      this.$emit('handleOrderSort', { by: orderBy, dir: orderDir });
    }
  },
  computed: {
    orderSortText() {
      return `${this.orderSort.by.toUpperCase()} - ${this.orderSort.dir.toUpperCase()}`;
    }
  }
}
</script>

<style></style>
