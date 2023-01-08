<template>
    <div class="flex flex-col ">
        <label class="text-base">{{ labelTitle }}</label>
        <input :type="typeInput" required class=" border-b-black border-b hover:none" />
    </div>
</template>
<script lang="ts" setup>
defineProps<{ labelTitle: string, typeInput: string }>()
</script>

