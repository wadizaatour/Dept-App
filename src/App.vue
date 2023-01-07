
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
      // console.log(this.elements)
    }
    catch (error) {
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
  <NavBar />
  <HeroSection />
  <ClientNote />
  <Footer />
</template>
 
