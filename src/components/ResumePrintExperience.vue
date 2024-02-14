<template>
  <div id="experience">
    <h2>Experience</h2>
    <div class="flex flex-col space-y-4">
      <div class="flex flex-col">
        <div class="flex flex-row space-x-2 items-baseline">
          <h3>{{ experience.position }}</h3>
          <h3 class="text-primary">• {{ experience.company }}</h3>
        </div>

        <div class="flex flex-row space-x-2">
          <span>{{ experience.location }}</span>
          <span class="text-gray-400">{{ experience.time }}</span>
        </div>

        <ul class="list-disc pl-6">
          <li
            v-for="(achievement, index) in experience.achievements[
              emphasizedExperience
            ]"
            :key="`${experience.company}-${experience.time}-achievement-${index}`"
          >
            {{ achievement }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Experience, EXPERIENCE_EMHPASIS } from "@/types";
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "ResumePrintExperience",
  props: {
    experienceTime: String,
  },
  computed: {
    ...mapGetters({
      emphasizedExperience: "experienceStore/getExperienceEmphasis",
    }),
    experience(): Experience {
      return this.$store.getters["experienceStore/getExperienceByTime"](
        this.experienceTime
      );
    },
    emphasisedExperiencesList(): string[] {
      const emphasizedExperience: EXPERIENCE_EMHPASIS =
        this.$store.getters["experienceStore/getExperienceEmphasis"];

      return this.experience.achievements[emphasizedExperience];
    },
  },
});
</script>
