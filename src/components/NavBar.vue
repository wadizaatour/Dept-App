<template>
  <nav class="flex bg-[#121212] px-14" :class="navClasses">
   <div class="flex flex-col top-8 gap-10" :class="logoClass">
     <!-- LOGO -->
      <a href="https://dept.com/" class="flex items-center">
        <img  src="../assets/deptLogo.svg" alt="Dept Logo" />
      </a>
      <!-- <a href="https://dept.com/" class="items-center  flex">
        <img  src="../assets/logoBlack.svg" alt="Dept Logo" />
      </a> -->
      <!-- COUNTRIES -->
      <ul  v-if="isOpen" class="flex flex-col w-40 text-base font-normal leading-4  gap-1 bg-[#121212]">
        <li v-for="item in CountriesItem " class=" font-normal text-white text-1xl w-full">
          <a  href="#" aria-current="page" :key="item">{{ item }}</a>
        </li>
      </ul>
   </div>
    <!-- MENU + BUTTON #openNav -->
    <div v-if="isOpen" class="flex flex-col items-end gap-10 w-full">
      <button @click="toggleMenu">
        <component :is="exitMenu" class="fill-current transition ease-in-out delay-150hover:-translate-y-1 hover:scale-110 duration-300" />
      </button>
      <ul class="flex flex-col  gap-2 w-full">
        <li v-for="item in MenuToggled " class="  font-normal  text-white text-4xl border-b-white border-b w-full">
          <a class="flex justify-end" href="#" aria-current="page" :key="item">{{ item }}</a>
        </li>
      </ul>
    </div>
  <!-- MENU + BUTTON #closedNav -->
    <ul v-if="!isOpen" class="flex flex-row justify-center items-center gap-12 ">
      <li v-for="item in Menu " class="text-lg font-normal leading-4 hover:underline text-white">
        <a href="#" aria-current="page" :key="item">{{ item }}</a>
      </li>
    </ul>
    <button v-if="!isOpen" @click="toggleMenu">
      <component :is="dots" class="fill-current transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
    </button>
  </nav>
</template>
<script setup lang="ts">

import { computed, ref, defineAsyncComponent } from "vue"
import { MenuTitles, MenuTitlesLarge, Countries } from "../models/menu"
let isOpen = ref(false)

const Menu = Object.values(MenuTitles)
const MenuToggled = Object.values(MenuTitlesLarge)
const CountriesItem = Object.values(Countries)

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
}

const dots = defineAsyncComponent(() =>
  import(`../assets/dots.svg`)
);

const exitMenu = defineAsyncComponent(() =>
  import(`../assets/exitMenu.svg`)
);

const navClasses = computed(() => {
  return isOpen.value ? "h-screen items-start p-[46px] transition ease-in-out delay-150  duration-10" : "h-[115px] items-center justify-between"
});
const logoClass = computed(() => {
  return isOpen.value ? "absolute" : ""
});


</script>
