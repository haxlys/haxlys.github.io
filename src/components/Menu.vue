<template>
  <li @click="changeContent(menu)">{{ menu.title }}</li>
</template>

<script>
export default {
  name: 'menu-component',
  props: {
    menu: {
      type: Object,
      required: true,
    }
  },
  methods: {
    changeContent(menu) {
      this.$eventBus.$emit('changeContent', menu)
    }
  }
}
</script>
