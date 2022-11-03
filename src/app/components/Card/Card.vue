<template>
  <div ref="card"
       :class="$style.card"
       :style="{ '--mouse-x': `${x}px`, '--mouse-y': `${y}px` }"
       @mousemove="handleMouseMove">
    <div :class="$style['card-content']">
      <div>{{ topWord }}</div>
      <h1>{{ header }}</h1>
      <div>{{ bottomWord }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { CardProps } from './Card.props'

defineProps<CardProps>()

const x = ref(0)
const y = ref(0)
const card = ref<HTMLDivElement>()

function handleMouseMove(e: MouseEvent): void {
  if (!card.value)
    return

  const rect = card.value.getBoundingClientRect()

  x.value = e.clientX - rect.left
  y.value = e.clientY - rect.top
}
</script>

<style module>
:root {
  --bg-color: rgba(20, 20, 20, 0);
  --card-color: rgba(23, 23, 23, 1);
}
.card {
  /* background-color: rgba(255, 255, 255, 0.1); */
  cursor: pointer;
  display: grid;
  grid-template-rows: max-content max-content max-content;
  grid-gap: 10px;
  height: 185px;
  width: 185px;
  position: relative;
  text-align: center;
  box-sizing: border-box;
  padding-top: 36px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.card:hover {
    border: 1px solid rgba(255, 255, 255, 0.5);
}

.card > div {
  font-size: 16px;
}

.card > h1 {
  font-size: 50px;
}

.card::before,
.card::after {
  content: "";
  height: 100%;
  left: 0px;
  opacity: 1;
  position: absolute;
  top: 0px;
  transition: opacity 500ms;
  width: 100%;
}

.card::before {
  background: radial-gradient(
    800px circle at var(--mouse-x) var(--mouse-y),
    rgba(255, 255, 255, 0.05),
    transparent 40%
  );
  z-index: 3;
}

.card::after {
  background: radial-gradient(
    400px circle at var(--mouse-x) var(--mouse-y),
    rgba(255, 255, 255, 0.1),
    transparent 40%
  );
  z-index: 1;
}

/* -- ↓ ↓ ↓ some responsiveness ↓ ↓ ↓ -- */

@media (max-width: 1000px) {
  body {
    align-items: flex-start;
    overflow: auto;
  }

  #cards {
    max-width: 1000px;
    padding: 10px 0px;
  }

  .card {
    flex-shrink: 1;
    width: calc(50% - 4px);
  }
}

@media (max-width: 500px) {
  .card {
    height: 180px;
  }

  .card-image {
    height: 80px;
  }

  .card-image > i {
    font-size: 3em;
  }

  .card-info-wrapper {
    padding: 0px 10px;
  }

  .card-info > i {
    font-size: 0.8em;
  }

  .card-info-title > h3 {
    font-size: 0.9em;
  }

  .card-info-title > h4 {
    font-size: 0.8em;
    margin-top: 4px;
  }
}

@media (max-width: 320px) {
  .card {
    width: 100%;
  }
}
</style>
