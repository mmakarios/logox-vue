<template>
  <div class="base-input">
    <div class="label">{{ label }}</div>
    <input
      :placeholder="placeholder"
      type="text"
      name="name">
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
    }
  }
};
</script>

<style lang="scss" scoped>
.base-input {
  max-width: 417px;
  width: 40%;
  margin-right: 6%;
}
.label {
  font-size: 18px;
  margin: 15px 0;
}

input {
  width: 100%;
  border: 1px solid rgba(191, 191, 191, 0.5);
  border-radius: 4px;
  padding: 20px 25px 15px;
  font-size: 14px;

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
</style>
