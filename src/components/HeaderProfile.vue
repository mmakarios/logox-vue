<template>
  <div class="header-profile">
    <span class="divider"/>

    <div class="my-profile">
      <span>Meu perfil</span>
      <img
        src="../assets/icons/arrow_down.svg"
        alt="">
    </div>

    <div class="profile-icon">
      <img
        src="../assets/icons/profile.svg"
        alt="profile">
    </div>

    <div class="notifications">
      <img
        src="../assets/icons/bell.svg"
        alt="notifications">
      <span class="notification-badge">
        <span>4</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderProfile'
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

  .profile-icon {
    display: flex;
    justify-content: center;
    width: 38px;
    height: 38px;
    background-color: rgba(3, 133, 219, 0.22);
    border-radius: 50%;
    margin-right: 25px;
    cursor: pointer;
  }
  .notifications {
    position: relative;
    cursor: pointer;
    .notification-badge {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      bottom: 0;
      right: -10px;
      width: 20px;
      height: 20px;
      background-color: #0385db;
      color: #fff;
      border-radius: 50%;
      font-size: 12px;
    }
  }
}
</style>
