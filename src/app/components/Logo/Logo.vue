<template>
  <BorderedBox :class="$style.root" :corners="Corners.ALL">
    <img :class="$style.image" src="./SpaceX-Logo.png" alt="spacex" />
  </BorderedBox>
</template>

<script lang="ts" setup>
import { BorderedBox, Corners } from "../BorderedBox";
</script>

<style lang="scss" module>
.root {
  display: grid;
  align-items: center;
  grid-template-columns: max-content max-content max-content;
  height: 100%;

  border-bottom: 0;
}

.image {
  margin: 0 15px 15px 30px;
}
</style>
