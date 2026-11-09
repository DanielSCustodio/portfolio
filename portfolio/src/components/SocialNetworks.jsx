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
    name: 'whatsapp-web',
    icon: <FaWhatsapp />,
    url: 'https://web.whatsapp.com/send?phone=24981505761&text=Ol%C3%A1!%20Conheci%20seu%20trabalho%20pelo%20site%20e%20gostaria%20de%20obter%20mais%20informa%C3%A7%C3%B5es%20sobre%20seus%20servi%C3%A7os.',
  },
  {
    name: 'whatsapp-mobile',
    icon: <FaWhatsapp />,
    url: 'https://api.whatsapp.com/send?phone=24981505761&text=Ol%C3%A1!%20Conheci%20seu%20trabalho%20pelo%20site%20e%20gostaria%20de%20obter%20mais%20informa%C3%A7%C3%B5es%20sobre%20seus%20servi%C3%A7os.',
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
