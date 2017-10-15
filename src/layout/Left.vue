<template>
  <div id="leftSideContainer">
    <h5>기초</h5>
    <ul>
      <Menus v-for="(menu, index) in menus" :menu="menu" :key="index"></Menus>
    </ul>
  </div>
</template>

<script>
import Menus from '../components/Menu.vue'

import { data as vueStudyData } from '../data/vueStudy'

export default {
  name: 'left-layout',
  components: { Menus },
  data() {
    return {
      menus: vueStudyData,
    }
  },
}
</script>

<style scoped>
#leftSideContainer {
  width: 20%;
  height: 100%;
  min-width: 100px;
  max-width: 200px;
  float: left;
}
</style>
