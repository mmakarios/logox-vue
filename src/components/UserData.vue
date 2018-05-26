<template>
  <div class="user-data">
    <h1>Meus dados cadastrais</h1>
    <div class="cards">
      <user-data-menu/>
      <user-data-settings/>
    </div>
  </div>
</template>

<script>
import UserDataMenu from './UserDataMenu';
import UserDataSettings from './UserDataSettings';

export default {
  name: 'UserData',
  components: {
    UserDataMenu,
    UserDataSettings
  }
};
</script>

<style lang="scss" scoped>
.user-data {
  padding: 25px 35px;

  .cards {
    display: flex;

    > div:not(:last-of-type) {
      margin-right: 35px;
    }
  }
}
</style>
