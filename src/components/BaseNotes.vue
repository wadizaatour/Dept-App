<template>
    <div class="bg-[#121212]">
        <ul class="px-8 py-24">
            <li class="text-lg font-normal leading-4 text-white border-b-white border-b "
                :class="removeFirstElement(item)" v-for="item in listItems">
                <div id="textContent" class="max-w-xl  flex flex-col gap-3">
                    <p class="text-base font-normal leading-4  text-white">{{ item.title }}</p>
                    <p class="text-base font-normal leading-4  text-white">{{ item.desription }}</p>
                    <button v-if="item.readmore" name="readmore" class="flex items-center gap-3 hover:underline">
                        <img class="h-3 w-3" src="../assets/dot.svg" alt="dot" />
                        <p>Read more</p>
                    </button>
                </div>
            </li>

        </ul>
    </div>
</template>
<script lang="ts" setup>import { ref, onMounted } from 'vue';
import { fetchMessage } from '../services/fetchers';
import { Element } from '../models/Elements';

const listItems = ref<Element[]>([]);
onMounted(() => { getData() })

async function getData() {
    const res = await fetchMessage()
    listItems.value = res;
}
onMounted(() => { getData() })
const removeFirstElement = (item: any) => {
    const firstId = 1
    if (item.id === firstId) {
        return "pb-9"
    } else {
        return "pb-9 pt-9"
    }
}
</script>