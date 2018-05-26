<template>
  <div class="user-data-settings">
    <div class="tabs">
      <span class="active">Minha conta</span>
      <span>Domicílio bancário</span>
      <span>Editar cadastro</span>
      <span>Alterar senha</span>
      <span>Editar foto</span>
    </div>
    <div class="selected-content">
      <div>Minha conta</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserDataSettings'
};
</script>

<style lang="scss" scoped>
.user-data-settings {
  background-color: #fff;
  flex: 1;

  .tabs {
    display: flex;
    padding: 0 40px;
    max-width: 880px;
    justify-content: space-between;

    > span {
      padding: 25px 0;
      font-size: 20px;

      &.active {
        color: #0385db;
        border-bottom: 2px solid #0385db;
      }
    }
  }

  .selected-content {
    padding: 40px;
  }
}
</style>
