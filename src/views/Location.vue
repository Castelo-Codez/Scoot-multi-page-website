<script setup>
import MainLandingSec from "@/components/MainLandingSec.vue";
import PrimaryBtn from "@/components/PrimaryBtn.vue";
import HeadingSec from "@/components/HeadingSec.vue";
</script>
<template>
    <MainLandingSec heading="location" />

    <section aria-label="map" class="py-16">
        <div class="container" aria-label=" content-wrapper">
            <picture aria-label=" map wrapper">
                <source
                    media="(min-width: 960px)"
                    srcset="/map/world-map-tablet.webp"
                />
                <source
                    media="(min-width: 1199.5px)"
                    srcset="/map/world-map-desktop.webp"
                />
                <img
                    src="/map/world-map-mobile.webp"
                    alt="world-map"
                    role="img"
                    class="w-full"
                    aria-label="map of world"
                />
            </picture>
        </div>
    </section>
    <section aria-label=" What you do if your city Not Listed" class="py-20">
        <div class="container" aria-label=" content wrapper">
            <article
                role="article"
                aria-label="location of your city"
                class="flex flex-col gap-y-6 items-center lg:flex-row lg:justify-between"
            >
                <HeadingSec
                    content="Your City Not Listed?"
                    class="mb-0 text-[1.5rem] md:text-[2rem] md:text-left md:basis-[21%]"
                />
                <p
                    class="font-lexend text-p-dim-grey leading-7 text-center lg:text-left md:basis-[49%]"
                    aria-label="about Our tech"
                >
                    If you’d like to see Scoot in your hometown, be sure to let
                    us know. We track requests and plan launches based on
                    demand. Feel free to message us by clicking the link or
                    messaging us on social.
                </p>
                <PrimaryBtn
                    content="Message Us"
                    class="md:basis-[15%]"
                    aria-label="Message Us if Your City Not Listed"
                />
            </article>
        </div>
    </section>
</template>
