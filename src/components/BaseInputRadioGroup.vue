<template>
  <div class="base-input-radio-group">
    <div class="legend">{{ legend }}</div>

    <span
      v-for="(value,index) in values"
      :key="value"
      class="base-radio">
      <input
        :name="name"
        :value="value"
        :id="'radio-' + name + '-' + value"
        type="radio">
      <label :for="'radio-' + name + '-' + value">
        {{ labels[index] }}
      </label>
    </span>
  </div>
</template>

<script>
export default {
  name: 'BaseInputRadioGroup',
  props: {
    name: {
      type: String,
      required: true
    },
    values: {
      type: Array,
      required: true
    },
    labels: {
      type: Array,
      required: true
    },
    legend: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
.base-input-radio-group {
  font-size: 20px;
  flex: 1;

  @include media('<=lg') {
    font-size: 18px;
  }

  @include media('<=md') {
    font-size: 16px;
  }

  @include media('<=phone') {
    font-size: 20px;
  }

  .legend {
    font-size: 18px;
    margin-bottom: 25px;
  }
  .base-radio {
    display: inline-flex;
    align-items: center;

    &:not(:last-of-type) {
      margin-right: 6%;
    }
  }

  label {
    color: #0385db;
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
  }
}
</style>

