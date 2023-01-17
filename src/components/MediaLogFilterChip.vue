<template>
  <v-chip v-model="handleFilter">All</v-chip>
</template>
<script lang="ts">
export default {
  name: "MediaLogFilterChip",
  props: {
    filterName: String,
  },
};
</script>
