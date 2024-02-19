<script setup>
import MainLandingSec from "@/components/MainLandingSec.vue";
import HeadingSec from "@/components/HeadingSec.vue";
import FeaturesLayout from "@/components/FeaturesLayout.vue";
import OurThingsLauout from "@/components/OurThingsLauout.vue";
import accordion from "@/components/accordion.vue";
</script>
<template>
    <MainLandingSec src="about" heading="about" />
    <section aria-label="features" class="py-28 ">
        <FeaturesLayout
            heading="Mobility for the digital era"
            para="Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips."
            :btn="false"
            src="/info/digital-era.webp"
            :article-first="true"
        />
        <FeaturesLayout
            heading="Better urban living"
            para="We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride."
            :btn="false"
            src="/info/better-living.webp"
            :article-first="false"
        />
    </section>
    <section aria-label="about our values" class="pb-28">
        <OurThingsLauout heading="Our Values" />
    </section>
    <section aria-label="common questions">
        <HeadingSec content="FAQs" />
        <div class="container">
            <div
                class="grid grid-cols-1 md:grid-cols-2 gap-y-14 mb-12"
                aria-label=" how it works"
            >
                <h3
                    class="text-p-dark-navy text-center md:text-left text-[1.8rem] md:text-[2.3rem] capitalize"
                >
                    how it works
                </h3>
                <ul role="list" aria-label="questions">
                    <accordion
                        question="How do I download the app?"
                        answer="To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page."
                    />
                    <accordion
                        question="Can I find a nearby Scoots?"
                        answer="To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page."
                    />
                    <accordion
                        question="Do I need a license to ride?"
                        answer="To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page."
                    />
                </ul>
            </div>
            <div
                class="grid grid-cols-1 md:grid-cols-2 gap-y-14 mb-12"
                aria-label="Safe driving"
            >
                <h3
                    class="text-p-dark-navy text-center md:text-left text-[1.8rem] md:text-[2.3rem] capitalize"
                >
                    Safe driving
                </h3>
                <ul role="list" aria-label="questions">
                    <accordion
                        question="Should I wear a helmet?"
                        answer="To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page."
                    />
                    <accordion
                        question="How about the rules & regulations?"
                        answer="To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page."
                    />
                </ul>
            </div>
        </div>
    </section>
</template>
