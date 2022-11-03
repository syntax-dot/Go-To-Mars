<template>
  <div :class="$style.root">
    <div v-for="corner in corners"
         :key="corner"
         :class="[corner, $style.corner]"/>

    <slot/>
  </div>
</template>

<script lang="ts" setup>
import { Corners } from './BorderedBox.types'
import { computed, useCssModule } from 'vue'

const props = defineProps<{
  corners: Corners
}>()

const css = useCssModule()

const corners = computed(() => [
  props.corners & Corners.TL && css.tl,
  props.corners & Corners.TR && css.tr,
  props.corners & Corners.BL && css.bl,
  props.corners & Corners.BR && css.br,
].filter(Boolean))
</script>

<style lang="scss" module>
.root {
  position: relative;
  --corner-width: 7px;
  --corner-bg: rgba(255, 255, 255, 1);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.corner {
  position: absolute;

  &:after, &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 1px;
    background: var(--corner-bg);
  }

  &::after {
    width: var(--corner-width);
  }

  &::before {
    height: var(--corner-width);
  }
}

.tl {
  top: 0;
  left: 0;
}
.tr {
  top: 0;
  left: 100%;
  transform: rotate(90deg);
}
.bl {
  top: 100%;
  left: 0;
  transform: rotate(270deg);
}
.br {
  top: 100%;
  left: 100%;
  transform: rotate(180deg);

}
</style>
