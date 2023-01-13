<template>
  <v-list>
    <v-list-item
      v-for="(link, index) in links.main"
      :key="`mobile-link-main-${index}`"
    >
      <router-link :to="link.url">{{ link.name }}</router-link>
    </v-list-item>
  </v-list>
</template>
<script lang="ts">
export default {
  name: "MobileLinks",
  props: {
    links: Object,
  },
  created() {
    console.log(this.props);
  },
};
</script>
<style>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
