<template>
  <div class="user-data">
    <h1>Meus dados cadastrais</h1>
    <user-data-menu/>
  </div>
</template>

<script>
import UserDataMenu from './UserDataMenu';

export default {
  name: 'UserData',
  components: {
    UserDataMenu
  }
};
</script>

<style lang="scss" scoped>
.user-data {
  padding: 25px 35px;
}
</style>
