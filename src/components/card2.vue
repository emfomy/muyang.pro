<template>
  <b-container fluid class="Card2 p-4">
    <b-row>
      <b-col cols="12" lg="3" class="mb-3 mb-lg-0">
        <div class="d-flex align-items-center justify-content-center h-100">
          <b-link :href="imgLink" :target="imgTarget" :disabled="imgLink === undefined">
            <b-img v-if="imgSrc" class="LogoImg" center rounded fluid :src="imgSrc" />
          </b-link>
        </div>
      </b-col>
      <b-col cols="12" lg="9">
        <b-container fluid>
          <header>
            <h4 v-text="title" />
            <p>{{ author }}<br />{{ publish }}</p>
          </header>
          <slot />
        </b-container>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Card2",
  props: {
    title: {
      style: String,
      default: ""
    },
    author: {
      style: String,
      default: ""
    },
    publish: {
      style: String,
      default: ""
    },
    imgSrc: String,
    imgLink: String,
    imgTarget: {
      style: String,
      default: "_blank"
    }
  }
};
</script>

<style scoped lang="scss">
.LogoImg {
  max-height: 80% !important;
  max-width: 80% !important;
}
</style>
