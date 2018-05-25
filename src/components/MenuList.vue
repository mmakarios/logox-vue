<template>
  <ul class="menu-list">
    <menu-list-item
      v-for="(item, index) in items"
      :class="{active: item.active}"
      :key="index"
      :icon="item.icon"
      :label="item.label"/>
  </ul>
</template>

<script>
import MenuListItem from './MenuListItem';
import transactionIcon from '../assets/icons/transaction.svg';
import cardIcon from '../assets/icons/card.svg';
import monitorIcon from '../assets/icons/monitor.svg';
import fingerprintIcon from '../assets/icons/fingerprint_black.svg';
import gearIcon from '../assets/icons/gear.svg';

export default {
  name: 'MenuList',
  components: {
    MenuListItem
  },
  data() {
    return {
      items: [
        {
          icon: transactionIcon,
          label: 'Fazer nova transação'
        },
        {
          icon: cardIcon,
          label: 'Fazer simulação'
        },
        {
          icon: monitorIcon,
          label: 'Painel do cliente'
        },
        {
          icon: fingerprintIcon,
          label: 'Meus dados cadastrais',
          active: true
        },
        {
          icon: gearIcon,
          label: 'Configurações'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.menu-list {
  font-size: 14px;
}
</style>

