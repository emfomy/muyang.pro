<template>
  <div class="ButtonGroup">
    <slot />
  </div>
</template>

<script>
export default {
  name: "ButtonGroup"
};
</script>

<style scoped lang="scss">
.ButtonGroup {
  $spacing: 0.25rem;

  margin-right: -$spacing;
  margin-bottom: -$spacing;

  ::v-deep .btn,
  ::v-deep .btn-group {
    margin-right: $spacing;
    margin-bottom: $spacing;
  }

  ::v-deep .btn-group .btn {
    margin-right: 0;
    margin-bottom: 0;
  }
}
</style>
