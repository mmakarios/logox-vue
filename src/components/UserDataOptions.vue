<template>
  <ul class="user-data-options">
    <li
      v-for="option in options"
      :key="option.icon">
      <img
        :src="option.icon"
        alt="">
      {{ option.label }}
    </li>
  </ul>
</template>

<script>
import personIcon from '../assets/icons/person_gear.svg';
import bankIcon from '../assets/icons/bank.svg';
import editIcon from '../assets/icons/edit.svg';
import keyIcon from '../assets/icons/key.svg';
import cameraIcon from '../assets/icons/camera.svg';

export default {
  name: 'UserDataOptions',
  data() {
    return {
      options: [
        { icon: personIcon, label: 'Minha conta listo' },
        { icon: bankIcon, label: 'Domicílio bancário' },
        { icon: editIcon, label: 'Editar cadastro' },
        { icon: keyIcon, label: 'Alterar senha' },
        { icon: cameraIcon, label: 'Editar foto' }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.user-data-options {
  padding: 30px 0;

  li {
    display: flex;
    align-items: center;
    width: 75%;
    margin: 0 auto 20px;
    font-size: 18px;
    cursor: pointer;

    &:last-of-type {
      margin-bottom: 0;
    }

    img {
      width: 40px;
      margin-right: 30px;
    }
  }
}
</style>
