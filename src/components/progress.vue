<template>
  <b-progress class="my-3" :variant="variant">
    <b-progress-bar class="d-block" :value="value">
      <span v-text="name" class="float-left ml-2"></span>
      <span v-text="value+'%'" class="float-right mr-2"></span>
    </b-progress-bar>
  </b-progress>
</template>

<script>
export default {
  name: 'Progress',
  props: {
    name: String,
    value: Number,
    variant: String,
  },
};
</script>

<style scoped lang="scss">
.progress {
  height: 2rem;

  .progress-bar {
    line-height: 2rem;
    transition: width 2s ease;
  }
}
</style>
