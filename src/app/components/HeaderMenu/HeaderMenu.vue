<template>
  <div :class="$style.root">
    <div :class="$style.logo">
      <img src="./SpaceX-Logo.png" />
    </div>

    <div :class="$style.navigations">
      <a>Главная</a>
      <a>Технология</a>
      <a>График полётов</a>
      <a>Гарантии</a>
      <a>О компании</a>
      <a>Контакты</a>
    </div>
  </div>
</template>

<style module>
.root {
  display: grid;
  height: 100px;
  align-items: center;
  grid-auto-flow: column;
  justify-content: stretch;
  margin: 0 auto;
}

.logo {
  justify-content: center;
}

.navigations {
  display: grid;
  grid-auto-flow: column;
}
</style>
