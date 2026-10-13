<script setup>
import {ref} from 'vue'
import { usel18n } from 'vue-i18n'
</script>

<template>
  <div class="layout">
    <header class="layout-header">
      <h1>Welcome to the App</h1>
    </header>
    <main class="layout-main">
      <slot></slot>
    </main>
    <footer class="layout-footer">
      <p>&copy; 2023 My App. All rights reserved.</p>
    </footer>
  </div>
</template>

<style scoped>

</style>