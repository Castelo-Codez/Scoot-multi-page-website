<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import SignUp from "./components/SignUp.vue";
import {RouterView} from "vue-router";
</script>
<template>
    <Header />
    <RouterView />
    <SignUp />
    <Footer />
</template>
