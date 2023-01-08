<script lang="ts" setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import HeroSection from './components/HeroSection.vue'
import ClientNote from './components/ClientNote.vue'
import ClientQuote from './components/ClientQuote.vue'
import ClientList from './components/ClientList.vue'
import { onBeforeMount, defineAsyncComponent } from "vue";
import { useClientStore } from "./stores/clients";
import { ref } from "vue";

const isLoaded = ref(false); 
onBeforeMount(() => {
  const store = useClientStore()
  store.loadClients(); 
     isLoaded.value = true 
});

const ClientCard = defineAsyncComponent(() =>
    import("./components/ClientCard.vue")
);

</script>
<template>
  <NavBar />
  <HeroSection />
  <ClientNote :scaled-card-left="false"/>
  <ClientCard :is-loaded="isLoaded" :first-card-index="1" :second-card-index="2" />
  <ClientCard :is-loaded="isLoaded" :first-card-index="3" :second-card-index="4" />
  <ClientNote :scaled-card-left="true"  /> 
  <!-- we need a props for client note to get image by id and content dynamically -->
  <ClientQuote />
  <ClientCard :is-loaded="isLoaded" :first-card-index="3" :second-card-index="4" />
  <ClientList/>
  <Footer />
</template>
 
