import React from 'react';

import Avatar from '../img/perfil.jpeg';

import '../styles/components/sidebar.sass';
import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Daniel Custódio" />
      <p className="title">Web Developer</p>
      <SocialNetworks />
      <InformationContainer />
      <a
        href="https://docs.google.com/uc?export=download&id=1Fvf6N4Mxz_egxrGLAWyffZfr1OEUny6d"
        className="btn"
      >
        Download Currículo
      </a>
      <p className="copywriting">
        © Copywriting 2026 - Todos os direitos reservados para Daniel Custódio
      </p>
    </aside>
  );
};

export default Sidebar;
