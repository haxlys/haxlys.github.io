<template>
  <div id="app">
    <left-container></left-container>
    <content-container></content-container>
  </div>
</template>

<script>
import LeftContainer from './layout/Left.vue'
import ContentContainer from './layout/Content.vue'

export default {
  name: 'app',
  components: { LeftContainer, ContentContainer },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App!'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

html,
body {
  height: 100%;
}

pre {
  font-family: initial;
  margin: initial;
}

.center {
  text-align: center;
}

</style>
