<template>
    <component :key="name" role="img" :is="icon" class="fill-current" />
</template>
  
  <script lang="ts" setup>
  import { defineAsyncComponent } from 'vue';
  const props = defineProps({
    name: {
      type: String,
      required: true,
    },
  });
  let icon = defineAsyncComponent(() =>
    import(`./Icons/${props.name}.vue`)
  );
  </script>