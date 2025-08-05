<template>
  <div
    class="w-full h-dvh bg-gray-300 flex flex-col justify-center items-center"
  >
    <div
      class="w-1/4 h-2/3 bg-gray-100 rounded-xl shadow-2xl p-4 flex flex-col items-center"
    >
      <h1 class="text-xl font-bold my-1">{{ title }}</h1>
      <div
        class="w-full h-10 my-2 bg-gray-300 rounded-md p-1 flex flex-row justify-between items-center"
      >
        <button
          class="px-2 py-1 rounded-md w-1/3 cursor-pointer"
          :class="{ 'bg-gray-400 font-semibold': store.filter === 'all' }"
          @click="store.setFilter('all')"
        >
          All
        </button>
        <button
          class="px-2 py-1 rounded-md w-1/3 cursor-pointer"
          :class="{ 'bg-gray-400 font-semibold': store.filter === 'pending' }"
          @click="store.setFilter('pending')"
        >
          Pending
        </button>
        <button
          class="px-2 py-1 rounded-md w-1/3 cursor-pointer"
          :class="{ 'bg-gray-400 font-semibold': store.filter === 'completed' }"
          @click="store.setFilter('completed')"
        >
          Completed
        </button>
      </div>

      <div class="flex flex-row w-full h-10 bg-gray-300 rounded-md gap-2 p-1">
        <input
          class="w-3/4 px-1"
          v-model="newTask"
          placeholder="Write a task!"
          @keydown.enter="addTask"
        />
        <button
          class="bg-gray-50 w-1/4 rounded-md cursor-pointer"
          @click="addTask"
        >
          Add task
        </button>
      </div>

      <div class="flex-grow w-full overflow-auto items-center flex flex-col">
        <p class="font-bold my-4" v-if="store.taskList.length === 0">
          No tasks added.
        </p>

        <ul class="list-none p-0 w-full">
          <TaskItem
            v-for="task in store.filteredTasks"
            :key="task.id"
            :task="task"
            @remove="removeTask(task)"
          />
        </ul>
      </div>
      <p class="text-sm text-gray-700 mt-2 justify-self-end">
        Completed: {{ store.completedCount }}/{{ store.taskList.length }}
      </p>
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

function removeTask(task) {
  store.removeTaskById(task.id);
}

onMounted(() => {
  const savedTasks = localStorage.getItem("myTasks");
  if (savedTasks) {
    store.loadTasks(JSON.parse(savedTasks));
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
