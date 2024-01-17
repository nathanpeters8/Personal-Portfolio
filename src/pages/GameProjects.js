import avalanche_runner from '../images/VideoGame/avalanche-runner-mainmenu.png';
import hot_dog from '../images/VideoGame/hot_dog_stand.png';
import quest_functions from '../images/VideoGame/quest-for-functions.png';

import ProjectTemplate from './ProjectTemplate';


const GameProjects = () => {
  const projects = {
    0: {
      title: 'Avalanche Runner',
      softwares: ['Unity', 'C#', 'Blender'],
      image: avalanche_runner,
      description:
        '3D snowboard-themed endless runner video game. Compete for the highest score by collecting coins and avoiding barriers as long as possible. Includes randomized environment and coin generation, as well as a leaderboard that displays the top 10 best scores.',
    },
    1: {
      title: 'Quest For Functions',
      softwares: ['Unity', 'C#', 'Aesprite'],
      image: quest_functions,
      description:
        'Five person senior year capstone project. The game aims to teach the player fundamental concepts of programming. The player collects notes in different sections of the world with information about basic programming concepts and answers questions regarding the concepts.',
    },
    2: {
      title: 'VR Hot Dog Stand',
      softwares: ['Unity', 'C#', 'Blender', 'Oculus'],
      image: hot_dog,
      description: "VR Hot Dog Stand Simulator. Objective is to prepare hot dogs to match a given customer's order. Orders are randomized between different variations of hot dogs including or not including ketchup and/or mustard. A scoreboard keeps track of the number of correct orders and wrong orders."
    },
  };

  return (
    <div className='pt-2 pb-1 mb-4'>
      <h4 className='my-4 pb-2 pb-md-3 text-decoration-underline d-flex justify-content-md-center'>Game Development</h4>
      <div className='row overflow-scroll overflow-y-hidden flex-nowrap mt-4 mb-5'>
        {(() => {
          return Object.keys(projects).map((proj, i) => {
            return (
              <ProjectTemplate
                title={projects[i].title}
                softwares={projects[i].softwares}
                image={projects[i].image}
                description={projects[i].description}
              />
            );
          })
        })()}
      </div>
    </div>
  );
};

export default GameProjects;
