<template>
  <div>
    <Paralax/>
  </div>
  <div :class="$style.content"/>
</template>

<script lang="ts" setup>
import { Paralax } from '../components/Paralax'

</script>

<style module>
.content {
  height: 1000px;
}
</style>
