<template>
  <div class="flex flex-col w-full h-[100vh]">
    <nav
      class="flex flex-row justify-between px-4 h-8 items-center shadow-md bg-gray-700 text-white"
    >
      <span class="w-1/4">
        <h3 class="font-bold">TaskList</h3>
      </span>
      <div class="flex flex-row gap-4 px-2 w-3/4 justify-end">
        <RouterLink to="/" class="hover:underline"> Tasks </RouterLink>
        <RouterLink to="/about" class="hover:underline"> About </RouterLink>
      </div>
    </nav>
    <main class="h-11/12 flex flex-col flex-grow">
      <RouterView />
    </main>
  </div>
</template>

<script>
export default {};
</script>
