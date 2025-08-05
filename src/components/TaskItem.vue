<template>
  <li
    class="mt-2 flex justify-between bg-gray-300 w-full p-1.5 rounded-sm flex-row items-center"
  >
    <input
      type="checkbox"
      :checked="task.finalized"
      @change="$emit('toggle', task)"
      class="w-1/12 h-4 cursor-pointer"
    />

    <template v-if="editing">
      <input
        v-model="editedText"
        @keyup.enter="saveEdit(task)"
        @blur="saveEdit"
        ref="editInput"
        class="w-9/12 bg-red-200 rounded-md px-1"
      />
      <button @mousedown="saveEdit" class="w-1/12 cursor-pointer">💾</button>
      <button @click="cancelEdit" class="w-1/12 cursor-pointer">❌</button>
    </template>
    <template v-else>
      <span :class="{ finalized: task.finalized }" class="w-9/12 px-1">
        {{ task.title }}
      </span>
      <button @click="startEdit" class="w-1/12 cursor-pointer">✏</button>
      <button @click="$emit('remove', task.id)" class="w-1/12 cursor-pointer">
        ❌
      </button>
    </template>
  </li>
</template>

<script setup>
import { nextTick, ref } from "vue";

const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["remove", "toggle", "edit"]);
const editing = ref(false);
const editedText = ref("");
const editInput = ref(null);

function startEdit() {
  editing.value = true;
  editedText.value = props.task.title;
  nextTick(() => {
    editInput.value.focus();
  });
}

function saveEdit() {
  if (!editedText.value.trim()) return cancelEdit();

  editing.value = false;

  emit("edit", { id: props.task.id, title: editedText.value.trim() });
}

function cancelEdit() {
  editing.value = false;
}
</script>
