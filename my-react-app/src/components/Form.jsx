import React, { useState } from 'react';

function Form() {
  const [selectedAudio, setSelectedAudio] = useState(null);
  const [audioFile, setAudioFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAudioFile(URL.createObjectURL(file));
      setSelectedAudio(URL.createObjectURL(file));
    }
  };

  return (
    <div className='card'>
      <h1>Like music to my ears</h1>
      <img src='https://img.freepik.com/free-photo/creative-treble-clef-sign-isolated-generative-ai_169016-29569.jpg' className='circle' alt='' />

      {selectedAudio && (
        <div>
          <h2>Selected Audio:</h2>
          <audio controls src={selectedAudio}>
          </audio>

          <audio controls>
            <source src={audioFile} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>

      )}

      <div id="info">
        <h2>Autumn</h2>
        <h2>Instrumental Music</h2>

      </div>


      
      <div>
        <audio controls>
          <source src="media/GO-NEFFEX.mp3" type="audio/mpeg">
          </source>
          <input type="range" value="0"></input>

        </audio>
      </div>

      <div className='controls'>
        <div><i class="fa-solid fa-backward"></i></div>
        <div><i class="fa-solid fa-play"></i></div>
        <div><i class="fa-solid fa-forward"></i></div>
      </div>
      
    </div>



  );
}

export default Form;
