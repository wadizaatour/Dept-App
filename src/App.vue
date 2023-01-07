
<script lang="ts">
import { fetchMessage } from './services/fetchers'

export default {
  data() {
    return {
      elements: ''
    }
  },
  async created() {
    try {
      this.elements = await fetchMessage()
      console.log( this.elements )
    }
    catch(error){
      this.elements = 'server error :('
    }
  }
}
</script>
<script lang="ts" setup>
import Main from './components/Main.vue'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import HeroSection from './components/HeroSection.vue'
import ClientNote from './components/ClientNote.vue'

</script>
<template>
  <NavBar/>
 <HeroSection/>
 <ClientNote/>
  <!-- <Main class="flex items-center" msg="Vite + Vue" /> -->
  
  
  <Footer/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
