<template>
  <Section class="Honor">
    <template slot="header">
      <h2>Awards & Certificates</h2>
    </template>

    <Card1a
      id="award-fgc"
      img-src="/img/award/fgc_logo.png"
    >
      <header>
        <h4>Top 2 Short Answer, Top 3 Multiple Choice, Out of 143 Teams.</h4>
        <p>
          2018–2019, Formosa Grand Challenge (Chinese TOEFL-like listening comprehension QA).
          <IconButton
            size="xs"
            variant="outline-primary"
            href="https://fgc.stpi.narl.org.tw/news/newsDetail?id=4b11413069b2d4110169b3d72dfa0002"
            target="_blank"
            fa-icon="external-link-alt"
            fa-style="fas"
          >
            Official Post
          </IconButton>
        </p>
      </header>
    </Card1a>

    <Card1a
      id="award-tjjw-jsam-2016"
      icon="award"
    >
      <header>
        <h4>Presentation Excellence Award</h4>
        <p>
          2016, 7th Taiwan-Japan Joint Workshop for Young Scholars in Applied Mathematics.
          <IconButton
            size="xs"
            variant="outline-primary"
            fa-icon="level-up-alt"
            fa-style="fas"
            @click.native="$parent.scrollTo('publication', '#publication-tjjw-jsam-2016');"
          >
            Related Workshop
          </IconButton>
        </p>
      </header>
    </Card1a>

    <Card1a
      id="award-academic-ntu"
      img-src="/img/logo/ntu_logo.png"
    >
      <header>
        <h4>Top 1 Academic Excellence Award</h4>
        <p>Fall 2011, Department of Mathematics, National Taiwan University</p>
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
};
</script>
