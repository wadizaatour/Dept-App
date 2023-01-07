<template>
    <div class="flex flex-row items-start p-0 relative max-h-[568px] h-[568px]">
        <img class="object-fill" style="max-height: inherit;" src="../assets/clientNote.png" alt="Office" />
        <div class="bg-[#121212] " style="width:100% ; height: inherit;">
            <ul class="px-8 py-24">
                <li class="text-lg font-normal leading-4 text-white border-b-white border-b "
                    :class="removeFirstElement(item)" v-for="item in listItems">
                    <div class="max-w-xl  flex flex-col gap-3">
                        <!-- title -->
                        <p class="text-base font-normal leading-4  text-white">{{ item.title }}</p>
                        <!-- description -->
                        <p class="text-base font-normal leading-4  text-white">{{ item.desription }}</p>
                        <!-- readmore -->
                        <button v-if="item.readmore" class="flex items-center gap-3 hover:underline">
                            <img class="h-3 w-3" src="../assets/dot.svg" alt="dot" />
                            <p>Read more</p>
                        </button>

                    </div>
                </li>

            </ul>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { fetchMessage } from '../services/fetchers';
import { Element } from '../models/Elements';
const listItems = ref<Element[]>([]);
onMounted(() => { getData() })

async function getData() {
    const res = await fetchMessage()
    listItems.value = res;
}

const removeFirstElement = (item: any) => {
    const firstId = 1
    if (item.id === firstId) {
        return "pb-9"
    } else {
        return "pb-9 pt-9"
    }
}
</script>

