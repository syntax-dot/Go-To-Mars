<template>
  <div :class="$style.root">
    <div>Syntax © 2022</div>
    <div :class="$style.links">
      <a href="https://github.com/syntax-dot/Go-To-Mars"
         target="_blank"> GitHub </a>

      <a href="https://t.me/SYNTAXNAME"
         target="_blank"> Telegram </a>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style module>
.root {
  position: relative;
  height: 60px;
  width: 100%;
  text-align: center;
  background-color: #000;
  margin: auto;
}

.root > div {
  color: rgba(255, 255, 255, 0.4);
}

.links {
  font-size: 1rem;
  text-transform: uppercase;
}
</style>
