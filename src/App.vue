<script setup>
import {  RouterView } from 'vue-router'
import HeaderBlock from "@/components/Header/HeaderBlock.vue";
import FooterBlock from "@/components/Footer/FooterBlock.vue";
</script>

<template>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <title></title>
  </head>
  <HeaderBlock />
  <RouterView />
  <FooterBlock />
</template>

