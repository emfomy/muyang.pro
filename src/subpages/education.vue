<template>
  <Section>
    <template slot="header">
      <h2>Educations</h2>
    </template>

    <Card1b
      year="2015-2017"
      title="Master of Science"
      institution="Nat'l. Taiwan Univ."
      img-src="/img/logo/ntu_logo.png"
    >
      <b-link href="http://www.math.ntu.edu.tw/~iams/eng" target="_blank">Institute of Applied Mathematical Sciences</b-link>,<br>National Taiwan University, Taipei, Taiwan
    </Card1b>

    <Card1b
      year="2011-2015"
      title="Bachelor of Science"
      institution="Nat'l. Taiwan Univ."
      img-src="/img/logo/ntu_logo.png"
    >
      <b-link href="http://www.math.ntu.edu.tw/en" target="_blank">Department of Mathematics</b-link>,<br>National Taiwan University, Taipei, Taiwan
    </Card1b>
  </Section>
</template>

<script>
import Section from './_section.vue';
import Card1b from '@/components/card1b.vue';

export default {
  name: 'Education',
  components: {
    Section,
    Card1b,
  },
};
</script>
