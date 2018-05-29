<template>
  <div class="header-profile">
    <span class="divider"/>

    <div class="my-profile">
      <span>Meu perfil</span>
      <img
        src="../assets/icons/arrow_down.svg"
        alt="">
    </div>

    <profile-photo/>

    <notification-button/>

  </div>
</template>

<script>
import ProfilePhoto from './ProfilePhoto';
import NotificationButton from './NotificationButton';

export default {
  name: 'HeaderProfile',
  components: {
    ProfilePhoto,
    NotificationButton
  }
};
</script>

<style lang="scss" scoped>
.header-profile {
  display: flex;
  align-items: center;

  .divider {
    width: 1.2px;
    height: 28px;
    background-color: #ebebf2;
    margin: 0 30px;
  }

  .my-profile {
    margin-right: 30px;
    cursor: pointer;
    img {
      margin-left: 25px;
    }
  }
}
</style>
