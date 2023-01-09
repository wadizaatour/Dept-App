<template>
    <div class="flex items-start p-0 h-auto md:h-[568px] " :class="cardPosition">
        <Card :key="client?.id" :title="client?.brandName" :description="client?.description"
            :readmore="client?.readmore" :src="client?.src" />
        <BaseNotes />
    </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import Card from './BaseCard.vue';
import BaseNotes from './BaseNotes.vue'
import { Client } from '../models/Client';
import { useClientStore } from "../stores/clients";
const props = defineProps<{ scaledCardLeft: boolean }>()

const store = useClientStore();
const client = computed(() => {
    return store.clients[0] as Client;
});
const cardPosition = computed(() => {
    return props.scaledCardLeft ? "flex-col md:flex-row" : "flex-col md:flex-row-reverse"
});
</script>

