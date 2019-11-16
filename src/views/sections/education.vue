<template>
  <Section>

    <template slot="header">
      <h2>Educations</h2>
      <p></p>
    </template>

    <Card1 year="2015-2017"
           title="Master of Science"
           institution="Nat'l. Taiwan Univ."
           img-src="/img/ntu_logo.png">
      <template slot="description"><b-link href="http://www.math.ntu.edu.tw/~iams/eng" target="_blank">Institute of Applied Mathematical Sciences</b-link>,<br />National Taiwan University, Taipei, Taiwan</template>
    </Card1>

    <Card1 year="2011-2015"
           title="Bachelor of Science"
           institution="Nat'l. Taiwan Univ."
           img-src="/img/ntu_logo.png">
      <template slot="description"><b-link href="http://www.math.ntu.edu.tw/en" target="_blank">Department of Mathematics</b-link>,<br />National Taiwan University, Taipei, Taiwan</template>
    </Card1>

  </Section>
</template>

<script>
import Section from './_section.vue';
import Card1 from '@/components/card1.vue';

export default {
  name: 'Education',
  components: {
    Section,
    Card1,
  },
};
</script>
