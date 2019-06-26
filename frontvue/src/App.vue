<template>
  <vue-frag>
    <app-nav />
    <b-container fluid>
      <router-view />
    </b-container>
  </vue-frag>
</template>

<script>
import Nav from "@/components/Nav";
import { Fragment } from "vue-fragment";

export default {
  name: "Nav",
  components: {
    "app-nav": Nav,
    "vue-frag": Fragment
  }
};
</script>

<style>
.container-fluid {
  padding-left: 0px;
  padding-right: 0px;
  text-align: center;
}
</style>
