<template>
  <Section class="Publication">

    <template slot="header">
      <h2>Publications</h2>
      <p></p>
    </template>

    <Card2 title="Highly Scalable Parallelism of Integrated Randomized Singular Value Decomposition with Big Data Applications"
           author="Mu Yang*"
           publish="2017, Master's Thesis, National Taiwan University"
           img-src="/img/ntu_logo.png"
           img-link="//doi.org/10.6342/NTU201702960">

      <IconButton size="sm"
                  variant="outline-primary"
                  href="//doi.org/10.6342/NTU201702960"
                  target="_blank"
                  fa-icon="file-pdf"
                  fa-style="far">
        Paper
      </IconButton>
      {{ " " }}
      <IconButton size="sm"
                  variant="outline-primary"
                  href="//github.com/emfomy/isvd"
                  target="_blank"
                  fa-icon="github"
                  fa-style="fab">
        Github
      </IconButton>
    </Card2>

    <Card2 title="Particle Swarm Stepwise Algorithm (PaSS) on Multicore Hybrid CPU-GPU Clusters"
           author="Mu Yang*, Ray-Bing Chen, I-Hsin Chung, and Weichung Wang"
           publish="2016, 16th IEEE International Conference on Computer and Information Technology (CIT2016)"
           img-src="/img/ieee_cit_2016.png"
           img-link="//nsclab.org/cit2016">

      <IconButton size="sm"
                  variant="outline-primary"
                  href="//doi.org/10.1109/CIT.2016.101"
                  target="_blank"
                  fa-icon="file-pdf"
                  fa-style="far">
        Paper
      </IconButton>
      {{ " " }}
      <IconButton size="sm"
                  variant="outline-primary"
                  href="//nsclab.org/cit2016"
                  target="_blank"
                  fa-icon="globe"
                  fa-style="fas">
        Website
      </IconButton>
      {{ " " }}
      <IconButton size="sm"
                  variant="outline-primary"
                  href="//github.com/emfomy/pass"
                  target="_blank"
                  fa-icon="github"
                  fa-style="fab">
        Github
      </IconButton>
    </Card2>

    <Card2 title="Parallel Implementations of Integrated Singular Value Decomposition (iSVD)"
           author="Mu Yang*, Su-Yun Huang, Ting-Li Chen, and Weichung Wang"
           publish="2017, 9th SIAM Conference on Computational Science and Engineering (CSE2017)"
           img-src="/img/siam_cse_2017.jpg"
           img-link="//www.siam.org/meetings/cse17">

      <IconButton size="sm"
                  variant="outline-primary"
                  href="//www.siam.org/meetings/cse17"
                  target="_blank"
                  fa-icon="globe"
                  fa-style="fas">
        Website
      </IconButton>
    </Card2>

    <Card2 title="A Parallel and Hybrid Sparse Linear System Solver"
           author="Mu Yang* and Weichung Wang"
           publish="2016, 7th Taiwan-Japan Joint Workshop for Young Scholars in Applied Mathematics"
           img-src="/img/tjjw_jsam_2016.png"
           img-link="//www.ncts.ntu.edu.tw/events_2_detail.php?nid=54">

      <IconButton size="sm"
                  variant="outline-primary"
                  href="//www.ncts.ntu.edu.tw/events_2_detail.php?nid=54"
                  target="_blank"
                  fa-icon="globe"
                  fa-style="fas">
        Website
      </IconButton>
      {{ " " }}
      <IconButton size="sm"
                  variant="outline-primary"
                  href="//www.ncts.ntu.edu.tw/events_2_detail.php?nid=54"
                  target="_blank"
                  fa-icon="award"
                  fa-style="fas">
        Presentation Excellence Award
      </IconButton>
    </Card2>

  </Section>
</template>

<script>
import Section from "./_section.vue";
import Card2 from "../../components/card2.vue";
import IconButton from "../../components/icon_button.vue";

export default {
  name: "Publication",
  components: {
    Section,
    Card2,
    IconButton
  }
};
</script>

<style scoped lang="scss">
.Publication {
  >>> .Card2 {
    border-top: solid 4px #f4f4f4;
  }

  >>> .Card2:first-of-type {
    border-top: 0 !important;
  }

  >>> .Card2:last-of-type {
    padding-bottom: 0 !important;
  }
}
</style>
