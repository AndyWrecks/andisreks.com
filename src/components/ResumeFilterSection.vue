<template>
  <v-list-item :title="title">
    <div class="flex flex-row flex-wrap">
      <ResumeFilterChip
        :color="color"
        :selected="selected"
        :chip-value="entry"
        v-for="entry in entryArray"
        :key="`${entry}-filter`"
      />
    </div>
  </v-list-item>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ResumeFilterChip from "@/components/ResumeFilterChip.vue";

export default defineComponent({
  name: "ResumeFilterSection",
  components: { ResumeFilterChip },
  props: {
    entryArray: Array,
    title: String,
    color: String,
  },
  data() {
    return {
      selected: false,
    };
  },
});
</script>
