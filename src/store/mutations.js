export default {
  CHANGE_LIST_TASK(state, data) {
    state.listTask = data;
  },
  HANDLE_SHOW_FORM(state) {
    if (!state.isShowForm) {
      state.taskSelected = null;
    }
    state.isShowForm = !state.isShowForm;
  },
  HANDLE_SEARCH(state, data) {
    state.strSearch = data;
  },
  HANDLE_ORDER_SORT(state, data) {
    state.orderSort = data;
  },
  HANDLE_ADD_TASK(state, data) {
    state.listTask.push(data);
  },
  HANDLE_UPDATE_TASK(state, data) {
    state.listTask = state.listTask.map(task => {
      if (task.id === data.id) {
        return data;
      }
      return task;
    });
  },
  HANDLE_DELETE_TASK(state, data) {
    state.listTask = state.listTask.filter(task => task.id !== data.id);
  },
  HANDLE_EDIT_TASK(state, data) {
    state.isShowForm = true;
    state.taskSelected = data;
  }
}
