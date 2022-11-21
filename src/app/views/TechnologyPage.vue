<template>
  <div :class="$style.root">
    <div :class="$style.wrapper">
      <div :class="$style.rocket"
           src="../../assets/backgrounds/falcon-rocket.webp">
        <Transition name="fade">
          <h1 class="text-white">Falcon Heavy</h1>
        </Transition>
      </div>
      <div :class="$style.some"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { QParallax } from 'quasar'
import { ref } from 'vue'
</script>

<style module>
.root {

}

.wrapper {

}

.some {
  height: 1000px;
}

.rocket {
  position: absolute;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;

  background-image: url("../../assets/backgrounds/falcon-rocket.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
}

.rocket > h1 {
  position: relative;
  top: 50%;
  text-align: center;
}
</style>
