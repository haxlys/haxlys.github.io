<template>
<div class="flex-container">
  <template v-for="(item, index) in contents">
    <div :class="{flexItem: true, title: true, isSubSub: isSubSub}" :key="index">{{ item.title }}</div>
    <Prism language="javascript" v-if="item.desc" class="flexItem desc" :key="index" v-html="item.desc"></Prism>
    <div v-else class="flexItem desc" :key="index">
      <SubDescription :contents="item.contents" :isSubSub="!isSubSub"></SubDescription>
    </div>
  </template>
</div>
</template>

<script>
import Prism from '../library/prism'

export default {
  name: 'SubDescription',
  components: { Prism, },
  props: {
    title: {
      type: String,
      required: false,
    },
    desc: {
      type: String,
      required: false,
    },
    contents: {
      type: Array,
      required: true,
    },
    isSubSub: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
}
</script>

<style scoped>

.flex-container {
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}

.flexItem {
  margin: 10px 0;
}

.flexItem.title {
  width: 30%;
}
.flexItem.title.isSubSub {
  width: 100%;
}

.flexItem.desc {
  width: 60%;
  text-align: left;
}

.list-title {
  width: 100%;
  list-style: none;
  text-align: center;
  color: crimson;
  font-weight: bold;
}

</style>
