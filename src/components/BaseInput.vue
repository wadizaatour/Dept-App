<template>
    <div class="flex flex-col ">
        <label class="text-base" :for="labelTitle">{{ labelTitle }}</label>
        <Field 
            :id="labelTitle"
            :type="typeInput" 
            :name="name"
            :rules="(validationRules as any)"
            required
            class="border-b-black border-b hover:none" 
        />
        <ErrorMessage :name="name" class="text-red-600"/>
    </div>
</template>
<script lang="ts" setup>
import { ErrorMessage, Field } from 'vee-validate';

defineProps<{ 
    labelTitle: string,
    typeInput: string,
    name: string,
    validationRules: (value:string) => any
}>()
</script>