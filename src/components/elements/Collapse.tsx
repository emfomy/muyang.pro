import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React, { useImperativeHandle, useState } from 'react';
import { Button, Collapse as BsCollapse } from 'react-bootstrap';

import styles from './Collapse.module.scss';

////////////////////////////////////////////////////////////////////////////////

interface CollapseProps {
  readonly children: React.ReactNode;
}

export interface CollapseElement {
  readonly setOpen: (_: boolean) => void;
}

export const Collapse = React.forwardRef(function Collapse(
  { children }: CollapseProps,
  ref: React.ForwardedRef<CollapseElement>,
): JSX.Element {
  const [open, setOpen] = useState(false);
  useImperativeHandle(ref, () => ({
    setOpen,
  }));

  return (
    <div className="border rounded">
      <Button
        onClick={() => setOpen(!open)}
        className={classNames(
          styles.Opener,
          { [styles.collapsed]: !open },
          'text-center',
          'text-dark',
          'fw-bold',
          'w-100',
        )}
        size="sm"
        variant="milk-light"
      >
        <FontAwesomeIcon className={styles.OpenerIcon1} icon={faChevronDown} />
        <span className={classNames(styles.OpenerText, 'mx-2')} />
        <FontAwesomeIcon className={styles.OpenerIcon2} icon={faChevronDown} />
      </Button>

      <BsCollapse in={open}>
        <div>{children}</div>
      </BsCollapse>
    </div>
  );
});
