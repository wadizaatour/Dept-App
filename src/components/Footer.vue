<template>
    
<footer class=" first-line: bg-[#121212] shadow p-12 dark:bg-gray-900 h-[310px]">
    <div class="sm:flex sm:items-center sm:justify-start gap-28">
        <Logo/>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li v-for="item in FooterItems"> 
                <a href="#" class="mr-4 text-[#FFFFFF] text-base hover:underline md:mr-6 ">{{ item }}</a>
            </li>
            
        </ul>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
     <div class="text-[#FFFFFF] flex flex-row justify-between pt-11">
        <span class="flex flex-row gap-9">  
             
        <p class="text-[#808080]">  Chamber of Commerce: 63464101   </p>
       
        <p class="text-[#808080]">  VAT: NL 8552.47.502.B01 </p>
       

        <p class="text-[#808080]">  Terms and conditions</p>
        </span>
        <span class="text-[#808080]">© 2022 Dept Agency</span>
     </div>
</footer>

</template>
<script lang="ts" setup>
import { FooterTitles } from "../models/menu"
import Logo from "./Logo.vue"
const FooterItems = Object.values(FooterTitles)
</script>