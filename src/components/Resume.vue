<template>
  <div
    class="flex flex-col items-stretch mx-auto w-full paper:w-paper print:w-print transform xl:scale-120 2xl:scale-10 3xl:scale-160 origin-top"
  >
    <div
      class="paper-page flex flex-col h-auto paper:h-paper print:h-paper my-0 paper:my-20 print:my-0 p-4 sm:p-10 paper:p-20 print:p-20 text-xl md:text-base print:text-base shadow-none paper:shadow-2xl print:shadow-none bg-ivory print:bg-transparent text-left"
    >
      <section id="header">
        <h1>Andis Reks</h1>

        <ul class="flex flex-row">
          <li>Email</li>
          <li>linkin</li>
        </ul>
      </section>

      <section class="flex flex-col">
        <div id="experience">
          <h2>Experience</h2>
          <div v-for="job in experience" :key="job.title">
            <div class="flex flex-row space-x-2">
              <h3>{{ job.company }}</h3>
              <span>{{ job.location }}</span>
            </div>
            <span>{{ job.time }}</span>
            <ul>
              <li
                v-for="(achievement, index) in job.achievements"
                :key="`${job.company}-${job.time}-achievement-${index}`"
              >
                {{ achievement }}
              </li>
            </ul>
          </div>
        </div>

        <div id="skills-education"></div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "ResumeTemplate",
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
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  text-align: left;
}

h1 {
  font-size: 2.5rem;
}

h2 {
  font-size: 1.5rem;
}
</style>
