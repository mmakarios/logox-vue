<template>
  <ul class="user-data-options">
    <li
      v-for="option in options"
      :key="option.icon">
      <VLink :href="option.link">
        <img
          :src="option.icon"
          alt="">
        {{ option.label }}
      </VLink>
    </li>
  </ul>
</template>

<script>
import personIcon from '../assets/icons/person_gear.svg';
import bankIcon from '../assets/icons/bank.svg';
import editIcon from '../assets/icons/edit.svg';
import keyIcon from '../assets/icons/key.svg';
import cameraIcon from '../assets/icons/camera.svg';
import VLink from './VLink';

export default {
  name: 'UserDataOptions',
  components: {
    VLink
  },
  data() {
    return {
      options: [
        { icon: personIcon, label: 'Minha conta', link: '/settings' },
        { icon: bankIcon, label: 'Domicílio bancário', link: '/settings' },
        { icon: editIcon, label: 'Editar cadastro', link: '/settings' },
        { icon: keyIcon, label: 'Alterar senha', link: '/settings' },
        { icon: cameraIcon, label: 'Editar foto', link: '/settings' }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.user-data-options {
  padding: 30px 0;

  li {
    width: 75%;
    margin: 0 auto 20px;
    font-size: 18px;

    &:last-of-type {
      margin-bottom: 0;
    }

    @include media('<=phone') {
      width: 100%;
    }

    a {
      display: flex;
      align-items: center;
    }

    img {
      width: 40px;
      margin-right: 30px;
    }
  }
}
</style>
