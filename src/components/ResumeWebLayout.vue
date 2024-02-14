<template>
  <v-container>
    <v-btn-toggle v-model="activeSection" color="primary">
      <v-btn> Experience </v-btn>

      <v-btn> Education </v-btn>
    </v-btn-toggle>
    <div
      v-if="activeSection === 0"
      class="flex flex-col justify-between md:space-x-4 mt-4"
    >
      <ResumeFilters class="" />
      <ResumeExperienceCards class="grid md:grid-cols-2 gap-4" />
    </div>

    <div v-if="activeSection === 1">
      <div class="grid md:grid-cols-3 gap-4 flex-grow my-4">
        <ResumeCard
          sub-head="Rochester Institute of Technology"
          title="Media Arts and Technology (B.S.)"
          subtitle="2009 - 2013"
          time="2009 - 2013"
        />
      </div>
    </div>
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import ResumeFilters from "@/components/ResumeFilters.vue";
import ResumeExperienceCards from "@/components/ResumeExperienceCards.vue";
import ResumeCard from "@/components/ResumeCard.vue";

export default defineComponent({
  name: "ResumeWebLayout",
  components: { ResumeCard, ResumeExperienceCards, ResumeFilters },
  data() {
    return {
      activeSection: 0,
    };
  },
  computed: {},
  beforeMount() {
    const store = useStore();

    store.dispatch("experienceStore/setAvailableFilters");
  },
});
</script>
