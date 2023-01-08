<template>
    <nav class="flex justify-between bg-[#121212] px-14 h-screen items-start p-[46px]">
      <a href="https://dept.com/" class="flex items-center">
        <img src="../assets/deptLogo.svg" alt="Flowbite Logo" />
      </a>
     <div class="flex flex-col-reverse items-end">
        <ul class="flex flex-col justify-center ">
          <li v-for="item in Menu " class="text-lg font-normal leading-4 hover:underline text-white">
            <a href="#" aria-current="page" :key="item">{{ item }}</a>
          </li>
        </ul>
        <button @click="toggleMenu">
          <component :is="isOpen ? exitMenu : dots" class="fill-current" />
        </button>
     </div>
    </nav>
  </template>
  <script setup lang="ts">
  import { computed, ref, defineAsyncComponent } from "vue"
  import { MenuTitlesLarge } from "../models/menu"
  
  let isOpen = ref(false)
  const Menu = Object.values(MenuTitlesLarge)
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
  