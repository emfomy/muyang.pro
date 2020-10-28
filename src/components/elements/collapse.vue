<template>
  <div class="Collapse border rounded">
    <Opener ref="opener" :target="name" />
    <b-collapse :id="name" ref="collapse">
      <slot />
    </b-collapse>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
  },
};
</script>
