<script lang="ts" setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import HeroSection from './components/HeroSection.vue'
import ClientNote from './components/ClientNote.vue'
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
  <ClientNote />
  <ClientCard :is-loaded="isLoaded" v-if="isLoaded"/>
  <Footer />
</template>
 
