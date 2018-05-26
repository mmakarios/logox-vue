<template>
  <div :class="[{large}, 'profile-photo']">
    <img
      src="../assets/icons/profile.svg"
      alt="profile">
  </div>
</template>

<script>
export default {
  name: 'ProfilePhoto',
  props: {
    large: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.profile-photo {
  display: flex;
  justify-content: center;
  width: 38px;
  height: 38px;
  background-color: rgba(3, 133, 219, 0.22);
  border-radius: 50%;
  margin-right: 25px;
  cursor: pointer;

  &.large {
    width: 200px;
    height: 200px;
    margin-right: 0;
    img {
      width: 120px;
    }
  }
}
</style>
