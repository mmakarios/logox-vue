<template>
  <a
    :href="href"
    @click="go"
  >
    <slot/>
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true
    }
  },
  methods: {
    go(event) {
      event.preventDefault();
      this.$root.currentRoute = this.href;
      window.history.pushState(null, null, this.href);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
