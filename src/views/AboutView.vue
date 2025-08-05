<template>
  <div class="h-dvh w-full bg-gray-300 flex items-center justify-center px-4">
    <div
      class="w-1/4 h-2/3 bg-gray-100 rounded-xl shadow-2xl p-4 flex flex-col items-center"
    >
      <h1 class="text-2xl font-bold mb-4 text-gray-800">About the project</h1>
      <p class="text-gray-700 mb-4">
        &nbsp This is a to-do list project developed while studying Vue 3, Vite
        and Pinia. It uses Composition API, local storage saving and styling
        with Tailwind CSS.
      </p>
      <RouterLink to="/" class="text-blue-600 hover:underline font-medium">
        Back to tasks
      </RouterLink>
    </div>
  </div>
</template>
