<template>
  <div class="menu-bar">
    <div class="menu-header">
      <img
        src="../assets/icons/logox.svg"
        alt="logox logo"
        class="logo">
      <img
        src="../assets/icons/menu.svg"
        alt="menu icon"
        class="menu-icon">
    </div>
    <menu-list/>
  </div>
</template>

<script>
import MenuList from './MenuList'

export default {
  name: 'MenuBar',
  components: {
    MenuList,
  }
};
</script>

<style lang="scss">
@import './MenuBar.scss';
</style>
