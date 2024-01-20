<template>
  <div class="flex flex-col justify-center items-center w-full h-screen">

    <div class="grid grid-cols-2 h-screen w-full">
      <div class="flex flex-col justify-between items-start p-20">
        <ImgMPMLogo style="height: 45px;" />
        <label class="text-5xl text-white font-bold">Welcome <br /> to The MOSA <br /> Back Office -----</label>
      </div>

      <div class="flex flex-col p-20 justify-center">
        <Card>
          <template #title><label class="text-orange-500">{{ $t('pages.login.title') }}</label></template>
          <template #subtitle><label class="text-sm">{{ $t('pages.login.description') }}</label></template>
          <template #content>
            <form @submit.prevent="onSubmit">
              <div class="flex flex-col gap-2  mb-2">
                <label>{{ $t('pages.login.username') }}</label>
                <InputText id="usernameInput" name="usernameInput" v-bind="usernameAttrs" v-model="username"
                  :placeholder="$t('general.field.placeholder', { field: $t('pages.login.username') })"
                  :class="{ 'p-invalid': errors?.username }" data-testid="usernameInput"/>
                <small v-if="errors?.username" id="password-help" class="text-red-500">{{ errors?.username }}</small>
              </div>

              <div class="flex flex-col gap-2">
                <label>{{ $t('pages.login.password') }}</label>
                <Password id="passwordInput" v-bind="passwordAttrs" v-model="password" input-class="w-full"
                  :placeholder="$t('general.field.placeholder', { field: $t('pages.login.password') })" :feedback="false"
                  toggle-mask :class="{ 'p-invalid': errors?.password }" data-testid="passwordInput"/>
                <small v-if="errors?.password" id="password-help" class="text-red-500">{{ errors?.password }}</small>
              </div>

              <PrimeButton id="loginButton" type="submit" class="w-full mt-6" :label="$t('pages.login.submit')" severity="warning" />
            </form>
          </template>
        </Card>
      </div>
    </div>
  </div>

  <!-- Loading Dialog -->
  <Dialog id="loadingDialog" :visible="isLoading" modal :closable="false" class="w-96">
    <template #header>
      <label class="font-bold">{{ $t('general.message.loading') }}</label>
    </template>
    <template #default>
      <div class="flex flex-col items-center">
        <ProgressSpinner class="self-center object-center place-self-center center" />
        <label class="text-xs mt-4">{{ $t('general.message.please_wait') }}</label>
      </div>
    </template>
  </Dialog>

  <!-- Failed Dialog -->
  <Dialog id="failedDialog" v-model:visible="isError" modal class="w-96" close>
    <template #header>
      <label class="font-bold">{{ $t('general.message.failed') }}</label>
    </template>
    <template #default>
      <div class="flex flex-col items-center">
        <FailedIcon />
        <label class="text-xs mt-4">{{ errorMessage }}</label>
      </div>
    </template>
  </Dialog>
</template>

<script src="./index.ts" lang="ts"></script>


