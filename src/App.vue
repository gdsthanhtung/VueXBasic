<template>
  <div id="app">
    <b-container>
      <comp-title />

      <b-row>
        <comp-control
          v-bind:strSearch="strSearch"
          v-on:handleStrSearch="handleStrSearch"
          v-bind:orderSort="orderSort"
          v-on:handleOrderSort="handleOrderSort"
        />

        <comp-form
          v-bind:isShowForm="isShowForm"
          v-on:handleShowForm="handleShowForm"
          v-on:handleAddTask="handleAddTask"
          v-bind:taskSelected="taskSelected"
          v-on:handleUpdateTask="handleUpdateTask"
        />
      </b-row>

      <todo-list-table
        v-bind:listTask="listTaskFiltered"
        v-on:handleAction="handleAction"
      />

    </b-container>
  </div>
</template>

<script>
import TodoListTable from './components/TodoListTable.vue'
import CompTitle from './components/CompTitle.vue'
import CompControl from './components/CompControl.vue'
import CompForm from './components/CompForm.vue'

import listTask from './mockdatas/listTask'

export default {
  name: 'app',
  components: {
    TodoListTable,
    CompTitle,
    CompControl,
    CompForm
  },
  data() {
    return {
      listTask,
      isShowForm: false,
      strSearch: '',
      orderSort: {
        by: 'name',
        dir: 'asc'
      },
      taskSelected: null
    }
  },
  methods: {
    handleShowForm() {
      if (!this.isShowForm) {
        this.resetTaskSelected();
      }
      this.isShowForm = !this.isShowForm;
    },
    handleStrSearch(data) {
      this.strSearch = data;
    },
    handleOrderSort(data) {
      this.orderSort = data;
    },
    handleAddTask(newTask) {
      this.listTask.push(newTask);
    },
    handleUpdateTask(newTask) {
      this.listTask = this.listTask.map(task => {
        if (task.id === newTask.id) {
          return newTask;
        }
        return task;
      });
    },
    handleAction({ action, data }) {
      if (action === 'delete') {
        this.handleDeleteTask(data.id);
      }
      if (action === 'edit') {
        this.handleEditTask(data);
      }
    },
    handleDeleteTask(id) {
      this.listTask = this.listTask.filter(task => task.id !== id);
    },
    handleEditTask(task) {
      this.isShowForm = true;
      this.taskSelected = task;
    },
    resetTaskSelected() {
      this.taskSelected = null;
    }
  },
  computed: {
    listTaskFiltered() {
      let orderSort = this.orderSort;
      return this.listTask.filter(task => task.name.toLowerCase().includes(this.strSearch.toLowerCase())).sort((a, b) => {
        if (a[orderSort.by] < b[orderSort.by]) {
          return orderSort.dir === 'asc' ? -1 : 1;
        }
        if (a[orderSort.by] > b[orderSort.by]) {
          return orderSort.dir === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  padding: 100px 0;
}

.table>tbody>tr>td,
.table>tbody>tr>th,
.table>tfoot>tr>td,
.table>tfoot>tr>th,
.table>thead>tr>td,
.table>thead>tr>th {
  vertical-align: middle;
}

.container>.row {
  margin-top: 20px;
  margin-bottom: 30px;
}

span.badge-medium {
  padding: 11px 10px;
  margin: 0px 8px;
  font-size: 16px;
  display: inline-block;
  vertical-align: top;
}

@media (max-width: 992px) {
  .add-task {
    margin-top: 50px;
  }
}
</style>
