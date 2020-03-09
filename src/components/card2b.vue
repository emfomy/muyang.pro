<template>
  <Card2a class="Card2b">
    <b-row :class="{ 'flex-row-reverse': right }">
      <b-col cols="12" lg="3" class="d-flex align-items-center justify-content-center mb-3 mb-lg-0">
        <b-link :href="href" :target="target" :disabled="href === undefined">
          <picture v-if="src">
            <source v-if="srcSide" media="(min-width: 992px)" :srcset="srcSide">
            <b-img class="mh-100 mw-100" center rounded fluid :src="src" />
          </picture>
        </b-link>
      </b-col>
      <b-col cols="12" lg="9">
        <slot />
      </b-col>
    </b-row>
  </Card2a>
</template>

<script>
import Card2a from './card2a.vue';

export default {
  name: 'Card2b',
  components: {
    Card2a,
  },
  props: {
    src: String,
    srcSide: String,
    href: String,
    target: {
      type: String,
      default: '_blank',
    },
    right: Boolean,
  },
};
</script>
