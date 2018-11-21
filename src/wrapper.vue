<template>
  <div class="Wrapper">
    <b-button id="toggler" class="navbar-toggler navbar-light" variant="outline" :pressed.sync="collapse">
      <span class="navbar-toggler-icon" />
    </b-button>
    <b-container id="container" :class="{'the-collapse': collapse}" fluid>
      <b-row>
        <div id="sidebar">
          <SideBar role="navigation" />
        </div>
        <div id="content">
          <Content role="main" />
        </div>
      </b-row>
    </b-container>
    <b-link id="back" v-scroll-to="'#app'">
      <font-awesome-icon class="fa-2x text-primary" icon="chevron-circle-up" />
    </b-link>
  </div>
</template>

<script>
import Content from "./contents/content.vue";
import SideBar from "./contents/sidebar.vue";

export default {
  name: "Wrapper",
  components: {
    Content,
    SideBar
  },
  data: function() {
    return {
      collapse: true
    };
  }
};
</script>

<style scoped lang="scss">
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";

.Wrapper {
  overflow-x: hidden;

  #container {
    left: 0;
    transition: left 1s;
    position: relative;
  }

  #content {
    width: 100%;
    padding-left: auto;
    transition: padding-left 1s;
  }

  #sidebar {
    top: 0;
    height: 100vh;
    width: auto;
    transition: width 1s;
    overflow-x: hidden;
    overflow-y: auto;
    z-index: $zindex-sticky;
  }

  #toggler {
    position: fixed;
    top: 1rem;
    right: 1rem;
    transition: right 1s;
    z-index: $zindex-fixed;
  }

  #back {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    z-index: $zindex-fixed;
  }

  @mixin layout($sidebar-width) {
    #content {
      padding-left: $sidebar-width;
    }

    #sidebar {
      position: fixed;
      width: $sidebar-width;
    }
  }

  @include media-breakpoint-down(sm) {
    $sidebar-width: 240px;
    @include layout($sidebar-width);

    #container {
      width: calc(100% + #{$sidebar-width});

      &.the-collapse {
        left: -$sidebar-width;
      }
    }
  }

  @include media-breakpoint-up(md) {
    @include layout(256px);
    #toggler {
      right: -4rem;
    }
  }

  @include media-breakpoint-up(lg) {
    @include layout(25%);
  }

  @include media-breakpoint-up(xl) {
    @include layout(20%);
  }
}
</style>
