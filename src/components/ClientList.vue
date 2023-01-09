<template>
    <div class="w-full p-9 bg-[#121212] flex justify-center flex-col">
        <div id="clientText">
            <p class="text-base font-normal leading-4 pt-24 pl-8 text-white">Clients</p>
            <p class="text-4xl font-normal leading-9 p-8 text-white">
                We value a great working relationship with our clients above all else.
                It’s why they often come to our parties. It’s also why we’re able to challenge and inspire
                them to reach for the stars</p>
        </div>
        <div id="listLogo">
            <ul class="grid gap-20 grid-cols-3 grid-rows-4 place-items-center">
                <li v-for="item in clientList">
                    <SvgRendered :key="item.clientId" :name="item.clientName" />
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup lang="ts">
import SvgRendered from './SvgRendered.vue'
import clientList from '../models/clientList'
</script>
