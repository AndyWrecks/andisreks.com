<template>
  <v-list
    v-for="(listItem, index) in listItems"
    :key="`lists-${this.id}-item-${index}`"
  >
    <v-list-item
      :title="listItem.name"
      :subtitle="listItem.dateLastActivity"
    ></v-list-item>
  </v-list>
</template>
<script lang="ts">
import { useStore } from "vuex";
import { defineComponent } from "vue";

export default defineComponent({
  name: "MediaLogList",
  props: {
    listId: String,
  },
  computed: {
    listItems: function () {
      const store = useStore();
      console.log(this);
      console.log(store.getters["mediaLog/getListItems"](this.listId));

      return store.getters["mediaLog/getListItems"](this.listId);
    },
  },
});
</script>
