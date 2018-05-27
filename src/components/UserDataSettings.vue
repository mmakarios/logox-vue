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
      <h1>Minha conta</h1>
      <div class="input-section">
        <div class="column">
          <base-input
            label="Nome"
            placeholder="Digite seu nome"/>
          <base-input
            label="Segmento"
            placeholder="Escolha o segmento"/>
        </div>
        <div class="column">
          <base-input
            label="Nome Fantasia"
            placeholder="Digite o nome fantasia"/>
        </div>
      </div>
      <div class="divider"/>
      <div class="input-section">
        <div class="column">
          <base-input
            label="Cep"
            placeholder="Digite seu cep"/>
          <base-input
            label="Complemento"
            placeholder="Digite o complemento"/>
        </div>
        <div class="column">
          <base-input
            label="Endereço"
            placeholder="Digite o seu endereço"
            class="two-thirds"
          />
          <base-input
            label="Número"
            placeholder="Número"
            class="one-third"
          />
          <base-input
            label="Cidade"
            placeholder="Digite a sua cidade"
            class="two-thirds"
          />
          <base-input
            label="UF"
            placeholder="UF"
            class="one-third"
          />

        </div>
      </div>
      <div class="divider"/>
      <div class="input-section contact">
        <base-input
          label="Telefone 1"
          placeholder="( 99 ) 99999-9999"
          class="one-third"
        />
        <base-input
          label="Telefone 2"
          placeholder="( 99 ) 99999-9999"
          class="one-third"
        />
        <base-input
          label="Telefone 3"
          placeholder="( 99 ) 99999-9999"
          class="one-third"
        />
      </div>

    </div>
  </div>
</template>

<script>
import BaseInput from './BaseInput';

export default {
  name: 'UserDataSettings',
  components: {
    BaseInput
  }
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
    border-top: 1px solid #ebebf2;

    h1 {
      margin: 0;
    }

    .input-section {
      display: flex;

      &.contact {
        justify-content: space-between;
        max-width: calc(834px + 6%); //899
        > div {
          max-width: 290px;
          &:not(:last-of-type) {
            margin-right: 3%;
          }
        }
      }

      > .column {
        max-width: 417px;
        flex: 1;
        margin-right: 6%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        &:last-of-type {
          margin-right: 0;
        }
      }
    }
    .divider {
      height: 1px;
      width: calc(100% + 80px);
      margin: 40px -40px;
      background-color: #ebebf2;
    }
  }
}
</style>
