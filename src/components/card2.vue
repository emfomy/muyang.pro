<template>
  <b-container class="Card2 p-3 p-lg-4">
    <b-row>
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
  </b-container>
</template>

<script>
export default {
  name: "Card2",
  props: {
    src: String,
    srcSide: String,
    href: String,
    target: {
      style: String,
      default: "_blank"
    }
  }
};
</script>
