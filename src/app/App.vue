<template>
  <div :class="$style.root">
    <HeaderMenu/>

    <div :class="$style.content">
      <router-view/>
    </div>

    <div :class="$style.footer"/>
  </div>
</template>

<script setup lang="ts">
import { HeaderMenu } from './components/HeaderMenu'
</script>

<style module lang="scss">
@import "../css/quasar-variables.scss";

.root {
  display: grid;
  position: relative;
  grid-template-rows: max-content 1fr;
  height: 100vh;
  width: 100vw;
  background-color: $primary;
}
</style>

<style lang="css">
* {
  margin: 0;
  padding: 0;
}

#app,
body,
html {
  height: 100%;
  width: 100%;
}

body {
  color: aliceblue;
}

a {
  text-decoration: none;
}

h1 {
  text-transform: uppercase;
  font-weight: bold;
}

#app {
  font-family: 'Roboto', sans-serif;
}
</style>
