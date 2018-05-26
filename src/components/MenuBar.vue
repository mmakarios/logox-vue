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
import MenuList from './MenuList';

export default {
  name: 'MenuBar',
  components: {
    MenuList
  }
};
</script>

<style lang="scss">
.menu-bar {
  background-color: #343a40;
  width: 260px;
  min-height: 100vh;
  color: #fff;

  .menu-header {
    padding: 25px 20px;
    display: flex;
    justify-content: space-between;

    .logo {
      height: 20px;
      cursor: pointer;
    }

    .menu-icon {
      cursor: pointer;
    }
  }
}
</style>
