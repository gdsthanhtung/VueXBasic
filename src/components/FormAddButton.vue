<template>
    <div class="add-task">
      <button v-show="!isShowForm" v-on:click="handleShowForm()" type="button" class="btn btn-info btn-block">Add Task</button>
    </div>
</template>

<script>
export default {
  name: 'FormAddButton',
  props: {
    isShowForm: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      //title: ''
    };
  },
  methods: {
    handleShowForm() {
      this.$emit('handleShowForm');
    }
  }
};
</script>

<style></style>
