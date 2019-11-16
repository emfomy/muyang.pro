<template>
  <Section>

    <template slot="header">
      <h2>Employments</h2>
      <p></p>
    </template>

    <Card1 year="2017-Pres."
           title="Research Assistant"
           institution="Academia Sinica"
           img-src="/img/sinica_logo.png">
      <template slot="description"><b-link href="http://ckip.iis.sinica.edu.tw" target="_blank">CKIP Lab</b-link>, <b-link href="https://www.iis.sinica.edu.tw/index_en.html" target="_blank">Institute of Information Science</b-link>,<br />Academia Sinica, Taipei, Taiwan</template>
    </Card1>

    <Card1 year="2015-2015"
           title="Internship"
           institution="IBM Corp."
           img-src="/img/ibm_logo.png">
      <template slot="description"><b-link href="http://www.watson.ibm.com" target="_blank">Thomas J. Watson Research Center</b-link>,<br />IBM, Yorktown Heights, NY, USA</template>
    </Card1>

    <Collapse name="employment-more">

      <Card1 year="2013-2017"
             title="Research Assistant"
             institution="Nat'l. Taiwan Univ."
             img-src="/img/ntu_logo.png">
        <template slot="description">Supervised by Prof. Weichung Wang<br /><b-link href="http://www.math.ntu.edu.tw/~iams/eng" target="_blank">Institute of Applied Mathematical Sciences</b-link>, National Taiwan University, Taipei, Taiwan<br /><i>conducting researches of high-performance parallel computing on hybrid CPU-GPU structures</i></template>
      </Card1>

      <Card1 year="2016-2016"
             title="Research Assistant"
             institution="Nat'l. Taiwan Univ."
             img-src="/img/ntu_logo.png">
        <template slot="description">Supervised by Prof. Semin Kim<br /><b-link href="http://www.econ.ntu.edu.tw/?locale=en" target="_blank">Department of Economics</b-link>, National Taiwan University, Taipei, Taiwan<br /><i>conducting researches of ordinal versus cardinal voting rules</i></template>
      </Card1>

      <Card1 year="2015-2017"
             title="Research Assistant"
             institution="Nat'l. Taiwan Univ."
             img-src="/img/ntu_logo.png">
        <template slot="description"><i>Software Development for Computational and Data Science, High Performance Computing and Deep Learning, Introduction to Computational &amp; Data Sciences, Introduction to Scientific Computing, Numerical Linear Algebra, Introduction to Computational Mathematics, Computer Programming, Mathematic Software, Calculus</i></template>
      </Card1>

    </Collapse>

  </Section>
</template>

<script>
import Section from './_section.vue';
import Card1 from '@/components/card1.vue';

export default {
  name: 'Employment',
  components: {
    Section,
    Card1,
  },
};
</script>
