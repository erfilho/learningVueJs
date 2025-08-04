<template>
  <li
    class="mt-2 flex justify-between bg-gray-400 w-full p-1.5 rounded-sm flex-row items-center"
  >
    <input type="checkbox" v-model="task.finalized" class="w-1/6 h-4" />
    <span :class="{ finalized: task.finalized }" class="w-3/6">{{
      task.title
    }}</span>
    <button @click="$emit('edit')" class="w-1/6">✏</button>
    <button @click="$emit('remove')" class="w-1/6">❌</button>
  </li>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
};
</script>
