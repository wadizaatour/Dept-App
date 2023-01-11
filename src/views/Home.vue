<template>
  <FilterList @toggeled="showListView" @press="filterIsDisabled" @filter="filterListView" />
  <ClientCard v-if="filterIsActive" :is-loaded="isLoaded" :first-card-index="clientsId[0] ? clientsId[0] : 0"
    :second-card-index="clientsId[1] ? clientsId[1] : 1" :show-list="showListViewClass" />
  <StaticPage v-if="!filterIsActive" :showListViewClass="showListViewClass" />
  <Form />
</template>

<script lang="ts" setup>
import Form from '../components/Form.vue'
import StaticPage from '../views/StaticPage.vue'
import FilterList from '../components/FilterList.vue'
import { onBeforeMount, defineAsyncComponent } from "vue";
import { useClientStore } from "../stores/clients";
import { ref, reactive } from "vue";
const ClientCard = defineAsyncComponent(() =>
  import("../components/ClientCard.vue")
);
const isLoaded = ref(false);
const filterIsActive = ref(false);
let showListViewClass = ref("")
let clientsId = ref<number[]>([])
const store = useClientStore()
onBeforeMount(() => {

  store.loadClients();
  isLoaded.value = true
});

let showList = reactive({
  emittedValues: 'toggeled'
})
let filterList = reactive({
  emittedValues: 'filter'
})
const filterIsDisabled = () => {
  filterIsActive.value = false
}
const showListView = (emittedValues: any) => {

  showList.emittedValues = emittedValues ?? 'toggeled'
  showListViewClass.value = showList.emittedValues ? "md:flex-col md:h-full" : "md:flex-row";
}
const filterListView = (emittedValues: any) => {
  filterIsActive.value = true
  clientsId.value = []
  filterList.emittedValues = emittedValues ?? 'filter'
  store.clients.filter(e => {
    if (e.industry === filterList.emittedValues) {
      clientsId.value.push(e.id)
    }
  })

}
</script>