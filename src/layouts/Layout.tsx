import './Layout.scss';

import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React, { useImperativeHandle, useState } from 'react';
import { Button, Nav } from 'react-bootstrap';

import { Sidebar } from './sidebar/Sidebar';

////////////////////////////////////////////////////////////////////////////////

interface LayoutProps {
  readonly sidebar: React.ReactNode;
  readonly children: React.ReactNode;
}

export interface LayoutElement {
  readonly resetToggled: () => void;
}

export const Layout = React.forwardRef(function Layout(
  { sidebar, children }: LayoutProps,
  ref: React.ForwardedRef<LayoutElement>,
): JSX.Element {
  // Toggle
  const [toggled, setToggled] = useState(false);
  const resetToggled = () => setToggled(false);
  useImperativeHandle(ref, () => ({ resetToggled }));

  return (
    <div id="app">
      <Button
        id="toggler"
        className="navbar-toggler navbar-light"
        active={toggled}
        variant="outline-light"
        onClick={() => setToggled(!toggled)}
      >
        <span className="navbar-toggler-icon" />
      </Button>
      <div id="container" className={classNames({ toggled })}>
        <div id="sidebar">
          <Sidebar>{sidebar}</Sidebar>
        </div>
        <div id="content">{children}</div>
      </div>

      <Nav id="back" navbarScroll>
        <Nav.Item>
          <Nav.Link className="lh-1 p-0" href="#app" onClick={resetToggled}>
            <FontAwesomeIcon
              className="fa-2x text-primary"
              icon={faChevronCircleUp}
            />
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
});
