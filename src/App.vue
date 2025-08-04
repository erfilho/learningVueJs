<template>
  <div
    class="w-full h-screen bg-gray-500 flex flex-col justify-center items-center"
  >
    <div
      class="w-1/4 h-1/2 bg-gray-200 rounded-xl shadow-2xl p-4 flex flex-col items-center"
    >
      <h1 class="text-xl font-bold my-1">{{ title }}</h1>

      <div class="flex flex-row w-full h-8 bg-gray-300 rounded-md gap-2 p-1">
        <input
          class="w-3/4 px-1"
          v-model="newTask"
          placeholder="Write a task!"
        />
        <button
          class="bg-gray-50 w-1/4 rounded-md cursor-pointer"
          @click="addTask"
        >
          Add task
        </button>
      </div>

      <p v-if="tasks.length === 0">No tasks added.</p>

      <ul class="list-none p-0 w-full">
        <TaskItem
          v-for="(task, index) in tasks"
          :key="index"
          :task="task"
          @edit="editTask(index)"
          @remove="removeTask(index)"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import TaskItem from "./components/TaskItem.vue";

export default {
  components: { TaskItem },
  data() {
    return {
      title: "My task list!",
      newTask: "",
      tasks: [],
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== "") {
        this.tasks.push({ title: this.newTask, finalized: false });
        this.newTask = "";
      }
    },
    editTask(index) {
      const newTitle = prompt("Edit this task: ", this.tasks[index].title);
      if (newTitle !== null) {
        this.tasks[index].title = newTitle;
      }
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
  },
};
</script>

<style>
.finalized {
  text-decoration: line-through;
  color: gray;
}
</style>
