<template>
  <div :class="$style.root">
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
</script>

<style module>
.root {
  display: grid;
  /* grid-template-columns: 1fr max-content max-content 1fr; */
  position: relative;
  z-index: 10;
  /* filter: blur(1px); */
  backdrop-filter: blur(2px);
  box-sizing: border-box;
  height: 100px;
  align-items: center;
  grid-auto-flow: column;
  justify-content: space-evenly;
  background: rgba(0, 0, 0, 0.15);
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
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
  font-size: 16px;
}

a:hover {
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  color: rgba(255, 255, 255, 0.5);
}
</style>
