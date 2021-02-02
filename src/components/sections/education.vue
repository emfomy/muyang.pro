<template>
  <Section>
    <template #header>
      <h2>Education</h2>
    </template>

    <CardA2
      year="2015-2017"
      title="Master of Science"
      institution="Nat'l. Taiwan Univ."
      :img-src="require('@/assets/img/logo/ntu_logo.png?resize&size=80').src"
    >
      <b-link href="http://www.math.ntu.edu.tw/~iams/eng" target="_blank"
        >Institute of Applied Mathematical Sciences</b-link
      >,<br />National Taiwan University, Taipei, Taiwan
    </CardA2>

    <CardA2
      year="2011-2015"
      title="Bachelor of Science"
      institution="Nat'l. Taiwan Univ."
      :img-src="require('@/assets/img/logo/ntu_logo.png?resize&size=80').src"
    >
      <b-link href="http://www.math.ntu.edu.tw/en" target="_blank"
        >Department of Mathematics</b-link
      >,<br />National Taiwan University, Taipei, Taiwan
    </CardA2>
  </Section>
</template>

<script>
export default {};
</script>
