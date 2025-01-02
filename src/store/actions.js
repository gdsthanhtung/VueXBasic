export default {
  actChangeListTask({ commit }, data) {
    commit('CHANGE_LIST_TASK', data);
  },
  actHandleShowForm({ commit }) {
    commit('HANDLE_SHOW_FORM');
  },
  actHandleSearch({ commit }, data) {
    commit('HANDLE_SEARCH', data);
  },
  actHandleOrderSort({ commit }, data) {
    commit('HANDLE_ORDER_SORT', data);
  },
  actHandleAddTask({ commit }, data) {
    commit('HANDLE_ADD_TASK', data);
  },
  actHandleUpdateTask({ commit }, data) {
    commit('HANDLE_UPDATE_TASK', data);
  },
  actHandleAction({ dispatch }, { action, data }) {
    if (action === 'delete') {
      dispatch('handleDeleteTask', data);
    }
    if (action === 'edit') {
      dispatch('handleEditTask', data);
    }
  },
  handleDeleteTask({ commit },  data) {
    commit('HANDLE_DELETE_TASK', data);
  },
  handleEditTask({ commit }, data) {
    commit('HANDLE_EDIT_TASK', data);
  }
}
