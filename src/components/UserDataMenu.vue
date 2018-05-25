<template>
  <div class="user-data-menu">
    <profile-photo large/>
  </div>
</template>

<script>
import ProfilePhoto from './ProfilePhoto';

export default {
  name: 'UserDataMenu',
  components: {
    ProfilePhoto
  }
};
</script>

<style lang="scss" scoped>
.user-data-menu {
  max-width: 400px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
