import blackjack from '../images/JavaScript/blackjack.PNG';
import rock_paper from '../images/JavaScript/rock_paper_scissors.PNG';

const JSProjects = () => {
  return (
    <div className='pt-2 pb-1 mb-4'>
      <h4 className='my-4 pb-2 pb-md-3 text-decoration-underline d-flex justify-content-md-center'>
        JavaScript Development
      </h4>
      <div className='row overflow-y-hidden flex-nowrap mt-4 mb-5 flex-row-reverse justify-content-lg-around'>
        <div className='col-8 col-sm-7 col-lg-5'>
          <div className='project-content'>
            <a
              target='_blank'
              href='https://replit.com/@nathanpeters8/Rock-Paper-Scissors'
              className='text-light text-decoration-none'
            >
              <h6 className='py-2 fst-italic text-nowrap overflow-hidden ms-1'>Rock Paper Scissors</h6>
              <div className='aspectRatioBox mb-3' style={{ backgroundImage: `url(${rock_paper})` }}></div>
            </a>
            <div id='softwares'>
              <ul className='list-group list-unstyled list-group-horizontal justify-content-center flex-wrap'>
                <li>
                  <h6 className='mx-1 list-group-item rounded-2 p-1'>JavaScript</h6>
                </li>
              </ul>
            </div>
            <p className='lh-sm text-center'>
              This application simulates Rock, Paper, Scissors versus a bot. Play either one round or a best of three
              rounds match.{' '}
            </p>
          </div>
        </div>
        <div className='col-8 col-sm-7 col-lg-5 aligns-self-start'>
          <div className='project-content'>
            <a
              target='_blank'
              href='https://replit.com/@nathanpeters8/Black-Jack'
              className='text-light text-decoration-none'
            >
              <h6 className='py-2 fst-italic text-nowrap overflow-hidden ms-1'>Blackjack</h6>
              <div className='aspectRatioBox mb-3 left' style={{ backgroundImage: `url(${blackjack})` }}></div>
            </a>
            <div id='softwares'>
              <ul className='list-group list-unstyled list-group-horizontal justify-content-center flex-wrap'>
                <li>
                  <h6 className='mx-1 list-group-item rounded-2 p-1'>JavaScript</h6>
                </li>
              </ul>
            </div>
            <p className='lh-sm text-center'>
              This application simulates the casino game Blackjack. Play either one round by yourself without a dealer,
              or bet "money" and play against a dealer until you run out of money.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JSProjects;
