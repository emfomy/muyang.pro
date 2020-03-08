<template>
  <Section>

    <template slot="header">
      <h2>Employments</h2>
      <p></p>
    </template>

    <Card1b year="2017-Pres."
            title="Research Assistant"
            institution="Academia Sinica"
            img-src="/img/logo/sinica_logo.png">
      <template><b-link href="http://ckip.iis.sinica.edu.tw" target="_blank">CKIP Lab</b-link>, <b-link href="https://www.iis.sinica.edu.tw/index_en.html" target="_blank">Institute of Information Science</b-link>,<br />Academia Sinica, Taipei, Taiwan</template>
    </Card1b>

    <Card1b year="2015-2015"
            title="Internship"
            institution="IBM Corp."
            img-src="/img/logo/ibm_logo.png">
      <template><b-link href="http://www.watson.ibm.com" target="_blank">Thomas J. Watson Research Center</b-link>,<br />IBM, Yorktown Heights, NY, USA</template>
    </Card1b>

    <Collapse name="employment-more">

      <Card1b year="2013-2017"
              title="Research Assistant"
              institution="Nat'l. Taiwan Univ."
              img-src="/img/logo/ntu_logo.png">
        <template>Supervised by Prof. Weichung Wang<br /><b-link href="http://www.math.ntu.edu.tw/~iams/eng" target="_blank">Institute of Applied Mathematical Sciences</b-link>, National Taiwan University, Taipei, Taiwan<br /><i>conducting researches of high-performance parallel computing on hybrid CPU-GPU structures</i></template>
      </Card1b>

      <Card1b year="2016-2016"
              title="Research Assistant"
              institution="Nat'l. Taiwan Univ."
              img-src="/img/logo/ntu_logo.png">
        <template>Supervised by Prof. Semin Kim<br /><b-link href="http://www.econ.ntu.edu.tw/?locale=en" target="_blank">Department of Economics</b-link>, National Taiwan University, Taipei, Taiwan<br /><i>conducting researches of ordinal versus cardinal voting rules</i></template>
      </Card1b>

      <Card1b year="2015-2017"
              title="Teaching Assistant"
              institution="Nat'l. Taiwan Univ."
              img-src="/img/logo/ntu_logo.png">
        <template>
          <ul class="pl-4">
            <li>High Performance Computing and Deep Learning (2017S)</li>
            <li>Computational Methods and Tools for Data Science (2016F)</li>
            <li>Introduction to Scientific Computing (2016F)</li>
            <li>Introduction to Computational Mathematics (2016S)</li>
            <li>Software Development for Computational and Data Science (2015F)</li>
            <li>Numerical Linear Algebra (2015F)</li>
            <li>Calculus (2016S, 2017S)</li>
            <li>Computer Programming (2015F, 2016F)</li>
            <li>Mathematic Software (2015S)</li>
          </ul>
        </template>
      </Card1b>

    </Collapse>

  </Section>
</template>

<script>
import Section from './_section.vue';
import Card1b from '@/components/card1b.vue';

export default {
  name: 'Employment',
  components: {
    Section,
    Card1b,
  },
};
</script>
