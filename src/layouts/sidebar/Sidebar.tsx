import React from 'react';

import { SidebarLink } from './SidebarLink';
import { SidebarNav } from './SidebarNav';

////////////////////////////////////////////////////////////////////////////////

interface SidebarProps {
  readonly children: React.ReactNode;
}

export function Sidebar({ children }: SidebarProps): JSX.Element {
  return (
    // Here we use plain <div> with .navbar to avoid the <Nav> element turn into
    // .navbar-nav, which is not compatible with pill mode (and overwrites text
    // color of .nav-item.active).
    <div className="navbar navbar-light bg-milk-light text-center d-flex flex-column min-h-100 p-3">
      <div className="flex-fill w-100">
        <SidebarNav>{children}</SidebarNav>
      </div>
      <div className="w-100 mt-3">
        <SidebarLink />
        <hr />
        <div className="small text-muted">
          &copy; Mu Yang. All rights reserved.
        </div>
      </div>
    </div>
  );
}
