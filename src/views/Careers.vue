<script setup>
import MainLandingSecVue from "@/components/MainLandingSec.vue";
import FeaturesLayout from "@/components/FeaturesLayout.vue";
import OurThingsLauout from "@/components/OurThingsLauout.vue";
import job from "@/components/job.vue";
import {ref} from "vue";
const $jobs = ref([
    {
        title: "General Manager",
        location: "Jakarta, Indonesia",
    },
    {
        title: "General Manager",
        location: "Jakarta, Indonesia",
    },
    {
        title: "UI/UX Designer",
        location: "Yokohama, Japan",
    },
    {
        title: "Blog Content Copywriter",
        location: "New York, United States",
    },
    {
        title: "Graphic Designer",
        location: "New York, United States",
    },
    {
        title: "Fleet Supervisor",
        location: "Jakarta, Indonesia",
    },
    {
        title: "UX Analyst",
        location: "London, United Kingdom",
    },
]);
</script>
<template>
    <MainLandingSecVue heading="careers" />
    <section aria-label="join our mission" class="py-20">
        <FeaturesLayout
            heading="Care to join our mission?"
            para="We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!"
            :btn="true"
            button-content="Say Hello"
            src="/info/join-us.webp"
            alt="join"
            :article-first="true"
        />
    </section>
    <section aria-label="why join us" class="py-20">
        <OurThingsLauout heading="Why Join Us?" />
    </section>
    <section aria-label="Jobs section" class="py-20">
        <div class="container" aria-label=" content wrapper">
            <ul role="list" aria-label=" jobs list" class="w-full">
                <job
                    v-for="job in $jobs"
                    :title="job.title"
                    :location="job.location"
                />
            </ul>
        </div>
    </section>
</template>
