<template>
  <div class="Collapse border rounded">
    <Opener :target="name" />
    <b-collapse :id="name">
      <slot />
    </b-collapse>
  </div>
</template>

<script>
import Opener from "./opener.vue";

export default {
  name: "Collapse",
  props: {
    name: String
  },
  components: {
    Opener
  }
};
</script>
