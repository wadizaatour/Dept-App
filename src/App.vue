<script lang="ts" setup>
import NavBar from './components/NavBar.vue'
import Form from './components/Form.vue'
import Footer from './components/Footer.vue'
import HeroSection from './components/HeroSection.vue'
import ClientNote from './components/ClientNote.vue'
import ClientQuote from './components/ClientQuote.vue'
import ClientList from './components/ClientList.vue'
import FilterList from './components/FilterList.vue'
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
  <router-view />
  <Footer></Footer>
</template>
 
