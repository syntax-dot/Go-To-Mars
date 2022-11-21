<template>
  <div :class="[$style.root, {
    [$style.hidden]: hidden
  }]">
    <Logo :class="$style.logo"/>

    <div :class="$style.navigations">
      <NavigationBar v-for="link in links"
                     :key="link.title"
                     :title="link.title"
                     :to="link.to"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { Logo } from '../Logo'
import { NavigationLinkProps } from '../NavigationLink/NavigationLink.props'
import NavigationBar from '../NavigationLink/NavigationLink.vue'

const links: NavigationLinkProps[] = [
  { title: 'Главная', to: { name: 'home' } },
  { title: 'Технология', to: { name: 'technology' } },
  { title: 'График полётов', to: { name: 'flightSchedule' } },
  { title: 'Гарантии', to: { name: 'guarantees' } },
  { title: 'О компании', to: { name: 'about' } },
  { title: 'Контакты', to: { name: 'contacts' } },
]

const scrollTop = ref(0)
const hidenTarget = 100

const hidden = ref(false)

onMounted(() => {
  window.addEventListener('wheel', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('wheel', handleScroll)
})

function handleScroll(e: WheelEvent) {
  const { deltaY } = e
  scrollTop.value = window.scrollY

  handleOpacity(deltaY, scrollTop.value, hidenTarget)
}

function handleOpacity(deltaY: number, scrollTop: number, hidenTarget: number) {
  if (deltaY > 1 && scrollTop > hidenTarget)
    return hidden.value = true

  return hidden.value = false
}
</script>

<style module lang="scss">
.root {
  display: grid;
  position: sticky;
  top: 0;
  z-index: 2;
  backdrop-filter: blur(2px);
  box-sizing: border-box;
  height: 100px;
  align-items: center;
  grid-auto-flow: column;
  justify-content: space-evenly;
  background: rgba(0, 0, 0, 0.15);
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  transition: opacity .5s;
}

.hidden {
  opacity: 0;
}

.logo {
  justify-self: end;
}

.navigations {
  display: grid;
  grid-auto-flow: column;
  grid-gap: 40px;
  margin: 0 auto;
}

a {
  border-bottom: 1px solid rgba(255, 255, 255, 0);
  color: rgba(255, 255, 255, 0.8);

  &:hover {
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    color: rgba(255, 255, 255, 0.5);
  }
}
</style>
