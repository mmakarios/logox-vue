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
          <base-input-radio-group
            :values="['male','female']"
            :labels="['Masculino','Feminino']"
            name="gender"
            legend="Gênero"
          />
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
          v-for="index in 3"
          :key="index"
          :label="'Telefone ' + index"
          placeholder="( 99 ) 99999-9999"
          class="one-third"
          type="tel"
        />
      </div>

      <div class="actions-desktop">
        <base-input-checkbox
          label="Li e aceito os termos e condições de contrato."
          name="terms"/>

        <span class="print">
          <img src="../assets/icons/print.svg">
          <span>Imprimir</span>
        </span>

        <base-button>Salvar</base-button>
      </div>

      <div class="actions-mobile">
        <div class="divider"/>

        <base-input-checkbox
          label="Li e aceito os termos e condições de contrato."
          name="terms"/>

        <div class="divider"/>

        <base-button>Salvar</base-button>
      </div>

    </div>
  </div>
</template>

<script>
import BaseInput from './BaseInput';
import BaseInputRadioGroup from './BaseInputRadioGroup';
import BaseInputCheckbox from './BaseInputCheckbox';
import BaseButton from './BaseButton';

export default {
  name: 'UserDataSettings',
  components: {
    BaseInput,
    BaseInputRadioGroup,
    BaseInputCheckbox,
    BaseButton
  }
};
</script>

<style lang="scss" scoped>
.user-data-settings {
  background-color: #fff;
  flex: 1;
  display: flex;
  flex-direction: column;
  box-shadow: $drop-shadow;

  @include media('<=phone') {
    box-shadow: none;
  }

  .tabs {
    display: flex;
    padding: 0 40px;
    max-width: 880px;
    justify-content: space-between;
    font-size: 20px;

    @include media('<=lg') {
      padding: 0 30px;
      font-size: 18px;
    }

    @include media('<=md') {
      font-size: 16px;
    }

    @include media('<=sm') {
      font-size: 14px;
    }

    @include media('<=phone') {
      padding: 0;
    }

    > span {
      padding: 25px 0;

      &.active {
        color: #0385db;
        border-bottom: 2px solid #0385db;
      }
    }
  }
}

.selected-content {
  padding: 40px;
  border-top: 1px solid #ebebf2;
  flex: 1;
  display: flex;
  flex-direction: column;

  @include media('<=lg') {
    padding: 40px 30px;
  }

  @include media('<=phone') {
    padding-left: 0;
    padding-right: 0;
  }

  h1 {
    margin: 0;

    @include media('<=phone') {
      display: none;
    }
  }

  .input-section {
    display: flex;

    @include media('<=phone') {
      flex-direction: column;
    }

    &.contact {
      justify-content: space-between;
      max-width: calc(834px + 6%);
      > div {
        max-width: 290px;

        @include media('<=phone') {
          max-width: unset;
        }

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

      @include media('<=phone') {
        margin-right: 0;
      }
    }
  }

  .divider {
    height: 1px;
    width: calc(100% + 80px);
    margin: 30px -40px;
    background-color: #ebebf2;

    @include media('<=lg') {
      width: calc(100% + 60px);
      margin-left: -30px;
      margin-right: -30px;
    }
  }

  .actions-desktop {
    margin-top: auto;
    display: flex;
    align-items: center;
    max-width: 900px;

    @include media('<=phone') {
      display: none;
    }

    > span {
      display: inline-flex;
      align-items: center;
    }

    .print {
      color: #0385db;
      font-size: 20px;
      margin-left: 8.5px;
      margin-right: auto;

      @include media('<=lg') {
        margin-left: auto;
        span {
          display: none;
        }
      }

      img {
        margin-right: 5px;
      }
    }
  }

  .actions-mobile {
    > span {
      display: inline-flex;
      align-items: center;
      width: 100%;
    }
  }
}
</style>
