import classNames from 'classnames';
import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';

////////////////////////////////////////////////////////////////////////////////

interface CardB1Props extends React.HTMLAttributes<HTMLDivElement> {
  readonly children: React.ReactNode;
}

export function CardB1({
  children,
  className,
  ...props
}: CardB1Props): JSX.Element {
  return (
    <div {...props} className={`CardB p-3 p-lg-4 ${className}`}>
      {children}
    </div>
  );
}

////////////////////////////////////////////////////////////////////////////////

interface CardB2Props extends CardB1Props {
  readonly imgSrc?: string;
  readonly imgSrcSide?: string;
  readonly href?: string;
  readonly target?: string;
  readonly right?: boolean;
  readonly children: React.ReactNode;
}

export function CardB2({
  imgSrc,
  imgSrcSide,
  href,
  target = '_blank',
  right = false,
  children,
  ...props
}: CardB2Props): JSX.Element {
  const imgComp = !imgSrc ? null : (
    <picture>
      {!imgSrcSide ? null : (
        <source media="(min-width: 992px)" srcSet={imgSrcSide} />
      )}
      <Image rounded fluid src={imgSrc} className="w-100" />
    </picture>
  );

  return (
    <CardB1 {...props}>
      <Row className={classNames({ 'flex-row-reverse': right })}>
        <Col
          xs={12}
          lg={4}
          xl={3}
          className="d-flex align-items-center justify-content-center mb-3 mb-lg-0"
        >
          <a
            href={href}
            target={target}
            className={classNames('image w-75 w-sm-50 w-lg-100', {
              disabled: !href,
            })}
          >
            {imgComp}
          </a>
        </Col>
        <Col xs={12} lg={8} xl={9}>
          {children}
        </Col>
      </Row>
    </CardB1>
  );
}
