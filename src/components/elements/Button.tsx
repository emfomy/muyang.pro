import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React from 'react';
import { Button, ButtonProps, OverlayTrigger, Tooltip } from 'react-bootstrap';

////////////////////////////////////////////////////////////////////////////////

interface TooltipButtonProps extends Omit<ButtonProps, 'size'> {
  readonly size?: 'xs' | 'sm' | 'lg';
  readonly tooltip?: string;
}

export function TooltipButton({
  size: _size,
  tooltip,
  ...props
}: TooltipButtonProps): JSX.Element {
  const size = _size as 'sm' | 'lg';

  return !tooltip ? (
    <Button size={size} {...props} />
  ) : (
    <OverlayTrigger placement="top" overlay={<Tooltip>{tooltip}</Tooltip>}>
      {({ ref, ...triggerHandler }) => (
        <Button ref={ref} {...triggerHandler} size={size} {...props} />
      )}
    </OverlayTrigger>
  );
}

////////////////////////////////////////////////////////////////////////////////

interface IconButtonProps extends TooltipButtonProps {
  readonly icon: IconDefinition;
  readonly children?: React.ReactNode;
}

export function IconButton({
  icon,
  children,
  ...props
}: IconButtonProps): JSX.Element {
  return (
    <TooltipButton {...props}>
      <FontAwesomeIcon
        icon={icon}
        className={classNames({ 'me-1': !!children })}
      />
      {children}
    </TooltipButton>
  );
}
