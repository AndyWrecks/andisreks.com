<template>
  <div>
    <h2>{{ title }}</h2>
    <ul class="grid print:grid-cols-4 md:grid-cols-4 grid-cols-2 pr-10">
      <li v-for="skill in skills" :key="skill">{{ skill }}</li>
    </ul>
  </div>
</template>
<script lang="ts">
export default {
  name: "ResumeSkillSection",
  props: {
    title: String,
    skills: Array,
  },
};
</script>
<style></style>
