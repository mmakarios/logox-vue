<template>
  <div id="app">
    <menu-bar/>
    <div class="content">
      <header-bar/>
      <user-data/>
      <mobile-bottom-bar/>
    </div>
  </div>
</template>

<script>
import MenuBar from './components/MenuBar';
import UserData from './components/UserData';
import HeaderBar from './components/HeaderBar';
import MobileBottomBar from './components/MobileBottomBar';

export default {
  name: 'App',
  components: {
    MenuBar,
    UserData,
    HeaderBar,
    MobileBottomBar
  }
};
</script>

<style lang="scss">
@import './App.scss';
</style>
