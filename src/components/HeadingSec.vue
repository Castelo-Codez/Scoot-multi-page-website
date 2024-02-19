<script setup>
defineProps({
    content: String,
});
</script>
<template>
    <h2
        role="heading"
        aria-level="2"
        class="text-center text-p-dark-navy text-[2.5rem] md:text-[3.5rem] mb-20"
    >
        {{ content }}
    </h2>
</template>
