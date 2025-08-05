<template>
  <div
    class="w-full h-dvh bg-gray-300 flex flex-col justify-center items-center"
  >
    <div
      class="absolute z-0 w-full h-dvh top-0 bg-gray-400/80 flex flex-col items-center justify-center text-xl font-semibold"
      v-if="loading"
    >
      Loading...
    </div>
    <div
      class="w-1/4 h-2/3 bg-gray-100 rounded-xl shadow-2xl p-4 flex flex-col items-center"
    >
      <h1 class="text-xl font-bold my-1">{{ title }}</h1>

      <div class="flex flex-row w-full h-10 bg-gray-300 rounded-md gap-2 p-1">
        <input
          class="w-3/4 px-1"
          v-model="newTask"
          placeholder="Write a task!"
          @keydown.enter="handleAddTask"
        />
        <button
          class="bg-gray-50 w-1/4 rounded-md cursor-pointer"
          @click="handleAddTask"
        >
          Add task
        </button>
      </div>

      <div class="flex-grow w-full overflow-auto items-center flex flex-col">
        <p class="font-bold my-4" v-if="tasks.length === 0">No tasks added.</p>

        <ul class="list-none p-0 w-full">
          <TaskItem
            v-for="task in tasks"
            :key="task.id"
            :task="task"
            @remove="handleDeteleTask"
            @toggle="handleToggleTask"
            @edit="handleEditTask"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

import {
  addTask,
  deleteTask,
  getTasks,
  toggleTask,
  updateTaskTitle,
} from "../services/taskService";

import TaskItem from "../components/TaskItem.vue";

const title = "My tasks list!";

const tasks = ref([]);
const newTask = ref("");
const loading = ref(null);

async function loadTasks() {
  loading.value = true;
  tasks.value = await getTasks();
  loading.value = false;
}

onMounted(loadTasks);

async function handleAddTask() {
  if (!newTask.value.trim()) return;
  const added = await addTask(newTask.value.trim());
  tasks.value.push(added);
  newTask.value = "";
}

async function handleDeteleTask(id) {
  await deleteTask(id);
  tasks.value = tasks.value.filter((t) => t.id !== id);
}

async function handleToggleTask(task) {
  await toggleTask(task.id, task.finalized);
  task.finalized = !task.finalized;
}

async function handleEditTask({ id, title }) {
  await updateTaskTitle(id, title);
  const t = tasks.value.find((t) => t.id === id);
  if (t) t.title = title;
}
</script>

<style>
.finalized {
  text-decoration: line-through;
  color: gray;
}
</style>
