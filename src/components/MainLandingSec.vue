<script setup>
import {ref} from "vue";

let $props = defineProps({
    heading: String,
});
</script>
<template>
    <section
        class="main-landing relative py-20 bg-no-repeat bg-cover overflow-x-hidden"
        aria-label="About"
    >
        <div class="container" aria-label="content wrapper">
            <h1
                aria-level="1"
                role="heading"
                class="text-white text-center md:text-left text-[2rem] md:text-[2.33rem] capitalize"
            >
                {{ heading }}
            </h1>
        </div>
        <div
            class="pattern absolute right-[-2%] top-2/4 -translate-y-2/4 hidden md:block"
            aria-hidden="true"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="234" height="63">
                <g fill="none" fill-rule="evenodd">
                    <circle
                        cx="31"
                        cy="31.5"
                        r="29.5"
                        stroke="#FFF"
                        stroke-width="3"
                    />
                    <circle
                        cx="117"
                        cy="31.5"
                        r="29.5"
                        stroke="#FFF"
                        stroke-width="3"
                    />
                    <circle cx="203" cy="31.5" r="31" fill="#FFF" />
                </g>
            </svg>
        </div>
    </section>
</template>
<style lang="scss" scoped>
section {
    background-image: url("/header/about-mobile.webp");
    @media (min-width: 767.5px) {
        background-image: url("/header/about-tablet.webp");
    }
    @media (min-width: 991.5px) {
        background-image: url("/header/about-desktop.webp");
    }
}
</style>
