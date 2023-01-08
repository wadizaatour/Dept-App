<template>
    
<footer class="p-4 bg-[#121212] shadow md:px-6 md:py-8 dark:bg-gray-900">
    <div class="sm:flex sm:items-center sm:justify-start gap-28">
        <Logo/>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li v-for="item in FooterItems"> 
                <a href="#" class="mr-4 text-[#FFFFFF] text-base hover:underline md:mr-6 ">{{ item }}</a>
            </li>
            
        </ul>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
     <div class="text-[#FFFFFF] flex flex-row justify-between">
        <span>Chamber of Commerce: 63464101  VAT: NL 8552.47.502.B01 </span>
        
        <span>Terms and conditions</span>
     </div>
</footer>

</template>
<script lang="ts" setup>
import { FooterTitles } from "../models/menu"
import Logo from "./Logo.vue"
const FooterItems = Object.values(FooterTitles)
</script>