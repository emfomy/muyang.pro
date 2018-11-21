<template>
  <section class="Section container p-5">
    <header class="mb-4 text-center">
      <slot name="header" />
    </header>
    <slot />
  </section>
</template>

<script>
export default {
  name: "Section"
};
</script>
