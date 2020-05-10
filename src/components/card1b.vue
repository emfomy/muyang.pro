<template>
  <Card1a class="Card1b" :img-src="imgSrc" :icon="icon">
    <h4>{{ year }} | {{ institution }}<br>{{ title }}</h4>
    <div class="mb-3">
      <slot />
    </div>
  </Card1a>
</template>

<script>
import Card1a from './card1a.vue';

export default {
  name: 'Card1b',
  components: {
    Card1a,
  },
  props: {
    year: {
      type: String,
      defulat: '',
    },
    title: {
      type: String,
      defulat: '',
    },
    institution: {
      type: String,
      defulat: '',
    },
    imgSrc: [String, Object],
    icon: [String, Object],
  },
};
</script>
