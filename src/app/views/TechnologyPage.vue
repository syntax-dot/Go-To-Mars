<template>
  <div :class="$style.root">
    <div :class="$style.paralax">
      <div :class="$style.rocket"/>
      <div/>
      <div :class="$style.paralax_content">
        <h1 :class="$style.paralax_label">
          FALCON HEAVY
        </h1>
        <h3 :class="$style.paralax_title">
          THE WORLD`S MOST POWERFUL ROCKET
        </h3>
      </div>

      <div :class="$style.scrollme">
        <svg width="30px" height="20px">
          <path stroke="#ffffff"
                fill="none"
                stroke-width="2px"
                d="M2.000,5.000 L15.000,18.000 L28.000,5.000"/>
        </svg>
      </div>
    </div>

    <div :class="$style.content">
      *
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const image = ref<HTMLDivElement>()

function handleScroll(e: any) {
  console.log(e)
}
</script>

<style module>
.root {
  display: grid;
  grid-template-rows: max-content 1fr;
  /* width: 100%; */
  height: auto;
  overflow: hidden;
}

.paralax {
  display: grid;
  height: calc(100vh - 100px);
  /* grid-template-rows: 100px max-content; */
  /* height: calc(100% - 100px); */
}

.rocket {
  position: absolute;
  opacity: 1;
  width: 100%;
  height: calc(100% + 100px);
  left: 0;
  top: 0;

  background-image: url("../../assets/backgrounds/falcon-rocket.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
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
