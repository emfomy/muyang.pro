<template>
  <Section>
    <template slot="header">
      <h1>Mu Yang</h1>
      <p>Research Assistant, <b-link to="http://ckip.iis.sinica.edu.tw" target="_blank">CKIP Lab</b-link>, <b-link to="//www.sinica.edu.tw/en" target="_blank">Academia Sinica</b-link></p>
    </template>

    <header>
      <h3>Skills</h3>
      <p></p>
    </header>

    <div>
      <Progress :value="progress*90" variant="success" name="C/C++" />
      <Progress :value="progress*85" variant="info"    name="Python" />
      <Progress :value="progress*75" variant="warning" name="Web Design" />
      <Progress :value="progress*60" variant="danger"  name="Java" />
    </div>

    <IconButton variant="outline-primary"
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
import Progress from '@/components/progress.vue';

export default {
  name: 'About',
  components: {
    Section,
    Progress,
  },
  data() {
    return {
      progress: 0,
    };
  },
  mounted() {
    setTimeout(() => {
      this.progress = 1;
    }, 1000);
  },
};
</script>
