<template>
  <div className="flex items-center justify-center px-14 py-12">
    <div className="w-[25rem] md:w-[40rem]">
      <component :is="currentScreen" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { QuizStatusEnum, useQuiz } from './composables/useQuiz'
import ActiveScreen from './features/active-screen/ActiveScreen.vue'
import FinishedScreen from './features/finished-screen/FinishedScreen.vue'
import StartScreen from './features/start-screen/StartScreen.vue'

const { quizStatus } = useQuiz()

const currentScreen = computed(() => {
  switch (quizStatus.value) {
    case QuizStatusEnum.ready:
      return StartScreen
    case QuizStatusEnum.active:
      return ActiveScreen
    case QuizStatusEnum.finished:
      return FinishedScreen
    default:
      return StartScreen
  }
})
</script>
