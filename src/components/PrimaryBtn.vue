<script setup>
defineProps({
    content: String,
});
</script>
<template>
    <button
        type="button"
        role="button"
        class="py-3 px-6 bg-p-yellow border border-p-yellow transition duration-300 hover:bg-transparent hover:text-p-yellow text-p-snow text-sm"
    >
        {{ content }}
    </button>
</template>
