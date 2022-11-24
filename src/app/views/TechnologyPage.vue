<template>
  <div :class="$style.root">
    <div :class="$style.wrapper">
      <div :class="$style.rocket"
           src="../../assets/backgrounds/falcon-rocket.webp">
        <DisappearingText :class="$style.title"
                          :hidenTarget="100"
                          title="Falcon Heavy"
                          description="ракета-носитель сверхтяжёлого класса"/>
      </div>

      <div :class="$style.info">
        <div>
          <h1>4</h1>
          <h4>Успешных посадок</h4>
        </div>
        <div>
          <h1>9</h1>
          <h4>Запусков</h4>
        </div>
        <div>
          <h1>4</h1>
          <h4>Успешных прилётов</h4>
        </div>
      </div>

      <div :class="$style.fh_info">
        <div :class="$style.fh_image"/>
      </div>

      <!-- <QParallax src="https://cdn.quasar.dev/img/parallax2.jpg">
        <h1 class="text-white">Basic</h1>
      </QParallax> -->

      <!-- <div :class="$style.some"/> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { QParallax } from 'quasar'
import { ref } from 'vue'
import { DisappearingText } from '../components/DisappearingText'
</script>

<style module>
.root {
  height: 100%;
  width: 100%;
}

.wrapper {
  position: absolute;
  top: 0;
}

.info {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 400px;
  background-color: #000;
  padding: 60px 160px;
  align-items: center;
}

.info > div {
  text-align: center;
}

.info > div > h1 {
  font-size: 7rem;
}

.rocket {
  position: relative;
  height: 100vh;
  width: 100vw;

  background-image: url("../../assets/backgrounds/falcon-rocket.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
}

.title {
  position: relative;
  top: 40%;
}

.fh_info {
  height: 900px;
  width: 100%;
}

.fn_image {
  background-image: url(../../assets/images/fh_performance.webp);
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
}
</style>
