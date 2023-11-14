import {
  faBitbucket,
  faGithub,
  faPython,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import {
  faDatabase,
  faFileCode,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import { CardB2 } from '../../components/cards/CardB';
import { ExtButton, IconButton } from '../../components/elements/Button';
import styles from './Portfolio.module.scss';
import { Section, SectionElement, SectionProps } from './Section';

////////////////////////////////////////////////////////////////////////////////

type PortfolioProps = Omit<SectionProps, 'header' | 'children'>;

export const Portfolio = React.forwardRef(function Portfolio(
  { className, ...props }: PortfolioProps,
  ref: React.ForwardedRef<SectionElement>,
): JSX.Element {
  const header = <h2>Portfolio</h2>;

  const body = (
    <>
      <CardB2
        id="portfolio-infodemic"
        imgSrc="
        /img/project/infodemic.png
      "
        href="https://infodemic.cc"
        right
      >
        <header>
          <h4>Infodemic</h4>
          <p>2022–Present</p>
        </header>
        <p>
          Cognitive security in modern warfare: unveiling the battle against
          disinformation.
        </p>
        <p>
          It revealing cognitive manipulation, collaborative patterns, and
          malicious dissemination to safeguard society.
        </p>

        <div className="btn-cluster">
          <IconButton
            size="sm"
            variant="outline-primary"
            href="https://infodemic.cc"
            target="_blank"
            icon={faGlobe}
          >
            Website
          </IconButton>
        </div>
      </CardB2>

      <CardB2
        id="portfolio-miin"
        imgSrc="
        /img/project/miin.png
      "
        href="https://miin.cc"
        right
      >
        <header>
          <h4>Miin</h4>
          <p>2021–Present</p>
        </header>
        <p>Miin is a brand new project of Taiwan AI Labs.</p>
        <p>
          It begins by understanding events through AI, then takes dynamic
          sources and opinions into consideration to establish a cross-platform
          comprehensive view.
        </p>
        <p>
          We look forward to replacing social biases with diversification.
          Provide an environment of professionally trusted insights in replace
          of the polarized infodemic and restore the autonomy of the
          relationship between viewers and content creators.
        </p>

        <div className="btn-cluster">
          <IconButton
            size="sm"
            variant="outline-primary"
            href="https://miin.cc"
            target="_blank"
            icon={faGlobe}
          >
            Website
          </IconButton>
        </div>
      </CardB2>

      <CardB2
        id="portfolio-ckip-transformers"
        imgSrc="
        /img/project/ckip-transformers.png
      "
        href="https://github.com/emfomy/ckip-transformers"
        right
      >
        <header>
          <h4>CKIP Transformers</h4>
          <p>2020–2022</p>
        </header>
        <p>
          This project provides traditional Chinese transformers models
          (including ALBERT, BERT, GPT2) and NLP tools (including word
          segmentation, part-of-speech tagging, named entity recognition).
        </p>

        <div className="btn-cluster">
          <IconButton
            size="sm"
            variant="outline-primary"
            href="https://ckip.iis.sinica.edu.tw/service/gpt2"
            target="_blank"
            icon={faGlobe}
          >
            Demo (Text Generation)
          </IconButton>

          <IconButton
            size="sm"
            variant="outline-primary"
            href="https://ckip.iis.sinica.edu.tw/service/transformers"
            target="_blank"
            icon={faGlobe}
          >
            Demo (NLP Tools)
          </IconButton>

          <IconButton
            size="sm"
            variant="outline-primary"
            href="https://huggingface.co/ckiplab/"
            target="_blank"
            icon={faDatabase}
          >
            Models
          </IconButton>

          <IconButton
            size="sm"
            variant="outline-primary"
            href="https://github.com/emfomy/ckip-transformers"
            target="_blank"
            icon={faGithub}
          >
            Github
          </IconButton>

          <IconButton
            size="sm"
            variant="outline-primary"
            href="https://pypi.org/project/ckip-transformers"
            target="_blank"
            icon={faPython}
          >
            PyPI
          </IconButton>

          <IconButton
            size="sm"
            variant="outline-primary"
            href="https://ckip-transformers.readthedocs.io"
            target="_blank"
            icon={faFileCode}
          >
            Docs
          </IconButton>
        </div>
      </CardB2>

      <CardB2
        id="portfolio-ckiplab"
        imgSrc="/img/project/ckiplab.png"
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
          icon={faGlobe}
        >
          Website
        </IconButton>
      </CardB2>

      <CardB2
        id="portfolio-ckipnlp"
        imgSrc="/img/project/ckipnlp.jpg"
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

        <div className="btn-cluster">
          <IconButton
            size="sm"
            variant="outline-primary"
            href="https://ckip.iis.sinica.edu.tw/service/corenlp"
            target="_blank"
            icon={faGlobe}
          >
            Demo
          </IconButton>

          <IconButton
            size="sm"
            variant="outline-primary"
            href="https://github.com/ckiplab/ckipnlp"
            target="_blank"
            icon={faGithub}
          >
            Github
          </IconButton>

          <IconButton
            size="sm"
            variant="outline-primary"
            href="https://pypi.org/project/ckipnlp"
            target="_blank"
            icon={faPython}
          >
            PyPI
          </IconButton>

          <IconButton
            size="sm"
            variant="outline-primary"
            href="https://ckipnlp.readthedocs.io"
            target="_blank"
            icon={faFileCode}
          >
            Docs
          </IconButton>
        </div>
      </CardB2>

      <CardB2
        id="portfolio-ehownet"
        imgSrc="/img/project/ehownet.png"
        href="https://ckip.iis.sinica.edu.tw/service/ehnvis"
        right
      >
        <header>
          <h4>E-HowNet Toolkit and Visualization</h4>
          <p>2018–2019</p>
        </header>
        <p>
          A toolkit (including database and syntax parsing) for
          <a
            href="http://ehownet.iis.sinica.edu.tw"
            target="_blank"
            rel="noreferrer"
          >
            E-HowNet
          </a>
          , and its visualization demo.
        </p>

        <div className="btn-cluster">
          <IconButton
            size="sm"
            variant="outline-primary"
            href="https://ckip.iis.sinica.edu.tw/service/ehnvis"
            target="_blank"
            icon={faGlobe}
          >
            Demo
          </IconButton>

          <IconButton
            size="sm"
            variant="outline-primary"
            href="https://github.com/ckiplab/ehownet"
            target="_blank"
            icon={faGithub}
          >
            Github
          </IconButton>

          <IconButton
            size="sm"
            variant="outline-primary"
            href="https://pypi.org/project/ehownet"
            target="_blank"
            icon={faPython}
          >
            PyPI
          </IconButton>

          <IconButton
            size="sm"
            variant="outline-primary"
            href="https://ehownet.readthedocs.io"
            target="_blank"
            icon={faFileCode}
          >
            Docs
          </IconButton>
        </div>
      </CardB2>

      <CardB2
        id="portfolio-cosmel"
        imgSrc="/img/project/cosmel.png"
        href="/file/paper/lrec_2020_cosmel.pdf"
        right
      >
        <header>
          <h4>CosmEL: Cosmetic Entity Linking</h4>
          <p>2017–2019</p>
        </header>
        <p>
          A novel entity linking project on cosmetic domain with dataset and
          baseline.
          <br />
          This project is an industrial-academic project with
          <a href="https://www.pixnet.net" target="_blank" rel="noreferrer">
            {' '}
            PIXNET{' '}
          </a>
          Corporation.
        </p>

        <div className="btn-cluster">
          <div className="btn-group">
            <IconButton
              size="sm"
              variant="outline-primary"
              href="/file/paper/lrec_2020_cosmel.pdf"
              target="_blank"
              icon={faFilePdf}
            >
              Paper (LREC 2020)
            </IconButton>
            <ExtButton
              size="sm"
              href="https://www.aclweb.org/anthology/2020.lrec-1.235"
            />
          </div>

          <IconButton
            size="sm"
            variant="outline-primary"
            href="https://github.com/emfomy/cosmel"
            target="_blank"
            icon={faGithub}
          >
            Github
          </IconButton>

          <IconButton
            size="sm"
            variant="outline-primary"
            href="https://emfomy.github.io/cosmel-data"
            target="_blank"
            icon={faFileCode}
          >
            Docs
          </IconButton>
        </div>
      </CardB2>

      <CardB2 id="portfolio-hwe" href="/file/paper/icsc_2019_hwe.pdf" right>
        <header>
          <h4>HWE: Heterogeneous Word Embedding</h4>
          <p>2017–2018</p>
        </header>
        <p>
          A general and flexible framework of word embeddings to incorporate
          each type (e.g. word-sense, part-of-speech, topic) of contextual
          feature for learning feature-specific word embeddings in an explicit
          fashion.
        </p>

        <div className="btn-cluster">
          <div className="btn-group">
            <IconButton
              size="sm"
              variant="outline-primary"
              href="/file/paper/icsc_2019_hwe.pdf"
              target="_blank"
              icon={faFilePdf}
            >
              Paper (IEEE ICSC 2019)
            </IconButton>
            <ExtButton
              size="sm"
              href="https://doi.org/10.1109/ICOSC.2019.8665508"
            />
          </div>

          <IconButton
            size="sm"
            variant="outline-primary"
            href="https://github.com/emfomy/hwe"
            target="_blank"
            icon={faGithub}
          >
            Github
          </IconButton>
        </div>
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
          using integrated randomized algorithm. Implemented for multinode
          hybrid CPU-GPU systems.
        </p>

        <div className="btn-cluster">
          <div className="btn-group">
            <IconButton
              size="sm"
              variant="outline-primary"
              href="/file/paper/ntu_thesis_2017_isvd.pdf"
              target="_blank"
              icon={faFilePdf}
            >
              Paper (NTU Thesis)
            </IconButton>
            <ExtButton size="sm" href="https://doi.org/10.6342/NTU201702960" />
          </div>

          <IconButton
            size="sm"
            variant="outline-primary"
            href="https://github.com/emfomy/isvd"
            target="_blank"
            icon={faGithub}
          >
            Github
          </IconButton>
        </div>
      </CardB2>

      <CardB2
        id="portfolio-pass"
        imgSrc="/img/project/pass.png"
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

        <div className="btn-cluster">
          <div className="btn-group">
            <IconButton
              size="sm"
              variant="outline-primary"
              href="/file/paper/ieee_cse_2016_pass.pdf"
              target="_blank"
              icon={faFilePdf}
            >
              Paper (IEEE CIT 2016)
            </IconButton>
            <ExtButton size="sm" href="https://doi.org/10.1109/CIT.2016.101" />
          </div>

          <IconButton
            size="sm"
            variant="outline-primary"
            href="https://github.com/emfomy/pass"
            target="_blank"
            icon={faGithub}
          >
            Github
          </IconButton>
        </div>
      </CardB2>
    </>
  );

  const extra = (
    <>
      <CardB2
        id="portfolio-voting"
        imgSrc="/img/project/voting.jpg"
        href="/file/paper/geb_2017_voting.pdf"
        right
      >
        <header>
          <h4>Ordinal Versus Cardinal Voting Rules</h4>
          <p>2016</p>
        </header>
        <p>
          A research about the performance and incentive compatibility of voting
          rules in a Bayesian environment.
          <br />
          My work including numerical analysis and MATLAB code implementation.
        </p>

        <div className="btn-cluster">
          <div className="btn-group">
            <IconButton
              size="sm"
              variant="outline-primary"
              href="/file/paper/geb_2017_voting.pdf"
              target="_blank"
              icon={faFilePdf}
            >
              Paper (GEB 2017)
            </IconButton>
            <ExtButton
              size="sm"
              href="https://doi.org/10.1016/j.geb.2017.04.012"
            />
          </div>
        </div>
      </CardB2>

      <CardB2
        id="portfolio-his"
        imgSrc="/img/project/his.jpg"
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
          GPU clusters.
          <br />
          My work including algorithm modifying, C++ code implementation, matrix
          structure and operation forming.
        </p>

        <div className="btn-cluster">
          <div className="btn-group">
            <IconButton
              size="sm"
              variant="outline-primary"
              href="/file/paper/ntu_thesis_2016_his.pdf"
              target="_blank"
              icon={faFilePdf}
            >
              Paper
            </IconButton>
            <ExtButton
              size="sm"
              href="http://www.airitilibrary.com/Publication/alDetailedMesh1?DocID=U0001-2412201522263000"
            />
          </div>

          <IconButton
            size="sm"
            variant="outline-primary"
            href="https://bitbucket.org/nanaHa1003/his"
            target="_blank"
            icon={faBitbucket}
          >
            BitBucket
          </IconButton>
        </div>
      </CardB2>

      <CardB2
        id="portfolio-hhis"
        imgSrc="/img/project/hhis.png"
        href="https://bitbucket.org/emfomy/lorasc"
        right
      >
        <header>
          <h4>hHiS: Hybrid Hierarchical Schur Solver</h4>
          <p>2014–2016</p>
        </header>
        <p>
          A parallel linear solver for sparse symmetric positive definite
          matrices using direct/iterative method on each parts of k-way vertex
          partitioning to maximize parallel scalability on multinode systems.
          <br />
          My work including theoretical researching, algorithm modifying,
          programming design, C++ code implementation.
        </p>

        <div className="btn-cluster">
          <IconButton
            size="sm"
            variant="outline-primary"
            href="https://bitbucket.org/emfomy/lorasc"
            target="_blank"
            icon={faBitbucket}
          >
            BitBucket
          </IconButton>
        </div>
      </CardB2>

      <CardB2
        id="portfolio-nbfmm"
        imgSrc="/img/project/nbfmm.png"
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
          acceleration.
          <br />
          My work including project leading, C++ code implementation, CUDA GPU
          code implementation, and data structure designing.
        </p>

        <div className="btn-cluster">
          <IconButton
            size="sm"
            variant="outline-primary"
            href="https://sites.google.com/site/nbfmmprojectforgpuprograming"
            target="_blank"
            icon={faGlobe}
          >
            Website
          </IconButton>

          <IconButton
            size="sm"
            variant="outline-primary"
            href="https://github.com/emfomy/nbfmm"
            target="_blank"
            icon={faGithub}
          >
            GitHub
          </IconButton>

          <IconButton
            size="sm"
            variant="outline-primary"
            href="http://emfomy.github.io/nbfmm"
            target="_blank"
            icon={faFileCode}
          >
            Docs
          </IconButton>
        </div>
      </CardB2>

      <CardB2
        id="portfolio-mandelbrot"
        imgSrc="/img/project/mandelbrot.jpg"
        href="https://www.youtube.com/watch?v=BsRrcccV-X4"
        right
      >
        <header>
          <h4>Mandelbrot Set Zooming</h4>
          <p>2016</p>
        </header>
        <p>Mandelbrot Set Zooming using CUDA GPU acceleration.</p>

        <div className="btn-cluster">
          <IconButton
            size="sm"
            variant="outline-primary"
            href="https://www.youtube.com/watch?v=BsRrcccV-X4"
            target="_blank"
            icon={faYoutube}
          >
            Video
          </IconButton>

          <IconButton
            size="sm"
            variant="outline-primary"
            href="https://github.com/emfomy/gpgpu/tree/master/lab2"
            target="_blank"
            icon={faGithub}
          >
            GitHub
          </IconButton>
        </div>
      </CardB2>

      <CardB2
        id="portfolio-dsa"
        imgSrc="/img/project/dsa.jpg"
        href="https://github.com/emfomy/dsa_final"
        right
      >
        <header>
          <h4>Bank Account Management System Project</h4>
          <p>2015</p>
        </header>
        <p>
          A bank account management system.
          <br />
          My work including programming design, data structure developing, C++
          code implementation, and team management.
        </p>

        <div className="btn-cluster">
          <IconButton
            size="sm"
            variant="outline-primary"
            href="https://github.com/emfomy/dsa_final"
            target="_blank"
            icon={faGithub}
          >
            GitHub
          </IconButton>
        </div>
      </CardB2>

      <CardB2
        id="portfolio-wonderfultf"
        imgSrc="/img/project/wonderfultf.jpg"
        href="https://sites.google.com/site/wonderfultf"
        right
      >
        <header>
          <h4>Wonderful Transportation Forming</h4>
          <p>2013</p>
        </header>
        <p>
          A city traffic simulation of pedestrian, vehicle, and public
          transportation.
          <br />
          My work including programming design, data structure developing, Java
          code implementation, MATLAB GUI code modifying, and team management.
        </p>

        <div className="btn-cluster">
          <IconButton
            size="sm"
            variant="outline-primary"
            href="https://sites.google.com/site/wonderfultf"
            target="_blank"
            icon={faGlobe}
          >
            Website
          </IconButton>
        </div>
      </CardB2>

      <CardB2
        id="portfolio-assembly"
        imgSrc="/img/project/assembly.jpg"
        href="https://github.com/emfomy/tragedytriangle"
        right
      >
        <header>
          <h4>The Matrix Project</h4>
          <p>2012</p>
        </header>
        <p>
          A linear algebra library implemented with assembly language.
          <br />
          My work including programming design, data structure developing, Intel
          assembly code & main C code implementation, and team management.
        </p>

        <div className="btn-cluster">
          <IconButton
            size="sm"
            variant="outline-primary"
            href="https://github.com/emfomy/tragedytriangle"
            target="_blank"
            icon={faGlobe}
          >
            Website
          </IconButton>
        </div>
      </CardB2>

      <CardB2
        id="portfolio-chessai"
        imgSrc="/img/project/chessai.jpg"
        href="https://github.com/emfomy/chess_ai"
        right
      >
        <header>
          <h4>Chess AI Project</h4>
          <p>2007</p>
        </header>
        <p>
          A chess game program with an AI that can defeat me.
          <br />
          My work including programming design, algorithm developing, data
          structure developing, C & Java code implementation, and Java GUI
          modifying.
        </p>

        <div className="btn-cluster">
          <IconButton
            size="sm"
            variant="outline-primary"
            href="https://github.com/emfomy/chess_ai"
            target="_blank"
            icon={faGithub}
          >
            GitHub
          </IconButton>
        </div>
      </CardB2>
    </>
  );

  return (
    <Section
      {...props}
      ref={ref}
      className={`${styles.Section} ${className}`}
      header={header}
      extra={extra}
    >
      {body}
    </Section>
  );
});
