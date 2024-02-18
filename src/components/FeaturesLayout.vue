<script setup>
import MainArticle from "./article.vue";
defineProps({
    heading: String,
    para: String,
    btn: Boolean,
    buttonContent: String,
    src: String,
    alt: String,
    articleFirst: Boolean,
});
</script>
<template>
    <div
        class="container mb-20 flex flex-col gap-y-9 md:justify-between md:flex-row md:items-center"
        aria-label="content wrapper"
    >
        <MainArticle
            :heading="heading"
            :para="para"
            :btn="btn"
            :button-content="buttonContent"
            class="md:basis-[45%]"
        />
        <div
            aria-label="image wrapper"
            class="order-first md:basis-[45%] relative"
            :class="{'md:order-none': articleFirst}"
        >
            <img
                role="img"
                aria-label="Feature Image"
                class="w-full min-w-0 rounded-full"
                :src="src"
                :alt="alt"
            />
            <div
                class="pattern absolute w-full h-full rounded-full top-0"
                aria-hidden="true"
                :class="[articleFirst ? 'left-[115%]' : 'right-[115%]']"
            >
                <img
                    src="/patterns/GrayCirclePattern.svg"
                    class="w-full min-w-0"
                    alt="pattern"
                />
            </div>
            <div
                class="pattern absolute w-full h-full top-0"
                aria-hidden="true"
                :class="[articleFirst ? 'line right-[-30%]' : 'right-[50%]']"
            >
                <img
                    src="/patterns/right-arrow.svg"
                    class="w-full min-w-0"
                    alt="pattern"
                    :class="[articleFirst ? 'translate-y-[200%]' : '']"
                />
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.line {
    transform: rotate3d(0, 37, 1, 180deg);
}
</style>
