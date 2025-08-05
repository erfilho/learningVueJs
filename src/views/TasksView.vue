<template>
  <div
    class="w-full h-dvh bg-gray-500 flex flex-col justify-center items-center"
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

      <p v-if="store.taskList.length === 0">No tasks added.</p>

      <ul class="list-none p-0 w-full">
        <TaskItem
          v-for="(task, index) in store.taskList"
          :key="index"
          :task="task"
          @remove="removeTask(index)"
        />
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import TaskItem from "../components/TaskItem.vue";
import { useTasksStore } from "../stores/useTaskStore";

const title = "My tasks list!";
const newTask = ref("");
const store = useTasksStore();

function addTask() {
  if (newTask.value.trim()) {
    store.addTask(newTask.value);
    newTask.value = "";
  }
}

function removeTask(index) {
  store.removeTask(index);
}

onMounted(() => {
  const savedTasks = localStorage.getItem("myTasks");
  if (savedTasks) {
    store.loadTasks(JSON.stringify(savedTasks));
  }
});

watch(
  () => store.taskList,
  (val) => {
    localStorage.setItem("myTasks", JSON.stringify(val));
  },
  { deep: true }
);
</script>

<style>
.finalized {
  text-decoration: line-through;
  color: gray;
}
</style>
