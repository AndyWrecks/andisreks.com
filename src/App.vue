<template>
  <v-app>
    <v-layout>
      <v-app-bar>
        <nav class="print:hidden">
          <v-icon icon="mdi-home" />
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link> |
          <router-link to="/resume">Resume</router-link>
        </nav>
      </v-app-bar>

      <v-navigation-drawer
        color="grey-darken-2"
        permanent
      ></v-navigation-drawer>

      <v-main>
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
