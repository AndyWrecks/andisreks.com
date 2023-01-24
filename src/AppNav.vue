<template>
  <div class="print:hidden">
    <v-navigation-drawer
      :v-click-outside="toggleNav"
      temporary
      v-model="navOpen"
    >
      <MobileLinks :links="links" />
    </v-navigation-drawer>

    <v-app-bar>
      <template v-slot:prepend>
        <v-app-bar-nav-icon
          class="md:hidden"
          v-on:click="toggleNav"
        ></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title class="text-primary text-xl mr-6">
        <router-link to="/">
          Andis<span class="text-secondary">Reks </span>
        </router-link>
      </v-app-bar-title>

      <template v-slot:append>
        <div class="hidden md:block">
          <v-btn
            v-for="(item, index) in links.main"
            :key="`desktop-item-main-${index}`"
            :to="item.url"
            >{{ item.name }}</v-btn
          >
        </div>
      </template>
    </v-app-bar>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import MobileLinks from "@/MobileLinks.vue";

export default defineComponent({
  name: "AppNav",
  components: { MobileLinks },
  data() {
    return {
      navOpen: false,
      links: {
        main: [
          {
            name: "About",
            url: "/about",
          },
          {
            name: "Resume",
            url: "/resume",
          },
          {
            name: "Media Log",
            url: "/media-log",
          },
        ],
        side: [
          {
            name: "Block Hopper",
            url: "/block-hopper",
          },
          {
            name: "Posts",
            url: "/posts",
          },
        ],
      },
    };
  },
  computed: {
    drawerOpen() {
      const store = useStore();

      console.log(store.getters["mediaLog/getNavStatus"]);
      return store.getters["mediaLog/getNavStatus"];
    },
  },
  methods: {
    toggleNav() {
      this.navOpen = !this.navOpen;
    },
  },
});
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
