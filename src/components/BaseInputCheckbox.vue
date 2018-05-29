<template>
  <span class="base-input-checkbox">
    <input
      :name="name"
      :id="'checkbox-'+ name"
      type="checkbox">
    <label :for="'checkbox-'+ name">
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
  @include media('<=md') {
    max-width: 230px;
  }

  @include media('<=phone') {
    max-width: unset;
  }

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

    flex-shrink: 0;

    &:checked {
      background-color: #0385db;
    }

    @include media('<=phone') {
      margin-right: 6px;
    }
  }
}
</style>

