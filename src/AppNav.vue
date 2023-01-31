<template>
  <div class="print:hidden">
    <v-navigation-drawer
      :v-click-outside="toggleNav"
      temporary
      v-model="navOpen"
      width="auto"
      class="fixed"
    >
      <MobileLinks :links="links" />

      <div
        class="absolute bottom-4 w-full transform left-0 grid grid-cols-2 gap-y-4"
      >
        <SocialLink></SocialLink>
      </div>
    </v-navigation-drawer>

    <v-sheet class="bg-red">
      <v-container class="pa-0">
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
      </v-container>
    </v-sheet>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import MobileLinks from "@/MobileLinks.vue";
import SocialLink from "@/views/SocialLink.vue";

export default defineComponent({
  name: "AppNav",
  components: { SocialLink, MobileLinks },
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
