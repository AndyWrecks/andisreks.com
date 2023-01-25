<template>
  <div>
    <ResumeLayout class="hidden print:block" />

    <ResumeWebLayout class="print:hidden" />

    <footer
      class="fixed bottom-0 bg-white w-screen justify-space-between flex-grow flex flex-row h-14 md:hidden"
    >
      <v-btn :rounded="0" color="secondary" class="flex-grow h-full">
        <div>
          <v-icon icon="mdi-filter"></v-icon>
          Filter
        </div>

        <v-menu activator="parent">
          <v-list>
            <v-list-item v-for="(item, index) in 3" :key="index" :value="index">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
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
          <span class="ml-2"> Resume </span>
        </div>
      </v-btn>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ResumeLayout from "@/components/ResumeLayout.vue";
import ResumeWebLayout from "@/components/ResumeWebLayout.vue";

export default defineComponent({
  name: "ResumeTemplate",
  components: { ResumeWebLayout, ResumeLayout },
  methods: {
    /*
        Generate Report using refs and calling the
        refs function generatePdf()
    */
    printResume() {
      window.print();
    },
  },
});
</script>

<style scoped>
.v-bottom-navigation__content {
  justify-content: space-between;
}
</style>
