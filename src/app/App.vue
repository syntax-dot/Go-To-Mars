<template>
  <div :class="$style.root">
    <HeaderMenu />
  </div>
</template>

<script setup lang="ts">
import { HeaderMenu } from "./components/HeaderMenu";
</script>

<style module>
.root {
  display: grid;
  grid-template-rows: max-content 1fr;
  height: 100vh;
  width: 100vw;
  background-color: #35363a;
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
</style>
