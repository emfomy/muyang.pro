import React from 'react';

import { CardA2 } from '../../components/cards/CardA';
import { Section, SectionElement, SectionProps } from './Section';

////////////////////////////////////////////////////////////////////////////////

export type EmploymentProps = Omit<SectionProps, 'header' | 'children'>;

export const Employment = React.forwardRef(function Employment(
  props: EmploymentProps,
  ref: React.ForwardedRef<SectionElement>,
): JSX.Element {
  const header = <h2>Employment</h2>;

  const body = (
    <>
      <CardA2
        year="2021-Pres."
        title="Frontend Engineer"
        inst="Taiwan AI Labs"
        imgSrc="/img/logo/ailabs_logo.png"
      >
        <a href="https://ailabs.tw" target="_blank" rel="noreferrer">
          Taiwan AI Labs
        </a>
        <br />
        Taipei, Taiwan
      </CardA2>

      <CardA2
        year="2017-2021"
        title="Research Assistant"
        inst="Academia Sinica"
        imgSrc="/img/logo/sinica_logo.png"
      >
        <a
          href="https://ckip.iis.sinica.edu.tw"
          target="_blank"
          rel="noreferrer"
        >
          CKIP Lab
        </a>
        ,{' '}
        <a
          href="https://www.iis.sinica.edu.tw/en/index.html"
          target="_blank"
          rel="noreferrer"
        >
          Institute of Information Science
        </a>
        <br />
        Academia Sinica, Taipei, Taiwan
      </CardA2>

      <CardA2
        year="2015-2015"
        title="Internship"
        inst="IBM Corp."
        imgSrc="/img/logo/ibm_logo.png"
      >
        <a href="http://www.watson.ibm.com" target="_blank" rel="noreferrer">
          Thomas J. Watson Research Center
        </a>
        <br />
        IBM, Yorktown Heights, NY, USA
      </CardA2>
    </>
  );

  const extra = (
    <>
      <CardA2
        year="2013-2017"
        title="Research Assistant"
        inst="Nat'l. Taiwan Univ."
        imgSrc="/img/logo/ntu_logo.png"
      >
        Supervised by Prof. Weichung Wang
        <br />
        <a
          href="http://www.math.ntu.edu.tw/~iams/eng"
          target="_blank"
          rel="noreferrer"
        >
          Institute of Applied Mathematical Sciences
        </a>
        , National Taiwan University, Taipei, Taiwan
        <br />
        <i>
          conducting researches of high-performance parallel computing on hybrid
          CPU-GPU structures
        </i>
      </CardA2>

      <CardA2
        year="2016-2016"
        title="Research Assistant"
        inst="Nat'l. Taiwan Univ."
        imgSrc="/img/logo/ntu_logo.png"
      >
        Supervised by Prof. Semin Kim
        <br />
        <a
          href="http://www.econ.ntu.edu.tw/?locale=en"
          target="_blank"
          rel="noreferrer"
        >
          Department of Economics
        </a>
        , National Taiwan University, Taipei, Taiwan
        <br />
        <i>conducting researches of ordinal versus cardinal voting rules</i>
      </CardA2>

      <CardA2
        year="2015-2017"
        title="Teaching Assistant"
        inst="Nat'l. Taiwan Univ."
        imgSrc="/img/logo/ntu_logo.png"
      >
        <ul className="ps-4">
          <li>High Performance Computing and Deep Learning (2017S)</li>
          <li>Computational Methods and Tools for Data Science (2016F)</li>
          <li>Introduction to Scientific Computing (2016F)</li>
          <li>Introduction to Computational Mathematics (2016S)</li>
          <li>
            Software Development for Computational and Data Science (2015F)
          </li>
          <li>Numerical Linear Algebra (2015F)</li>
          <li>Calculus (2016S, 2017S)</li>
          <li>Computer Programming (2015F, 2016F)</li>
          <li>Mathematic Software (2015S)</li>
        </ul>
      </CardA2>
    </>
  );

  return (
    <Section {...props} ref={ref} header={header} extra={extra}>
      {body}
    </Section>
  );
});
