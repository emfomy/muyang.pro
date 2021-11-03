import React from 'react';

import { Section, SectionElement, SectionProps } from './Section';

////////////////////////////////////////////////////////////////////////////////

export type AboutProps = Omit<SectionProps, 'header' | 'children'>;

export const About = React.forwardRef(function About(
  props: AboutProps,
  ref: React.ForwardedRef<SectionElement>,
): JSX.Element {
  const header = (
    <>
      <h1>Mu Yang</h1>
      <h5>
        Front-end Engineer,{' '}
        <a href="https://ailabs.tw" target="_blank" rel="noreferrer">
          Taiwan AI Labs
        </a>
      </h5>
    </>
  );

  const body = (
    <>
      <p>
        A data engineer and full‐stack developer with a research background in
        both computer science and applied mathematics domains. Skilled in
        front-end web design, deep learning, and parallel computing researches.
        Experienced in computer cluster formation and maintenance.
      </p>

      {/* TODO: Add Résumé */}
    </>
  );

  return (
    <Section {...props} ref={ref} header={header}>
      {body}
    </Section>
  );
});
