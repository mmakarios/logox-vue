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
      <img
        src="../assets/icons/headset.svg"
        alt="contact"
        class="menu-contact">
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

  @include media('<=phone') {
    width: 100%;
    min-height: unset;
    height: 49px;
  }

  .menu-header {
    padding: 25px 20px;
    display: flex;
    justify-content: space-between;

    @include media('<=phone') {
      align-items: center;
      padding: 0 15px;
      height: 100%;
    }

    .logo {
      height: 20px;
      cursor: pointer;
      @include media('<=phone') {
        order: 2;
        height: 16px;
      }
    }

    .menu-icon {
      cursor: pointer;

      @include media('<=phone') {
        order: 1;
      }
    }

    .menu-contact {
      order: 3;
      height: 28px;
      cursor: pointer;
      @include media('>phone') {
        display: none;
      }
    }
  }
}
</style>
