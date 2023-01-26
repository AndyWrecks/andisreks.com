<template>
  <div class="flex flex-col md:space-y-2">
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
  },
});
</script>
