<template>
  <span class="base-input-checkbox">
    <label>
      <input
        :name="name"
        type="checkbox">

      {{ label }}
    </label>
  </span>
</template>

<script>
export default {
  name: 'BaseInputCheckbox',
  props: {
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.base-input-checkbox {
  label {
    font-size: 13px;
    display: inline-flex;
    align-items: center;
  }
  input {
    -webkit-appearance: none;
    -moz-appearance: none;

    border-radius: 50%;
    width: 28px;
    height: 28px;

    border: solid 2px #0385db;
    transition: 0.1s all linear;
    outline: none;
    margin-right: 10px;

    &:checked {
      background-color: #0385db;
    }
  }
}
</style>

