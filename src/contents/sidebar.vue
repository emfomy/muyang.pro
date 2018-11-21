<template>
  <b-navbar class="SideBar text-center flex-column p-3" type="light" variant="light">
    <div class="w-100">
      <b-navbar-brand class="pt-3" href="/">
        <b-img center class="h-50 w-50" rounded="circle" src="/img/avatar.jpg" />
      </b-navbar-brand>

      <b-nav-text class="p-0">
        <h3>Mu Yang</h3>
        <p>Research Assistant</p>
        <hr>
      </b-nav-text>

      <b-nav pills vertical class="w-100" v-b-scrollspy>
        <b-nav-item href="#about" v-scroll-to="'#about'">About</b-nav-item>
        <b-nav-item href="#education" v-scroll-to="'#education'">Experiences</b-nav-item>
        <b-nav-item href="#publication" v-scroll-to="'#publication'">Publications</b-nav-item>
        <b-nav-item href="#project" v-scroll-to="'#project'">Projects</b-nav-item>
      </b-nav>
    </div>

    <div class="w-100">
      <div class="d-block" @mouseleave="iconTextOff">
        <b-nav-text class="mb-1" style="word-wrap: break-word;" v-html="icon_text"></b-nav-text>
        <div class="d-flex justify-content-around">
          <b-link v-for="(item, key) in icon_list" :href="item.href" :key="key" target="_blank">
            <font-awesome-icon class="fa-fw" :icon="[item.style, item.icon]" @mouseover="iconTextOn(item)" />
          </b-link>
        </div>
      </div>
      <hr>
      <footer>
        <small><span class="text-muted">&copy; Mu Yang. All rights reserved.</span></small>
      </footer>
    </div>
  </b-navbar>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      icon_text: "\xa0",
      icon_list: {
        email: {
          icon: "envelope",
          style: "fas",
          href: "mailto:emfomy@gmail.com",
          text: "emfomy@gmail.com"
        },
        phone: {
          icon: "phone",
          style: "fas",
          href: "tel:+886-2-27883799;ext=1562",
          text: "+886 (2) 2788-3799 ext. 1562"
        },
        github: {
          icon: "github",
          style: "fab",
          href: "//github.com/emfomy",
          text: "github.com/<wbr>emfomy"
        },
        linkedin: {
          icon: "linkedin-in",
          style: "fab",
          href: "//www.linkedin.com/in/emfomy",
          text: "www.linkedin.com/in/<wbr>emfomy"
        },
        facebook: {
          icon: "facebook-f",
          style: "fab",
          href: "//www.facebook.com/emfomy",
          text: "www.facebook.com/<wbr>emfomy"
        },
        twitter: {
          icon: "twitter",
          style: "fab",
          href: "//www.twitter.com/emfomy",
          text: "www.twitter.com/<wbr>emfomy"
        }
      }
    };
  },
  methods: {
    iconTextOn: function(item) {
      this.icon_text = item.text;
    },
    iconTextOff: function() {
      this.icon_text = "\xa0";
    }
  }
};
</script>

<style scoped lang="scss">
.flex-column {
  .navbar-brand {
    margin-right: 0;
    margin-bottom: 1rem;
  }

  .navbar-text {
    padding: 0 0.5rem;
  }
}
.SideBar {
  min-height: 100%;
}
</style>
