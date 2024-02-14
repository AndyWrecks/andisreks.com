<template>
  <div
    class="flex flex-col items-stretch mx-auto w-full mb-25 pb-20 print:mb-0 print:pb-0 paper:w-paper print:w-print transform origin-top resume"
  >
    <div
      class="paper-page flex flex-col h-auto paper:h-paper print:h-paper my-0 paper:my-20 print:my-0 p-4 sm:p-10 paper:p-20 paper:justify-center print:p-10 text-xl md:text-base print:text-base shadow-none paper:shadow-2xl print:shadow-none bg-ivory print:bg-transparent text-left"
    >
      <section
        id="header"
        class="flex flex-col items-middle justify-center text-center"
      >
        <h1>Andis Reks</h1>
      </section>

      <section class="flex flex-col">
        <div class="my-2">
          <ul
            class="flex flex-col md:flex-row print:flex-row justify-start md:space-x-10 print:space-x-10"
          >
            <li>
              <font-awesome-icon icon="fa-solid fa-location-dot" />
              Providence, RI
            </li>
            <li>
              <font-awesome-icon icon="fa-solid fa-envelope" />
              andiskreks@gmail.com
            </li>
            <li>
              <font-awesome-icon icon="fa-brands fa-linkedin" />
              andisreks
            </li>
          </ul>
        </div>

        <div class="grid grid-cols-2">
          <ResumeSkillSection title="Skills" :skills="skills" />

          <ResumeSkillSection title="Frameworks" :skills="frameworks" />
        </div>

        <div class="grid grid-cols-2">
          <ResumeSkillSection title="Design" :skills="design" />

          <ResumeSkillSection
            title="Project Management"
            :skills="projectMgmt"
          />
        </div>

        <ResumePrintExperience
          v-for="job in experience"
          :key="`print-experience[${job.time}]`"
          :experienceTime="job.time"
        />

        <div>
          <h2>Education</h2>
          <div class="flex flex-col">
            <div class="flex flex-row space-x-2">
              <h3>Bachelor's of Science in Media Arts and Technology</h3>
              <h3 class="text-primary">• Rochester Institute of Technology</h3>
            </div>

            <div class="flex flex-row space-x-2">
              <span>Rochester, NY</span>
              <span class="text-gray-400">2009 - 2013</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script lang="ts">
import ResumeSkillSection from "@/components/ResumeSkillSection.vue";
import { mapGetters } from "vuex";
import ResumePrintExperience from "@/components/ResumePrintExperience.vue";

export default {
  name: "ResumeLayout",
  components: { ResumePrintExperience, ResumeSkillSection },
  props: {},
  computed: {
    ...mapGetters({
      experience: "experienceStore/getExperiences",
      skills: "experienceStore/getSkills",
      frameworks: "experienceStore/getFrameworks",
      design: "experienceStore/getDesign",
      projectMgmt: "experienceStore/getProjectMgmt",
    }),
  },
};
</script>
<style lang="scss">
.resume {
  h1,
  h2 {
    text-align: left;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 1.45rem;
    margin-bottom: 0.5rem;
    margin-top: 0.75rem;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 600;
  }
}
</style>
