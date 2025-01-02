<template>
  <header className="mb-18 grid grid-cols-[auto,auto] justify-between gap-5">
    <progress
      className="col-span-full h-3 w-full appearance-none"
      :max="totalQuestions"
      :value="progressBarValue"
    />
    <p className="text-white">
      Question <strong>{{ progressBarValue }}</strong> / {{ totalQuestions }}
    </p>

    <p className="text-white">
      <strong>{{ points }}</strong> / {{ totalQuestions * pointsPerCorrectAnswer }}
    </p>
  </header>
</template>
<script setup lang="ts">
import { useQuiz } from '@/composables/useQuiz'
import { computed } from 'vue'
const { pointsPerCorrectAnswer, points, quizInfo, index } = useQuiz()

const totalQuestions = quizInfo.value!.questions.length || 0
const progressBarValue = computed(() => index.value + 1)
</script>
