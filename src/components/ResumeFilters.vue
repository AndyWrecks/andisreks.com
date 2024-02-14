<template>
  <div class="flex flex-row md:space-y-2">
    <v-list-item>
      <div class="flex flex-col flex-wrap">
        <v-label>Experience Emphasis</v-label>
        <v-radio-group v-model="experienceEmphasis">
          <v-radio label="Engineering" value="Engineering"></v-radio>
          <v-radio label="Process" value="Process"></v-radio>
        </v-radio-group>
      </div>
    </v-list-item>

    <ResumeFilterSection :entry-array="frameworks" title="Tech" color="red" />
    <ResumeFilterSection :entry-array="design" title="Design" color="green" />
    <ResumeFilterSection
      :entry-array="projectMgmt"
      title="Project Management"
      color="blue"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ResumeFilterSection from "@/components/ResumeFilterSection.vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "ResumeFilters",
  components: { ResumeFilterSection },
  computed: {
    ...mapGetters({
      frameworks: "experienceStore/getAvailableFrameworks",
      design: "experienceStore/getAvailableDesign",
      projectMgmt: "experienceStore/getAvailableMgmt",
    }),
    experienceEmphasis: {
      get() {
        return this.$store.getters["experienceStore/getExperienceEmphasis"];
      },
      set(value) {
        this.$store.commit("experienceStore/setExperienceEmphasis", value);
      },
    },
  },
});
</script>
