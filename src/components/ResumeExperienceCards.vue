<template>
  <div class="grid md:grid-cols-2 gap-4 flex-grow">
    <ResumeCard
      v-for="(experience, expIndex) in experiences"
      :key="`experience-web-${expIndex}`"
      :sub-head="experience.company"
      :title="experience.position"
      :subtitle="experience.time"
      :achievements="experience.achievements"
      :time="experience.time"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import ResumeCard from "@/components/ResumeCard.vue";

export default defineComponent({
  name: "ResumeExperienceCards",
  components: { ResumeCard },
  computed: {
    ...mapGetters({
      experiences: "experienceStore/getFilteredExperiences",
    }),
  },
});
</script>
