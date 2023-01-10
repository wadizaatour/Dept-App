<template>
    
<footer class=" first-line: bg-[#121212] shadow p-12 dark:bg-gray-900 ">
    <div class="sm:flex sm:items-center sm:justify-start gap-28">
        <Logo className="items-start hidden md:flex" logoName="../src/assets/deptLogo.svg"/>
        <ul class="flex flex-col md:flex-row gap-8 md:items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li v-for="item in FooterItems"> 
                <a href="#" class="mr-4 text-[#FFFFFF] text-base hover:underline md:mr-6 ">{{ item }}</a>
            </li>
            
        </ul>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
     <div class="text-[#FFFFFF] flex flex-col gap-6 md:flex-row justify-between pt-11">
        <span class="flex flex-col md:flex-row md:gap-9">             
        <p v-for="text in FooterContent" class="text-[#808080]">  {{ text }}   </p>
        </span>
        <span class="text-[#808080]">© 2022 Dept Agency</span>
     </div>
</footer>

</template>
<script lang="ts" setup>
import { FooterTitles } from "../models/menu"
import Logo from "./Logo.vue"
const FooterItems = Object.values(FooterTitles)
const FooterContent = ["Chamber of Commerce: 63464101", "VAT: NL 8552.47.502.B01", "Terms and conditions" ]
</script>