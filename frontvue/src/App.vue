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
@import url("https://fonts.googleapis.com/css?family=Ubuntu&display=swap");

.container-fluid {
  /* padding-left: 0px !important;
  padding-right: 0px !important; */
  text-align: center;
}
body {
  background-image: url("./assets/bg.jpg");
  background-attachment: fixed;
  font-family: "Ubuntu", sans-serif;
}
</style>
