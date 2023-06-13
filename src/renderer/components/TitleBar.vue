<template>
  <header class="titlebar">
    <div class="titlebar-title">
      {{ appTitle }}
    </div>
    <div class="titlebar-control">
      <div 
        class="titlebar-btn codicon codicon-chrome-minimize"
        @click="() => handleWindowAction('min')" />
      <div
        class="titlebar-btn codicon"
        :class="{
          'codicon-chrome-restore': isMaximized,
          'codicon-chrome-maximize': !isMaximized
        }"
        @click="() => handleWindowAction('max')" />
      <div
        class="titlebar-btn codicon codicon-chrome-close"
        @click="() => handleWindowAction('close')"
        />
    </div>
  </header>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import '@vscode/codicons/dist/codicon.css';

const appTitle = 'Secret For U';

const isMaximized = ref(false);

const handleWindowAction = (action: string) => {
  window.electron.ipcRenderer.send('win:invoke', action);
};
onMounted(() => {
  window.electron.ipcRenderer.on('isMaximized', (_, value) => {
    isMaximized.value = value;
  });
});


</script>

<style lang="scss" scoped>
.titlebar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  height: 56px;
  background-color: var(--color-bg-titlebar);
  -webkit-app-region: drag;
  .titlebar-title {
    font-size: 20px;
    font-weight: 600;
    font-family: "Segoe UI", "Microsoft YaHei UI", "Microsoft YaHei", sans-serif;
  }
  .titlebar-control {
    -webkit-app-region: no-drag;
    display: inline-flex;
    justify-content: flex-end;
    column-gap: 10px;
    .titlebar-btn {
      width: 28px;
      height: 28px;
      font-size: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      color: var(--color-btn-window);
      transition: .2s all;
      border-radius: 4px;
      &:hover {
        background-color: var(--color-btn-window-hover);
      }
    }
  }
}
</style>