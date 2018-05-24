<template>
  <ul class="menu-list">
    <li>
      <img
        src="../assets/icons/transaction.svg"
        alt="">
      <span>Fazer nova transação</span>
    </li>
    <li>
      <img
        src="../assets/icons/card.svg"
        alt="">
      <span>Fazer simulação</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'MenuList'
};
</script>

<style lang="scss" scoped>
.menu-list {
  font-size: 14px;

  li {
    text-align: left;
    background-color: #242a35;
    margin-bottom: 2px;
    height: 53px;
    display: flex;
    align-items: center;
    padding: 10px 20px;
    cursor: pointer;

    img {
      margin-right: 10px;
    }

  }
}
</style>

