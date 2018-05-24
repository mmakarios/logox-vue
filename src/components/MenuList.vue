<template>
  <ul class="menu-list">
    <menu-list-item
      v-for="(item, index) in items"
      :key="index"
      :icon="item.icon"
      :label="item.label"/>
  </ul>
</template>

<script>
import MenuListItem from './MenuListItem';
import transactionIcon from '../assets/icons/transaction.svg';
import cardIcon from '../assets/icons/card.svg';

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

