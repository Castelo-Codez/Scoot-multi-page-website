<script setup>
import HeadingSecVue from "./HeadingSec.vue";
defineProps({
    heading: String,
});
</script>
<template>
    <div class="container" aria-label="content wrapper">
        <HeadingSecVue :content="heading" />
        <ul
            role="list"
            aria-label="about our values"
            class="grid grid-cols-1 md:grid-cols-auto-fill gap-28"
        >
            <li
                role="listitem"
                class="flex flex-col items-center gap-y-16"
                aria-label="Our tech"
            >
                <div
                    aria-label="image wrapper"
                    class="relative after:font-lexend after:absolute after:w-[100px] after:h-[100px] after:bg-p-yellow after:rounded-full after:flex after:justify-center after:items-center after:left-2/4 after:-translate-x-2/4 after:bottom-[-16%] after:text-[1.5rem]"
                >
                    <img
                        src="/our-tech.webp"
                        role="img"
                        aria-label="image"
                        class="max-w-full rounded-full"
                        alt="tech"
                    />
                </div>
                <article role="article" class="text-center" aria-label="info">
                    <h3
                        aria-level="3"
                        class="text-p-dark-navy text-[2rem] mb-4"
                        role="heading"
                    >
                        Our tech
                    </h3>
                    <p
                        class="font-lexend text-p-dim-grey leading-7"
                        aria-label="about Our tech"
                    >
                        We’re using cutting edge technology to drive accessible
                        urban transportation forward. Our fully electric
                        scooters are a joy to ride!
                    </p>
                </article>
            </li>
            <li
                role="listitem"
                class="flex flex-col items-center gap-y-16"
                aria-label="Our integrity"
            >
                <div
                    aria-label="image wrapper"
                    class="relative after:font-lexend after:absolute after:w-[100px] after:h-[100px] after:bg-p-yellow after:rounded-full after:flex after:justify-center after:items-center after:left-2/4 after:-translate-x-2/4 after:bottom-[-16%] after:text-[1.5rem]"
                >
                    <img
                        src="/our-integrity.webp"
                        role="img"
                        aria-label="image"
                        class="max-w-full rounded-full"
                        alt="integrity"
                    />
                </div>
                <article role="article" class="text-center" aria-label="info">
                    <h3
                        aria-level="3"
                        class="text-p-dark-navy text-[2rem] mb-4"
                        role="heading"
                    >
                        Our integrity
                    </h3>
                    <p
                        class="font-lexend text-p-dim-grey leading-7"
                        aria-label="about Our integrity"
                    >
                        We are fully committed to deliver a great yet safe,
                        sustainable micro-mobility experience in every city we
                        serve.
                    </p>
                </article>
            </li>
            <li
                role="listitem"
                class="flex flex-col items-center gap-y-16"
                aria-label="Our community"
            >
                <div
                    aria-label="image wrapper"
                    class="relative after:font-lexend after:absolute after:w-[100px] after:h-[100px] after:bg-p-yellow after:rounded-full after:flex after:justify-center after:items-center after:left-2/4 after:-translate-x-2/4 after:bottom-[-16%] after:text-[1.5rem]"
                >
                    <img
                        src="/our-community.webp"
                        role="img"
                        aria-label="image"
                        class="max-w-full rounded-full"
                        alt=""
                        community
                    />
                </div>
                <article role="article" class="text-center" aria-label="info">
                    <h3
                        aria-level="3"
                        class="text-p-dark-navy text-[2rem] mb-4"
                        role="heading"
                    >
                        Our community
                    </h3>
                    <p
                        class="font-lexend text-p-dim-grey leading-7"
                        aria-label="about Our community"
                    >
                        We support every community we serve. All workers are
                        paid a living wage based on their location and are Scoot
                        employees.
                    </p>
                </article>
            </li>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
li {
    counter-increment: li;
    > div {
        &::after {
            content: "0" counter(li);
        }
    }
}
</style>
