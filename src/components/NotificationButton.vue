<template>
  <div class="notifications">
    <img
      src="../assets/icons/bell.svg"
      alt="notifications">
    <span class="notification-badge">
      <span>4</span>
    </span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.notifications {
  position: relative;
  cursor: pointer;

  @include media('<=phone') {
    img {
      height: 30px;
    }
  }
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
</style>
