<template> 
<nav class="flex items-center justify-between h-[115px] bg-[#121212] px-14">
      <a href="https://dept.com/" class="flex items-center">
          <img src="../assets/deptLogo.svg"  alt="Flowbite Logo" />
      </a>
      <div class="flex items-center justify-between gap-24">
        <ul class="flex flex-row justify-center items-center gap-12" >
          <li v-for="item in MenuItem " class="text-lg font-normal leading-4 hover:underline text-white">
            <a href="#" aria-current="page" :key="item">{{ item }}</a>
          </li>
        </ul>
        <button>  <img src="../assets/dots.svg"  alt="Menu" /></button>
    </div>
  </nav>
</template>
<script setup lang="ts">
    const MenuItem =  ["WORK","CULTURE","SERVICES","INSIGHTS","CARRERS", "CONTACT"]
</script>
