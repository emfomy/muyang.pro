import React from 'react';

////////////////////////////////////////////////////////////////////////////////

interface SidebarNavProps {
  readonly children: React.ReactNode;
}

export function SidebarNav({ children }: SidebarNavProps): JSX.Element {
  // Context
  return (
    <>
      <div className="navbar-brand p-0 mx-0 my-3">
        <a href="/">
          <img
            src="/img/avatar.jpg"
            className="img rounded-circle d-block w-50 mx-auto"
          />
        </a>
      </div>

      <div className="navbar-text px-3 py-0">
        <h3>Mu Yang</h3>
        <p>Research Assistant</p>
        <hr />
      </div>

      {children}
    </>
  );
}
