<template>
  <Section class="Certificate">

    <template slot="header">
      <h2>Certificates & Awards</h2>
      <p></p>
    </template>

    <Card3 id="award-fgc">
      <header>
        <h4>Top 2 Short Answer, Top 3 Multiple Choice, Out of 143 Teams.</h4>
        <p>2018–2019, Formosa Grand Challenge (Chinese TOEFL-like listening comprehension QA).</p>

        <IconButton size="sm"
                    variant="outline-primary"
                    href="https://fgc.stpi.narl.org.tw/news/newsDetail?id=4b11413069b2d4110169b3d72dfa0002"
                    target="_blank"
                    fa-icon="external-link-alt"
                    fa-style="fas">
          Official Post
        </IconButton>
      </header>
    </Card3>

    <Card3 id="award-tjjw-jsam-2016">
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
    </Card3>

    <!-- <Card3 id="award-academic-ntu">
      <header>
        <h4>Top 1 Academic Award</h4>
        <p>2012, National Taiwan University</p>
      </header>
    </Card3> -->

    <Card3 id="certificate-gre">
      <header>
        <h4>GRE Mathematics Subject Test</h4>
        <p>2018, Score 840, Percentile 84%.</p>
      </header>
    </Card3>

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
