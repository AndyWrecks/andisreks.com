<template>
  <div>
    <ResumeLayout class="hidden print:block" />
    <ResumeWebLayout class="print:hidden" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ResumeLayout from "@/components/ResumeLayout.vue";
import ResumeWebLayout from "@/components/ResumeWebLayout.vue";

export default defineComponent({
  name: "ResumeTemplate",
  components: { ResumeWebLayout, ResumeLayout },
});
</script>
