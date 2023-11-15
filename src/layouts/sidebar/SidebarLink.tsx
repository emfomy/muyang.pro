import {
  faGithub,
  faLinkedin,
  faPython,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

////////////////////////////////////////////////////////////////////////////////

const links = [
  {
    icon: faEnvelope,
    href: 'mailto:emfomy@gmail.com',
    text: 'emfomy@gmail.com',
  },
  {
    icon: faGithub,
    href: '//github.com/emfomy',
    text: 'github.com/emfomy',
  },
  {
    icon: faPython,
    href: '//pypi.org/user/emfomy',
    text: 'pypi.org/user/emfomy',
  },
  {
    icon: faLinkedin,
    href: '//www.linkedin.com/in/emfomy',
    text: 'www.linkedin.com/in/emfomy',
  },
];

export function SidebarLink(): JSX.Element {
  // Text
  const [linkText, setLinkText] = useState<string | null>(null);
  const setTextOn = (text: string) => setLinkText(text);
  const setTextOff = () => setLinkText(null);

  // Link
  const linkComps = links.map(({ icon, href, text }, key) => (
    <a
      key={key}
      href={href}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setTextOn(text)}
      onTouchStart={() => setTextOn(text)}
    >
      <FontAwesomeIcon className="fa-fw" icon={icon} />
    </a>
  ));

  return (
    <div className="d-block" onMouseLeave={setTextOff}>
      <div className="navbar-text text-nowrap p-0" style={{ height: '2rem' }}>
        {linkText ?? '\xA0'}
      </div>
      <div className="d-flex justify-content-around my-1">{linkComps}</div>
    </div>
  );
}
