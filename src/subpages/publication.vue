<template>
  <Section class="Publication">
    <template slot="header">
      <h2>Publications & Presentations</h2>
    </template>

    <Card2b
      id="publication-lrec-2020"
      :img-src="require('@/assets/img/venue/lrec_2020.jpg?resize')"
      :img-src-side="require('@/assets/img/venue/lrec_2020_sm.jpg?resize')"
      href="https://lrec2020.lrec-conf.org"
    >
      <header>
        <h4>Headword-Oriented Entity Linking: A New Entity Linking Task with Dataset and Baseline</h4>
        <p>Mu Yang, Chi-Yen Chen, Yi-Hui Lee, Qian-Hui Zeng, Wei-Yun Ma<br>2020, 12th International Conference on Language Resources and Evaluation (LREC'20)</p>
      </header>

      <ButtonGroup>
        <b-button-group>
          <IconButton
            size="sm"
            variant="outline-primary"
            href="/file/paper/lrec_2020_cosmel.pdf"
            target="_blank"
            fa-icon="file-pdf"
            fa-style="far"
          >
            Paper
          </IconButton>
          <!-- <IconButton
            v-b-tooltip.hover
            title="Official Link"
            size="sm"
            variant="outline-primary"
            href=""
            target="_blank"
            fa-icon="external-link-alt"
            fa-style="fas"
          /> -->
        </b-button-group>

        <IconButton
          size="sm"
          variant="outline-primary"
          href="https://lrec2020.lrec-conf.org"
          target="_blank"
          fa-icon="globe"
          fa-style="fas"
        >
          Conference
        </IconButton>

        <IconButton
          size="sm"
          variant="outline-primary"
          href=""
          fa-icon="level-down-alt"
          fa-style="fas"
          @click.native="$parent.scrollTo('project', '#project-cosmel');"
        >
          Related Project
        </IconButton>
      </ButtonGroup>
    </Card2b>

    <Card2b
      id="publication-icsc-2019"
      :img-src="require('@/assets/img/venue/icsc_2019.png?resize')"
      href="https://semanticcomputing.wixsite.com/icsc-2019"
    >
      <header>
        <h4>HWE: Word Embedding with Heterogeneous Features</h4>
        <p>Jhih-Sheng Fan, Mu Yang, Peng-Hsuan Li, Wei-Yun Ma<br>2019, 13th IEEE International Conference on Semantic Computing (IEEE-ICSC'19)</p>
      </header>

      <ButtonGroup>
        <b-button-group>
          <IconButton
            size="sm"
            variant="outline-primary"
            href="/file/paper/icsc_2019_hwe.pdf"
            target="_blank"
            fa-icon="file-pdf"
            fa-style="far"
          >
            Paper
          </IconButton>
          <IconButton
            v-b-tooltip.hover
            title="Official Link"
            size="sm"
            variant="outline-primary"
            href="https://doi.org/10.1109/ICOSC.2019.8665508"
            target="_blank"
            fa-icon="external-link-alt"
            fa-style="fas"
          />
        </b-button-group>

        <IconButton
          size="sm"
          variant="outline-primary"
          href="https://semanticcomputing.wixsite.com/icsc-2019"
          target="_blank"
          fa-icon="globe"
          fa-style="fas"
        >
          Conference
        </IconButton>

        <IconButton
          size="sm"
          variant="outline-primary"
          href=""
          fa-icon="level-down-alt"
          fa-style="fas"
          @click.native="$parent.scrollTo('project', '#project-hwe');"
        >
          Related Project
        </IconButton>
      </ButtonGroup>
    </Card2b>

    <Card2b
      id="publication-ieee-cit-2016"
      :img-src="require('@/assets/img/venue/ieee_cit_2016.png?resize')"
      href="http://nsclab.org/cit2016"
    >
      <header>
        <h4>Particle Swarm Stepwise Algorithm (PaSS) on Multicore Hybrid CPU-GPU Clusters</h4>
        <p>Mu Yang, Ray-Bing Chen, I-Hsin Chung, Weichung Wang<br>2016, 16th IEEE International Conference on Computer and Information Technology (IEEE-CIT'16)</p>
      </header>

      <ButtonGroup>
        <b-button-group>
          <IconButton
            size="sm"
            variant="outline-primary"
            href="/file/paper/ieee_cse_2016_pass.pdf"
            target="_blank"
            fa-icon="file-pdf"
            fa-style="far"
          >
            Paper
          </IconButton>
          <IconButton
            v-b-tooltip.hover
            title="Official Link"
            size="sm"
            variant="outline-primary"
            href="https://doi.org/10.1109/CIT.2016.101"
            target="_blank"
            fa-icon="external-link-alt"
            fa-style="fas"
          />
        </b-button-group>

        <IconButton
          size="sm"
          variant="outline-primary"
          href="http://nsclab.org/cit2016"
          target="_blank"
          fa-icon="globe"
          fa-style="fas"
        >
          Conference
        </IconButton>

        <IconButton
          size="sm"
          variant="outline-primary"
          fa-icon="level-down-alt"
          fa-style="fas"
          @click.native="$parent.scrollTo('project', '#project-pass');"
        >
          Related Project
        </IconButton>
      </ButtonGroup>
    </Card2b>

    <Card2b
      id="publication-ntu-thesis"
      :img-src="require('@/assets/img/logo/ntu_banner.png?resize')"
      :img-src-side="require('@/assets/img/logo/ntu_logo.png?resize')"
      href="https://doi.org/10.6342/NTU201702960"
    >
      <header>
        <h4>Highly Scalable Parallelism of Integrated Randomized Singular Value Decomposition with Big Data Applications</h4>
        <p>Mu Yang<br>2017, Master's Thesis, National Taiwan University</p>
      </header>

      <ButtonGroup>
        <b-button-group>
          <IconButton
            size="sm"
            variant="outline-primary"
            href="/file/paper/ntu_thesis_2017_isvd.pdf"
            target="_blank"
            fa-icon="file-pdf"
            fa-style="far"
          >
            Paper
          </IconButton>
          <IconButton
            v-b-tooltip.hover
            title="Official Link"
            size="sm"
            variant="outline-primary"
            href="https://doi.org/10.6342/NTU201702960"
            target="_blank"
            fa-icon="external-link-alt"
            fa-style="fas"
          />
        </b-button-group>

        <IconButton
          size="sm"
          variant="outline-primary"
          fa-icon="level-down-alt"
          fa-style="fas"
          @click.native="$parent.scrollTo('project', '#project-isvd');"
        >
          Related Project
        </IconButton>
      </ButtonGroup>
    </Card2b>

    <Card2b
      id="publication-apcom-2019"
      :img-src="require('@/assets/img/venue/apcom_2019.png?resize')"
      href="http://www.apcom2019.org"
    >
      <header>
        <h4>Parallelized Integration of Multiple Random Sketches from Randomized Singular Value Decomposition with Multi-Level Pairwise Integration Method</h4>
        <p>Mu Yang, Dawei Chang, Weichung Wang, Su-Yuen Huang, Ting-Li Chen<br>2019, 7th Asian Pacific Congress on Computational Mechanics (APCOM'19)</p>
      </header>

      <ButtonGroup>
        <IconButton
          size="sm"
          variant="outline-primary"
          href="http://www.apcom2019.org"
          target="_blank"
          fa-icon="globe"
          fa-style="fas"
        >
          Conference
        </IconButton>

        <IconButton
          size="sm"
          variant="outline-primary"
          fa-icon="level-down-alt"
          fa-style="fas"
          @click.native="$parent.scrollTo('project', '#project-isvd');"
        >
          Related Project
        </IconButton>
      </ButtonGroup>
    </Card2b>

    <Card2b
      id="publication-siam-cse-2017"
      :img-src="require('@/assets/img/venue/siam_cse_2017.jpg?resize')"
      href="https://archive.siam.org/meetings/cse17/"
    >
      <header>
        <h4>Parallel Implementations of Integrated Singular Value Decomposition (iSVD)</h4>
        <p>Mu Yang, Su-Yun Huang, Ting-Li Chen, Weichung Wang<br>2017, 9th SIAM Conference on Computational Science and Engineering (SIAM CSE'17)</p>
      </header>

      <ButtonGroup>
        <IconButton
          size="sm"
          variant="outline-primary"
          href="https://archive.siam.org/meetings/cse17/"
          target="_blank"
          fa-icon="globe"
          fa-style="fas"
        >
          Conference
        </IconButton>

        <IconButton
          size="sm"
          variant="outline-primary"
          fa-icon="level-down-alt"
          fa-style="fas"
          @click.native="$parent.scrollTo('project', '#project-isvd');"
        >
          Related Project
        </IconButton>
      </ButtonGroup>
    </Card2b>

    <Collapse ref="collapse" name="publication-more" class="mt-4">
      <Card2b
        id="publication-tjjw-jsam-2016"
        :img-src="require('@/assets/img/venue/tjjw_jsam_2016.png?resize')"
        href="http://www.ncts.ntu.edu.tw/events_2_detail.php?nid=54"
      >
        <header>
          <h4>A Parallel and Hybrid Sparse Linear System Solver</h4>
          <p>Mu Yang, Weichung Wang<br>2016, 7th Taiwan-Japan Joint Workshop for Young Scholars in Applied Mathematics</p>
        </header>

        <ButtonGroup>
          <IconButton
            size="sm"
            variant="outline-primary"
            href="http://www.ncts.ntu.edu.tw/events_2_detail.php?nid=54"
            target="_blank"
            fa-icon="globe"
            fa-style="fas"
          >
            Workshop
          </IconButton>

          <IconButton
            v-b-tooltip.hover
            title="Presentation Excellence Award"
            size="sm"
            variant="outline-primary"
            fa-icon="award"
            fa-style="fas"
          >
            Award
          </IconButton>

          <IconButton
            size="sm"
            variant="outline-primary"
            fa-icon="level-down-alt"
            fa-style="fas"
            @click.native="$parent.scrollTo('project', '#project-hhis');"
          >
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
