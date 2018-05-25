<template>
  <div id="app">
    <menu-bar/>
    <div class="content">
      <header-bar/>
      <user-data/>
    </div>
  </div>
</template>

<script>
import MenuBar from './components/MenuBar';
import UserData from './components/UserData';
import HeaderBar from './components/HeaderBar';

export default {
  name: 'App',
  components: {
    MenuBar,
    UserData,
    HeaderBar
  }
};
</script>

<style lang="scss">
@import './App.scss';
</style>
