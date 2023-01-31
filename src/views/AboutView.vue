<template>
  <v-container class="about h-full">
    <div class="flex flex-col h-full justify-center items-start">
      <v-card flat>
        <div class="flex flex-row items-center">
          <h1 class="mt-4">Andis Reks</h1>
        </div>
        <h2>Front-End Engineer</h2>
        <h3>Providence, RI</h3>
      </v-card>

      <p class="md:w-1/2 mt-10">
        Hello! I am a Front-End Engineer with experience in both enterprise and
        consumer websites and applications. I have a passion for friendly UI,
        sustainable engineering practices, and data visualization.
      </p>

      <p class="md:w-1/2 mt-5">
        I worked as a software engineer for Fitbit, Google, and Feast & Fettle,
        driving projects on marketing websites, health coaching dashboards, and
        storefront applications, as well as developing team's Agile workflows.
      </p>

      <div class="mt-10 -ml-4">
        <SocialLink />
      </div>
    </div>
  </v-container>
</template>
<script setup lang="ts">
import SocialLink from "@/views/SocialLink.vue";
</script>
