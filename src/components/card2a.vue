<template>
  <Card class="Card2a p-3 p-lg-4">
    <slot />
  </Card>
</template>

<script>
import Card from './card.vue';

export default {
  name: 'Card2a',
  components: {
    Card,
  },
};
</script>
