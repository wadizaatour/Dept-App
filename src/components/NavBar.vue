<template>
  <nav class="flex items-center justify-between bg-[#121212] px-14" :class="showMenu">
    <a href="https://dept.com/" class="flex items-center">
      <img src="../assets/deptLogo.svg" alt="Flowbite Logo" />
    </a>
    <div class="flex items-center justify-between gap-24">
      <ul class="flex flex-row justify-center items-center gap-12">
        <li v-for="item in Menu " class="text-lg font-normal leading-4 hover:underline text-white">
          <a href="#" aria-current="page" :key="item">{{ item }}</a>
        </li>
      </ul>
      <button @click="toggleMenu"> <img src="../assets/dots.svg" alt="Menu" /></button>
    </div>
  </nav>
</template>
<script setup lang="ts">
import { computed, ref } from "vue"
import { MenuTitles } from "../models/menu"

let isOpen = ref(false)
const Menu = Object.values(MenuTitles)

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
}
const showMenu = computed(() => {
  console.log(isOpen.value)
    if(isOpen.value) {
      return "h-screen"
    } else {
      return "h-[115px]"
    }
});
</script>
