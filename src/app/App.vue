<template>
  <div :class="$style.root">
    <HeaderMenu/>

    <div :class="$style.content">
      <router-view/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { HeaderMenu } from './components/HeaderMenu'
</script>

<style module>
.root {
  display: grid;
  position: relative;
  grid-template-rows: max-content 1fr;
  height: 100vh;
  width: 100vw;
  background-color: rgb(6, 18, 27);
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

@font-face {
  font-family: "DejaVu Sans";
  src: local("DejaVu Sans"), local("DejaVuSans"), url("dejavusans.woff2") format("woff2"),
    url("/src/assets/fonts/DejaVu/dejavusans.woff") format("woff"),
    url("/src/assets/fonts/DejaVu/dejavusans.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}
</style>
