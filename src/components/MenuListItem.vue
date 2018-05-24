<template>
  <li class="menu-list-item">
    <img
      :src="icon"
      alt="">
    <span>{{ label }}</span>
  </li>
</template>

<script>
export default {
  name: 'MenuListItem',
  props: {
    icon: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.menu-list-item {
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
</style>
