<template>
  <div>
    <ResumeLayout />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ResumeLayout from "@/components/ResumeLayout.vue";

export default defineComponent({
  name: "ResumeTemplate",
  components: { ResumeLayout },
});
</script>
