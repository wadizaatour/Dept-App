<template>
    <div class="flex flex-col md:flex-row p-0 md:h-[568px]" :class="showList">
        <Card v-for=" items in clients" :key="items?.id" :title="items?.brandName" :description="items?.description"
            :readmore="items?.readmore" :src="items?.src" />
    </div>
</template>
<script lang="ts" setup>
import { computed, defineAsyncComponent, ref } from "vue";
import { Client } from "../models/Client";
import { useClientStore } from "../stores/clients";
const Card = defineAsyncComponent(() =>
    import("./BaseCard.vue")
);
const props = defineProps<{
    firstCardIndex: number,
    secondCardIndex: number,
    showList: string,
}
>()
const store = useClientStore();
const clients = computed(() => {
    const clients = [] as Client[]
    clients.push(store.clients[props.firstCardIndex], store.clients[props.secondCardIndex])
    return clients
});
</script>

