<template>
  <b-button class="Opener text-center w-100 collapsed" size="sm" variant="light" v-b-toggle="target">
    <font-awesome-icon class="OpenerInner1 text-primary" icon="chevron-down" />
    <span class="OpenerText mx-2" />
    <font-awesome-icon class="OpenerInner2 text-primary" icon="chevron-down" />
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
  .OpenerText::before, .OpenerText::after {
    transition: opacity 0.5s ease;
  }

  .OpenerText::before {
    content: "More";
  }

  .OpenerText::after {
    content: "Hide";
  }

  &:not(.collapsed) .OpenerText::before, &.collapsed .OpenerText::after {
    content: "";
    opacity: 0;
  }

  .OpenerInner1, .OpenerInner2 {
    transition: transform 0.5s ease;
    transform: rotate(0);
  }

  &:not(.collapsed) .OpenerInner1 {
    transform: rotate(-180deg);
  }

  &:not(.collapsed) .OpenerInner2 {
    transform: rotate(180deg);
  }
}
</style>
