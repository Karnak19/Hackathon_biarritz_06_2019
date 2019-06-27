<template>
  <app-layout>
    <b-col lg="10" offset-lg="1">
      <b-row>
        <b-col v-for="(campus, i) in campuses" :key="i" lg="3" class="my-2">
          <b-card :title="campus.campus">
            <b-card-text>
              Some quick example text to build on the
              <em>card title</em> and make up the bulk of the card's content.
            </b-card-text>
            <b-link
              :to="{ name: `Campus`, params: { id: campus.id } }"
              class="card-link"
              >Another link</b-link
            >
          </b-card>
        </b-col>
      </b-row>
    </b-col>
  </app-layout>
</template>
<script>
import LayoutVue from "@/Layout.vue";
export default {
  name: "Campus page",
  components: {
    "app-layout": LayoutVue
  },
  data() {
    return {
      campuses: [
        {
          id: 1,
          campus: "Biarritz"
        },
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {}
      ]
    };
  }
};
</script>

<style></style>
