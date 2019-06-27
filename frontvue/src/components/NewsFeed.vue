<template>
  <b-col lg="3" class="news">
    <span>News Feed</span>
    <ul>
      <li v-for="(match, i) in matches" :key="i">
        <b-button @click="$bvToast.show(i)">Show toast</b-button>

        <b-toast :id="i" variant="warning" solid>
          <div
            slot="toast-title"
            class="d-flex flex-grow-1 align-items-baseline"
          >
            <b-img
              blank
              blank-color="#ff5555"
              class="mr-2"
              width="12"
              height="12"
            ></b-img>
            <strong class="mr-auto">Notice!</strong>
            <small class="text-muted mr-2">42 seconds ago</small>
          </div>
          {{ match.isoDate }} : {{ match.homeTeam.toUpperCase() }} vs
          {{ match.awayTeam.toUpperCase() }} ->
          {{ match.winnerUid.toUpperCase() }} won
        </b-toast>
        <!-- <a href="#">
            
        </a>-->
      </li>
    </ul>
  </b-col>
</template>

<script>
import axios from "axios";

export default {
  name: "NewsFeed",
  data() {
    return {
      matches: []
    };
  },
  created() {
    axios
      .get(
        "https://us-central1-rc-league.cloudfunctions.net/wildcodeschool/matches"
      )
      .then(response => {
        let datas = response.data;
        datas = datas.filter(match => match.winnerUid != null);
        this.matches = datas;
      })
      .catch(err => console.log(err));
  }
};
</script>

<style scoped>
.win a {
  color: #f36c6c;
}

@keyframes ticker {
  0% {
    margin-top: -50px;
  }
  11% {
    margin-top: -100px;
  }
  22% {
    margin-top: -150px;
  }
  33% {
    margin-top: -200px;
  }
  44% {
    margin-top: -250px;
  }
  55% {
    margin-top: -300px;
  }
  66% {
    margin-top: -350px;
  }
  77% {
    margin-top: -400px;
  }
  88% {
    margin-top: -450px;
  }
  100% {
    margin-top: -50px;
  }
}

.news {
  background: #f36c6ca6;
  /* box-shadow: inset 0 -15px 30px rgba(0, 0, 0, 0.4),
    0 5px 10px rgba(0, 0, 0, 0.5); */
  /* width: 570px; */
  height: 646px;
  margin: 50px auto;
  overflow: hidden;
  border-radius: 2px;
  /* padding: 3px; */
  -webkit-user-select: none;
}

.news span {
  float: left;
  color: #fff;
  width: 100%;
  padding: 4px;
  position: relative;
  border-radius: 2px;
  background: #333;
  font: 28px Raleway, Arial, sans-serif;
  vertical-align: -webkit-baseline-middle;
  -webkit-font-smoothing: antialiased;
  -webkit-user-select: none;
}

.news ul {
  float: left;
  padding-left: 10px;
  padding-top: 50px;
  animation: ticker 25s cubic-bezier(1, 0, 0.5, 0) infinite;
  -webkit-user-select: none;
}

.news ul li {
  list-style: none;
}

.news ul li a {
  color: #fff;
  text-decoration: none;
  font: 16px Raleway, Arial, sans-serif;
  vertical-align: -webkit-baseline-middle;
  vertical-align: -moz-middle-with-baseline;
  -webkit-font-smoothing: antialiased;
  -webkit-user-select: none;
}

.news ul:hover {
  animation-play-state: paused;
}
.news span:hover + ul {
  animation-play-state: paused;
}
</style>
