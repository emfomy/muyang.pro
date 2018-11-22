<template>
  <Section class="Project">

    <template slot="header">
      <h2>Projects</h2>
      <p></p>
    </template>

    <Card3>
      <header>
        <h4>CosmEL: Cosmetic Entity Linking</h4>
        <p>2017-2018</p>
      </header>
      <p>
        An industrial-academic project with <b-link href="//www.pixnet.net" target="_blank">PIXNET</b-link>. Cosmetics domain entity linking.<br />
        My work including data analysis, data preprocessing, programming design, model design, Python code implementation.
      </p>
    </Card3>

    <Card3>
      <header>
        <h4>Integrated Singular Value Decomposition (iSVD) Algorithm</h4>
        <p>2015-Present</p>
      </header>
      <p>
        iSVD is a parallel low-rank approximate singular value decomposition solver using integrated randomized algorithm for multinode systems.<br />
        My work including algorithm modifying, programming design, C++ code implementation.
      </p>

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
    </Card3>

    <Card3>
      <header>
        <h4>Particle Swarm Stepwise (PaSS) Algorithm</h4>
        <p>2013-2015</p>
      </header>
      <p>
        PaSS is a parallel stochastic search algorithm for information criterion variable selection problems on multinode systems.<br />
        My work including programming design, CUDA &amp; C++ code implementation, non-general model developing and implementation.
      </p>

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
      </IconButtonGroup>
    </Card3>

    <IconToggle target="project-more" />
    <b-collapse id="project-more" class="mt-4">
      <Card3>
        <header>
          <h4>Hierarchical Schur (HiS) Solver</h4>
          <p>2015-2016</p>
        </header>
        <p>
          HiS is a direct linear solver exploiting the sparse structure of multilevel nested dissection matrix to maximize parallel scalability on multinode GPU clusters.<br />
          My work including algorithm modifying, C++ code implementation, matrix structure and operation forming.
        </p>

        <IconButtonGroup>
          <IconButton size="sm"
                      variant="outline-primary"
                      href="/file/paper/other/ntu_thesis_2016_his.pdf"
                      target="_blank"
                      fa-icon="file-pdf"
                      fa-style="far">
            Paper
          </IconButton>

          <IconButton size="sm"
                      variant="outline-primary"
                      href="//www.airitilibrary.com/Publication/alDetailedMesh1?DocID=U0001-2412201522263000"
                      target="_blank"
                      fa-icon="file-alt"
                      fa-style="far">
            Paper (Online)
          </IconButton>

          <IconButton size="sm"
                      variant="outline-primary"
                      href="//bitbucket.org/nanaHa1003/his"
                      target="_blank"
                      fa-icon="bitbucket"
                      fa-style="fab">
            BitBucket
          </IconButton>
        </IconButtonGroup>
      </Card3>

      <!-- <Card3>
        <header>
          <h4>Hybrid Hierarchical Schur (hHiS) Solver</h4>
          <p>2014-2016</p>
        </header>
        <p>
          hHiS is a parallel linear system solver for sparse symmetric positive definite matrices using direct/iterative method on each parts of k-way vertex partitioning to maximize parallel scalability on multinode systems.<br />
          My work including theoretical researching, algorithm modifying, programming design, C++ code implementation.
        </p>
      </Card3> -->

      <Card3>
        <header>
          <h4>Ordinal Versus Cardinal Voting Rules</h4>
          <p>2016</p>
        </header>
        <p>
          A research about the performance and incentive compatibility of voting rules in a Bayesian environment.<br />
          My work including numerical analysis and MATLAB code implementation.
        </p>

        <IconButtonGroup>
          <IconButton size="sm"
                      variant="outline-primary"
                      href="/file/paper/other/geb_2017_voting.pdf"
                      target="_blank"
                      fa-icon="file-pdf"
                      fa-style="far">
            Paper
          </IconButton>

          <IconButton size="sm"
                      variant="outline-primary"
                      href="//doi.org/10.1016/j.geb.2017.04.012"
                      target="_blank"
                      fa-icon="file-alt"
                      fa-style="far">
            Paper (Online)
          </IconButton>
        </IconButtonGroup>
      </Card3>

      <Card3>
        <header>
          <h4>N-Body Simulation Using Fast Multipole Method with CUDA GPU</h4>
          <p>2016</p>
        </header>
        <p>
          An n-body simulation using fast multipole method (FMM) with GPU acceleration.<br />
          My work including project leading, C++ code implementation, CUDA GPU code implementation, and data structure designing.
        </p>

        <IconButtonGroup>
          <IconButton size="sm"
                      variant="outline-primary"
                      href="//sites.google.com/site/nbfmmprojectforgpuprograming"
                      target="_blank"
                      fa-icon="globe"
                      fa-style="fas">
            Website
          </IconButton>

          <IconButton size="sm"
                      variant="outline-primary"
                      href="//github.com/emfomy/nbfmm"
                      target="_blank"
                      fa-icon="github"
                      fa-style="fab">
            GitHub
          </IconButton>
        </IconButtonGroup>
      </Card3>

      <Card3>
        <header>
          <h4>Bank Account Management System Project</h4>
          <p>2015</p>
        </header>
        <p>
          A bank account management system.<br />
          My work including programming design, data structure developing, C++ code implementation, and team management.
        </p>

        <IconButtonGroup>
          <IconButton size="sm"
                      variant="outline-primary"
                      href="//github.com/emfomy/dsa_final"
                      target="_blank"
                      fa-icon="github"
                      fa-style="fab">
            GitHub
          </IconButton>
        </IconButtonGroup>
      </Card3>

      <Card3>
        <header>
          <h4>Wonderful Transportation Forming</h4>
          <p>2013</p>
        </header>
        <p>
          A city traffic simulation of pedestrian, vehicle, and public transportation.<br />
          My work including programming design, data structure developing, Java code implementation, MATLAB GUI code modifying, and team management.
        </p>

        <IconButtonGroup>
          <IconButton size="sm"
                      variant="outline-primary"
                      href="//sites.google.com/site/wonderfultf"
                      target="_blank"
                      fa-icon="globe"
                      fa-style="fas">
            Website
          </IconButton>
        </IconButtonGroup>
      </Card3>

      <Card3>
        <header>
          <h4>The Matrix Project</h4>
          <p>2012</p>
        </header>
        <p>
          A linear algebra library implemented with assembly language.<br />
          My work including programming design, data structure developing, Intel assembly code &amp; main C code implementation, and team management.
        </p>

        <IconButtonGroup>
          <IconButton size="sm"
                      variant="outline-primary"
                      href="//sites.google.com/site/tragedytriangle"
                      target="_blank"
                      fa-icon="globe"
                      fa-style="fas">
            Website
          </IconButton>
        </IconButtonGroup>
      </Card3>

      <Card3>
        <header>
          <h4>Chess AI Project</h4>
          <p>2007</p>
        </header>
        <p>
          A chess game program with an AI that can defeat me.<br />
          My work including programming design, algorithm developing, data structure developing, C &amp; Java code implementation, and Java GUI modifying.
        </p>

        <IconButtonGroup>
          <IconButton size="sm"
                      variant="outline-primary"
                      href="//github.com/emfomy/chess_ai"
                      target="_blank"
                      fa-icon="github"
                      fa-style="fab">
            GitHub
          </IconButton>
        </IconButtonGroup>
      </Card3>
    </b-collapse>

  </Section>
</template>

<script>
import Section from "./_section.vue";
import Card3 from "../../components/card3.vue";

export default {
  name: "Project",
  components: {
    Section,
    Card3
  }
};
</script>

<style scoped lang="scss">
.Project {
  .Card3 {
    border-top: solid 4px #f4f4f4;
  }

  >>> .Card3:first-of-type {
    border-top: 0 !important;
  }

  .Card3:last-of-type {
    padding-bottom: 0 !important;
  }
}
</style>
