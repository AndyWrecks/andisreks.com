<template>
  <v-bottom-navigation
    class="fixed bottom-0 bg-white w-screen justify-space-between print:hidden flex-grow flex flex-row h-14 md:hidden"
  >
    <v-btn :rounded="0" color="secondary" class="flex-grow z-30 h-full">
      <div>
        <v-icon icon="mdi-filter"></v-icon>
        Filter
      </div>

      <v-menu
        activator="parent"
        transition="slide-y-transition"
        :close-on-content-click="false"
        scroll-strategy="reposition"
        class="fixed"
      >
        <div>
          <v-list class="flex flex-col bg-white space-y-2">
            <ResumeFilters />
          </v-list>
        </div>
      </v-menu>
    </v-btn>

    <v-btn
      class="flex bg-blue flex-row items-center justify-around flex-grow h-full"
      :rounded="0"
      variant="tonal"
      v-on:click="printResume"
    >
      <div>
        <v-icon icon="mdi-download"></v-icon>
        <span> Resumé </span>
      </div>
    </v-btn>
  </v-bottom-navigation>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ResumeFilters from "@/components/ResumeFilters.vue";

export default defineComponent({
  name: "ResumeBottomNav",
  components: { ResumeFilters },
  props: {
    printResume: {},
  },
});
</script>
