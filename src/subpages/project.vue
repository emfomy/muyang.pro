<template>
  <Section class="Project">
    <template slot="header">
      <h2>Projects</h2>
    </template>

    <Card2b
      id="project-ckip-nlp"
      right
    >
      <header>
        <h4>CKIP Word-Segmentation and Parser Python API</h4>
        <p>2018-2020</p>
      </header>
      <p>
        A Python API for CKIP <b-link to="http://ckipsvr.iis.sinica.edu.tw" target="_blank">
          Word-Segmentation
        </b-link> and <b-link to="http://parser.iis.sinica.edu.tw" target="_blank">
          Sentence-Parsing
        </b-link>.
      </p>

      <ButtonGroup>
        <IconButton
          size="sm"
          variant="outline-primary"
          href="https://pypi.org/project/ckipnlp"
          target="_blank"
          fa-icon="python"
          fa-style="fab"
        >
          PyPI
        </IconButton>

        <IconButton
          size="sm"
          variant="outline-primary"
          href="https://github.com/emfomy/ckipnlp"
          target="_blank"
          fa-icon="github"
          fa-style="fab"
        >
          Github
        </IconButton>

        <IconButton
          size="sm"
          variant="outline-primary"
          href="https://ckipnlp.readthedocs.io"
          target="_blank"
          fa-icon="file-code"
          fa-style="fas"
        >
          Docs
        </IconButton>
      </ButtonGroup>
    </Card2b>

    <Card2b
      id="project-ehn"
      right
    >
      <header>
        <h4>E-HowNet Parsing and Visualization</h4>
        <p>2018-2019</p>
      </header>
      <p>
        A Parser for <b-link to="http://ehownet.iis.sinica.edu.tw" target="_blank">
          E-HowNet
        </b-link>, and the visualization demo.
      </p>

      <ButtonGroup>
        <IconButton
          size="sm"
          variant="outline-primary"
          href="https://pypi.org/project/ehownet"
          target="_blank"
          fa-icon="python"
          fa-style="fab"
        >
          PyPI (Parser)
        </IconButton>

        <IconButton
          size="sm"
          variant="outline-primary"
          href="https://github.com/emfomy/ehownet"
          target="_blank"
          fa-icon="github"
          fa-style="fab"
        >
          Github (Parser)
        </IconButton>

        <IconButton
          size="sm"
          variant="outline-primary"
          href="https://ehownet.readthedocs.io"
          target="_blank"
          fa-icon="file-code"
          fa-style="fas"
        >
          Docs (Parser)
        </IconButton>

        <IconButton
          size="sm"
          variant="outline-primary"
          href="http://ckip.iis.sinica.edu.tw/service/ehnvis"
          target="_blank"
          fa-icon="globe"
          fa-style="fas"
        >
          Demo
        </IconButton>

        <b-button-group>
          <IconButton
            size="sm"
            variant="outline-primary"
            href="https://github.com/emfomy/ehn-demo"
            target="_blank"
            fa-icon="github"
            fa-style="fab"
          >
            Github (Demo)
          </IconButton>
        </b-button-group>
      </ButtonGroup>
    </Card2b>

    <Card2b
      id="project-cosmel"
      src="/img/project/cosmel.png"
      right
    >
      <header>
        <h4>CosmEL: Cosmetic Entity Linking</h4>
        <p>2017-2019</p>
      </header>
      <p>
        A novel entity linking project on cosmetic domain with dataset and baseline.<br>
        This project is an industrial-academic project with <b-link to="https://www.pixnet.net" target="_blank">
          PIXNET
        </b-link> Corporation.
      </p>

      <ButtonGroup>
        <!-- <b-button-group>
          <IconButton size="sm"
                      variant="outline-primary"
                      href="/file/paper/lrec_2020_cosmel.pdf"
                      target="_blank"
                      fa-icon="file-pdf"
                      fa-style="far">
            Paper (LREC 2020)
          </IconButton>
          <IconButton v-b-tooltip.hover
                      title="Official Link"
                      size="sm"
                      variant="outline-primary"
                      href=""
                      target="_blank"
                      fa-icon="external-link-alt"
                      fa-style="fas">
          </IconButton>
        </b-button-group> -->

        <IconButton
          size="sm"
          variant="outline-primary"
          href="https://github.com/emfomy/cosmel"
          target="_blank"
          fa-icon="github"
          fa-style="fab"
        >
          Github
        </IconButton>

        <IconButton
          size="sm"
          variant="outline-primary"
          href="https://emfomy.github.io/cosmel-data"
          target="_blank"
          fa-icon="file-code"
          fa-style="fas"
        >
          Docs
        </IconButton>
      </ButtonGroup>
    </Card2b>

    <Card2b
      id="project-hwe"
      right
    >
      <header>
        <h4>HWE: Heterogeneous Word Embedding</h4>
        <p>2017-2018</p>
      </header>
      <p>
        A general and flexible framework of word embeddings to incorporate each type (e.g. word-sense, part-of-speech, topic) of contextual feature for learning feature-specific word embeddings in an explicit fashion.
      </p>

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
            Paper (IEEE ICSC 2019)
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
          href="https://github.com/emfomy/hwe"
          target="_blank"
          fa-icon="github"
          fa-style="fab"
        >
          Github
        </IconButton>
      </ButtonGroup>
    </Card2b>

    <Card2b
      id="project-isvd"
      right
    >
      <header>
        <h4>iSVD: Integrated Singular Value Decomposition Algorithm</h4>
        <p>2015-2017</p>
      </header>
      <p>
        A parallel low-rank approximate singular value decomposition solver using integrated randomized algorithm. Implemented for multinode hybrid CPU-GPU systems.
      </p>

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
            Paper (NTU Thesis)
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
          href="https://github.com/emfomy/isvd"
          target="_blank"
          fa-icon="github"
          fa-style="fab"
        >
          Github
        </IconButton>
      </ButtonGroup>
    </Card2b>

    <Card2b
      id="project-pass"
      src="/img/project/pass.png"
      right
    >
      <header>
        <h4>PaSS: Particle Swarm Stepwise Algorithm</h4>
        <p>2013-2015</p>
      </header>
      <p>
        A parallel stochastic search algorithm for information criterion variable selection problems. Implemented for multinode hybrid CPU-GPU systems.
      </p>

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
            Paper (IEEE CIT 2016)
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
          href="https://github.com/emfomy/pass"
          target="_blank"
          fa-icon="github"
          fa-style="fab"
        >
          Github
        </IconButton>
      </ButtonGroup>
    </Card2b>

    <Collapse ref="collapse" name="project-more" class="mt-4">
      <Card2b
        id="project-voting"
        src="/img/project/voting.jpg"
        right
      >
        <header>
          <h4>Ordinal Versus Cardinal Voting Rules</h4>
          <p>2016</p>
        </header>
        <p>
          A research about the performance and incentive compatibility of voting rules in a Bayesian environment.<br>
          My work including numerical analysis and MATLAB code implementation.
        </p>

        <ButtonGroup>
          <b-button-group>
            <IconButton
              size="sm"
              variant="outline-primary"
              href="/file/paper/geb_2017_voting.pdf"
              target="_blank"
              fa-icon="file-pdf"
              fa-style="far"
            >
              Paper (GEB 2017)
            </IconButton>
            <IconButton
              v-b-tooltip.hover
              title="Official Link"
              size="sm"
              variant="outline-primary"
              href="https://doi.org/10.1016/j.geb.2017.04.012"
              target="_blank"
              fa-icon="external-link-alt"
              fa-style="fas"
            />
          </b-button-group>
        </ButtonGroup>
      </Card2b>

      <Card2b
        id="project-his"
        src="/img/project/his.jpg"
        right
      >
        <header>
          <h4>HiS: Hierarchical Schur Solver</h4>
          <p>2015-2016</p>
        </header>
        <p>
          A direct linear solver exploiting the sparse structure of multilevel nested dissection matrix to maximize parallel scalability on multinode GPU clusters.<br>
          My work including algorithm modifying, C++ code implementation, matrix structure and operation forming.
        </p>

        <ButtonGroup>
          <b-button-group>
            <IconButton
              size="sm"
              variant="outline-primary"
              href="/file/paper/ntu_thesis_2016_his.pdf"
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
              href="http://www.airitilibrary.com/Publication/alDetailedMesh1?DocID=U0001-2412201522263000"
              target="_blank"
              fa-icon="external-link-alt"
              fa-style="fas"
            />
          </b-button-group>

          <IconButton
            size="sm"
            variant="outline-primary"
            href="https://bitbucket.org/nanaHa1003/his"
            target="_blank"
            fa-icon="bitbucket"
            fa-style="fab"
          >
            BitBucket
          </IconButton>
        </ButtonGroup>
      </Card2b>

      <Card2b
        id="project-hhis"
        src="/img/project/hhis.png"
        right
      >
        <header>
          <h4>hHiS: Hybrid Hierarchical Schur Solver</h4>
          <p>2014-2016</p>
        </header>
        <p>
          A parallel linear solver for sparse symmetric positive definite matrices using direct/iterative method on each parts of k-way vertex partitioning to maximize parallel scalability on multinode systems.<br>
          My work including theoretical researching, algorithm modifying, programming design, C++ code implementation.
        </p>

        <ButtonGroup>
          <IconButton
            size="sm"
            variant="outline-primary"
            href="https://bitbucket.org/emfomy/lorarc"
            target="_blank"
            fa-icon="bitbucket"
            fa-style="fab"
          >
            BitBucket
          </IconButton>
        </ButtonGroup>
      </Card2b>

      <Card2b
        id="project-nbfmm"
        src="/img/project/nbfmm.png"
        right
      >
        <header>
          <h4>NBFMM: N-Body Simulation Using Fast Multipole Method with CUDA GPU</h4>
          <p>2016</p>
        </header>
        <p>
          An n-body simulation using fast multipole method (FMM) with GPU acceleration.<br>
          My work including project leading, C++ code implementation, CUDA GPU code implementation, and data structure designing.
        </p>

        <ButtonGroup>
          <IconButton
            size="sm"
            variant="outline-primary"
            href="https://sites.google.com/site/nbfmmprojectforgpuprograming"
            target="_blank"
            fa-icon="globe"
            fa-style="fas"
          >
            Website
          </IconButton>

          <IconButton
            size="sm"
            variant="outline-primary"
            href="http://emfomy.github.io/nbfmm"
            target="_blank"
            fa-icon="file-code"
            fa-style="fas"
          >
            Docs
          </IconButton>

          <IconButton
            size="sm"
            variant="outline-primary"
            href="https://github.com/emfomy/nbfmm"
            target="_blank"
            fa-icon="github"
            fa-style="fab"
          >
            GitHub
          </IconButton>
        </ButtonGroup>
      </Card2b>

      <Card2b
        id="project-mandelbrot"
        src="/img/project/mandelbrot.jpg"
        right
      >
        <header>
          <h4>Mandelbrot Set Zooming</h4>
          <p>2016</p>
        </header>
        <p>
          Mandelbrot Set Zooming using CUDA GPU acceleration.
        </p>

        <ButtonGroup>
          <IconButton
            size="sm"
            variant="outline-primary"
            href="https://www.youtube.com/watch?v=BsRrcccV-X4"
            target="_blank"
            fa-icon="youtube"
            fa-style="fab"
          >
            Video
          </IconButton>

          <IconButton
            size="sm"
            variant="outline-primary"
            href="https://github.com/emfomy/gpgpu/tree/master/lab2"
            target="_blank"
            fa-icon="github"
            fa-style="fab"
          >
            GitHub
          </IconButton>
        </ButtonGroup>
      </Card2b>

      <Card2b
        id="project-dsa"
        src="/img/project/dsa.jpg"
        right
      >
        <header>
          <h4>Bank Account Management System Project</h4>
          <p>2015</p>
        </header>
        <p>
          A bank account management system.<br>
          My work including programming design, data structure developing, C++ code implementation, and team management.
        </p>

        <ButtonGroup>
          <IconButton
            size="sm"
            variant="outline-primary"
            href="https://github.com/emfomy/dsa_final"
            target="_blank"
            fa-icon="github"
            fa-style="fab"
          >
            GitHub
          </IconButton>
        </ButtonGroup>
      </Card2b>

      <Card2b
        id="project-wonderfultf"
        src="/img/project/wonderfultf.jpg"
        right
      >
        <header>
          <h4>Wonderful Transportation Forming</h4>
          <p>2013</p>
        </header>
        <p>
          A city traffic simulation of pedestrian, vehicle, and public transportation.<br>
          My work including programming design, data structure developing, Java code implementation, MATLAB GUI code modifying, and team management.
        </p>

        <ButtonGroup>
          <IconButton
            size="sm"
            variant="outline-primary"
            href="https://sites.google.com/site/wonderfultf"
            target="_blank"
            fa-icon="globe"
            fa-style="fas"
          >
            Website
          </IconButton>
        </ButtonGroup>
      </Card2b>

      <Card2b
        id="project-assembly"
        src="/img/project/assembly.jpg"
        right
      >
        <header>
          <h4>The Matrix Project</h4>
          <p>2012</p>
        </header>
        <p>
          A linear algebra library implemented with assembly language.<br>
          My work including programming design, data structure developing, Intel assembly code &amp; main C code implementation, and team management.
        </p>

        <ButtonGroup>
          <IconButton
            size="sm"
            variant="outline-primary"
            href="https://sites.google.com/site/tragedytriangle"
            target="_blank"
            fa-icon="globe"
            fa-style="fas"
          >
            Website
          </IconButton>
        </ButtonGroup>
      </Card2b>

      <Card2b
        id="project-chessai"
        src="/img/project/chessai.jpg"
        right
      >
        <header>
          <h4>Chess AI Project</h4>
          <p>2007</p>
        </header>
        <p>
          A chess game program with an AI that can defeat me.<br>
          My work including programming design, algorithm developing, data structure developing, C &amp; Java code implementation, and Java GUI modifying.
        </p>

        <ButtonGroup>
          <IconButton
            size="sm"
            variant="outline-primary"
            href="https://github.com/emfomy/chess_ai"
            target="_blank"
            fa-icon="github"
            fa-style="fab"
          >
            GitHub
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
  name: 'Project',
  components: {
    Section,
    Card2b,
  },
};
</script>

<style scoped lang="scss">
.Project {
  .Card {
    border-top: solid 4px #f4f4f4;
  }

  .Card:first-of-type {
    border-top: 0 !important;
  }
}
</style>
