<template>
  <ul class="grid grid-cols-2 gap-3">
    <li
      @click="startQuiz(question)"
      class="bg-gradient flex cursor-pointer justify-center rounded-xl bg-gradient-to-l from-blue-800 via-indigo-900 to-purple-900 bg-no-repeat py-3 hover:bg-gradient-to-r md:py-5"
      v-for="question in questionsArr"
      :key="question.imageSrc"
    >
      <TechnologyImage
        :src="question.imageSrc"
        :size="ImageSizes.small"
        :is-react-logo="question.technologyName === Technologies.react"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useQuiz } from '@/composables/useQuiz'
import { questions, Technologies } from '@/data/questions'
import TechnologyImage from '@/shared/TechnologyImage.vue'
import { ImageSizes } from '@/types/quizType'
import { computed } from 'vue'

const { startQuiz } = useQuiz()

const questionsArr = computed(() => Object.values(questions))
</script>
