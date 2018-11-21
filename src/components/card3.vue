<template>
  <b-container fluid class="Card3 p-4">
    <slot />
  </b-container>
</template>

<script>
export default {
  name: "Card3",
  props: {
    title: {
      style: String,
      default: ""
    },
    author: {
      style: String,
      default: ""
    },
    publish: {
      style: String,
      default: ""
    },
    imgSrc: String,
    imgLink: String,
    imgTarget: {
      style: String,
      default: "_blank"
    }
  }
};
</script>

<style scoped lang="scss">
.LogoImg {
  max-height: 80% !important;
  max-width: 80% !important;
}
</style>
