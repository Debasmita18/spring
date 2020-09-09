import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>WELCOME TO 𝖕𝖆𝖑𝖔𝖒𝖆 <span role="img" aria-label="emoji">💬</span></h1>
      <p>Developed by Debasmita Dutta</p>
    </div>
    {
      users
        ? (
          <div>
            <h1>Now online :</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;