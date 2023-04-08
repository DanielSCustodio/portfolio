import React from 'react';

import { FaLinkedinIn, FaGithub, FaGlobe } from 'react-icons/fa';
import '../styles/components/socialnetworks.sass';

const socialNetworks = [
  {
    name: 'linkedin',
    icon: <FaLinkedinIn />,
    url: 'https://www.linkedin.com/in/danielscustodio/',
  },
  {
    name: 'github',
    icon: <FaGithub />,
    url: 'https://github.com/DanielSCustodio',
  },
  { name: 'site', icon: <FaGlobe />, url: 'https://danielcustodio.com.br/' },
];

const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a
          href={network.url}
          className="social-btn"
          id={network.name}
          key={network.name}
          target="_blank"
          rel="noreferrer"
        >
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworks;
