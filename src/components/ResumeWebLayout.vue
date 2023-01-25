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

    <v-bottom-navigation class="fixed md:hidden" grow>
      <v-btn color="primary">
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
        color="blue"
        class="flex flex-row items-center justify-around"
        variant="tonal"
      >
        <div>
          <v-icon icon="mdi-download"></v-icon>
          <span class="ml-2"> Resume </span>
        </div>
      </v-btn>
    </v-bottom-navigation>
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

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
});
</script>
