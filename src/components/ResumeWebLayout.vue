<template>
  <v-container>
    <h1 class="mx-3 my-4 text-h4">Experience</h1>
    <div class="flex flex-row justify-between md:space-x-4 mt-4">
      <ResumeFilters class="hidden md:block md:max-w-xs flex-grow" />
      <ResumeExperienceCards />
    </div>

    <h1 class="mx-3 my-4 text-h4">Education</h1>
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import ResumeFilters from "@/components/ResumeFilters.vue";
import ResumeExperienceCards from "@/components/ResumeExperienceCards.vue";

export default defineComponent({
  name: "ResumeWebLayout",
  components: { ResumeExperienceCards, ResumeFilters },
  data() {
    return {
      mobileFilters: true,
    };
  },
  computed: {},
  beforeMount() {
    const store = useStore();

    store.dispatch("experienceStore/setAvailableFilters");
  },
});
</script>
