<template>
  <div id="Directive">
    <h2 class="center">{{ title }}</h2>
    <h3 class="center">{{ desc }}</h3>
    <SubDescription :contents="contents"></SubDescription>
  </div>
</template>

<script>
import SubDescription from './SubDescription.vue'
import { data as vueStudyData } from '../data/vueStudy'

export default {
  name: 'description-component',
  components: { SubDescription, },
  data() {
    return {
      title: '',
      desc: '',
      contents: {},
    }
  },
  created() {
    this.$eventBus.$on('changeContent', this.changeContent)
    this.changeContent(vueStudyData[vueStudyData.length-1])
  },
  methods: {
    changeContent(menuData) {
      this.title = menuData.title;
      this.desc = menuData.desc;
      this.contents = menuData.contents;
    }
  }
}
</script>

<style scoped>
</style>

