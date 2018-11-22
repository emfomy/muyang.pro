<template>
  <b-button class="IconButton pl-1" :href="href" :rel="rel" :target="target" :active="active" :activeClass="activeClass" :append="append" :disabled="disabled" :event="event" :exact="exact" :exactActiveClass="exactActiveClass" :replace="replace" :routerTag="routerTag" :to="to" :block="block" :size="size" :variant="variant" :type="type" :pressed="pressed">
    <font-awesome-icon :icon="[faStyle, faIcon]" class="fa-fw" />
    <slot />
  </b-button>
</template>

<script>
// import { bButton } from 'bootstrap-vue/es/components';

export default {
  name: "IconButton",
  props: {
    href: String,
    rel: String,
    target: String,
    active: Boolean,
    activeClass: String,
    append: Boolean,
    disabled: Boolean,
    event: String,
    exact: Boolean,
    exactActiveClass: String,
    replace: Boolean,
    routerTag: String,
    to: String,
    block: Boolean,
    size: String,
    variant: String,
    type: String,
    pressed: Boolean,

    faIcon: String,
    faStyle: String
  }
};
</script>
