<template>
  <div :class="[$style.root, {
    [$style.hidden]: hidden
  }]">
    <h1>{{ title }}</h1>
    <div v-show="description"> {{ description }} </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { DisappearingTextProps } from './DisappearingText.props'

defineProps<DisappearingTextProps>()

const scrollTop = ref(0)
const hidenTarget = 100

const hidden = ref(false)
console.log(hidden.value)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

function handleScroll(e: Event) {
  scrollTop.value = window.scrollY

  handleOpacity(scrollTop.value, hidenTarget)
}

function handleOpacity(scrollTop: number, hidenTarget: number) {
  if (scrollTop > hidenTarget)
    return hidden.value = true

  return hidden.value = false
}
</script>

<style module lang="scss">
.root {

}

.hidden {
  opacity: 0;
}
</style>
