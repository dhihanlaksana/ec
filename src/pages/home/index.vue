<template>
  <Breadcrumb class="w-full bg-surfaceground" :home="home" :model="items"/>
  <div class="flex background-container pt-64 h-screen">
    <div class="flex flex-col ml-40 text-black">
      <div class="text-2xl font-normal italic leading-36 text-left">
      Hi <span class="font-bold">{{ userData?.username ?? $t('pages.login.username') }}</span>,
    </div>
  </div>
</div>
</template>
<script src="./index.ts" lang="ts"></script>
<style src="./index.css" scoped></style>
