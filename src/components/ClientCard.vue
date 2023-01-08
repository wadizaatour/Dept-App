<template>
    <div v-if="isLoaded" class="flex flex-row p-0 max-h-[568px] h-[568px]">
        <Card v-for=" items in clients" 
        :key="items?.id" 
        :title="items?.brandName"
        :description="items?.description"
        :readmore="items?.readmore"
        :src="items?.src"
        />
    </div>
</template>
<script lang="ts" setup>
import { computed, defineAsyncComponent  } from "vue";
import {Client} from "../models/Client";
import { useClientStore } from "../stores/clients";
const Card = defineAsyncComponent(() =>
    import("./Card.vue")
  );
const props = defineProps<{ isLoaded: boolean, firstCardIndex: number, secondCardIndex: number }>()
const store = useClientStore();
const clients = computed(() => {
    const clients = [] as Client[] 
    clients.push(store.clients[props.firstCardIndex], store.clients[props.secondCardIndex])
    return clients  
});
</script>

