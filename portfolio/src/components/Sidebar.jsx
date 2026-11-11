import React from 'react';

import Avatar from '../img/perfil-2026.jpeg';

import '../styles/components/sidebar.sass';
import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Daniel Custódio" />
      <p className="title">Desenvolvedor Web</p>
      <SocialNetworks />
      <InformationContainer />

      <p className="copywriting">
        © Copywriting 2026 - Todos os direitos reservados para Daniel Custódio
      </p>
    </aside>
  );
};

export default Sidebar;
