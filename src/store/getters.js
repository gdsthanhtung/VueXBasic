export default {
    // countX: state => {
    //   return state.countX;
    // },
    listTaskFiltered: state => {
      let orderSort = state.orderSort;
      return state.listTask.filter(task => task.name.toLowerCase().includes(state.strSearch.toLowerCase())).sort((a, b) => {
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
