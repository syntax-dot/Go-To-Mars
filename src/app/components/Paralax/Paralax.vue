<template>
  <div class="q-pa-md q-gutter-md">
    <div class="row justify-between">
      <QParallax src="`${url}`">
        <Transition name="fade">
          <h1 class="text-white">Basic</h1>
        </Transition>
      </QParallax>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { QParallax } from 'quasar'
import { ParalaxProps } from './Paralax.props'

defineProps<ParalaxProps>()
</script>

<style module lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
</style>
