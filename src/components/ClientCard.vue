<template>
    <div class="flex flex-row p-0  max-h-[568px] h-[568px]">
        <Card v-for=" items in clients" :key="items.id" :title="items.brandName" :description="items.description"
            :readmore="items.readmore" :src="items.src" />
    </div>
</template>


<script lang="ts" setup>
import { ref, onMounted, computed } from "vue";
import { useClientStore } from "../stores/clients";
import Card from "./Card.vue";
const store = useClientStore();
const msg = ref("Welcome to my Vuex Store");
const getClients = computed(() => {
    return store.loadClients;
});
const clients = computed(() => {
    return store.clients as any;
});
onMounted(() => {
    store.loadClients();
});
</script>

 