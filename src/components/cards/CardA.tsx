import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Image } from 'react-bootstrap';

import styles from './CardA.module.scss';

////////////////////////////////////////////////////////////////////////////////

interface CardA1Props extends React.HTMLAttributes<HTMLDivElement> {
  readonly imgSrc?: string;
  readonly icon?: IconDefinition;
  readonly children: React.ReactNode;
}

export function CardA1({
  imgSrc,
  icon,
  children,
  className,
  ...props
}: CardA1Props): JSX.Element {
  const imageComp = imgSrc ? (
    <Image src={imgSrc} className="w-100" />
  ) : icon ? (
    <FontAwesomeIcon className="w-100 text-milk-dark" icon={icon} size="2x" />
  ) : null;

  return (
    <div {...props} className={`CardA px-3 d-flex my-1 my-md-3 ${className}`}>
      <div
        className={`${styles.Logo} d-flex align-items-center justify-content-center me-3 my-1`}
      >
        {imageComp}
      </div>
      <div>{children}</div>
    </div>
  );
}

////////////////////////////////////////////////////////////////////////////////

interface CardA2Props extends CardA1Props {
  readonly year: string;
  readonly title: string;
  readonly inst: string; // institution
  readonly children: React.ReactNode;
}

export function CardA2({
  year,
  inst,
  title,
  children,
  ...props
}: CardA2Props): JSX.Element {
  return (
    <CardA1 {...props}>
      <h4>
        {year} | {inst}
        <br />
        {title}
      </h4>
      <div className="mb-3">{children}</div>
    </CardA1>
  );
}
