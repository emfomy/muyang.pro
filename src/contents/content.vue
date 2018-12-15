<template>
  <b-container class="Content px-0 px-md-3">

    <About id="about" ref="about" />
    <b-container>
      <b-row>
        <Education id="education" ref="education" class="col-12 col-xl-6" />
        <Employment id="employment" ref="employment" class="col-12 col-xl-6" />
      </b-row>
    </b-container>
    <Publication id="publication" ref="publication" />
    <Project id="project" ref="project" />

  </b-container>
</template>

<script>
import About from "./sections/about.vue";
import Education from "./sections/education.vue";
import Employment from "./sections/employment.vue";
import Publication from "./sections/publication.vue";
import Project from "./sections/project.vue";

export default {
  name: "Content",
  components: {
    About,
    Education,
    Employment,
    Publication,
    Project
  }
};
</script>

<style scoped lang="scss">
.Content {
  .Section {
    border-top: solid 6px #f4f4f4;
  }

  >>> .Section:first-of-type {
    border-top: 0 !important;
  }
}
</style>
