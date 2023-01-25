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
        <h1 class="mb-2">Andis Reks</h1>
      </section>

      <section class="flex flex-col mt-4">
        <div>
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
              <font-awesome-icon icon="fa-brands fa-linkedin" /> andisreks
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

        <div id="experience">
          <h2>Experience</h2>
          <div class="flex flex-col space-y-4">
            <div
              class="flex flex-col"
              v-for="job in experience"
              :key="job.title"
            >
              <div class="flex flex-row space-x-2 items-baseline">
                <h3>{{ job.position }}</h3>
                <h3 class="text-primary">• {{ job.company }}</h3>
              </div>

              <div class="flex flex-row space-x-2">
                <span>{{ job.location }}</span>
                <span class="text-gray-400">{{ job.time }}</span>
              </div>

              <ul class="list-disc pl-6 mt-2">
                <li
                  v-for="(achievement, index) in job.achievements"
                  :key="`${job.company}-${job.time}-achievement-${index}`"
                >
                  {{ achievement }}
                </li>
              </ul>
            </div>
          </div>
        </div>

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
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "ResumeTemplate",
  components: { ResumeSkillSection },
  data() {
    return {
      skills: [
        "HTML",
        "Typescript",
        "Javascript",
        "CSS/SCSS",
        "PHP",
        "Python",
        "Java",
        "Git",
      ],
      frameworks: ["Vue", "React.js", "Laravel", "Mithril.js", "Jest"],
      design: ["Figma", "Photoshop", "Illustrator"],
      projectMgmt: ["Jira", "Linear", "Monday", "Trello"],
    };
  },
  computed: {
    experience() {
      const store = useStore();

      return store.getters["experienceStore/getExperiences"];
    },
  },
});
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
