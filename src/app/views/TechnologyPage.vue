<template>
  <div :class="$style.root">
    <div :class="$style.wrapper">
      <QParallax :class="$style.rocket" src="../../assets/backgrounds/falcon-rocket.webp">
        <Transition name="fade">
          <h1 class="text-white">Basic</h1>
        </Transition>
      </QParallax>
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

.q-parallax {
  position: absolute;
}

.some {
  height: 1000px;
}

.paralax {
  display: grid;
  height: calc(100vh - 100px);
  /* grid-template-rows: 100px max-content; */
  /* height: calc(100% - 100px); */
}

.rocket {
  /* position: absolute;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0; */

  /* background-image: url("../../assets/backgrounds/falcon-rocket.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1; */
}

.paralax_content {
  position: relative;
  text-align: center;

  z-index: 2;
}

.scrollme {
  position: absolute;
  left: 50%;
  bottom: 10%;
  width: 30px;
  height: 20px;
  z-index: 2;

  animation: pulsate-bck 0.5s ease-in-out infinite both;
}

.paralax_label {
  font-size: 56px;
}

.paralax_title {
  font-size: 26px;
}

.paralax_image {
  position: absolute;
  width: 110%;
  height: 110%;
  left: -5%;
  top: -5%;
  z-index: 1;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

.content {
  position: relative;
  height: 100vh;
  background-color: #06121b;
  z-index: 2;
}

@-webkit-keyframes pulsate-bck {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    -webkit-transform: scale(0.9);
            transform: scale(0.9);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
@keyframes pulsate-bck {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    -webkit-transform: scale(0.9);
            transform: scale(0.9);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
</style>
