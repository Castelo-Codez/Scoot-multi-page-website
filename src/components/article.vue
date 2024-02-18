<script setup>
import PrimaryBtn from "./PrimaryBtn.vue";
defineProps({
    heading: String,
    para: String,
    btn: Boolean,
    buttonContent: String,
});
</script>

<template>
    <article
        role="article"
        aria-label="article scooter sharing"
        class="text-p-dark-navy text-center 2xl:text-left 2xl:w-[60%]"
    >
        <h1
            aria-level="1"
            role="heading"
            class="text-[2.1rem] lg:text-[3.5rem] leading-[50px]"
        >
            {{ heading }}
        </h1>
        <p
            aria-label="about scooting"
            class="font-lexend mt-10 z-50 leading-7 2xl:w-[60%]"
        >
            {{ para }}
        </p>
        <PrimaryBtn
            v-if="btn"
            :content="buttonContent"
            class="mt-5 mx-auto block w-fit 2xl:mx-0"
        />
    </article>
</template>
