<template>
    <div class=" flex justify-between items-center h-24 bg-white">
        <span class="p-8 text-[#A3A3A3]">Show me 
             <button class="text-black">All work</button>
        </span>
        <span class="p-8 text-[#A3A3A3] max-w-xs flex flex-row items-center">In
            <!-- <button class="text-black">All Industry</button> -->
            <label for="Industry" class="text-black">All Industry</label>
            <select class="w-5" v-model="IndustryValue" name="Industry" id="Industry" @change="updateRoute">
                <option v-for="name in IndustryName" :value="name">{{ name }}</option>               
        </select>
        <button class="hidden md:flex" @click="$emit('toggeled', toggleList = !toggleList)"> 
            <ToggleView />
        </button>      
        </span>
    </div>
</template>
<script lang="ts" setup>
import {Industry} from "../models/client"
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import ToggleView from './Icons/ToggleView.vue'
const IndustryValue = ref('')
const toggleList = ref(false)
const router = useRouter()
const IndustryName = Object.values(Industry)
const updateRoute = () => {
    router.push({ name: 'Industry', params: { industry: IndustryValue.value } })
}
</script>