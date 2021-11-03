import React, { useImperativeHandle, useRef } from 'react';

import { Collapse, CollapseElement } from '../../components/elements/Collapse';

////////////////////////////////////////////////////////////////////////////////

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  readonly header: React.ReactNode;
  readonly children: React.ReactNode;
  readonly extra?: React.ReactNode;
}

export interface SectionElement {
  readonly expandCollapse: () => void;
}

export const Section = React.forwardRef(function Section(
  { className, header, children, extra, ...props }: SectionProps,
  ref: React.ForwardedRef<SectionElement>,
): JSX.Element {
  const collapseRef = useRef<CollapseElement>(null);
  useImperativeHandle(ref, () => ({
    expandCollapse: () => collapseRef.current?.setOpen(true),
  }));

  const extraComponent = !extra ? null : (
    <Collapse ref={collapseRef}>{extra}</Collapse>
  );

  return (
    <div {...props} className={`Section p-3 p-md-4 p-lg-5 ${className}`}>
      <header className="mb-3 mb-md-4 text-center">{header}</header>
      {children}
      {extraComponent}
    </div>
  );
});
