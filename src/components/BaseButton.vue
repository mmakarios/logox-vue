<template>
  <span class="base-button">

    <button><slot/></button>
  </span>
</template>

<script>
export default {
  name: 'BaseButton'
};
</script>

<style lang="scss" scoped>
.base-button {
  button {
    -webkit-appearance: none;
    -moz-appearance: none;

    border: none;
    border-radius: 9999px;
    height: 50px;
    width: 291px;

    color: #fff;
    background-color: #0385db;
    text-transform: uppercase;
    font-size: 20px;
  }
}
</style>

