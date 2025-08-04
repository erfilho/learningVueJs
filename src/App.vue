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
        <li
          v-for="(task, index) in tasks"
          :key="index"
          class="mt-2 flex justify-between bg-gray-400 w-full p-1.5 rounded-sm flex-row items-center"
        >
          <input type="checkbox" v-model="task.finalized" class="w-1/6 h-4" />
          <span :class="{ finalized: task.finalized }" class="w-4/6">{{
            task.title
          }}</span>
          <button @click="removeTask(index)" class="w-1/6">❌</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
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
