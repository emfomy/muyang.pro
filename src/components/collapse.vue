<template>
  <div class="Collapse border rounded">
    <Opener ref="opener" :target="name" />
    <b-collapse :id="name" ref="collapse">
      <slot />
    </b-collapse>
  </div>
</template>

<script>
import Opener from './opener.vue';

export default {
  name: 'Collapse',
  components: {
    Opener,
  },
  props: {
    name: String,
  },
};
</script>
