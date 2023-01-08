<template>
    <nav class="flex justify-between  bg-[#121212] px-14 h-[115px] items-center">
      <a href="https://dept.com/" class="flex items-center">
        <img src="../assets/deptLogo.svg" alt="Flowbite Logo" />
      </a>
      <ul class="flex flex-row justify-center items-center gap-12">
        <li v-for="item in Menu " class="text-lg font-normal leading-4 hover:underline text-white">
          <a href="#" aria-current="page" :key="item">{{ item }}</a>
        </li>
      </ul>
      <button @click="toggleMenu">
        <component :is="isOpen ? exitMenu : dots" class="fill-current" />
      </button>
    </nav>
  </template>
  <script setup lang="ts">
  import { computed, ref, defineAsyncComponent } from "vue"
  import { MenuTitles } from "../models/menu"
  
  let isOpen = ref(false)
  const Menu = Object.values(MenuTitles)
  console.log(Menu)
  const dots = defineAsyncComponent(() =>
      import(`../assets/dots.svg`)
  );
  const exitMenu = defineAsyncComponent(() =>
     import(`../assets/exitMenu.svg`)
  );
  const toggleMenu = () => {
    isOpen.value = !isOpen.value;
  }
  
  </script>
  