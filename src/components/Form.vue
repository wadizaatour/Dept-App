<template>
    <div class="flex flex-row p-20">
        <div id="question" class="m-8">
            <p class="text-4xl leading-[80px]">
                QUESTION?
            </p>
            <p class="text-4xl leading-[80px]">
                WE ARE HERE 
            </p>
            <p class="text-4xl leading-[80px]">
                TO HELP!
            </p>
        </div>
        <Form id="form" class="m-8" @submit="onSubmit">
            <div id="contact" class="flex flex-row gap-9">
                <Input labelTitle="Name" name="name" typeInput="text" :validationRules="validateName"/>
                <Input labelTitle="Email" name="email" typeInput="email" :validationRules="validateEmail" />
            </div>
            <div id="message" class="flex pt-10">
                <Input labelTitle="Message" name="message" typeInput="text" :validationRules="validateMessage" />
            </div>
            <div class="pt-20">
                <input type="submit" value="SEND" class="btn rounded-3xl px-10 text-base border-black border" />
            </div>
        </Form>
    </div>
</template>
 
<script lang="ts" setup>
import Input from "./Input.vue"
import { Form, RuleExpression } from 'vee-validate';

const isRequired = (value:string): string |undefined => {
    if (!value) {
        return 'This field is required';
    }
}

const onSubmit = (values: any) => {
    console.log(values)
}

const validateEmail = (value:string) => {
    if (!value) {
        return 'This field is required';
    }

    // if the field is not a valid email
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!regex.test(value)) {
        return 'This field must be a valid email';
    }
    // All is good
    return true;
};

const validateName = (value:string) =>{
    if (!value) {
        return 'This field is required';
    }

    if (value.length < 5) {
        return 'This field must have a length of 5 characters'
    }

    return true;
}

const validateMessage = (value:string) =>{
    if (!value) {
        return 'This field is required';
    }

    if (value.length < 20) {
        return 'This field must have a length of 20 characters'
    }

    return true;
}

</script>

