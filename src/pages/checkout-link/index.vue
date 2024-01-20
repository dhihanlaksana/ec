<template>
    <div class="p-6">
        <div class="flex flex-row justify-between items-center">
            <label class="text-4xl font-medium">Link Checkout</label>
            <PrimeButton class="" label="Create Link" severity="primary" @click="navigateTo('/create-link')" />
        </div>
        <DataTable :value="[]" tableStyle="min-width: 50rem" class="mt-8">
            <Column field="sku" header="SKU"></Column>
            <Column field="name" header="Produk"></Column>
            <Column field="stock" header="Stok"></Column>
            <Column field="status" header="Status"></Column>
        </DataTable>
    </div>
</template>
<script src="./index.ts" lang="ts"></script>