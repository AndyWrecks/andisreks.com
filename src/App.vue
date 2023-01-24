<template>
  <v-app>
    <v-layout>
      <!--      <v-navigation-drawer color="grey-darken-2"></v-navigation-drawer>-->
      <AppNav v-if="this.$route.name !== 'home'" />
      <v-main class="print:pt-0">
        <router-view />
      </v-main>
    </v-layout>
  </v-app>
</template>

<style>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import AppNav from "@/AppNav";

export default {
  components: { AppNav },
};
</script>
