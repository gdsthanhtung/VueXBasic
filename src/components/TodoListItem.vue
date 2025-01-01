<template>
  <tr>
    <td class="text-center">{{ index }}</td>
    <td>{{ task.name }}</td>
    <td class="text-center"><span :class="['badge', level.class]">{{ level.text }}</span></td>
    <td>
      <button type="button" class="btn btn-warning" v-on:click="handleAction('edit',task)">Edit</button>
      <button type="button" class="btn btn-danger" v-on:click="handleAction('delete',task)">Delete</button>
    </td>
  </tr>
</template>

<script>
import listLevel from '../mockdatas/listLevel';
export default {
  name: 'TodoListItem',
  props: {
    task: {
      type: Object,
      default: null
    },
    index: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      //text: 'List Task'
    }
  },
  methods: {
    handleAction(action, data) {
      if(action === 'delete' && !confirm('Do you want to delete this task?')) {
        return;
      }
      this.$emit('handleAction', {action, data});
    }
  },
  computed: {
    level() {
      const level = listLevel.find(level => level.value === this.task.level);
      return level ? level : listLevel.find(level => level.value === 99);
    }
  }
}
</script>

<style></style>
