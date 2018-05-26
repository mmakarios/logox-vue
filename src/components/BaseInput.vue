<template>
  <div>
    <div class="label">{{ label }}</div>
    <input
      type="text"
      name="name"
      placeholder="Digite seu nome">
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    label: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.label {
  font-size: 18px;
  margin: 15px 0;
}

input {
  max-width: 417px;
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
