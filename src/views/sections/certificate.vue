<template>
  <Section class="Certificate">

    <template slot="header">
      <h2>Certificates & Awards</h2>
      <p></p>
    </template>

    <Card3 id="certificate-gre">
      <header>
        <h4>Subject GRE — Mathematics</h4>
        <p>840 / 84%</p>
      </header>
    </Card3>

    <!-- <Card3>
      <header>
        <h4>Presentation Excellence Award</h4>
        <p>2016, 7th Taiwan-Japan Joint Workshop for Young Scholars in Applied Mathematics</p>

        <IconButton size="sm"
                    variant="outline-primary"
                    @click.native="scrollPublication('#publication-tjjw-jsam-2016');"
                    fa-icon="info"
                    fa-style="fas">
          More
        </IconButton>
      </header>
    </Card3> -->

  </Section>
</template>

<script>
import Section from './_section.vue';
import Card3 from '@/components/card3.vue';

export default {
  name: 'Certificate',
  components: {
    Section,
    Card3,
  },
  methods: {
    scrollPublication(id) {
      this.$parent.$refs.publication.$refs.collapse.$refs.collapse.show = true;
      this.$nextTick(() => {
        this.$scrollTo(id);
      });
    },
  },
};
</script>

<style scoped lang="scss">
.Certificate {
  .Card3 {
    border-top: solid 4px #f4f4f4;
  }

  .Card3:first-of-type {
    border-top: 0 !important;
  }
}
</style>
