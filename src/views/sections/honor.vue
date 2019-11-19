<template>
  <Section class="Honor">

    <template slot="header">
      <h2>Awards & Certificates</h2>
      <p></p>
    </template>

    <Card1a id="award-fgc"
            img-src="/img/fgc_logo.png">
      <header>
        <h4>Top 2 Short Answer, Top 3 Multiple Choice, Out of 143 Teams.</h4>
        <p>2018–2019, Formosa Grand Challenge (Chinese TOEFL-like listening comprehension QA).
          <IconButton size="xs"
                      variant="outline-primary"
                      href="https://fgc.stpi.narl.org.tw/news/newsDetail?id=4b11413069b2d4110169b3d72dfa0002"
                      target="_blank"
                      fa-icon="external-link-alt"
                      fa-style="fas">
            Official Post
          </IconButton>
        </p>
      </header>
    </Card1a>

    <Card1a id="award-tjjw-jsam-2016"
            icon="award">
      <header>
        <h4>Presentation Excellence Award</h4>
        <p>2016, 7th Taiwan-Japan Joint Workshop for Young Scholars in Applied Mathematics.
          <IconButton size="xs"
                      variant="outline-primary"
                      @click.native="scrollPublication('#publication-tjjw-jsam-2016');"
                      fa-icon="info"
                      fa-style="fas">
            More
          </IconButton>
        </p>
      </header>
    </Card1a>

    <Card1a id="award-academic-ntu"
            img-src="/img/ntu_logo.png">
      <header>
        <h4>Top 1 Academic Award</h4>
        <p>2012, National Taiwan University</p>
      </header>
    </Card1a>

    <Card1a id="certificate-gre"
            img-src="/img/gre_logo.svg">
      <header>
        <h4>GRE Mathematics Subject Test</h4>
        <p>2018, Score 840, Percentile 84%.</p>
      </header>
    </Card1a>

  </Section>
</template>

<script>
import Section from './_section.vue';
import Card1a from '@/components/card1a.vue';

export default {
  name: 'Honor',
  components: {
    Section,
    Card1a,
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
// .Honor {
//   .Card {
//     border-top: solid 4px #f4f4f4;
//   }

//   .Card:first-of-type {
//     border-top: 0 !important;
//   }
// }
</style>
