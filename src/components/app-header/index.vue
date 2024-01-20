<template>
  <div
    class="flex flex-row sticky top-0 items-center justify-end p-4 w-full h-16 bg-white border-b-gray-200 border-b-2 z-50">
    <div class="flex flex-row items-center mr-8 gap-2">
      <Suspense class="flex">
        <div class="flex flex-col items-end">
          <label class="text-sm font-semibold text-gray-900 text-right">{{ userData?.username ?? $t('pages.login.username') }}</label>
          <label class="text-xs font-normal text-secondary">Super Admin</label>
        </div>
      </Suspense>
      <Avatar class="ml-2"
        image="@/assets/images/avatar.svg"
        shape="circle" />
      <Chevron/>
    </div>
  </div>
</template>
<script src="./index.ts" lang="ts"></script>
