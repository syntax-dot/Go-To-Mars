<template>
  <div :class="$style.root">
    <div :class="$style.stars"/>

    <div :class="$style.left">
      <div :class="$style.intro">
        <h1 :class="$style.clip">ПУТЕШЕСТВИЕ</h1>
        <div :class="$style.text">на красную планету</div>
      </div>
      <div/>

      <StartButton/>
    </div>

    <div :class="$style.right">
      <Cards/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Cards } from '../components/Cards'
import { StartButton } from '../components/StartButton'
</script>

<style module>
.root {
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  height: 100%;
  align-items: center;
  width: 1100px;
  margin: 0 auto;

  background-image: url("../../assets/backgrounds/planet-background.jpg");
  background-size: 180%;
  background-position: center;
  background-repeat: no-repeat;
}

@media (max-widh: 768px) {
  .root {
    justify-content: flex-start;
    background-image: none;
  }
}

.stars {
  position: absolute;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
  pointer-events: none;
  background-image: url("../../assets/backgrounds/stars-background.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.left {
  transform: translate(-36px, -20px);
  display: grid;
  grid-gap: 50px;
  align-content: start;
}

.intro {
  background: #ffffff;
  background: linear-gradient(to right, #ffffff 10%, #ff3c00 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  clip-path: polygon(0% 0%, 100% 0%, 90% 100%, 0% 100%);
}

.btn_start {
  margin-top: 90px;
}

.line {
  transform: translate(45px, 0px);
}

.right {
  display: grid;
  justify-items: start;
  transform: translate(45px, 0px);
}

.intro > h1 {
  font-size: 62px;
}

.intro > div {
  font-size: 22px;
  font-weight: 400;
}
</style>
