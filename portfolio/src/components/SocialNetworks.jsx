import React from 'react';

import { FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa';
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
  {
    name: 'site',
    icon: <FaWhatsapp />,
    url: 'https://web.whatsapp.com/send?phone=24981505761&text=Ol%C3%A1!%20Tenho%20interesse%20em%20desenvolver%20um%20site%20para%20meu%20neg%C3%B3cio%20e%20gostaria%20de%20conhecer%20melhor%20os%20servi%C3%A7os%20e%20as%20possibilidades.',
  },
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
