<template>
  <div :class="[$style.root, {
    [$style.hidden]: scrollTop > hidenTarget
  }]">
    <div :class="$style.title">
      <h1>{{ title }}</h1>
      <div v-show="description"
           :class="$style.description">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { DisappearingTextProps } from './DisappearingText.props'

const props = defineProps<DisappearingTextProps>()

const scrollTop = ref(0)
const hidenTarget = props.hidenTarget ?? 100

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
  text-align: center;
  transition: opacity .8s;
  animation: slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.root > h1 {
  text-transform: uppercase;
}

.hidden {
  opacity: 0;
}

.description {
  font-size: 1.4rem;
  font-weight: bold;
}

@keyframes slide-top {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-100px);
            transform: translateY(-100px);
  }
}
</style>

<style>
.title-move,
.title-enter-active,
.title-leave-active {
  transition: all 0.5s ease;
}

.title-enter-from,
.title-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.title-leave-active {
  position: absolute;
}
</style>
