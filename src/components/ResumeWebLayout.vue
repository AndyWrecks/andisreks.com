<template>
  <v-container class="grid md:grid-cols-2 gap-4">
    <v-card
      v-for="(experience, expIndex) in experiences"
      :title="experience.position"
      :subtitle="experience.company"
      :key="`experience-web-${expIndex}`"
    >
      <v-card-text>
        <h3 class="text-[1rem]">Achievements</h3>
        <ul class="flex flex-col space-y-1 my-2 list-disc pl-4">
          <li
            v-for="(achievement, index) in experience.achievements"
            :key="`experience-web-${index}`"
            class="text-gray-500"
          >
            {{ achievement }}
          </li>
        </ul>

        <v-chip
          v-for="(skill, index) in experience.skills.frameworks"
          :key="`experience-web-${expIndex}-framework-${index}`"
          class="ma-2"
          color="red"
          >{{ skill }}</v-chip
        >
        <v-chip
          v-for="(skill, index) in experience.skills.design"
          :key="`experience-web-${expIndex}-design-${index}`"
          class="ma-2"
          color="green"
          >{{ skill }}</v-chip
        ><v-chip
          v-for="(skill, index) in experience.skills.projectMgmt"
          :key="`experience-web-${expIndex}-projectMgmt-${index}`"
          class="ma-2"
          color="blue"
          >{{ skill }}</v-chip
        >
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, useStore } from "vuex";

export default defineComponent({
  name: "ResumeWebLayout",
  data() {
    return {
      mobileFilters: true,
    };
  },
  computed: {
    ...mapGetters({
      experiences: "experienceStore/getExperiences",
    }),
  },
  beforeMount() {
    const store = useStore();

    store.dispatch("experienceStore/setAvailableFilters");
  },
});
</script>
