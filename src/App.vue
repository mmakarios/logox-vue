<template>
  <div id="app">
    <menu-bar/>
  </div>
</template>

<script>
import MenuBar from './components/MenuBar';

export default {
  name: 'App',
  components: {
    MenuBar
  }
};
</script>

<style lang="scss">
@import './App.scss';
</style>
