<template>
  <div class="card card-success">
    <div class="card-header">List Task</div>
    <table class="table table-hover ">
      <thead>
        <tr>
          <th style="width: 10%" class="text-center">#</th>
          <th>Task</th>
          <th style="width: 20%" class="text-center">Level</th>
          <th style="width: 160px">Action</th>
        </tr>
      </thead>

      <tbody>
        <todo-list-item
        v-for="(task, index) in listTask"
        v-bind:key="task.id"
        v-bind:task="task"
        v-bind:index="index+1"
        v-on:handleAction="handleAction" />
      </tbody>
    </table>
  </div>
</template>

<script>
import TodoListItem from './TodoListItem.vue'
export default {
  name: 'TodoListTable',
  components: {
    TodoListItem
  },
  props: {
    listTask: {
      type: Array,
      default: []
    }
  },
  methods: {
    handleAction(data) {
      this.$emit('handleAction', data);
    }
  },
  data() {
    return {
      //text: 'List Task'
    }
  }
}
</script>

<style></style>
