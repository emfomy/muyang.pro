<template>
  <b-button class="Opener text-center w-100 collapsed" size="sm" variant="light" v-b-toggle="target">
    <font-awesome-icon class="OpenerInner text-primary" icon="chevron-down" />
  </b-button>
</template>

<script>
export default {
  name: 'Opener',
  props: {
    target: String,
  },
};
</script>

<style scoped lang="scss">
.Opener {
  .OpenerInner {
    transition: transform 0.5s ease;
    transform: rotate(0);
  }

  &:not(.collapsed) .OpenerInner {
    transform: rotate(180deg);
  }
}
</style>
