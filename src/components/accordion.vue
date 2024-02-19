<script setup>
import {ref} from "vue";

defineProps({
    question: String,
    answer: String,
});
const $open = ref(false);
</script>
<template>
    <li role="listitem" aria-label="accordion">
        <button
            role="button"
            aria-label="accordion controller"
            type="button"
            class="flex w-full p-10 items-center transition duration-300 justify-between bg-p-snow hover:bg-p-yellow-light"
            aria-controls="answer"
            :aria-expanded="$open"
            @click="$open = !$open"
            :class="[$open ? ' bg-p-yellow-light' : '']"
        >
            <span
                aria-label="question"
                class="text-p-dark-navy text-[.8rem] md:text-[1.3rem]"
            >
                {{ question }}
            </span>

            <span
                aria-hidden="true"
                class="transition duration-300"
                :class="[$open ? ' rotate-180' : '']"
            >
                <svg
                    height="25px"
                    width="25px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 511.74 511.74"
                    xml:space="preserve"
                    stroke="#000000"
                    stroke-width="42.474005"
                    class="stroke-p-yellow"
                >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                        <g>
                            <g>
                                <path
                                    d="M508.788,371.087L263.455,125.753c-4.16-4.16-10.88-4.16-15.04,0L2.975,371.087c-4.053,4.267-3.947,10.987,0.213,15.04 c4.16,3.947,10.667,3.947,14.827,0l237.867-237.76l237.76,237.76c4.267,4.053,10.987,3.947,15.04-0.213 C512.734,381.753,512.734,375.247,508.788,371.087z"
                                ></path>
                            </g>
                        </g>
                    </g>
                </svg>
            </span>
        </button>
        <p
            aria-label="answer"
            v-if="$open"
            id="answer"
            :aria-hidden="!$open"
            :class="[$open ? ' bg-p-yellow-light' : '']"
            class="p-10 pt-0 bg-p-snow  text-p-dark-navy font-lexend leading-6 text-[.8rem] md:text-[1rem]"
        >
            {{ answer }}
        </p>
    </li>
</template>
<style lang="scss" scoped>
li {
    margin-bottom: 10px;
    :is(:last-child) {
        margin-bottom: 0;
    }
}
</style>
