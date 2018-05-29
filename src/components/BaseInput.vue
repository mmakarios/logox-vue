<template>
  <div class="base-input">
    <label>
      {{ label }}

      <input
        :placeholder="placeholder"
        :type="type"
        name="name">
    </label>
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    label: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  }
};
</script>

<style lang="scss" scoped>
.base-input {
  width: 100%;
  margin: 10px 0;

  @include media('>phone') {
    &.two-thirds {
      width: 63%;
    }

    &.one-third {
      width: 33%;
    }
  }

  label {
    font-size: 18px;
  }

  input {
    margin-top: 12px;
    width: 100%;
    border: 1px solid rgba(191, 191, 191, 0.5);
    border-radius: 4px;
    padding: 20px 25px 15px;
    font-size: 14px;

    @include media('<=lg') {
      padding-left: 15px;
      padding-right: 15px;
    }

    &:hover {
      border-color: #0385db;
    }

    &::-webkit-input-placeholder {
      color: #999999;
    }
    &::-moz-placeholder {
      color: #999999;
    }
    &:-ms-input-placeholder {
      color: #999999;
    }
    &:-moz-placeholder {
      color: #999999;
    }
  }
}
</style>
