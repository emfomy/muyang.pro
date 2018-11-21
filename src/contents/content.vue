<template>
  <div class="Content container">

    <About id="about" />
    <div class="container">
      <b-row>
        <Education id="education" class="col-12 col-lg-6" />
        <Employment id="employment" class="col-12 col-lg-6" />
      </b-row>
    </div>
    <Publication id="publication" />
    <Project id="project" />

  </div>
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
