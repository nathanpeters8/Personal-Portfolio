import avalanche_runner from '../images/VideoGame/avalanche-runner-mainmenu.png';
import hot_dog from '../images/VideoGame/hot_dog_stand.png';
import quest_functions from '../images/VideoGame/quest-for-functions.png';

const GameProjects = () => {
  return (
    <div className='pt-2 pb-1 mb-4'>
      <h4 className='my-4 pb-2 pb-md-3 text-decoration-underline d-flex justify-content-md-center'>Game Development</h4>
      <div className='row overflow-scroll overflow-y-hidden flex-nowrap mt-4 mb-5'>
        <div className='col-8 col-sm-7 col-lg-5'>
          <div className='project-content'>
            <a
              target='_blank'
              href='https://github.com/nathanpeters8/Avalanche-Runner-Build'
              className='text-light text-decoration-none'
            >
              <h6 className='py-2 fst-italic text-nowrap overflow-hidden ms-1'>Avalanche Runner</h6>
              <div className='aspectRatioBox mb-3' style={{ backgroundImage: `url(${avalanche_runner})` }}></div>
            </a>
            <div id='softwares'>
              <ul className='list-group list-unstyled list-group-horizontal justify-content-center flex-wrap'>
                <li>
                  <h6 className='mx-1 list-group-item rounded-2 p-1'>Unity</h6>
                </li>
                <li>
                  <h6 className='mx-1 list-group-item rounded-2 p-1'>C#</h6>
                </li>
                <li>
                  <h6 className='mx-1 list-group-item rounded-2 p-1'>Blender</h6>
                </li>
              </ul>
            </div>
            <p className='lh-sm text-center'>
              3D snowboard-themed endless runner video game. Compete for the highest score by collecting coins and
              avoiding barriers as long as possible. Includes randomized environment and coin generation, as well as a
              leaderboard that displays the top 10 best scores.{' '}
            </p>
          </div>
        </div>
        <div className='col-8 col-sm-7 col-lg-5'>
          <div className='project-content'>
            <a
              target='_blank'
              href='https://github.com/nathanpeters8/Quest-For-Functions-Build'
              className='text-light text-decoration-none'
            >
              <h6 className='py-2 fst-italic text-nowrap overflow-hidden ms-1'>Quest For Functions</h6>
              <div className='aspectRatioBox mb-3 left' style={{ backgroundImage: `url(${quest_functions})` }}></div>
            </a>
            <div id='softwares'>
              <ul className='list-group list-unstyled list-group-horizontal justify-content-center flex-wrap'>
                <li>
                  <h6 className='mx-1 list-group-item rounded-2 p-1'>Unity</h6>
                </li>
                <li>
                  <h6 className='mx-1 list-group-item rounded-2 p-1'>C#</h6>
                </li>
                <li>
                  <h6 className='mx-1 list-group-item rounded-2 p-1'>Aesprite</h6>
                </li>
              </ul>
            </div>
            <p className='lh-sm text-center'>
              Five person senior year capstone project. The game aims to teach the player fundamental concepts of
              programming. The player collects notes in different sections of the world with information about basic
              programming concepts and answers questions regarding the concepts.
            </p>
          </div>
        </div>
        <div className='col-8 col-sm-7 col-lg-5'>
          <div className='project-content'>
            <a href='#' className='text-light text-decoration-none'>
              <h6 className='py-2 fst-italic text-nowrap overflow-hidden ms-1'>VR Hot Dog Stand</h6>
              <div className='aspectRatioBox mb-3' style={{ backgroundImage: `url(${hot_dog})` }}></div>
            </a>
            <div id='softwares'>
              <ul className='list-group list-unstyled list-group-horizontal justify-content-center flex-wrap'>
                <li>
                  <h6 className='mx-1 list-group-item rounded-2 p-1'>Unity</h6>
                </li>
                <li>
                  <h6 className='mx-1 list-group-item rounded-2 p-1'>C#</h6>
                </li>
                <li>
                  <h6 className='mx-1 list-group-item rounded-2 p-1'>Blender</h6>
                </li>
              </ul>
            </div>
            <p className='lh-sm text-center'>
              VR Hot Dog Stand Simulator. Objective is to prepare hot dogs to match a given customer's order. Orders are
              randomized between different variations of hot dogs including or not including ketchup and/or mustard. A
              scoreboard keeps track of the number of correct orders and wrong orders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameProjects;
