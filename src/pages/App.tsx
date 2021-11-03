import React, { createContext, useRef } from 'react';
import { Nav } from 'react-bootstrap';
import { scroller } from 'react-scroll';
import useScrollSpy from 'react-use-scrollspy';

import { Layout, LayoutElement } from '../layouts/Layout';
import styles from './App.module.scss';
import { About } from './sections/About';
import { Education } from './sections/Education';
import { Employment } from './sections/Employment';
import { Honor } from './sections/Honor';
import { Portfolio } from './sections/Portfolio';
import { Publication } from './sections/Publication';
import { SectionElement } from './sections/Section';

////////////////////////////////////////////////////////////////////////////////

function createNavs() {
  return {
    about: {
      text: 'About',
      ref: useRef<HTMLSpanElement>(null),
    },
    experience: {
      text: 'Experience',
      ref: useRef<HTMLSpanElement>(null),
    },
    publication: {
      text: 'Publications',
      ref: useRef<HTMLSpanElement>(null),
    },
    honor: {
      text: 'Honors',
      ref: useRef<HTMLSpanElement>(null),
    },
    portfolio: {
      text: 'Portfolio',
      ref: useRef<HTMLSpanElement>(null),
    },
  };
}

function createSectionRefs() {
  return {
    about: useRef<SectionElement>(null),
    education: useRef<SectionElement>(null),
    employment: useRef<SectionElement>(null),
    publication: useRef<SectionElement>(null),
    honor: useRef<SectionElement>(null),
    portfolio: useRef<SectionElement>(null),
  };
}

type SectionKeys = keyof ReturnType<typeof createSectionRefs>;

////////////////////////////////////////////////////////////////////////////////

export const AppContext = createContext({
  scrollTo: (_key: SectionKeys, _id: string) => {
    return;
  },
});

////////////////////////////////////////////////////////////////////////////////

export function App(): JSX.Element {
  // Layout
  const layoutRef = useRef<LayoutElement>(null);

  // Navs
  const navs = createNavs();

  // Sections
  const sectionRefs = createSectionRefs();
  const scrollTo = (key: SectionKeys, id: string) => {
    sectionRefs[key].current?.expandCollapse();
    // TODO: use collapse's callback
    setTimeout(() => scroller.scrollTo(id, { duration: 500 }), 150);
  };

  // Sidebar
  const actionNavIdx = useScrollSpy({
    sectionElementRefs: Object.values(navs).map(({ ref }) => ref),
    offsetPx: -80,
  });
  const activeNav = Object.keys(navs)[actionNavIdx] ?? null;
  const navComponents = Object.entries(navs).map(([anchor, { text }]) => (
    <Nav.Item key={anchor}>
      <Nav.Link
        href={`#${anchor}`}
        eventKey={anchor}
        onClick={() => layoutRef.current?.resetToggled()}
      >
        {text}
      </Nav.Link>
    </Nav.Item>
  ));

  return (
    <Layout
      ref={layoutRef}
      sidebar={
        <Nav
          className="flex-column"
          variant="pills"
          activeKey={activeNav}
          navbarScroll
        >
          {navComponents}
        </Nav>
      }
    >
      <AppContext.Provider value={{ scrollTo }}>
        <div className={`${styles.Content} container px-0 px-md-3`}>
          <span id="about" ref={navs.about.ref} />
          <About ref={sectionRefs.about} className="SectionFirst" />

          <span id="experience" ref={navs.experience.ref} />
          <div className="container">
            <div className="row">
              <Education
                ref={sectionRefs.education}
                className="col-12 col-lg-6"
              />
              <Employment
                ref={sectionRefs.employment}
                className="col-12 col-lg-6"
              />
            </div>
          </div>

          <span id="publication" ref={navs.publication.ref} />
          <Publication ref={sectionRefs.publication} />

          <span id="honor" ref={navs.honor.ref} />
          <Honor ref={sectionRefs.honor} />

          <span id="portfolio" ref={navs.portfolio.ref} />
          <Portfolio ref={sectionRefs.portfolio} />
        </div>
      </AppContext.Provider>
    </Layout>
  );
}
