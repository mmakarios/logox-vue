<template>
  <div class="header-search">
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
  name: 'HeaderSearch'
};
</script>

<style lang="scss" scoped>
.header-search {
  display: flex;
  flex: 1;

  .search-icon {
    margin-right: 20px;
  }

  #search-input {
    font-size: 20px;
    outline: none;
    border: 1px solid transparent;
    flex: 1;

    &:focus {
      border-bottom: 1px solid #0385db;
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
