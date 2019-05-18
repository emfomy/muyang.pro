<template>
  <b-navbar class="SideBar text-center d-flex flex-column p-3" type="light" variant="milk-light">
    <div class="flex-fill w-100">
      <b-navbar-brand class="pt-3">
        <b-link href="/img/avatar.jpg" target="_blank">
          <b-img center class="h-50 w-50" rounded="circle" src="/img/avatar.jpg" />
        </b-link>
      </b-navbar-brand>

      <b-nav-text class="p-0">
        <h3>Mu Yang</h3>
        <p>Research Assistant</p>
        <hr>
      </b-nav-text>

      <b-nav pills vertical class="w-100" v-b-scrollspy>
        <b-nav-item href="#about"
                    v-scroll-to="'#about'"
                    @click="resetToggle">
          About
        </b-nav-item>
        <b-nav-item href="#education"
                    v-scroll-to="'#education'"
                    @click="resetToggle">
          Experiences
        </b-nav-item>
        <b-nav-item href="#publication"
                    v-scroll-to="'#publication'"
                    @click="resetToggle">
          Publications
        </b-nav-item>
        <b-nav-item href="#project"
                    v-scroll-to="'#project'"
                    @click="resetToggle">
          Projects
        </b-nav-item>
      </b-nav>
    </div>

    <div class="w-100 mt-3">
      <div class="d-block" @mouseleave="iconTextOff">
        <b-nav-text class="IconText text-nowrap p-0" v-html="icon_text" />
        <div class="d-flex justify-content-around my-1">
          <b-link v-for="(item, key) in icon_list"
                  :href="item.href"
                  :key="key"
                  target="_blank"
                  @mouseenter="iconTextOn(item)"
                  @touchstart="iconTextOn(item)">
            <font-awesome-icon class="fa-fw" :icon="[item.style, item.icon]" />
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
  name: 'SideBar',
  props: {
    resetToggle: Function,
  },
  data() {
    return {
      icon_text: '\xa0',
      icon_list: {
        email: {
          icon: 'envelope',
          style: 'fas',
          href: 'mailto:emfomy@gmail.com',
          text: 'emfomy@gmail.com',
        },
        phone: {
          icon: 'phone',
          style: 'fas',
          href: 'tel:+886-2-27883799;ext=1562',
          text: '+886 (2) 2788-3799 ext. 1562',
        },
        github: {
          icon: 'github',
          style: 'fab',
          href: '//github.com/emfomy',
          text: 'github.com/emfomy',
        },
        pypi: {
          icon: 'python',
          style: 'fab',
          href: '//pypi.org/user/emfomy',
          text: 'pypi.org/user/emfomy',
        },
        linkedin: {
          icon: 'linkedin-in',
          style: 'fab',
          href: '//www.linkedin.com/in/emfomy',
          text: 'www.linkedin.com/in/emfomy',
        },
        facebook: {
          icon: 'facebook-f',
          style: 'fab',
          href: '//www.facebook.com/emfomy',
          text: 'www.facebook.com/emfomy',
        },
        twitter: {
          icon: 'twitter',
          style: 'fab',
          href: '//www.twitter.com/emfomy',
          text: 'www.twitter.com/emfomy',
        },
        // ,
        // orcid: {
        //   icon: "id-card",
        //   style: "fas",
        //   href: "//orcid.org/0000-0001-6404-7842",
        //   text: "0000-0001-6404-7842"
        // }
      },
    };
  },
  methods: {
    iconTextOn(item) {
      this.icon_text = item.text;
    },
    iconTextOff() {
      this.icon_text = '\xa0';
    },
  },
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

.IconText {
  height: 2rem;
}
</style>
