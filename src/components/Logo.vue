<template>
      <a href="https://dept.com/" class="flex" :class="className">
        <img :src="logoName" alt="Dept Logo" />
      </a>
</template>
<script lang="ts" setup>
defineProps<{ className: string, logoName: string }>()
</script>