<template>
  <BButton class="IconButton" v-bind="$props">
    <font-awesome-icon :icon="[faStyle, faIcon]" :class="{ 'mr-1': !!$slots.default }" />
    <slot />
  </BButton>
</template>

<script>
import { BButton, props as BButtonProps } from 'bootstrap-vue/esm/components/button/button';

export default {
  name: 'IconButton',
  components: {
    BButton,
  },
  props: {
    faIcon: String,
    faStyle: String,
    ...BButtonProps,
  },
};

</script>
