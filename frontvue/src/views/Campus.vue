<template>
  <LayoutVue>
    <template v-slot:main>
      <b-col lg="12">
        <div class="videoContainer">
          <iframe
            class="videoContainer__video"
            width="1920"
            height="1080"
            src="http://www.youtube.com/embed/V4zRDM_fN5s?disabledkb=0&mute=1&showinfo=0&modestbranding=1&autoplay=1&controls=0&fs=0&loop=1&rel=0&showinfo=0&disablekb=1&playlist=IsBInsOj8TY"
            frameborder="0"
          ></iframe>
        </div>
      </b-col>
      <b-col lg="12">
        <h1 class="text-uppercase">{{ $route.params.campus.city }}</h1>
      </b-col>
      <b-col lg="3" offset-lg="2" class="mt-5">
        <b-list-group>
          <b-list-group-item variant="secondary" class="title"
            >HOME</b-list-group-item
          >
          <b-list-group-item
            v-for="(match, i) in homeMatches"
            :key="i"
            :class="match.homeTeam === match.winnerUid ? won : lost"
            >Opponent : {{ match.awayTeam.toUpperCase() }}</b-list-group-item
          >
        </b-list-group>
      </b-col>
      <b-col lg="3" offset-lg="2" class="mt-5">
        <b-list-group>
          <b-list-group-item variant="secondary" class="title"
            >AWAY</b-list-group-item
          >
          <b-list-group-item
            v-for="(match, i) in awayMatches"
            :key="i"
            :class="match.awayTeam === match.winnerUid ? won : lost"
            >Opponent : {{ match.homeTeam.toUpperCase() }}</b-list-group-item
          >
        </b-list-group>
      </b-col>
    </template>
  </LayoutVue>
</template>

<script>
import LayoutVue from "../Layout.vue";
import axios from "axios";
export default {
  name: "Campus",
  components: {
    LayoutVue
  },
  data() {
    return {
      homeMatches: [],
      awayMatches: [],
      won: "won",
      lost: "lost"
    };
  },
  created() {
    axios
      .post("http://localhost:4000/graphql", {
        query: "{ match{homeTeam awayTeam isoDate winnerUid}}"
      })
      .then(res => {
        let datas = res.data.data.match;
        datas = datas.filter(match => match.winnerUid != null);
        let homeMatches = datas.filter(match => {
          return this.$route.params.id == match.homeTeam;
        });
        let awayMatches = datas.filter(match => {
          return this.$route.params.id == match.awayTeam;
        });
        this.homeMatches = homeMatches;
        this.awayMatches = awayMatches;
      });
  }
};
</script>

<style scoped>
h1 {
  font-size: 100px;
  color: rgb(18, 22, 26);
}

.won {
  background-color: rgb(64, 163, 64);
  color: aliceblue;
}
.lost {
  background-color: rgb(177, 57, 57);
  color: aliceblue;
}

.title {
  font-weight: bold;
  font-size: 22px;
}

.videoContainer {
  position: fixed;
  top: 60px;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 0;
}

iframe {
  /* optional */
  width: 100%;
  height: 100%;
}
</style>
