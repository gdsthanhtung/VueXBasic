<template>
  <b-col cols="12" lg="6">
    <!-- ADD : START -->
    <form-add-button v-on:handleShowForm="handleShowForm" />
    <!-- ADD : END -->

    <form v-if="isShowForm" method="POST" class="form-inline justify-content-between">
      <div class="form-group">
        <label class="sr-only" for="">label</label>
        <input type="text" class="form-control" placeholder="Task Name" v-model="taskName" />
      </div>
      <div class="form-group">
        <label class="sr-only" for="">label</label>
        <b-form-select v-model="selectedLevel" :options="levels"></b-form-select>
      </div>

      <button v-on:click="handleAddTask()" type="button" class="btn btn-primary">{{ saveButtonText }}</button>
      <button v-on:click="handleShowForm()" type="button" class="btn btn-secondary">Cancel</button>
    </form>
  </b-col>

</template>

<script>
import FormAddButton from './FormAddButton.vue';
import listLevel from '../mockdatas/listLevel';
import { mapState, mapActions } from 'vuex';
export default {
  name: 'CompForm',
  components: {
    FormAddButton
  },
  data() {
    return {
      selectedLevel: null, // https://bootstrap-vue.org/docs/components/form-select#form-select
      listLevel,
      taskName: '',
      saveButtonText: 'Create'
    };
  },
  watch: {
    taskSelected(newVal) {
      if (newVal) {
        this.selectedLevel = newVal.level;
        this.taskName = newVal.name;
        this.saveButtonText = 'Update';
      } else {
        this.saveButtonText = 'Create';
      }
    }
  },
  methods: {
    ...mapActions(['actHandleShowForm', 'actHandleAddTask', 'actHandleUpdateTask']),
    handleShowForm() {
      this.resetForm();
      this.actHandleShowForm();
    },
    resetForm() {
      this.selectedLevel = null;
      this.taskName = '';
    },
    handleAddTask() {
      const data = {
        id: (this.taskSelected) ? this.taskSelected.id : new Date().toISOString().replace(/[-:.TZ]/g, ''),
        name: this.taskName,
        level: this.selectedLevel
      };

      this.taskSelected ? this.actHandleUpdateTask(data) : this.actHandleAddTask(data);
      this.handleShowForm();
    }
  },
  computed: {
    ...mapState(['isShowForm', 'taskSelected']),
    levels() {
      this.listLevel = this.listLevel.filter(level => level.value !== 99);
      return [{ value: null, text: 'Select a Level' }, ...this.listLevel];
    }
  }
};
</script>

<style></style>
