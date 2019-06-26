<template>
  <b-navbar toggleable="lg" variant="info">
    <b-navbar-brand to="/">Wild Code League</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">Link</b-nav-item>
        <b-nav-item to="about">Disabled</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
export default {
  name: "Nav",
  data() {
    return {
      items: [
        {
          title: "Home",
          icon: "dashboard"
        },
        {
          title: "Campus"
        },
        {
          title: "History"
        }
      ]
    };
  }
};
</script>
