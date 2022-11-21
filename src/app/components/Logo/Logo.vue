<template>
  <BorderedBox :class="$style.root"
               :corners="Corners.ALL"
               @click="$router.push('/')">
    <img :class="$style.image"
         src="./SpaceX-Logo.png"
         alt="spacex">
  </BorderedBox>
</template>

<script lang="ts" setup>
import { BorderedBox, Corners } from '../BorderedBox'
</script>

<style lang="scss" module>
.root {
  display: grid;
  align-items: center;
  grid-template-columns: max-content max-content max-content;
  height: 100%;
  border-bottom: 0;
  transition: 0.5s ease-in-out;
}

.image {
  margin: 0 15px 15px 30px;
}

.root:hover {
  background-color: rgba($color: #ffffff, $alpha: 0.1);
}
</style>
