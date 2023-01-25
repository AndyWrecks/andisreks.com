<template>
  <footer
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
      >
        <div class="bg-red">
          <v-list>
            <ResumeFilterSection
              :entry-array="frameworks"
              title="Tech"
              color="red"
            />
            <ResumeFilterSection
              :entry-array="design"
              title="Design"
              color="green"
            />
            <ResumeFilterSection
              :entry-array="frameworks"
              title="Project Management"
              color="blue"
            />
          </v-list>
        </div>
        <!--        <v-list class="bg-green">-->
        <!--          <v-list-item v-for="(item, index) in 3" :key="index" :value="index">-->
        <!--            <v-list-item-title>Hello</v-list-item-title>-->
        <!--          </v-list-item>-->
        <!--        </v-list>-->
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
  </footer>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import ResumeFilterSection from "@/components/ResumeFilterSection.vue";

export default defineComponent({
  name: "ResumeBottomNav",
  components: { ResumeFilterSection },
  props: {
    printResume: {},
  },
  computed: {
    ...mapGetters({
      frameworks: "experienceStore/getFrameworks",
      design: "experienceStore/getDesign",
      projectMgmt: "experienceStore/getProjectMgmt",
    }),
  },
});
</script>
