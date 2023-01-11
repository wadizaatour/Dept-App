<script lang="ts" setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import HeroSection from './components/HeroSection.vue'
import { onBeforeMount, defineAsyncComponent } from "vue";
import { useClientStore } from "./stores/clients";
import { ref } from "vue";

const isLoaded = ref(false); 
onBeforeMount(() => {
  const store = useClientStore()
  store.loadClients(); 
     isLoaded.value = true 
});

</script>
<template>
  <NavBar />
  <HeroSection />
  <router-view />
  <Footer></Footer>
</template>
 
