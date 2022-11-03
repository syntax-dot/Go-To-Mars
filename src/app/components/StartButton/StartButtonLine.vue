<template>
  <div :class="$style.root">
    <svg viewBox="0 0 350 50"
         :class="$style.line">
      <defs>
        <linearGradient id="gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%">
          <stop offset="0%" stop-color="transparent"/>
          <stop offset="15%" stop-color="rgba(255, 255, 255, 0.3)"/>
          <stop offset="100%" stop-color="white"/>
        </linearGradient>
      </defs>

      <path d="M 0 0 L 70 45 L 343 45 L 70 45 Z"
            stroke-width="1"
            stroke="url(#gradient)"
            fill="none"/>

      <circle r="2"
              stroke-width="1"
              stroke="white"
              fill="transparent"
              cx="345"
              cy="45"/>
    </svg>
  </div>
</template>

<style lang="scss" module>
.root {
  top: 100%;
  left: 100%;
  position: absolute;
  width: 380px;
  height: 80px;
  transform: translate(14px, -35px);
}

.line {
  width: 100%;
  height: 100%;
  background: transparent;
}
</style>
