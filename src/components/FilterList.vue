<template>
    <div class=" flex justify-between items-center h-24 bg-white">
        <span class="p-8 text-[#A3A3A3]">Show me 
             <button class="text-black">All work</button>
        </span>
        <span class="p-8 text-[#A3A3A3] max-w-xs">In
            <!-- <button class="text-black">All Industry</button> -->
            <label for="Industry" class="text-black">All Industry</label>
            <select v-model="IndustryValue" name="Industry" id="Industry">
                <option v-for="name in IndustryName" :value="name">{{ name }}</option>               
        </select>
        </span>
    </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import {Industry} from "../models/client"

const IndustryValue = ref('')
const IndustryName = Object.values(Industry)
</script>