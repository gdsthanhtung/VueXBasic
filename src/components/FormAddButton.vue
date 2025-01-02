<template>
    <div class="add-task">
      <button v-show="!isShowForm" v-on:click="handleShowForm()" type="button" class="btn btn-info btn-block">Add Task</button>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'FormAddButton',
  data() {
    return {
      //title: ''
    };
  },
  computed: {
    ...mapState(['isShowForm'])
  },
  methods: {
    ...mapActions(['actHandleShowForm']),
    handleShowForm() {
      this.actHandleShowForm();
    }
  }
};
</script>

<style></style>
