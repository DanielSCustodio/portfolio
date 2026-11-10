import React from 'react';

import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './styles/animations.sass';
import './styles/components/app.sass';

export function App() {
  return (
    <div id="portfolio">
      <h1>Daniel Custódio</h1>
      <Sidebar />
      <MainContent />
    </div>
  );
}
