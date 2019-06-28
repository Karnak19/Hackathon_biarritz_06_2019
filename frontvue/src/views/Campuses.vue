<template>
  <app-layout>
    <template v-slot:main>
      <b-col lg="10" offset-lg="1">
        <b-row lg="8">
          <b-col v-if="isError">
            <app-error />
          </b-col>
          <vue-frag v-else>
            <b-col v-if="isLoading">
              <b-spinner
                variant="success"
                type="grow"
                label="Spinning"
              ></b-spinner>
            </b-col>
            <b-col
              v-else
              v-for="(campus, i) in campuses"
              :key="i"
              lg="3"
              class="my-2"
            >
              <b-card :title="campus.city" class="text-uppercase">
                <b-card-text>ELO : {{ campus.elo }}</b-card-text>
                <b-link
                  :to="{ name: `Campus`, params: { id: campus.uid, campus } }"
                  class="card-link"
                  >See more</b-link
                >
              </b-card>
            </b-col>
          </vue-frag>
        </b-row>
      </b-col>
    </template>
  </app-layout>
</template>
<script>
import axios from "axios";
import { Fragment } from "vue-fragment";

import LayoutVue from "@/Layout.vue";
import ErrorVue from "../components/Error.vue";
export default {
  name: "Campus page",
  components: {
    "app-layout": LayoutVue,
    "app-error": ErrorVue,
    "vue-frag": Fragment
  },
  data() {
    return {
      campuses: [],
      isError: false,
      isLoading: true
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
      .catch(err => {
        this.isError = true;
        console.log(err);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
};
</script>

<style></style>
