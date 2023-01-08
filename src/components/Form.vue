<template>
    <div class="flex flex-row p-20">
        <div id="question">
            <p class="text-4xl leading-[80px]">
                QUESTION?
                WE ARE HERE
                TO HELP!
            </p>
        </div>
        <div id="form" class="">
            <div id="contact" class="flex flex-row gap-9">
                <Inputs labelTitle="Name" typeInput="text" />
                <Inputs labelTitle="Email" typeInput="email" />
            </div>
            <div id="message" class="flex pt-10">
                <Inputs labelTitle="Message" typeInput="text" />
            </div>
            <div class="pt-20">
            <input type="submit" value="SEND" class="btn rounded-3xl px-10 text-base border-black border"/>  
            </div>
        </div>
    </div>
</template>
 
<script lang="ts" setup>
import Inputs from "./Inputs.vue"
</script>

