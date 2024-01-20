<template>
  <div class="fixed flex w-full">
    <AppSidebar />
    <div class="flex-1">
      <AppHeader />
      <main class="w-full bg-surfaceground h-screen">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppSidebar from '@/components/app-sidebar/index.vue'
import AppHeader from '@/components/app-header/index.vue'
</script>
