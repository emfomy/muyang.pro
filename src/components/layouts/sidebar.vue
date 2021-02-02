<template>
  <b-navbar
    class="SideBar text-center d-flex flex-column p-3"
    type="light"
    variant="milk-light"
  >
    <div class="flex-fill w-100">
      <b-navbar-brand class="pt-3">
        <b-link :href="require('@/assets/img/avatar.jpg')" target="_blank">
          <b-img
            center
            class="h-50 w-50"
            rounded="circle"
            :src="require('@/assets/img/avatar.jpg?resize').src"
          />
        </b-link>
      </b-navbar-brand>

      <b-nav-text class="py-0 px-3 w-100">
        <h3>Mu Yang</h3>
        <p>Research Assistant</p>
        <hr />
      </b-nav-text>

      <b-nav v-b-scrollspy pills vertical class="w-100">
        <b-nav-item v-scroll-to="'#about'" href="#about" @click="resetToggle">
          About
        </b-nav-item>
        <b-nav-item
          v-scroll-to="'#education'"
          href="#education"
          @click="resetToggle"
        >
          Experience
        </b-nav-item>
        <b-nav-item
          v-scroll-to="'#publication'"
          href="#publication"
          @click="resetToggle"
        >
          Publications
        </b-nav-item>
        <b-nav-item v-scroll-to="'#honor'" href="#honor" @click="resetToggle">
          Honors
        </b-nav-item>
        <b-nav-item
          v-scroll-to="'#project'"
          href="#project"
          @click="resetToggle"
        >
          Portfolio
        </b-nav-item>
      </b-nav>
    </div>

    <div class="w-100 mt-3">
      <div class="d-block" @mouseleave="iconTextOff">
        <b-nav-text
          class="IconText text-nowrap p-0"
          v-text="iconText || '\xA0'"
        />
        <div class="d-flex justify-content-around my-1">
          <b-link
            v-for="(item, key) in iconList"
            :key="key"
            :href="item.href"
            target="_blank"
            @mouseenter="iconTextOn(item)"
            @touchstart="iconTextOn(item)"
          >
            <i
              v-if="item.type == 'ai'"
              class="ai ai-fw"
              :class="`ai-${item.icon}`"
            />
            <fa-icon v-else class="fa-fw" :icon="[item.style, item.icon]" />
          </b-link>
        </div>
      </div>
      <hr />
      <footer>
        <small
          ><span class="text-muted"
            >&copy; Mu Yang. All rights reserved.</span
          ></small
        >
      </footer>
    </div>
  </b-navbar>
</template>

<script>
export default {
  props: {
    resetToggle: Function,
  },
  data() {
    return {
      iconText: null,
      iconList: {
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
        // twitter: {
        //   icon: 'twitter',
        //   style: 'fab',
        //   href: '//www.twitter.com/emfomy',
        //   text: 'www.twitter.com/emfomy',
        // },
        // ,
        // orcid: {
        //   icon: 'orcid',
        //   type: 'ai',
        //   href: '//orcid.org/0000-0001-6404-7842',
        //   text: '0000-0001-6404-7842',
        // },
      },
    };
  },
  methods: {
    iconTextOn(item) {
      this.iconText = item.text;
    },
    iconTextOff() {
      this.iconText = null;
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
