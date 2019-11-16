<template>
  <Section>
    <template slot="header">
      <h1>Mu Yang</h1>
      <h5>Research Assistant, <b-link to="https://ckip.iis.sinica.edu.tw" target="_blank">CKIP Lab</b-link>, <b-link to="https://www.sinica.edu.tw/en" target="_blank">Academia Sinica</b-link></h5>
    </template>

    <p>I currently work as a research assistant at the <b-link to="https://www.iis.sinica.edu.tw/index_en.html" target="_blank">Institute of Information Science, Academia Sinica</b-link>, advised by <b-link to="https://www.iis.sinica.edu.tw/pages/ma/">Dr. Wei-Yun Ma</b-link> at the <b-link to="https://ckip.iis.sinica.eu.tw" target="_blank">Chinese Knowledge and Information Processing (CKIP) Lab</b-link>, conducting researches of natural language processing and computational linguistics.</p>

    <p>Previously, I received my master degree at <b-link to="http://www.math.ntu.edu.tw/~iams/eng" target="_blank">Institute of Applied Mathematical Sciences, National Taiwan University</b-link>, advised by <b-link to="http://www.math.ntu.edu.tw/~wwang/" target="_blank">Dr. Weichung Wang</b-link>, conducting researches of high-performance parallel computing on hybrid CPU-GPU structures.</p>

    <p>I have a working experiences at <b-link to="http://www.watson.ibm.com/" target="_blank">Thomas J. Watson Research Center, IBM Corporation</b-link> as an internship.</p>

    <IconButton size="sm"
                variant="outline-primary"
                href="/file/resume.pdf"
                target="_blank"
                fa-icon="file-pdf"
                fa-style="far">
      Résumé
    </IconButton>

  </Section>
</template>

<script>
import Section from './_section.vue';

export default {
  name: 'About',
  components: {
    Section,
  },
};
</script>
