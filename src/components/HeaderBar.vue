<template>
  <div class="header-bar">
    <img
      src="../assets/icons/search.svg"
      alt=""
      class="search-icon">
    <input
      id="search-input"
      type="search"
      name="search"
      placeholder="Buscar">
  </div>
</template>

<script>
export default {
  name: 'HeaderBar'
};
</script>

<style lang="scss" scoped>
.header-bar {
  background-color: #fff;
  height: 70px;
  display: flex;
  padding: 15px 30px;
  align-items: center;

  .search-icon {
    margin-right: 20px;
  }

  #search-input {
    font-size: 20px;
    outline: none;
    border: none;

    &:focus {
      border-bottom: 2px solid #0385db;
    }

    &::-webkit-input-placeholder {
      color: #0385db;
    }
    &::-moz-placeholder {
      color: #0385db;
    }
    &:-ms-input-placeholder {
      color: #0385db;
    }
    &:-moz-placeholder {
      color: #0385db;
    }
  }
}
</style>
