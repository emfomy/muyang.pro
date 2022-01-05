import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import {
  faAward,
  faGlobe,
  faLevelDownAlt,
} from '@fortawesome/free-solid-svg-icons';
import React, { useContext } from 'react';

import { CardB2 } from '../../components/cards/CardB';
import { ExtButton, IconButton } from '../../components/elements/Button';
import { AppContext } from '../App';
import styles from './Publication.module.scss';
import { Section, SectionElement, SectionProps } from './Section';

////////////////////////////////////////////////////////////////////////////////

export type PublicationProps = Omit<SectionProps, 'header' | 'children'>;

export const Publication = React.forwardRef(function Publication(
  { className, ...props }: PublicationProps,
  ref: React.ForwardedRef<SectionElement>,
): JSX.Element {
  const { scrollTo } = useContext(AppContext);

  const header = <h2>Publications & Presentations</h2>;

  const body = (
    <>
      <CardB2
        id="publication-lrec-2020-cosmel"
        href="https://lrec2020.lrec-conf.org"
        imgSrc="/img/venue/lrec_2020.jpg"
        imgSrcSide="/img/venue/lrec_2020_sm.jpg"
      >
        <header>
          <h4>
            Headword-Oriented Entity Linking: A New Entity Linking Task with
            Dataset and Baseline
          </h4>
          <p>
            <strong>Mu Yang</strong>, Chi-Yen Chen, Yi-Hui Lee, Qian-Hui Zeng,
            Wei-Yun Ma, Chen-Yang Shih, Wei-Jhih Chen
            <br />
            2020, 12th International Conference on Language Resources and
            Evaluation (LREC’20)
          </p>
        </header>

        <div className="btn-cluster">
          <div className="btn-group">
            <IconButton
              size="sm"
              variant="outline-primary"
              href="/file/paper/lrec_2020_cosmel.pdf"
              target="_blank"
              icon={faFilePdf}
            >
              Paper
            </IconButton>
            <ExtButton
              size="sm"
              href="https://www.aclweb.org/anthology/2020.lrec-1.235"
            />
          </div>

          <IconButton
            size="sm"
            variant="outline-primary"
            href="https://lrec2020.lrec-conf.org"
            target="_blank"
            icon={faGlobe}
          >
            Conference
          </IconButton>

          <IconButton
            size="sm"
            variant="outline-primary"
            icon={faLevelDownAlt}
            onClick={() => scrollTo('portfolio', 'portfolio-cosmel')}
          >
            Related Project
          </IconButton>
        </div>
      </CardB2>

      <CardB2
        id="publication-icsc-2019-hwe"
        href="https://semanticcomputing.wixsite.com/icsc-2019"
        imgSrc="/img/venue/icsc_2019.png"
      >
        <header>
          <h4>HWE: Word Embedding with Heterogeneous Features</h4>
          <p>
            Jhih-Sheng Fan, <strong>Mu Yang</strong>, Peng-Hsuan Li, Wei-Yun Ma
            <br />
            2019, 13th IEEE International Conference on Semantic Computing
            (IEEE-ICSC’19)
          </p>
        </header>

        <div className="btn-cluster">
          <div className="btn-group">
            <IconButton
              size="sm"
              variant="outline-primary"
              href="/file/paper/icsc_2019_hwe.pdf"
              target="_blank"
              icon={faFilePdf}
            >
              Paper
            </IconButton>
            <ExtButton
              size="sm"
              href="https://doi.org/10.1109/ICOSC.2019.8665508"
            />
          </div>

          <IconButton
            size="sm"
            variant="outline-primary"
            href="https://semanticcomputing.wixsite.com/icsc-2019"
            target="_blank"
            icon={faGlobe}
          >
            Conference
          </IconButton>

          <IconButton
            size="sm"
            variant="outline-primary"
            icon={faLevelDownAlt}
            onClick={() => scrollTo('portfolio', 'portfolio-hwe')}
          >
            Related Project
          </IconButton>
        </div>
      </CardB2>

      <CardB2
        id="publication-ieee-cit-2016-pass"
        href="http://nsclab.org/cit2016"
        imgSrc="/img/venue/ieee_cit_2016.png"
      >
        <header>
          <h4>
            Particle Swarm Stepwise Algorithm (PaSS) on Multicore Hybrid CPU-GPU
            Clusters
          </h4>
          <p>
            <strong>Mu Yang</strong>, Ray-Bing Chen, I-Hsin Chung, Weichung Wang
            <br />
            2016, 16th IEEE International Conference on Computer and Information
            Technology (IEEE-CIT’16)
          </p>
        </header>

        <div className="btn-cluster">
          <div className="btn-group">
            <IconButton
              size="sm"
              variant="outline-primary"
              href="/file/paper/ieee_cse_2016_pass.pdf"
              target="_blank"
              icon={faFilePdf}
            >
              Paper
            </IconButton>
            <ExtButton size="sm" href="https://doi.org/10.1109/CIT.2016.101" />
          </div>

          <IconButton
            size="sm"
            variant="outline-primary"
            href="http://nsclab.org/cit2016"
            target="_blank"
            icon={faGlobe}
          >
            Conference
          </IconButton>

          <IconButton
            size="sm"
            variant="outline-primary"
            icon={faLevelDownAlt}
            onClick={() => scrollTo('portfolio', 'portfolio-pass')}
          >
            Related Project
          </IconButton>
        </div>
      </CardB2>

      <CardB2
        id="publication-ntu-thesis-isvd"
        href="https://doi.org/10.6342/NTU201702960"
        imgSrc="/img/logo/ntu_banner.png"
        imgSrcSide="/img/logo/ntu_logo.png"
      >
        <header>
          <h4>
            Highly Scalable Parallelism of Integrated Randomized Singular Value
            Decomposition with Big Data Applications
          </h4>
          <p>
            <strong>Mu Yang</strong>
            <br />
            2017, Master’s Thesis, National Taiwan University
          </p>
        </header>

        <div className="btn-cluster">
          <div className="btn-group">
            <IconButton
              size="sm"
              variant="outline-primary"
              href="/file/paper/ntu_thesis_2017_isvd.pdf"
              target="_blank"
              icon={faFilePdf}
            >
              Paper
            </IconButton>
            <ExtButton size="sm" href="https://doi.org/10.6342/NTU201702960" />
          </div>

          <IconButton
            size="sm"
            variant="outline-primary"
            icon={faLevelDownAlt}
            onClick={() => scrollTo('portfolio', 'portfolio-isvd')}
          >
            Related Project
          </IconButton>
        </div>
      </CardB2>

      <CardB2
        id="publication-arxiv-2021-inversemv"
        href="https://arxiv.org/abs/2112.15320"
      >
        <header>
          <h4>
            InverseMV: Composing Piano Scores with a Convolutional Video-Music
            Transformer
          </h4>
          <p>
            Chin-Tung Lin, <strong>Mu Yang</strong>
            <br />
            2021, arXiv
          </p>
        </header>

        <div className="btn-cluster">
          <div className="btn-group">
            <IconButton
              size="sm"
              variant="outline-primary"
              href="/file/paper/arxiv_2021_inversemv.pdf"
              target="_blank"
              icon={faFilePdf}
            >
              Paper
            </IconButton>
            <ExtButton size="sm" href="https://arxiv.org/abs/2112.15320" />
          </div>
        </div>
      </CardB2>
    </>
  );

  const extra = (
    <>
      <CardB2
        id="publication-apcom-2019-isvd"
        imgSrc="img/venue/apcom_2019.png"
        href="http://www.apcom2019.org"
      >
        <header>
          <h4>
            Parallelized Integration of Multiple Random Sketches from Randomized
            Singular Value Decomposition with Multi-Level Pairwise Integration
            Method
          </h4>
          <p>
            <strong>Mu Yang</strong>, Dawei Chang, Weichung Wang, Su-Yuen Huang,
            Ting-Li Chen
            <br />
            2019, 7th Asian Pacific Congress on Computational Mechanics
            (APCOM’19)
          </p>
        </header>

        <div className="btn-cluster">
          <IconButton
            size="sm"
            variant="outline-primary"
            href="http://www.apcom2019.org"
            target="_blank"
            icon={faGlobe}
          >
            Conference
          </IconButton>

          <IconButton
            size="sm"
            variant="outline-primary"
            icon={faLevelDownAlt}
            onClick={() => scrollTo('portfolio', 'portfolio-isvd')}
          >
            Related Project
          </IconButton>
        </div>
      </CardB2>

      <CardB2
        id="publication-siam-cse-2017-isvd"
        imgSrc="/img/venue/siam_cse_2017.jpg"
        href="https://archive.siam.org/meetings/cse17/"
      >
        <header>
          <h4>
            Parallel Implementations of Integrated Singular Value Decomposition
            (iSVD)
          </h4>
          <p>
            <strong>Mu Yang</strong>, Su-Yun Huang, Ting-Li Chen, Weichung Wang
            <br />
            2017, 9th SIAM Conference on Computational Science and Engineering
            (SIAM CSE’17)
          </p>
        </header>

        <div className="btn-cluster">
          <IconButton
            size="sm"
            variant="outline-primary"
            href="https://archive.siam.org/meetings/cse17/"
            target="_blank"
            icon={faGlobe}
          >
            Conference
          </IconButton>

          <IconButton
            size="sm"
            variant="outline-primary"
            icon={faLevelDownAlt}
            onClick={() => scrollTo('portfolio', 'portfolio-isvd')}
          >
            Related Project
          </IconButton>
        </div>
      </CardB2>

      <CardB2
        id="publication-tjjw-jsam-2016-isvd"
        imgSrc="/img/venue/tjjw_jsam_2016.png"
        href="http://www.ncts.ntu.edu.tw/events_2_detail.php?nid=54"
      >
        <header>
          <h4>A Parallel and Hybrid Sparse Linear System Solver</h4>
          <p>
            <strong>Mu Yang</strong>, Weichung Wang
            <br />
            2016, 7th Taiwan-Japan Joint Workshop for Young Scholars in Applied
            Mathematics
          </p>
        </header>

        <div className="btn-cluster">
          <IconButton
            size="sm"
            variant="outline-primary"
            href="http://www.ncts.ntu.edu.tw/events_2_detail.php?nid=54"
            target="_blank"
            icon={faGlobe}
          >
            Workshop
          </IconButton>

          <IconButton
            tooltip="Presentation Excellence Award"
            size="sm"
            variant="outline-primary"
            icon={faAward}
          >
            Award
          </IconButton>

          <IconButton
            size="sm"
            variant="outline-primary"
            icon={faLevelDownAlt}
            onClick={() => scrollTo('portfolio', 'portfolio-hhis')}
          >
            Related Project
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
