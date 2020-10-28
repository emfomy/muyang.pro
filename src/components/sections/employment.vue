<template>
  <Section>
    <template #header>
      <h2>Employments</h2>
    </template>

    <CardA2
      year="2017-Pres."
      title="Research Assistant"
      institution="Academia Sinica"
      :img-src="require('@/assets/img/logo/sinica_logo.png?resize&size=80').src"
    >
      <b-link href="https://ckip.iis.sinica.edu.tw" target="_blank"
        >CKIP Lab</b-link
      >,
      <b-link href="https://www.iis.sinica.edu.tw/en/index.html" target="_blank"
        >Institute of Information Science</b-link
      >,<br />Academia Sinica, Taipei, Taiwan
    </CardA2>

    <CardA2
      year="2015-2015"
      title="Internship"
      institution="IBM Corp."
      :img-src="require('@/assets/img/logo/ibm_logo.png?resize&size=80').src"
    >
      <b-link href="http://www.watson.ibm.com" target="_blank"
        >Thomas J. Watson Research Center</b-link
      >,<br />IBM, Yorktown Heights, NY, USA
    </CardA2>

    <Collapse name="employment-more">
      <CardA2
        year="2013-2017"
        title="Research Assistant"
        institution="Nat'l. Taiwan Univ."
        :img-src="require('@/assets/img/logo/ntu_logo.png?resize&size=80').src"
      >
        Supervised by Prof. Weichung Wang<br /><b-link
          href="http://www.math.ntu.edu.tw/~iams/eng"
          target="_blank"
          >Institute of Applied Mathematical Sciences</b-link
        >, National Taiwan University, Taipei, Taiwan<br /><i
          >conducting researches of high-performance parallel computing on
          hybrid CPU-GPU structures</i
        >
      </CardA2>

      <CardA2
        year="2016-2016"
        title="Research Assistant"
        institution="Nat'l. Taiwan Univ."
        :img-src="require('@/assets/img/logo/ntu_logo.png?resize&size=80').src"
      >
        Supervised by Prof. Semin Kim<br /><b-link
          href="http://www.econ.ntu.edu.tw/?locale=en"
          target="_blank"
          >Department of Economics</b-link
        >, National Taiwan University, Taipei, Taiwan<br /><i
          >conducting researches of ordinal versus cardinal voting rules</i
        >
      </CardA2>

      <CardA2
        year="2015-2017"
        title="Teaching Assistant"
        institution="Nat'l. Taiwan Univ."
        :img-src="require('@/assets/img/logo/ntu_logo.png?resize&size=80').src"
      >
        <ul class="pl-4">
          <li>High Performance Computing and Deep Learning (2017S)</li>
          <li>Computational Methods and Tools for Data Science (2016F)</li>
          <li>Introduction to Scientific Computing (2016F)</li>
          <li>Introduction to Computational Mathematics (2016S)</li>
          <li>
            Software Development for Computational and Data Science (2015F)
          </li>
          <li>Numerical Linear Algebra (2015F)</li>
          <li>Calculus (2016S, 2017S)</li>
          <li>Computer Programming (2015F, 2016F)</li>
          <li>Mathematic Software (2015S)</li>
        </ul>
      </CardA2>
    </Collapse>
  </Section>
</template>

<script>
export default {};
</script>
