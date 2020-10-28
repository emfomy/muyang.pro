<template>
  <b-container class="Content px-0 px-md-3">
    <About id="about" ref="about" class="border-top-0" />
    <b-container>
      <b-row>
        <Education id="education" ref="education" class="col-12 col-xl-6" />
        <Employment id="employment" ref="employment" class="col-12 col-xl-6" />
      </b-row>
    </b-container>
    <Publication id="publication" ref="publication" />
    <Honor id="honor" ref="honor" />
    <Project id="project" ref="project" />
  </b-container>
</template>

<script>
export default {
  methods: {
    scrollTo(section, id) {
      this.$refs[section].$refs.collapse.$refs.collapse.show = true;
      this.$nextTick(() => {
        this.$scrollTo(id);
      });
    },
  },
};
</script>

<style scoped lang="scss">
.Content {
  .Section {
    border-top: solid 6px #f4f4f4;
  }
}
</style>
