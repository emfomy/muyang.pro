<template>
  <Card class="my-1 my-md-3">
    <header class="d-flex">
      <div
        class="Logo d-flex align-items-center justify-content-center mr-3 my-1"
      >
        <b-img v-if="imgSrc" center class="w-100" :src="imgSrc" />
        <fa-icon
          v-if="icon"
          class="w-100 text-milk-dark"
          :icon="icon"
          size="2x"
        />
      </div>
      <div>
        <slot />
      </div>
    </header>
    <slot name="footer" />
  </Card>
</template>

<script>
export default {
  props: {
    imgSrc: [String, Object],
    icon: [String, Object],
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
