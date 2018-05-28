<template>
  <div class="header-bar">

    <header-search/>
    <header-profile/>

  </div>
</template>

<script>
import HeaderSearch from './HeaderSearch';
import HeaderProfile from './HeaderProfile';

export default {
  name: 'HeaderBar',
  components: {
    HeaderSearch,
    HeaderProfile
  }
};
</script>

<style lang="scss" scoped>
.header-bar {
  background-color: #fff;
  height: 70px;
  display: flex;
  padding: 15px 30px;
  align-items: center;
  justify-content: space-between;
  box-shadow: $drop-shadow;
}
</style>
