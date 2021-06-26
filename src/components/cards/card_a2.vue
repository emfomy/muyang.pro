<template>
  <CardA1 class="CardA2" :img-src="imgSrc" :icon="icon">
    <h4>{{ year }} | {{ institution }}<br />{{ title }}</h4>
    <div class="mb-3">
      <slot />
    </div>
  </CardA1>
</template>

<script>
export default {
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
