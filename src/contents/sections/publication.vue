<template>
  <Section class="Publication">

    <template slot="header">
      <h2>Publications</h2>
      <p></p>
    </template>

    <Card2 src="/img/icsc_2019.jpg"
           href="">
      <header>
        <h4>HWE: Word Embedding with Heterogeneous Features</h4>
        <p>Jhih-Sheng Fan, Mu Yang, Peng-Hsuan Li and Wei-Yun Ma<br />2019, 13th IEEE International Conference on Semantic Computing (ICSC2019)</p>
      </header>

      <IconButtonGroup>
        <IconButton size="sm"
                    variant="outline-primary"
                    href=""
                    target="_blank"
                    fa-icon="file-pdf"
                    fa-style="far"
                    disabled>
          Paper
        </IconButton>

        <IconButton size="sm"
                    variant="outline-primary"
                    href=""
                    target="_blank"
                    fa-icon="file-alt"
                    fa-style="far"
                    disabled>
          Paper (Online)
        </IconButton>

        <IconButton size="sm"
                    variant="outline-primary"
                    href="//www.ieee-icsc.org"
                    target="_blank"
                    fa-icon="globe"
                    fa-style="fas">
          Conference
        </IconButton>
      </IconButtonGroup>
    </Card2>

    <Card2 src="/img/ntu_banner.png"
           srcSide="/img/ntu_logo.png"
           href="//doi.org/10.6342/NTU201702960">
      <header>
        <h4>Highly Scalable Parallelism of Integrated Randomized Singular Value Decomposition with Big Data Applications</h4>
        <p>Mu Yang<br />2017, Master's Thesis, National Taiwan University</p>
      </header>

      <IconButtonGroup>
        <IconButton size="sm"
                    variant="outline-primary"
                    href="/file/paper/ntu_thesis_2017_isvd.pdf"
                    target="_blank"
                    fa-icon="file-pdf"
                    fa-style="far">
          Paper
        </IconButton>

        <IconButton size="sm"
                    variant="outline-primary"
                    href="//doi.org/10.6342/NTU201702960"
                    target="_blank"
                    fa-icon="file-alt"
                    fa-style="far">
          Paper (Online)
        </IconButton>

        <IconButton size="sm"
                    variant="outline-primary"
                    href="//github.com/emfomy/isvd"
                    target="_blank"
                    fa-icon="github"
                    fa-style="fab">
          Github
        </IconButton>
      </IconButtonGroup>
    </Card2>

    <Card2 src="/img/ieee_cit_2016.png"
           href="http://nsclab.org/cit2016">
      <header>
        <h4>Particle Swarm Stepwise Algorithm (PaSS) on Multicore Hybrid CPU-GPU Clusters</h4>
        <p>Mu Yang, Ray-Bing Chen, I-Hsin Chung, and Weichung Wang<br />2016, 16th IEEE International Conference on Computer and Information Technology (CIT2016)</p>
      </header>

      <IconButtonGroup>
        <IconButton size="sm"
                    variant="outline-primary"
                    href="/file/paper/ieee_sce_2016_pass.pdf"
                    target="_blank"
                    fa-icon="file-pdf"
                    fa-style="far">
          Paper
        </IconButton>

        <IconButton size="sm"
                    variant="outline-primary"
                    href="//doi.org/10.1109/CIT.2016.101"
                    target="_blank"
                    fa-icon="file-alt"
                    fa-style="far">
          Paper (Online)
        </IconButton>

        <IconButton size="sm"
                    variant="outline-primary"
                    href="//github.com/emfomy/pass"
                    target="_blank"
                    fa-icon="github"
                    fa-style="fab">
          Github
        </IconButton>

        <IconButton size="sm"
                    variant="outline-primary"
                    href="//nsclab.org/cit2016"
                    target="_blank"
                    fa-icon="globe"
                    fa-style="fas">
          Conference
        </IconButton>
      </IconButtonGroup>
    </Card2>

    <Collapse name="publication-more" class="mt-4">

      <Card2 src="/img/siam_cse_2017.jpg"
             href="//www.siam.org/meetings/cse17">
        <header>
          <h4>Parallel Implementations of Integrated Singular Value Decomposition (iSVD)</h4>
          <p>Mu Yang, Su-Yun Huang, Ting-Li Chen, and Weichung Wang<br>2017, 9th SIAM Conference on Computational Science and Engineering (CSE2017)</p>
        </header>

        <IconButtonGroup>
          <IconButton size="sm"
                      variant="outline-primary"
                      href="//www.siam.org/meetings/cse17"
                      target="_blank"
                      fa-icon="globe"
                      fa-style="fas">
            Conference
          </IconButton>
        </IconButtonGroup>
      </Card2>

      <Card2 src="/img/tjjw_jsam_2016.png"
             href="//www.ncts.ntu.edu.tw/events_2_detail.php?nid=54">

        <header>
          <h4>A Parallel and Hybrid Sparse Linear System Solver</h4>
          <p>Mu Yang and Weichung Wang<br>2016, 7th Taiwan-Japan Joint Workshop for Young Scholars in Applied Mathematics</p>
        </header>

        <IconButtonGroup>
          <IconButton size="sm"
                      variant="outline-primary"
                      href="http://www.ncts.ntu.edu.tw/events_2_detail.php?nid=54"
                      target="_blank"
                      fa-icon="globe"
                      fa-style="fas">
            Workshop
          </IconButton>

          <IconButton v-b-tooltip.hover
                      title="Presentation Excellence Award"
                      size="sm"
                      variant="outline-primary"
                      fa-icon="award"
                      fa-style="fas">
            Award
          </IconButton>
        </IconButtonGroup>
      </Card2>

    </Collapse>

  </Section>
</template>

<script>
import Section from "./_section.vue";
import Card2 from "../../components/card2.vue";

export default {
  name: "Publication",
  components: {
    Section,
    Card2
  }
};
</script>

<style scoped lang="scss">
.Publication {
  .Card2 {
    border-bottom: solid 4px #f4f4f4;
  }

  .Card2:last-of-type {
    border-bottom: 0 !important;
  }
}
</style>
