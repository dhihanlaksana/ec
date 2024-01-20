<template>
    <div class="p-6">
        <label class="text-4xl font-medium">Order</label>
        <DataTable :value="[]" tableStyle="min-width: 50rem" class="mt-8">
            <Column field="sku" header="SKU"></Column>
            <Column field="name" header="Produk"></Column>
            <Column field="status" header="Status"></Column>
            <Column field="date" header="Tanggal Pesanan"></Column>
        </DataTable>
    </div>
</template>
<script src="./index.ts" lang="ts"></script>