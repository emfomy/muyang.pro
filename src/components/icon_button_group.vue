<template>
  <div class="IconButtonGroup">
    <slot />
  </div>
</template>

<script>
// import { bButton } from 'bootstrap-vue/es/components';

export default {
  name: "IconButtonGroup"
};
</script>

<style scoped lang="scss">
.IconButtonGroup {
  $spacing: 0.25rem;

  margin-right: -$spacing;
  margin-bottom: -$spacing;

  >>> .IconButton {
    margin-right: $spacing;
    margin-bottom: $spacing;
  }
}
</style>
