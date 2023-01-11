<template>
  <ClientCard :first-card-index="0" :second-card-index="1" :show-list="showListViewClass" />
  <ClientCard :first-card-index="3" :second-card-index="4" :show-list="showListViewClass" />
  <ClientNote :scaled-card-left="true" />
  <ClientCard :first-card-index="5" :second-card-index="6" :show-list="showListViewClass" />
  <ClientNote :scaled-card-left="false" />
  <ClientCard :first-card-index="7" :second-card-index="8" :show-list="showListViewClass" />
  <ClientCard :first-card-index="9" :second-card-index="10" :show-list="showListViewClass" />
  <ClientQuote />
  <ClientCard :first-card-index="11" :second-card-index="12" :show-list="showListViewClass" />
  <ClientList />
  <Form />
</template>

<script lang="ts" setup>
import ClientNote from '../components/ClientNote.vue'
import ClientQuote from '../components/ClientQuote.vue'
import ClientList from '../components/ClientList.vue'
import { Form } from 'vee-validate';
import { ref, defineAsyncComponent } from 'vue';
const isLoaded = ref(false);
defineProps<{ showListViewClass: string }>()
const ClientCard = defineAsyncComponent(() =>
  import("../components/ClientCard.vue")
);

</script>