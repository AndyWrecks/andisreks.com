<template>
  <v-card>
    <v-card-item>
      <v-card-subtitle class="pb-0">
        {{ subHead }}
      </v-card-subtitle>
      <v-card-title>
        {{ title }}
      </v-card-title>
      <v-card-subtitle>
        <span>{{ subtitle }}</span>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <div v-if="achievements">
        <h4>Accomplishments</h4>
        <ul class="flex flex-col space-y-1 my-2 list-disc pl-4">
          <li
            v-for="(achievement, index) in achievements"
            :key="`experience-web-${index}`"
            class="text-gray-500"
          >
            {{ achievement }}
          </li>
        </ul>
      </div>

      <div v-if="skillGroups">
        <div
          v-for="(skillGroup, groupIndex) in skillGroups"
          :key="`experience-${title}-skillGroup-${groupIndex}`"
          class="contents"
        >
          <v-chip
            v-for="(skill, skillIndex) in skillGroup.skills"
            :key="`experience-skillGroup-${groupIndex}-skill-${skillIndex}`"
            class="ma-2"
            :color="skillGroup.color"
            >{{ skill }}
          </v-chip>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "ResumeCard",
  props: {
    subHead: String,
    title: String,
    subtitle: String,
    achievements: {
      type: Array,
      required: false,
    },
    time: String,
  },
  computed: {
    skillGroups() {
      const skills = useStore().getters[
        "experienceStore/getExperienceSkillsByTime"
      ](this.time);
      console.log(skills);

      return [
        { skills: skills.frameworks, color: "red" },
        { skills: skills.design, color: "green" },
        { skills: skills.projectMgmt, color: "blue" },
      ];
    },
  },
});
</script>
