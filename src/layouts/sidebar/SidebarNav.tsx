import React from 'react';
import { Image, Navbar } from 'react-bootstrap';

////////////////////////////////////////////////////////////////////////////////

interface SidebarNavProps {
  readonly children: React.ReactNode;
}

export function SidebarNav({ children }: SidebarNavProps): JSX.Element {
  // Context
  return (
    <>
      <Navbar.Brand as="div" className="p-0 mx-0 my-3">
        <a href="/">
          <Image
            src="/img/avatar.jpg"
            className="d-block w-50 mx-auto"
            roundedCircle
          />
        </a>
      </Navbar.Brand>

      <Navbar.Text as="div" className="px-3 py-0">
        <h3>Mu Yang</h3>
        <p>Research Assistant</p>
        <hr />
      </Navbar.Text>

      {children}
    </>
  );
}
