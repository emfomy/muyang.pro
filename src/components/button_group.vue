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

  & /deep/ .btn {
    margin-right: $spacing;
    margin-bottom: $spacing;
  }

  & /deep/ .btn-group {
    & /deep/ .btn {
      margin-right: 0;
      margin-bottom: 0;
    }
    margin-bottom: $spacing;
    margin-right: $spacing;
  }
}
</style>
