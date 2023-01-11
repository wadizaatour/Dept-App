<template>
  <a href="https://dept.com/" class="flex" :class="className">
    <img width="73" height="20" :src="logoName" alt="Dept Logo" />
  </a>
</template>
<script lang="ts" setup>
defineProps<{ className: string, logoName: string }>()
</script>