<template>
  <b-button class="IconButton" v-bind="$attrs" v-on="$listeners">
    <fa-icon :icon="[faStyle, faIcon]" :class="{ 'mr-1': !!$slots.default }" />
    <slot />
  </b-button>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    faIcon: String,
    faStyle: String,
  },
};
</script>
