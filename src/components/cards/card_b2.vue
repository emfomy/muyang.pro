<template>
  <CardB1 class="CardB2">
    <b-row :class="{ 'flex-row-reverse': right }">
      <b-col cols="2" md="3" class="d-lg-none" />
      <b-col
        cols="8"
        md="6"
        lg="4"
        xl="3"
        class="d-flex align-items-center justify-content-center mb-3 mb-lg-0"
      >
        <b-link :href="href" :target="target" :disabled="!href" class="image">
          <picture v-if="imgSrc">
            <source
              v-if="imgSrcSide"
              media="(min-width: 992px)"
              :srcset="imgSrcSide"
            />
            <b-img class="mh-100 mw-100" center rounded fluid :src="imgSrc" />
          </picture>
        </b-link>
      </b-col>
      <b-col cols="2" md="3" class="d-lg-none" />
      <b-col cols="12" lg="8" xl="9">
        <slot />
      </b-col>
    </b-row>
  </CardB1>
</template>

<script>
export default {
  name: 'CardB2',
  props: {
    imgSrc: [String, Object],
    imgSrcSide: [String, Object],
    href: String,
    target: {
      type: String,
      default: '_blank',
    },
    right: Boolean,
  },
};
</script>
