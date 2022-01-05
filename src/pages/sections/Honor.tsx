import {
  faAward,
  faExternalLinkAlt,
  faLevelUpAlt,
} from '@fortawesome/free-solid-svg-icons';
import React, { useContext } from 'react';

import { CardA1 } from '../../components/cards/CardA';
import { IconButton } from '../../components/elements/Button';
import { AppContext } from '../App';
import { Section, SectionElement, SectionProps } from './Section';

////////////////////////////////////////////////////////////////////////////////

export type HonorProps = Omit<SectionProps, 'header' | 'children'>;

export const Honor = React.forwardRef(function Honor(
  props: HonorProps,
  ref: React.ForwardedRef<SectionElement>,
): JSX.Element {
  const { scrollTo } = useContext(AppContext);

  const header = <h2>Awards & Certificates</h2>;

  const body = (
    <>
      <CardA1 id="award-fgc" imgSrc="/img/award/fgc_logo.png">
        <header>
          <h4>Top 2 Short Answer, Top 3 Multiple Choice, Out of 143 Teams.</h4>
          <p>
            2018–2019, Formosa Grand Challenge (Chinese TOEFL-like listening
            comprehension QA).{' '}
            <IconButton
              size="xs"
              variant="outline-primary"
              href="https://www.most.gov.tw/bio/ch/detail?article_uid=8f0715a3-fcf3-4ffb-9920-6245ec14e77b"
              target="_blank"
              icon={faExternalLinkAlt}
            >
              Official Post
            </IconButton>
          </p>
        </header>
      </CardA1>

      <CardA1 id="award-tjjw-jsam-2016" icon={faAward}>
        <header>
          <h4>Presentation Excellence Award</h4>
          <p>
            2016, 7th Taiwan-Japan Joint Workshop for Young Scholars in Applied
            Mathematics.{' '}
            <IconButton
              size="xs"
              variant="outline-primary"
              icon={faLevelUpAlt}
              onClick={() =>
                scrollTo('publication', 'publication-tjjw-jsam-2016-isvd')
              }
            >
              Related Workshop
            </IconButton>
          </p>
        </header>
      </CardA1>

      <CardA1 id="award-academic-ntu" imgSrc="/img/logo/ntu_logo.png">
        <header>
          <h4>Top 1 Academic Excellence Award</h4>
          <p>
            Fall 2011, Department of Mathematics, National Taiwan University
          </p>
        </header>
      </CardA1>
    </>
  );

  return (
    <Section {...props} ref={ref} header={header}>
      {body}
    </Section>
  );
});
