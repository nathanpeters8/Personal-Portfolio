import React, {useState, useEffect} from 'react';
import Unity, {UnityContent} from 'react-unity-webgl';


const unityContent = new UnityContent(
  '/AvalancheRunnerBuild/AvalancheRunner_WebGL.json',
  '/AvalancheRunnerBuild/UnityLoader.js'
);

const AvalancheRunner = () => {
  // useEffect(() => {
  //   console.log('component mounted');

  //   unityContent.on('loaded', () => {
  //     console.log('loaded game');
  //     setOnLoaded(true);
  //   });

  //   unityContent.on('quitted', () => {
  //     console.log('trying to quit game...');
  //     setQuitGame(true);
  //   })

  //   unityContent.on('error', (message) => {
  //     console.log('error occuring');
  //     setError(true);
  //     setErrorMessage(message);
  //   });
  // });

  useEffect(() => {
    console.log('component is mounting');
    return () => {
      console.log('component is unmounting');
      unityContent.remove();
    };
  });

  return(
    <>
      <h2 className='text-center'>Avalanche Runner</h2>
      <Unity unityContent={unityContent} height='800px' width='900px' />
    </>
  );
}
export default AvalancheRunner;