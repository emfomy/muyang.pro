<template>
  <Card1a class="Card1b" :img-src="imgSrc">
    <template>
      <h4>{{ year }} | {{ institution }}<br />{{ title }}</h4>
      <p><slot /></p>
    </template>
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
    icon: Object,
  },
};
</script>
