import React from 'react';

import { CardA2 } from '../../components/cards/CardA';
import { Section, SectionElement, SectionProps } from './Section';

////////////////////////////////////////////////////////////////////////////////

export type EducationProps = Omit<SectionProps, 'header' | 'children'>;

export const Education = React.forwardRef(function Education(
  props: EducationProps,
  ref: React.ForwardedRef<SectionElement>,
): JSX.Element {
  const header = <h2>Education</h2>;

  const body = (
    <>
      <CardA2
        year="2015-2017"
        title="Master of Science"
        inst="Nat'l. Taiwan Univ."
        imgSrc="/img/logo/ntu_logo.png"
      >
        <a
          href="http://www.math.ntu.edu.tw/~iams/eng"
          target="_blank"
          rel="noreferrer"
        >
          Institute of Applied Mathematical Sciences
        </a>
        ,<br />
        National Taiwan University, Taipei, Taiwan
      </CardA2>

      <CardA2
        year="2011-2015"
        title="Bachelor of Science"
        inst="Nat'l. Taiwan Univ."
        imgSrc="/img/logo/ntu_logo.png"
      >
        <a
          href="http://www.math.ntu.edu.tw/en"
          target="_blank"
          rel="noreferrer"
        >
          Department of Mathematics
        </a>
        ,<br />
        National Taiwan University, Taipei, Taiwan
      </CardA2>
    </>
  );

  return (
    <Section {...props} ref={ref} header={header}>
      {body}
    </Section>
  );
});
