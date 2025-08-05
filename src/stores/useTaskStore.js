import { defineStore } from "pinia";

export const useTasksStore = defineStore("tasks", {
  state: () => ({
    taskList: [],
  }),
  actions: {
    addTask(title) {
      this.taskList.push({ title, finalized: false });
    },
    removeTask(index) {
      this.taskList.splice(index, 1);
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
  },
});
