import { defineStore } from "pinia";

export const useTasksStore = defineStore("tasks", {
  state: () => ({
    taskList: [],
    filter: "all", // 'all' || 'completed' || 'pending'
  }),
  actions: {
    addTask(title) {
      this.taskList.push({ id: crypto.randomUUID(), title, finalized: false });
    },
    removeTask(index) {
      this.taskList.splice(index, 1);
    },
    removeTaskById(id) {
      this.taskList = this.taskList.filter((task) => task.id !== id);
    },
    editTask(index, newTitle) {
      this.taskList[index].title = newTitle;
    },
    changeConclusion(index) {
      this.taskList[index].finalized = !this.tasks[index].finalized;
    },
    loadTasks(savedTasks) {
      this.taskList = savedTasks;
    },
    setFilter(newFilter) {
      this.filter = newFilter;
    },
  },
  getters: {
    filteredTasks(state) {
      if (state.filter === "completed") {
        return state.taskList.filter((t) => t.finalized);
      } else if (state.filter === "pending") {
        return state.taskList.filter((t) => !t.finalized);
      }
      return state.taskList;
    },
    completedCount(state) {
      return state.taskList.filter((t) => t.finalized).length;
    },
  },
});
