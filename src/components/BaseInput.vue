<template>
  <div class="base-input">
    <label>
      {{ label }}

      <input
        :placeholder="placeholder"
        :type="type"
        :class="{dropdown}"
        name="name">
      <span
        v-if="dropdown"
        class="dropdown-button">
        <img
          src="../assets/icons/arrow_down.svg"
          alt="select">
      </span>
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
    },
    dropdown: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.base-input {
  width: 100%;
  margin: 10px 0;
  position: relative;

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

    &:hover,
    &.dropdown {
      border-color: #0385db;
    }

    &.dropdown {
      cursor: pointer;
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

  .dropdown-button {
    position: absolute;
    right: 20px;
    top: 55%;
  }
}
</style>
