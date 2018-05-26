<template>
  <div class="user-data-menu">
    <user-data-info/>

    <div class="divider"/>

    <user-data-options/>
  </div>
</template>

<script>
import UserDataInfo from './UserDataInfo';
import UserDataOptions from './UserDataOptions';

export default {
  name: 'UserDataMenu',
  components: {
    UserDataInfo,
    UserDataOptions
  }
};
</script>

<style lang="scss" scoped>
.user-data-menu {
  max-width: 400px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 40px;
  line-height: 2em;

  .divider {
    width: calc(100% + 80px);
    height: 1px;
    background-color: #ebebf2;
    margin: 15px -40px;
  }
}
</style>
