<template>
  <vue-frag>
    <b-row>
      <slot name="main" />
    </b-row>
    <b-row>
      <slot name="feed" />
    </b-row>
  </vue-frag>
</template>

<script>
import { Fragment } from "vue-fragment";
import Nav from "@/components/Nav";

export default {
  components: {
    "app-nav": Nav,
    "vue-frag": Fragment
  }
};
</script>
