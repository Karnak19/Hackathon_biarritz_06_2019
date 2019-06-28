<template>
  <app-layout>
    <template v-slot:main>
      <b-col lg="10" offset-lg="1">
        <b-row lg="8">
          <b-col v-for="(campus, i) in campuses" :key="i" lg="3" class="my-2">
            <b-card :title="campus.city">
              <b-card-text>ELO : {{ campus.elo }}</b-card-text>
              <b-link
                :to="{ name: `Campus`, params: { id: campus.uid } }"
                class="card-link"
                >Another link</b-link
              >
            </b-card>
          </b-col>
        </b-row>
      </b-col>
    </template>
  </app-layout>
</template>
<script>
import LayoutVue from "@/Layout.vue";
import axios from "axios";
export default {
  name: "Campus page",
  components: {
    "app-layout": LayoutVue
  },
  data() {
    return {
      campuses: []
    };
  },
  created() {
    axios
      .post("http://localhost:4000/graphql", {
        query: "{elo {city elo uid}}"
      })
      .then(response => {
        let datas = response.data.data.elo;
        this.campuses = datas;
      })
      .catch(err => console.log(err));
  }
};
</script>

<style></style>
