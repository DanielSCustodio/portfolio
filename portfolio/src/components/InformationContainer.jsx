import React from 'react';

import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai';

import '../styles/components/informationcontainer.sass';

const informations = [
  {
    name: 'telefone',
    icon: <AiFillPhone />,
    info: '(99)9999-9999',
  },
  {
    name: 'e-mail',
    icon: <AiOutlineMail />,
    info: 'danielcustodio.dev@gmail.com',
  },
  {
    name: 'localização',
    icon: <AiFillEnvironment />,
    info: 'Três Rios - RJ',
  },
];

const InformationContainer = () => {
  return (
    <section id="information">
      {informations.map((item) => (
        <div className="info-card" id={item.name} key={item.name}>
          {item.icon}
          <div>
            <h3>{item.name}</h3>
            <p>{item.info}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default InformationContainer;
