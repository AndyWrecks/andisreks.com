<template>
  <div class="mb-12">
    <ResumeLayout class="hidden print:block" />

    <ResumeWebLayout class="print:hidden z-10" />

    <ResumeBottomNav class="print:hidden" :print-resume="printResume" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ResumeLayout from "@/components/ResumeLayout.vue";
import ResumeWebLayout from "@/components/ResumeWebLayout.vue";
import ResumeBottomNav from "@/components/ResumeBottomNav.vue";

export default defineComponent({
  name: "ResumeTemplate",
  components: { ResumeBottomNav, ResumeWebLayout, ResumeLayout },
  methods: {
    /*
        Generate Report using refs and calling the
        refs function generatePdf()
    */
    printResume() {
      window.print();
    },
  },
});
</script>

<style scoped>
.v-bottom-navigation__content {
  justify-content: space-between;
}
</style>
