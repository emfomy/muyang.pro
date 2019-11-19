<template>
  <Card class="my-1 my-md-3">
    <header class="d-flex">
      <div class="Logo d-flex align-items-center justify-content-center h-100 mr-3 my-1">
        <b-img v-if="imgSrc" center class="mh-100 mw-100" :src="imgSrc" />
        <font-awesome-icon v-if="icon" class="mh-100 mw-100 text-milk-dark" :icon="icon" size="2x" />
      </div>
      <div>
        <slot />
      </div>
    </header>
    <slot name="footer" />
  </Card>
</template>

<script>
import Card from './card.vue';

export default {
  name: 'Card1a',
  components: {
    Card,
  },
  props: {
    imgSrc: String,
    icon: Object,
  },
};
</script>

<style scoped lang="scss">
.Logo {
  $logo-size: 3rem;
  min-height: $logo-size;
  min-width: $logo-size;
  height: $logo-size;
  width: $logo-size;
}
</style>
