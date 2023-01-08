<template>
    <div class="w-full p-9 bg-[#121212] min-h-[977px] flex justify-center flex-col">
        <div class="">
            <p class="text-base font-normal leading-4 pt-24 pl-8 text-white">Clients</p>
            <p class="text-4xl font-normal leading-9 p-8 text-white">
                We value a great working relationship with our clients above all else.
                It’s why they often come to our parties. It’s also why we’re able to challenge and inspire
                them to reach for the stars</p>
        </div>
        <div>
            <ul class="grid gap-20 grid-cols-3 grid-rows-4 place-items-center">
                <li v-for="item, index in clientList">
                    <!-- <SvgLoader :key="index" :name="item"/> -->
                    <SvgLoader :key="index"  :name="item.name"/>
                     
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import SvgLoader from "./SvgLoader.vue" 

    const clientList =  [
    {
        name: "google",
    },
    {
        name: "spotify",
    },
    {
        name: "adyen",
    },
    {
        name: "tesla",
    },
    {
        name: "levis",
    },
    {
        name: "patagonia",
    },
    {
        name: "audi",
    },
    {
        name: "asos",
    },
    {
        name: "netflix",
    },
    {
        name: "fujitsu",
    },
    {
        name: "triumph",
    },
    {
        name: "takeaway",
    },
    ]
</script>
