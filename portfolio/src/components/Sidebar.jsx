import React from 'react';

import Avatar from '../img/perfil.jpeg';

import '../styles/components/sidebar.sass';
import SocialNetworks from './SocialNetworks';

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Daniel Custódio" />
      <p className="title">Web Developer</p>
      <SocialNetworks />
      <p>informações de contato</p>
      <a href="" className="btn">
        Download Currículo
      </a>
    </aside>
  );
};

export default Sidebar;
