<template>
  <b-col lg="3" cols="6" offset-cols="3" class="news">
    <span>News Feed</span>
    <ul>
      <li v-for="(match, i) in matches" :key="i" class="my-3">
        <b-toast :id="i" static visible no-auto-hide>
          <div
            slot="toast-title"
            class="d-flex flex-grow-1 align-items-baseline"
          >
            <b-img
              src="https://wildcodeschool.fr/wp-content/uploads/2019/01/cropped-favicon_blanc-32x32.png"
              class="mr-2"
              width="12"
              height="12"
            ></b-img>
            <strong class="mr-auto">Match !</strong>
            <small class="text-muted mr-2">{{ match.isoDate }}</small>
          </div>
          {{ match.homeTeam.toUpperCase() }} vs
          {{ match.awayTeam.toUpperCase() }} ->
          {{ match.winnerUid.toUpperCase() }} won
        </b-toast>
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
      matches: [],
      wilders: []
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
  z-index: 5;
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
  width: 100%;
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
