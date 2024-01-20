<template>
    <div class="p-6">
        <label class="text-4xl font-medium">Create Link</label>

        <div class="flex flex-col gap-2 mb-2 mt-6">
            <label>No SKU</label>
            <InputText id="dealerCodeInput" v-model="productName" placeholder="Nama Produk" />
        </div>

        <div class="flex flex-col gap-2 mb-2 mt-6">
            <label>Nama Produk</label>
            <InputText id="dealerCodeInput" v-model="productName" placeholder="Nama Produk" />
        </div>

        <div class="flex flex-col gap-2 mb-2 mt-6">
            <label>Deskripsi Produk</label>
            <InputText id="dealerCodeInput" v-model="productName" placeholder="Nama Produk" />
        </div>

        <PrimeButton class="w-full mt-6" label="Buat Link" severity="primary" @click="navigateTo('/create-link')" />
    </div>
</template>
<script src="./index.ts" lang="ts"></script>