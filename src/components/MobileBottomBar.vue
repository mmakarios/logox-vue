<template>
  <div class="mobile-bottom-bar">
    <div>
      <img
        src="../assets/icons/fingerprint_black.svg"
        alt="">
      <span>Meus dados</span>
    </div>
    <div>
      <img
        src="../assets/icons/card_black.svg"
        alt="">
      <span>Simulação</span>
    </div>
    <div>
      <notification-button/>
      <span>Mensagens</span>
    </div>
  </div>
</template>

<script>
import NotificationButton from './NotificationButton';

export default {
  components: {
    NotificationButton
  }
};
</script>

<style lang="scss" scoped>
.mobile-bottom-bar {
  @include media('>phone') {
    display: none;
  }

  position: fixed;
  bottom: 0;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  background-color: #fff;

  > div {
    flex: 1;
    border: 1px solid #ebebf2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    text-transform: uppercase;
    font-size: 10px;
    // height: 65px;
    padding: 8px 0;
    cursor: pointer;

    img {
      height: 30px;
      margin-bottom: 5px;
    }
  }
}
</style>
