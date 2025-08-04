<template>
  <li
    class="mt-2 flex justify-between bg-gray-400 w-full p-1.5 rounded-sm flex-row items-center"
  >
    <input type="checkbox" v-model="task.finalized" class="w-1/6 h-4" />

    <template v-if="editing">
      <input
        v-model="editedText"
        @keyup.enter="saveEdit"
        @blur="cancelEdit"
        class="w-3/6 bg-red-200"
      />
      <button @mousedown="saveEdit" class="w-1/6 cursor-pointer">💾</button>
      <button @click="cancelEdit" class="w-1/6">❌</button>
    </template>
    <template v-else>
      <span :class="{ finalized: task.finalized }" class="w-3/6">
        {{ task.title }}
      </span>
      <button @click="startEdit" class="w-1/6">✏</button>
      <button @click="$emit('remove')" class="w-1/6">❌</button>
    </template>
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

  data() {
    return {
      editing: false,
      editedText: "",
    };
  },

  methods: {
    startEdit() {
      this.editing = true;
      this.editedText = this.task.title;
    },
    saveEdit() {
      if (this.editedText.trim() !== "") {
        this.task.title = this.editedText.trim();
      }
      this.editing = false;
    },
    cancelEdit() {
      this.editing = false;
    },
  },
};
</script>
