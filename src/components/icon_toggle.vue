<template>
  <div class="text-center cursor-pointer" v-b-toggle="target">
    <font-awesome-icon class="text-primary when-closed" icon="chevron-down" />
    <font-awesome-icon class="text-primary when-opened" icon="chevron-up" />
  </div>
</template>

<script>
// import { bButton } from 'bootstrap-vue/es/components';

export default {
  name: "IconToggle",
  props: {
    target: String
  }
};
</script>
