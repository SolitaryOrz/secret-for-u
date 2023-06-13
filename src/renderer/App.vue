<script setup lang="ts">
import TitleBar from './components/TitleBar.vue';

</script>

<template>
  <div class="layout">
    <TitleBar />
  </div>
</template>

<style lang="scss" scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
