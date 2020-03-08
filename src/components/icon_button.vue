<template>
  <b-button class="IconButton" v-bind="$props">
    <fa-icon :icon="[faStyle, faIcon]" :class="{ 'mr-1': !!$slots.default }" />
    <slot />
  </b-button>
</template>

<script>
import { BButton } from 'bootstrap-vue';

export default {
  name: 'IconButton',
  props: {
    faIcon: String,
    faStyle: String,
    ...BButton.options.props,
  },
};
</script>
