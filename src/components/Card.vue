<template>
    <div class=" items-start relative w-full">
        <img class="object-fill w-full" style="max-height: inherit;" :src="src" alt="Office" />
        <div class="max-w-xl absolute bottom-20 left-14 flex flex-col gap-8">
            <p class="text-base font-normal leading-4  text-white">{{ title }}</p>
            <p class="text-4xl font-normal leading-9  text-white">{{ description }}</p>
            <button v-if="readmore" class="flex items-center gap-3 hover:underline">
                <img class="h-3 w-3" src="../assets/dot.svg" alt="dot" />
                <p class=" text-white">Read more</p>
            </button>
        </div>
    </div>

</template>
<script lang="ts" setup>
defineProps<{ title: string, description: string, readmore: boolean, src: string }>()
//A selection of projects that pioneer tech and marketing to help brands stay ahead.
</script>