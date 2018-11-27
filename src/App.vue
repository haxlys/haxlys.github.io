<template>
  <div id="app">
    <h1>
      {{ msg }}
      <span class="love">{{love}}</span>
    </h1>
    <router-link to="/foo">foo</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "재희 알러뷰!!",
      love: "♥"
    };
  }
};
</script>

<style lang="css">
#app {
  color: #56b983;
  font-size: 5vw;
}
.love {
  color: red;
}
</style>