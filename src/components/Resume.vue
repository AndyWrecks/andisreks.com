<template>
  <div
    class="flex flex-col items-stretch mx-auto w-full mb-25 pb-20 print:mb-0 print:pb-0 paper:w-paper print:w-print transform origin-top"
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

export default {
  name: "ResumeTemplate",
  components: { ResumeSkillSection },
  data() {
    return {
      experience: [
        {
          company: "Feast & Fettle",
          position: "Front End Engineer",
          location: "East Providence, RI",
          time: "02/2022 - 11/2022",
          achievements: [
            "Rebuilt customer storefront UI in Vue",
            "Built UI Test suite in Jest",
            "Collaborated with stakeholders and Creative Team to improve ordering experience",
            "Converted front-end build tooling from Webpack to Vite",
          ],
        },
        {
          company: "Google (Fitbit)",
          position: "Software Engineer",
          location: "Boston, MA",
          time: "02/2021 - 02/2022",
          achievements: [
            "Built feature rich for enterprise Covid-19 Daily Assessment product suite",
            "Owned/Led Tooling Migration to Google infrastructure",
            "Orchestrated efficient microservice deployments",
            "Introduced agile methodologies and development best practices to division to enhance product development",
          ],
        },
        {
          company: "Fitbit",
          position: "Software Engineer",
          location: "Boston, MA",
          time: "05/2018 - 02/2021",
          achievements: [
            "Built digital visualization UI for Health Coaching web application",
            "Delivered unit-tested feature sets informed by product requirements",
            "Communicated technical development stages and provided design support to businesses and other stakeholders encouraging participation for on-time execution",
          ],
        },
        {
          company: "Fitbit",
          position: "Web Developer",
          location: "Boston, MA",
          time: "01/2015 - 05/2018",
          achievements: [
            "Led cross-functional internationalization initiative using custom and vendor software to expand Fibit.com's global support",
            "Prototyped static site generation build system for hardware marketing pages served to millions of users worldwide",
            "Developed functional digital design concepts across various platforms to strengthen company brand and identity",
            "Optimized asset handoff process between engineering and marketing design team",
          ],
        },
        {
          company: "TWOBOLT",
          position: "Web Developer",
          location: "Pawtucket, RI",
          time: "06/2013 - 01/2015",
          achievements: [
            "Maintained Wordpress websites for 10+ clients",
            "Designed email templates used in marketing campaigns",
            "Produced and pre-flighted print material, including flyers and brochures",
          ],
        },
      ],
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@media print {
  html {
    font-size: 12px !important;
  }
}

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

@media print {
  html,
  body {
    /*changing width to 100% causes huge overflow and wrap*/
    height: 100%;
    overflow: hidden;
    background: #fff;
  }
}
</style>
