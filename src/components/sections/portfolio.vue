<template>
  <Section class="Portfolio">
    <template #header>
      <h2>Portfolio</h2>
    </template>

    <CardB2
      id="portfolio-ckip-transformers"
      :img-src="
        require('@/assets/img/project/ckip-transformers.png?resize').src
      "
      href="https://github.com/emfomy/ckip-transformers"
      right
    >
      <header>
        <h4>CKIP Transformers</h4>
        <p>2020–2021</p>
      </header>
      <p>
        This project provides traditional Chinese transformers models (including
        ALBERT, BERT, GPT2) and NLP tools (including word segmentation,
        part-of-speech tagging, named entity recognition).
      </p>

      <ButtonGroup>
        <IconButton
          size="sm"
          variant="outline-primary"
          href="https://ckip.iis.sinica.edu.tw/service/gpt2"
          target="_blank"
          fa-icon="globe"
          fa-style="fas"
        >
          Demo (Text Generation)
        </IconButton>

        <IconButton
          size="sm"
          variant="outline-primary"
          href="https://ckip.iis.sinica.edu.tw/service/transformers"
          target="_blank"
          fa-icon="globe"
          fa-style="fas"
        >
          Demo (NLP Tools)
        </IconButton>

        <IconButton
          size="sm"
          variant="outline-primary"
          href="https://huggingface.co/ckiplab/"
          target="_blank"
          fa-icon="database"
          fa-style="fas"
        >
          Models
        </IconButton>

        <IconButton
          size="sm"
          variant="outline-primary"
          href="https://github.com/emfomy/ckip-transformers"
          target="_blank"
          fa-icon="github"
          fa-style="fab"
        >
          Github
        </IconButton>

        <IconButton
          size="sm"
          variant="outline-primary"
          href="https://pypi.org/project/ckip-transformers"
          target="_blank"
          fa-icon="python"
          fa-style="fab"
        >
          PyPI
        </IconButton>

        <IconButton
          size="sm"
          variant="outline-primary"
          href="https://ckip-transformers.readthedocs.io"
          target="_blank"
          fa-icon="file-code"
          fa-style="fas"
        >
          Docs
        </IconButton>
      </ButtonGroup>
    </CardB2>

    <CardB2
      id="portfolio-ckiplab"
      :img-src="require('@/assets/img/project/ckiplab.png?resize').src"
      href="https://ckip.iis.sinica.edu.tw"
      right
    >
      <header>
        <h4>CKIP Website</h4>
        <p>2019–2021</p>
      </header>
      <p>A landing website for CKIP Lab.</p>

      <IconButton
        size="sm"
        variant="outline-primary"
        href="https://ckip.iis.sinica.edu.tw"
        target="_blank"
        fa-icon="globe"
        fa-style="fas"
      >
        Website
      </IconButton>
    </CardB2>

    <CardB2
      id="portfolio-ckipnlp"
      :img-src="require('@/assets/img/project/ckipnlp.jpg?resize').src"
      href="https://github.com/ckiplab/ckipnlp"
      right
    >
      <header>
        <h4>CKIP CoreNLP</h4>
        <p>2018–2020</p>
      </header>
      <p>
        A python package of CKIP CoreNLP toolkits with sentence segmentation,
        word segmentation, part-of-speech tagging, named-entity recognition,
        sentence parsing, co-reference resolution.
      </p>

      <ButtonGroup>
        <IconButton
          size="sm"
          variant="outline-primary"
          href="https://ckip.iis.sinica.edu.tw/service/corenlp"
          target="_blank"
          fa-icon="globe"
          fa-style="fas"
        >
          Demo
        </IconButton>

        <IconButton
          size="sm"
          variant="outline-primary"
          href="https://github.com/ckiplab/ckipnlp"
          target="_blank"
          fa-icon="github"
          fa-style="fab"
        >
          Github
        </IconButton>

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
          href="https://ckipnlp.readthedocs.io"
          target="_blank"
          fa-icon="file-code"
          fa-style="fas"
        >
          Docs
        </IconButton>
      </ButtonGroup>
    </CardB2>

    <CardB2
      id="portfolio-ehownet"
      :img-src="require('@/assets/img/project/ehownet.png?resize').src"
      href="https://ckip.iis.sinica.edu.tw/service/ehnvis"
      right
    >
      <header>
        <h4>E-HowNet Toolkit and Visualization</h4>
        <p>2018–2019</p>
      </header>
      <p>
        A toolkit (including database and syntax parsing) for
        <b-link href="http://ehownet.iis.sinica.edu.tw" target="_blank">
          E-HowNet </b-link
        >, and its visualization demo.
      </p>

      <ButtonGroup>
        <IconButton
          size="sm"
          variant="outline-primary"
          href="https://ckip.iis.sinica.edu.tw/service/ehnvis"
          target="_blank"
          fa-icon="globe"
          fa-style="fas"
        >
          Demo
        </IconButton>

        <IconButton
          size="sm"
          variant="outline-primary"
          href="https://github.com/ckiplab/ehownet"
          target="_blank"
          fa-icon="github"
          fa-style="fab"
        >
          Github
        </IconButton>

        <IconButton
          size="sm"
          variant="outline-primary"
          href="https://pypi.org/project/ehownet"
          target="_blank"
          fa-icon="python"
          fa-style="fab"
        >
          PyPI
        </IconButton>

        <IconButton
          size="sm"
          variant="outline-primary"
          href="https://ehownet.readthedocs.io"
          target="_blank"
          fa-icon="file-code"
          fa-style="fas"
        >
          Docs
        </IconButton>
      </ButtonGroup>
    </CardB2>

    <CardB2
      id="portfolio-cosmel"
      :img-src="require('@/assets/img/project/cosmel.png?resize').src"
      href="/file/paper/lrec_2020_cosmel.pdf"
      right
    >
      <header>
        <h4>CosmEL: Cosmetic Entity Linking</h4>
        <p>2017–2019</p>
      </header>
      <p>
        A novel entity linking project on cosmetic domain with dataset and
        baseline.<br />
        This project is an industrial-academic project with
        <b-link href="https://www.pixnet.net" target="_blank"> PIXNET </b-link>
        Corporation.
      </p>

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
            Paper (LREC 2020)
          </IconButton>
          <IconButton
            v-b-tooltip.hover
            title="Official Link"
            size="sm"
            variant="outline-primary"
            href="https://www.aclweb.org/anthology/2020.lrec-1.235"
            target="_blank"
            fa-icon="external-link-alt"
            fa-style="fas"
          />
        </b-button-group>

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
    </CardB2>

    <CardB2 id="portfolio-hwe" href="/file/paper/icsc_2019_hwe.pdf" right>
      <header>
        <h4>HWE: Heterogeneous Word Embedding</h4>
        <p>2017–2018</p>
      </header>
      <p>
        A general and flexible framework of word embeddings to incorporate each
        type (e.g. word-sense, part-of-speech, topic) of contextual feature for
        learning feature-specific word embeddings in an explicit fashion.
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
    </CardB2>

    <CardB2
      id="portfolio-isvd"
      href="/file/paper/ntu_thesis_2017_isvd.pdf"
      right
    >
      <header>
        <h4>iSVD: Integrated Singular Value Decomposition Algorithm</h4>
        <p>2015–2017</p>
      </header>
      <p>
        A parallel low-rank approximate singular value decomposition solver
        using integrated randomized algorithm. Implemented for multinode hybrid
        CPU-GPU systems.
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
    </CardB2>

    <CardB2
      id="portfolio-pass"
      :img-src="require('@/assets/img/project/pass.png?resize').src"
      href="/file/paper/ieee_cse_2016_pass.pdf"
      right
    >
      <header>
        <h4>PaSS: Particle Swarm Stepwise Algorithm</h4>
        <p>2013–2015</p>
      </header>
      <p>
        A parallel stochastic search algorithm for information criterion
        variable selection problems. Implemented for multinode hybrid CPU-GPU
        systems.
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
    </CardB2>

    <Collapse ref="collapse" name="project-more" class="mt-4">
      <CardB2
        id="portfolio-voting"
        :img-src="require('@/assets/img/project/voting.jpg?resize').src"
        href="/file/paper/geb_2017_voting.pdf"
        right
      >
        <header>
          <h4>Ordinal Versus Cardinal Voting Rules</h4>
          <p>2016</p>
        </header>
        <p>
          A research about the performance and incentive compatibility of voting
          rules in a Bayesian environment.<br />
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
      </CardB2>

      <CardB2
        id="portfolio-his"
        :img-src="require('@/assets/img/project/his.jpg?resize').src"
        href="/file/paper/ntu_thesis_2016_his.pdf"
        right
      >
        <header>
          <h4>HiS: Hierarchical Schur Solver</h4>
          <p>2015–2016</p>
        </header>
        <p>
          A direct linear solver exploiting the sparse structure of multilevel
          nested dissection matrix to maximize parallel scalability on multinode
          GPU clusters.<br />
          My work including algorithm modifying, C++ code implementation, matrix
          structure and operation forming.
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
      </CardB2>

      <CardB2
        id="portfolio-hhis"
        :img-src="require('@/assets/img/project/hhis.png?resize').src"
        href="https://bitbucket.org/emfomy/lorarc"
        right
      >
        <header>
          <h4>hHiS: Hybrid Hierarchical Schur Solver</h4>
          <p>2014–2016</p>
        </header>
        <p>
          A parallel linear solver for sparse symmetric positive definite
          matrices using direct/iterative method on each parts of k-way vertex
          partitioning to maximize parallel scalability on multinode systems.<br />
          My work including theoretical researching, algorithm modifying,
          programming design, C++ code implementation.
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
      </CardB2>

      <CardB2
        id="portfolio-nbfmm"
        :img-src="require('@/assets/img/project/nbfmm.png?resize').src"
        href="https://sites.google.com/site/nbfmmprojectforgpuprograming"
        right
      >
        <header>
          <h4>
            NBFMM: N-Body Simulation Using Fast Multipole Method with CUDA GPU
          </h4>
          <p>2016</p>
        </header>
        <p>
          An n-body simulation using fast multipole method (FMM) with GPU
          acceleration.<br />
          My work including project leading, C++ code implementation, CUDA GPU
          code implementation, and data structure designing.
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
            href="https://github.com/emfomy/nbfmm"
            target="_blank"
            fa-icon="github"
            fa-style="fab"
          >
            GitHub
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
        </ButtonGroup>
      </CardB2>

      <CardB2
        id="portfolio-mandelbrot"
        :img-src="require('@/assets/img/project/mandelbrot.jpg?resize').src"
        href="https://www.youtube.com/watch?v=BsRrcccV-X4"
        right
      >
        <header>
          <h4>Mandelbrot Set Zooming</h4>
          <p>2016</p>
        </header>
        <p>Mandelbrot Set Zooming using CUDA GPU acceleration.</p>

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
      </CardB2>

      <CardB2
        id="portfolio-dsa"
        :img-src="require('@/assets/img/project/dsa.jpg?resize').src"
        href="https://github.com/emfomy/dsa_final"
        right
      >
        <header>
          <h4>Bank Account Management System Project</h4>
          <p>2015</p>
        </header>
        <p>
          A bank account management system.<br />
          My work including programming design, data structure developing, C++
          code implementation, and team management.
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
      </CardB2>

      <CardB2
        id="portfolio-wonderfultf"
        :img-src="require('@/assets/img/project/wonderfultf.jpg?resize').src"
        href="https://sites.google.com/site/wonderfultf"
        right
      >
        <header>
          <h4>Wonderful Transportation Forming</h4>
          <p>2013</p>
        </header>
        <p>
          A city traffic simulation of pedestrian, vehicle, and public
          transportation.<br />
          My work including programming design, data structure developing, Java
          code implementation, MATLAB GUI code modifying, and team management.
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
      </CardB2>

      <CardB2
        id="portfolio-assembly"
        :img-src="require('@/assets/img/project/assembly.jpg?resize').src"
        href="https://github.com/emfomy/tragedytriangle"
        right
      >
        <header>
          <h4>The Matrix Project</h4>
          <p>2012</p>
        </header>
        <p>
          A linear algebra library implemented with assembly language.<br />
          My work including programming design, data structure developing, Intel
          assembly code &amp; main C code implementation, and team management.
        </p>

        <ButtonGroup>
          <IconButton
            size="sm"
            variant="outline-primary"
            href="https://github.com/emfomy/tragedytriangle"
            target="_blank"
            fa-icon="globe"
            fa-style="fas"
          >
            Website
          </IconButton>
        </ButtonGroup>
      </CardB2>

      <CardB2
        id="portfolio-chessai"
        :img-src="require('@/assets/img/project/chessai.jpg?resize').src"
        href="https://github.com/emfomy/chess_ai"
        right
      >
        <header>
          <h4>Chess AI Project</h4>
          <p>2007</p>
        </header>
        <p>
          A chess game program with an AI that can defeat me.<br />
          My work including programming design, algorithm developing, data
          structure developing, C &amp; Java code implementation, and Java GUI
          modifying.
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
      </CardB2>
    </Collapse>
  </Section>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.Portfolio {
  .Card {
    border-top: solid 4px #f4f4f4;
  }

  .Card:first-of-type {
    border-top: 0 !important;
  }
}
</style>
