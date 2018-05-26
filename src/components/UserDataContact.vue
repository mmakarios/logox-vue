<template>
  <div class="user-data-contact">
    <div class="contact-title">
      <img
        src="../assets/icons/headset.svg"
        alt="">
      <span>Dúvidas? Fale conosco</span>
    </div>
    <span class="phone-0800">0800.942.1835</span>
    <span>11 3078.0876</span>
    <span>11 3078.0914</span>
  </div>
</template>

<script>
export default {
  name: 'UserDataContact'
};
</script>

<style lang="scss" scoped>
.user-data-contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 27px;

  .contact-title {
    display: flex;
    align-items: center;
    img {
      margin-right: 15px;
    }
    span {
      color: #0385db;
      font-size: 24px;
    }
  }
  .phone-0800 {
    font-size: 24px;
    font-weight: bold;
  }
}
</style>
