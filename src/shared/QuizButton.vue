<template>
  <button
    class="rounded-full bg-gradient-to-t from-blue-900 via-indigo-800 to-blue-700 px-6 py-2 text-white transition duration-300 hover:from-blue-800 hover:via-indigo-700 hover:to-blue-500"
    @click="emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'click'): void
}>()
</script>
