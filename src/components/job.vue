<script setup>
import PrimaryBtnVue from "./PrimaryBtn.vue";
defineProps({
    title: String,
    location: String,
});
</script>
<template>
    <li
        role="listitem"
        aria-label="job"
        class="p-5 flex flex-col gap-y-5 md:flex-row justify-between bg-p-light-grey items-center"
    >
        <article aria-label="job content" class="text-center md:text-left">
            <h3
                aria-label="job title"
                aria-level="3"
                role="heading"
                class="text-[1rem] md:text-[1.5rem] text-p-dark-navy"
            >
                {{ title }}
            </h3>
            <h4
                aria-label="location"
                aria-level="4"
                role="heading"
                class="text-p-dim-grey"
            >
                {{ location }}
            </h4>
        </article>
        <PrimaryBtnVue content="Apply" aria-label="Apply for the job" />
    </li>
</template>
<style scoped lang="scss">
li {
    margin-bottom: 20px;
    :is(:last-child) {
        margin: 0;
    }
}
</style>
