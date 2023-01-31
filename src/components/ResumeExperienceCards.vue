<template>
  <div class="grid md:grid-cols-2 gap-4 flex-grow">
    <v-card
      v-for="(experience, expIndex) in experiences"
      :key="`experience-web-${expIndex}`"
    >
      <span class="absolute text-secondary top-4 right-4"></span>
      <v-card-item>
        <v-card-subtitle class="pb-0">
          {{ experience.company }}
        </v-card-subtitle>
        <v-card-title>
          {{ experience.position }}
        </v-card-title>
        <v-card-subtitle>
          <span>{{ experience.time }}</span>
        </v-card-subtitle>
      </v-card-item>

      <v-card-text>
        <h4>Accomplishments</h4>
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
          >{{ skill }}
        </v-chip>
        <v-chip
          v-for="(skill, index) in experience.skills.design"
          :key="`experience-web-${expIndex}-design-${index}`"
          class="ma-2"
          color="green"
          >{{ skill }}
        </v-chip>
        <v-chip
          v-for="(skill, index) in experience.skills.projectMgmt"
          :key="`experience-web-${expIndex}-projectMgmt-${index}`"
          class="ma-2"
          color="blue"
          >{{ skill }}
        </v-chip>
      </v-card-text>
    </v-card>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "ResumeExperienceCards",
  computed: {
    ...mapGetters({
      experiences: "experienceStore/getFilteredExperiences",
    }),
  },
});
</script>
