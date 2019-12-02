<template>
  <Section class="Publication">

    <template slot="header">
      <h2>Publications & Conferences</h2>
      <p></p>
    </template>

    <Card2b id="publication-icsc-2019"
           src="/img/icsc_2019.png"
           href="https://semanticcomputing.wixsite.com/icsc-2019">
      <header>
        <h4>HWE: Word Embedding with Heterogeneous Features</h4>
        <p>Jhih-Sheng Fan, Mu Yang, Peng-Hsuan Li, Wei-Yun Ma<br />2019, 13th IEEE International Conference on Semantic Computing (ICSC2019)</p>
      </header>

      <ButtonGroup>
        <b-button-group>
          <IconButton size="sm"
                      variant="outline-primary"
                      href="/file/paper/icsc_2019_hwe.pdf"
                      target="_blank"
                      fa-icon="file-pdf"
                      fa-style="far">
            Paper
          </IconButton>
          <IconButton v-b-tooltip.hover
                      title="Official Link"
                      size="sm"
                      variant="outline-primary"
                      href="https://doi.org/10.1109/ICOSC.2019.8665508"
                      target="_blank"
                      fa-icon="external-link-alt"
                      fa-style="fas">
          </IconButton>
        </b-button-group>

        <IconButton size="sm"
                    variant="outline-primary"
                    href="https://github.com/emfomy/hwe"
                    target="_blank"
                    fa-icon="github"
                    fa-style="fab">
          Github
        </IconButton>

        <IconButton size="sm"
                    variant="outline-primary"
                    href="https://semanticcomputing.wixsite.com/icsc-2019"
                    target="_blank"
                    fa-icon="globe"
                    fa-style="fas">
          Conference
        </IconButton>

        <IconButton size="sm"
                    variant="outline-primary"
                    href=""
                    @click.native="$parent.scrollTo('project', '#project-hwe');"
                    fa-icon="level-down-alt"
                    fa-style="fas">
          Related Project
        </IconButton>
      </ButtonGroup>
    </Card2b>

    <Card2b id="publication-ntu-thesis"
           src="/img/ntu_banner.png"
           srcSide="/img/ntu_logo.png"
           href="https://doi.org/10.6342/NTU201702960">
      <header>
        <h4>Highly Scalable Parallelism of Integrated Randomized Singular Value Decomposition with Big Data Applications</h4>
        <p>Mu Yang<br />2017, Master's Thesis, National Taiwan University</p>
      </header>

      <ButtonGroup>
        <b-button-group>
          <IconButton size="sm"
                      variant="outline-primary"
                      href="/file/paper/ntu_thesis_2017_isvd.pdf"
                      target="_blank"
                      fa-icon="file-pdf"
                      fa-style="far">
            Paper
          </IconButton>
          <IconButton v-b-tooltip.hover
                      title="Official Link"
                      size="sm"
                      variant="outline-primary"
                      href="https://doi.org/10.6342/NTU201702960"
                      target="_blank"
                      fa-icon="external-link-alt"
                      fa-style="fas">
          </IconButton>
        </b-button-group>

        <IconButton size="sm"
                    variant="outline-primary"
                    href="https://github.com/emfomy/isvd"
                    target="_blank"
                    fa-icon="github"
                    fa-style="fab">
          Github
        </IconButton>

        <IconButton size="sm"
                    variant="outline-primary"
                    @click.native="$parent.scrollTo('project', '#project-isvd');"
                    fa-icon="level-down-alt"
                    fa-style="fas">
          Related Project
        </IconButton>
      </ButtonGroup>
    </Card2b>

    <Card2b id="publication-ieee-cit-2016"
           src="/img/ieee_cit_2016.png"
           href="http://nsclab.org/cit2016">
      <header>
        <h4>Particle Swarm Stepwise Algorithm (PaSS) on Multicore Hybrid CPU-GPU Clusters</h4>
        <p>Mu Yang, Ray-Bing Chen, I-Hsin Chung, Weichung Wang<br />2016, 16th IEEE International Conference on Computer and Information Technology (CIT2016)</p>
      </header>

      <ButtonGroup>
        <b-button-group>
          <IconButton size="sm"
                      variant="outline-primary"
                      href="/file/paper/ieee_cse_2016_pass.pdf"
                      target="_blank"
                      fa-icon="file-pdf"
                      fa-style="far">
            Paper
          </IconButton>
          <IconButton v-b-tooltip.hover
                      title="Official Link"
                      size="sm"
                      variant="outline-primary"
                      href="https://doi.org/10.1109/CIT.2016.101"
                      target="_blank"
                      fa-icon="external-link-alt"
                      fa-style="fas">
          </IconButton>
        </b-button-group>

        <IconButton size="sm"
                    variant="outline-primary"
                    href="https://github.com/emfomy/pass"
                    target="_blank"
                    fa-icon="github"
                    fa-style="fab">
          Github
        </IconButton>

        <IconButton size="sm"
                    variant="outline-primary"
                    href="http://nsclab.org/cit2016"
                    target="_blank"
                    fa-icon="globe"
                    fa-style="fas">
          Conference
        </IconButton>

        <IconButton size="sm"
                    variant="outline-primary"
                    @click.native="$parent.scrollTo('project', '#project-pass');"
                    fa-icon="level-down-alt"
                    fa-style="fas">
          Related Project
        </IconButton>
      </ButtonGroup>
    </Card2b>

    <Card2b id="publication-siam-cse-2017"
           src="/img/siam_cse_2017.jpg"
           href="https://archive.siam.org/meetings/cse17/">
      <header>
        <h4>Parallel Implementations of Integrated Singular Value Decomposition (iSVD)</h4>
        <p>Mu Yang, Su-Yun Huang, Ting-Li Chen, and Weichung Wang<br>2017, 9th SIAM Conference on Computational Science and Engineering (CSE2017)</p>
      </header>

      <ButtonGroup>
        <IconButton size="sm"
                    variant="outline-primary"
                    href="https://github.com/emfomy/isvd"
                    target="_blank"
                    fa-icon="github"
                    fa-style="fab">
          Github
        </IconButton>

        <IconButton size="sm"
                    variant="outline-primary"
                    href="https://archive.siam.org/meetings/cse17/"
                    target="_blank"
                    fa-icon="globe"
                    fa-style="fas">
          Conference
        </IconButton>

        <IconButton size="sm"
                    variant="outline-primary"
                    @click.native="$parent.scrollTo('project', '#project-isvd');"
                    fa-icon="level-down-alt"
                    fa-style="fas">
          Related Project
        </IconButton>
      </ButtonGroup>
    </Card2b>

    <Collapse name="publication-more" ref="collapse" class="mt-4">

      <Card2b id="publication-tjjw-jsam-2016"
             src="/img/tjjw_jsam_2016.png"
             href="http://www.ncts.ntu.edu.tw/events_2_detail.php?nid=54">

        <header>
          <h4>A Parallel and Hybrid Sparse Linear System Solver</h4>
          <p>Mu Yang and Weichung Wang<br>2016, 7th Taiwan-Japan Joint Workshop for Young Scholars in Applied Mathematics</p>
        </header>

        <ButtonGroup>
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

          <IconButton size="sm"
                      variant="outline-primary"
                      @click.native="$parent.scrollTo('project', '#project-hhis');"
                      fa-icon="level-down-alt"
                      fa-style="fas">
            Related Project
          </IconButton>
        </ButtonGroup>
      </Card2b>

    </Collapse>

  </Section>
</template>

<script>
import Section from './_section.vue';
import Card2b from '@/components/card2b.vue';

export default {
  name: 'Publication',
  components: {
    Section,
    Card2b,
  },
};
</script>

<style scoped lang="scss">
.Publication {
  .Card {
    border-top: solid 4px #f4f4f4;
  }

  .Card:first-of-type {
    border-top: 0 !important;
  }
}
</style>
