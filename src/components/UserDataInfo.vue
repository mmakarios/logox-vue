<template>
  <div class="user-data-info">
    <profile-photo large/>
    <h1 class="name">Pedro Costa</h1>
    <span class="email">pedro.costa@tesla.com.br</span>
    <span class="company">Tesla Mecânica</span>
    <div class="progress">
      <div class="progress-bar">
        <span class="filled"/>
      </div>
      <span>70% completo</span>
    </div>
  </div>
</template>

<script>
import ProfilePhoto from './ProfilePhoto';

export default {
  name: 'UserDataInfo',
  components: {
    ProfilePhoto
  }
};
</script>

<style lang="scss" scoped>
.user-data-info {
  display: flex;
  flex-direction: column;
  align-items: center;

  .name {
    font-size: 36px;
    color: #0385db;
    margin: 20px 0 0;
  }

  .email {
    font-size: 20px;
    font-weight: 300;
    color: #999999;
  }

  .company {
    font-size: 18px;
    color: #535353;
  }

  .progress {
    font-size: 12px;
    color: #535353;
  }

  .progress-bar {
    width: 154px;
    height: 8px;
    background-color: #f0f0f0;
    position: relative;
    border-radius: 9999px;
    display: inline-block;

    .filled {
      position: absolute;
      background-color: #0385db;
      height: 100%;
      width: 70%;
      border-radius: 9999px;
    }
  }
}
</style>
