<template>
  <li
    @click="handleClick"
    :class="[
      'flex h-10 w-full  items-center justify-between rounded-full  bg-gradient-to-r from-blue-800 via-indigo-400 to-blue-600 p-6 text-transparent text-white',
      questionHasBeenAnsweredClass,
      clickedOptionClass,
    ]"
  >
    <span>{{ option }}</span>
    <span v-show="questionHasBeenAnswered">
      <component
        :is="isAnswerCorrect ? Check : X"
        :class="['text-lg md:text-2xl', isAnswerCorrect ? 'text-green-600' : 'text-red-600']"
      />
    </span>
  </li>
</template>

<script setup lang="ts">
import { useQuiz } from '@/composables/useQuiz'
import { Check, X } from 'lucide-vue-next'
import { computed } from 'vue'

type OptionProps = {
  option: string
  index: number
  isAnswerCorrect: boolean
}

const { giveTheAnswer, answer } = useQuiz()

const { index, isAnswerCorrect } = defineProps<OptionProps>()

const handleClick = () => {
  if (!questionHasBeenAnswered.value) {
    giveTheAnswer(index, isAnswerCorrect)
  }
}

const questionHasBeenAnswered = computed(() => answer.value !== null)

const questionHasBeenAnsweredClass = computed(() =>
  questionHasBeenAnswered.value
    ? 'cursor-not-allowed'
    : 'cursor-pointer transition duration-500 hover:translate-x-4 hover:transform',
)

const clickedOptionClass = computed(() => ({ 'translate-x-4': index === answer.value }))
</script>
