<template>
  <div :class="$style.root">
    <Card v-for="card in cards"
          :key="card.bottomWord"
          :topWord="card.topWord"
          :header="card.header"
          :bottomWord="card.bottomWord"
          :class="$style.card"/>
  </div>
</template>

<script lang="ts" setup>
import { Card } from '../Card'
import { CardProps } from '../Card/Card.props'

const cards: CardProps[] = [
  { topWord: 'мы', header: '1', bottomWord: 'на рынке' },
  { topWord: 'гарантируем', header: '50%', bottomWord: 'безопасность' },
  { topWord: 'календарик за', header: '2001', bottomWord: 'в подарок' },
  { topWord: 'путешествие', header: '597', bottomWord: 'дней' },
]
</script>

<style lang="scss" module>
.root {
  display: grid;
  grid-template-columns: max-content max-content;
  grid-gap: 10px;
  justify-content: center;
  margin: 0px;
  overflow: hidden;
  padding: 0px;
  animation: slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

  // &:hover > .card::after {
  //   opacity: 1;
  // }
}

@keyframes slide-left {
  0% {
    -webkit-transform: translateX(50px);
            transform: translateX(50px);
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
}
</style>
