<template>
    <div class=" flex justify-between items-center h-24 bg-white">
        <span class="p-8 text-[#A3A3A3]">Show me
            <button @click="goHome" name="allwork" class="text-black">All work</button>
        </span>
        <span class="p-8 text-[#A3A3A3] max-w-xs flex flex-row items-center">In
            <label for="Industry" class="text-black">All Industry</label>
            <select class="w-5" v-model="IndustryValue" name="Industry" id="Industry" @change="updateRoute">
                {{ IndustryValue }}
                <option v-for="name in IndustryName" :value="name">{{ name }}</option>
            </select>
            <button class="hidden md:flex" @click="handleChange" name="toggleview">
                <ToggleView />
            </button>
        </span>
    </div>
</template>
<script lang="ts" setup>
import { Industry } from "../models/client"
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import ToggleView from './Icons/ToggleView.vue'
const IndustryValue = ref('')
const toggleList = ref(false)
const router = useRouter()
const IndustryName = Object.values(Industry)
const updateRoute = () => {
    emit('filter', IndustryValue.value)
    router.push({ name: 'Industry', params: { industry: IndustryValue.value } })
}
const goHome = () => {
    const disabledFilter = false
    emit('press', disabledFilter)
    router.push({ name: 'Home', })

}
const emit = defineEmits(['toggeled', 'filter', 'press'])

const handleChange = () => {
    toggleList.value = !toggleList.value
    emit('toggeled', toggleList.value)
}
</script>