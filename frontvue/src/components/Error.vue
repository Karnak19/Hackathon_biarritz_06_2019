<template>
  <b-alert show variant="danger">
    <h4 class="alert-heading">Error!</h4>
    <p>It seems there is an error something...</p>
    <hr />
    <p class="mb-0">
      <router-link to="/">Go back to home !</router-link>
    </p>
  </b-alert>
</template>

<script>
export default {
  name: "Error"
};
</script>
