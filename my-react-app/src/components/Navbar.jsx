import React, { useState } from 'react';

function Navbar() {
  const [activeAudio, selectAudio] =useState('');
  const [activeAud, setAudio] =useState('');
const [activeTab, setTabActive] =useState('');
console.log({activeAudio,activeAud,activeTab,})
  return (

    <div className="navbar">

      <nav>

          <li className="dropdown">
            <a className="header" href="#playlist">PLAYLIST &#9662;</a>
            <ul className="dropdown-menu">

              <li>
              <button id="#amapiano" onClick={()=>selectAudio('amapiano')}>Amapiano</button>
                {activeAudio === 'amapiano' &&  <ul id='amapiano'> 
                
                  <li>Seemah -Thando</li>
                  <br/>
                  <li>Busta 929 -Uyavala</li>
                  <br/>
                  <li>Boohle -Hamba wena</li>
                  <br/>
                  
                </ul>}
              </li>

              <li>
                <button id="#rnb" onClick={()=>setAudio('rnb')}>Rnb</button>
                { activeAud === 'rnb' && <ul id='rnb'>
                  <li>Cardi B - Ring</li>
                  <li>Nelly - Dilemma</li>
                  <li>Rihanna - Take a bow</li>

                </ul>}
              </li>

              <li>
                <button id="hip-hop" onClick={()=>setTabActive('hip-hop')}>Hip Hop</button>
                { activeTab === 'hip-hop' && <ul id="hip-hop" >
                  <li>2pac - lost you</li>
                  <li>Lil Wayne - A Milli</li>
                  <li>Lil tjay - 2Grown</li>

                </ul>}
              </li>

            </ul>
            
          </li>
      </nav>
    </div>
  );

}
export default Navbar;