<template>
  <div class="base-input-radio-group">
    <div class="legend">{{ legend }}</div>

    <span
      v-for="(value,index) in values"
      :key="value">
      <input
        :name="name"
        :value="value"
        :id="'radio-' + name + '-' + value"
        type="radio">
      <label>
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

  @include media('<=lg') {
    font-size: 18px;
  }

  .legend {
    font-size: 18px;
    margin-bottom: 25px;
  }

  label {
    color: #0385db;
    margin-right: 6%;
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

    position: relative;
    top: 6px;

    &:checked {
      border: 10px solid #0385db;
    }
  }
}
</style>

