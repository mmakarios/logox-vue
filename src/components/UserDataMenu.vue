<template>
  <div class="user-data-menu">
    <user-data-info/>

    <div class="divider"/>
  </div>
</template>

<script>
import UserDataInfo from './UserDataInfo';

export default {
  name: 'UserDataMenu',
  components: {
    UserDataInfo
  }
};
</script>

<style lang="scss" scoped>
.user-data-menu {
  max-width: 400px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 40px 0;
  line-height: 2em;

  .divider {
    width: 100%;
    height: 1px;
    background-color: #ebebf2;
    margin: 15px 0;
  }
}
</style>
