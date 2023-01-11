<template>
  <FilterList @toggeled="showListView"/>
  <ClientCard :is-loaded="isLoaded" :first-card-index="1" :second-card-index="2"  :show-list="showListViewClass"/>
  <!-- <ClientCard :is-loaded="isLoaded" :first-card-index="3" :second-card-index="4" />
  <ClientNote :scaled-card-left="true"  /> 
  <ClientCard :is-loaded="isLoaded" :first-card-index="5" :second-card-index="6" />
  <ClientNote :scaled-card-left="false" />
  <ClientCard :is-loaded="isLoaded" :first-card-index="7" :second-card-index="8" />
  <ClientCard :is-loaded="isLoaded" :first-card-index="9" :second-card-index="10" />
  <ClientQuote />
  <ClientCard :is-loaded="isLoaded" :first-card-index="11" :second-card-index="12" /> -->
  <ClientList/>
  <Form/>
</template>

<script lang="ts" setup>
import Form from '../components/Form.vue'
import ClientNote from '../components/ClientNote.vue'
import ClientQuote from '../components/ClientQuote.vue'
import ClientList from '../components/ClientList.vue'
import FilterList from '../components/FilterList.vue'
import { onBeforeMount, defineAsyncComponent } from "vue";
import { useClientStore } from "../stores/clients";
import { ref , computed, reactive } from "vue";

const isLoaded = ref(false); 
let showListViewClass = ref("")
onBeforeMount(() => {
  const store = useClientStore()
  store.loadClients(); 
     isLoaded.value = true 
});
let showList = reactive({
    emittedValues: 'toggeled'
  })
  const showListView = (emittedValues: any) => {

    showList.emittedValues = emittedValues ?? 'toggeled'
    showListViewClass.value = showList.emittedValues  ? "md:flex-col" : "md:flex-row";
  }
  // const showListViewClass = () => {
  //   console.log(showList )
  //  return showList.emittedValues   ? "md:flex-col" : "md:flex-row";
  // }
// const showList: any = computed((toggeled) => {
//   console.log(toggeled, 'toggled value')
//     return toggeled ?  : "md:flex-row";
// });


const ClientCard = defineAsyncComponent(() =>
    import("../components/ClientCard.vue")
);

</script>