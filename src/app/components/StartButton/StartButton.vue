<template>
  <div :class="$style.root">
    <div :class="$style.button">
      <span v-text="text"/>

      <svg :class="$style.bg"
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 200 32">
        <defs>
          <radialGradient id="lb"
                          cx="50"
                          cy="82"
                          r="100"
                          gradientUnits="userSpaceOnUse">
            <stop stop-color="rgba(36, 89, 156, 1)" offset="0%"/>
            <stop stop-color="rgba(36, 89, 156, 0.8)" offset="60%"/>
            <stop stop-color="rgba(36, 89, 156, 0)" offset="100%"/>
          </radialGradient>

          <radialGradient id="rt"
                          cx="150"
                          cy="-50"
                          r="100"
                          gradientUnits="userSpaceOnUse">
            <stop stop-color="rgba(36, 89, 156, 1)" offset="0%"/>
            <stop stop-color="rgba(36, 89, 156, 0.8)" offset="60%"/>
            <stop stop-color="rgba(36, 89, 156, 0)" offset="100%"/>
          </radialGradient>
        </defs>

        <line x1="0%"
              x2="100%"
              y1="0%"
              y2="0%"
              stroke-width="1"
              stroke="url(#rt)"/>

        <line x1="100%"
              x2="100%"
              y1="0%"
              y2="100%"
              stroke-width="1"
              stroke="url(#rt)"/>

        <path d="M 195 0 L 200 0 L 200 5"
              fill="none"
              stroke-width="1"
              stroke="white"/>

        <line x1="0%"
              x2="0%"
              y1="0%"
              y2="100%"
              stroke-width="1"
              stroke="url(#lb)"/>

        <line x1="0%"
              x2="100%"
              y1="100%"
              y2="100%"
              stroke-width="1"
              stroke="url(#lb)"/>

        <path d="M 0 27 L 0 32 L 5 32"
              fill="none"
              stroke-width="1"
              stroke="white"/>
      </svg>
    </div>

    <StartButtonLine :class="$style.line"/>
  </div>
</template>

<script lang="ts" setup>
import StartButtonLine from './StartButtonLine.vue'

const text = 'Начать путешествие'
</script>

<style lang="scss" module>
.root {
  position: relative;
  width: max-content;
}

.button {
  padding: 8px 22px;
  font-size: 14px;
  position: relative;
  width: 200px;
  height: 32px;
  box-sizing: border-box;
  transition: all .175s ease-in-out;
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;

  &:hover {
    background: rgba(36, 89, 156, 0.2);
    text-shadow: 1px 1px 4px rgba(255, 255, 255, 0.25);
    border: 1px solid rgba(36, 89, 255, 0.2);
  }
}

.bg {
  position: absolute;
  top: -1px;
  left: -1px;
  right: 0;
  bottom: 0;
  width: 200px;
  height: 32px;
}
</style>
