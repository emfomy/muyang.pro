<template>
  <b-container class="my-1 my-md-3">
    <header class="d-flex">
      <div class="Logo d-flex align-items-center justify-content-center h-100 mr-3 my-1">
        <b-img v-if="imgSrc" center class="mh-100 mw-100" :src="imgSrc" />
      </div>
      <div>
        <h4>{{ year }} | {{ institution }}<br />{{ title }}</h4>
        <p><slot name="description" /></p>
      </div>
    </header>
    <slot />
  </b-container>
</template>

<script>
export default {
  name: 'Card1',
  props: {
    year: {
      style: String,
      defulat: '',
    },
    title: {
      style: String,
      defulat: '',
    },
    institution: {
      style: String,
      defulat: '',
    },
    imgSrc: String,
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
