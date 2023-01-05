<template>
  <v-app>
    <v-layout>
      <div class="print:hidden">
        <v-app-bar>
          <nav class="flex flex-row items-baseline">
            <span class="text-primary text-xl mr-6"
              >Andis<span class="text-secondary">Reks</span></span
            >

            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/media-log">Media Log</router-link> |
            <router-link to="/resume">Resume</router-link> |
            <router-link to="/block-hopper">Block Hopper</router-link>
          </nav>
        </v-app-bar>
      </div>

      <!--      <v-navigation-drawer color="grey-darken-2"></v-navigation-drawer>-->

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
