<template>
  <div class="print:hidden">
    <v-navigation-drawer
      :v-click-outside="toggleNav"
      temporary
      v-model="navOpen"
    >
      <v-list>
        <v-list-item><router-link to="/">Home</router-link></v-list-item>

        <v-list-item><router-link to="/about">About</router-link></v-list-item>

        <v-list-item
          ><router-link to="/media-log">Media Log</router-link></v-list-item
        >

        <v-list-item
          ><router-link to="/resume">Resume</router-link></v-list-item
        >

        <v-list-item
          ><router-link to="/block-hopper"
            >Block Hopper</router-link
          ></v-list-item
        >

        <v-list-item><router-link to="/posts">Posts</router-link></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar>
      <template v-slot:prepend>
        <v-app-bar-nav-icon
          class="md:hidden"
          v-on:click="toggleNav"
        ></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title class="text-primary text-xl mr-6"
        >Andis<span class="text-secondary">Reks</span>
      </v-app-bar-title>
    </v-app-bar>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "AppNav",
  data() {
    return {
      navOpen: false,
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
