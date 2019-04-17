<template>
  <Wrapper id="app" />
</template>

<script>
import Wrapper from './contents/wrapper.vue';

export default {
  name: 'app',
  components: {
    Wrapper,
  },
};
</script>

<style lang="scss">
@import "assets/scss/main";
</style>
