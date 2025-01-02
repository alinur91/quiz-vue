<template>
  <div className="space-y-4  font-bold tracking-wider text-white">
    <div className="space-y-5 text-center">
      <h1
        className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-4xl leading-normal text-transparent md:text-5xl"
      >
        Are You Ready To <br />
        Challenge <br className="block md:hidden" />
        Yourself!?
      </h1>
      <h2 className="text-2xl md:text-4xl">
        <span className="flex items-center justify-center gap-1 md:gap-2">
          You Are In The Right Place!
          <ThumbsUp class="text-yellow-400" />
        </span>
      </h2>
      <h3 className="text-[1.30rem]">Select Your Favorite Topic!</h3>
    </div>
    <TechnologyImages class="pt-6" />
  </div>
</template>
<script setup lang="ts">
import { ThumbsUp } from 'lucide-vue-next'
import TechnologyImages from './TechnologyImages.vue'
</script>
