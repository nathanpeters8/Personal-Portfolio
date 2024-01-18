import apple from '../images/WebDev/apple.png';
import newsweek from '../images/WebDev/newsweek.png';
import to_do_list from '../images/WebDev/to-do-list.png';
import shopping_cart from '../images/WebDev/shopping-cart.png';
import airbnb_news from '../images/WebDev/airbnb-news.PNG';
import math_game from '../images/WebDev/10-sec-math-game.png';

const WebDevProjects = () => {
  return (
    <div className='pt-2 pb-1 mb-4'>
      <h4 className='my-4 pb-2 pb-md-3 text-decoration-underline d-flex justify-content-md-center'>Web Development</h4>
      <div className='row overflow-scroll overflow-y-hidden flex-nowrap mt-4 mb-5 flex-row-reverse'>
        <div className='col-8 col-sm-7 col-lg-5'>
          <div className='project-content'>
            <a target='_blank' href='https://nate-apple-clone.netlify.app/' className='text-light text-decoration-none'>
              <h6 className='py-2 fst-italic text-nowrap overflow-hidden ms-1'>Apple Homepage Clone</h6>
              <div className='aspectRatioBox mb-3' style={{ backgroundImage: `url(${apple})` }}></div>
            </a>
            <div id='softwares'>
              <ul className='list-group list-unstyled list-group-horizontal justify-content-center flex-wrap'>
                <li>
                  <h6 className='mx-1 list-group-item rounded-2 p-1'>HTML</h6>
                </li>
                <li>
                  <h6 className='mx-1 list-group-item rounded-2 p-1'>CSS</h6>
                </li>
              </ul>
            </div>
            <p className='lh-sm text-center'>
              Static webpage that clones Apple's Homepage. Used to practice with HTML and CSS.
            </p>
          </div>
        </div>
        <div className='col-8 col-sm-7 col-lg-5'>
          <div className='project-content'>
            <a
              target='_blank'
              href='https://nate-newsweek-clone.netlify.app/'
              className='text-light text-decoration-none'
            >
              <h6 className='py-2 fst-italic text-nowrap overflow-hidden ms-1'>Newsweek Homepage Clone</h6>
              <div className='aspectRatioBox mb-3 left' style={{ backgroundImage: `url(${newsweek})` }}></div>
            </a>
            <div id='softwares'>
              <ul className='list-group list-unstyled list-group-horizontal justify-content-center flex-wrap'>
                <li>
                  <h6 className='mx-1 list-group-item rounded-2 p-1'>HTML</h6>
                </li>
                <li>
                  <h6 className='mx-1 list-group-item rounded-2 p-1'>CSS</h6>
                </li>
                <li>
                  <h6 className='mx-1 list-group-item rounded-2 p-1'>Bootstrap 3</h6>
                </li>
              </ul>
            </div>
            <p className='lh-sm text-center'>
              Static webpage that clones Newsweek's Homepage. Used to practice incorporating the Bootstrap 3 framework
              into a webpage.
            </p>
          </div>
        </div>
        <div className='col-8 col-sm-7 col-lg-5'>
          <div className='project-content'>
            <a
              target='_blank'
              href='https://nate-airbnb-news-clone.netlify.app/'
              className='text-light text-decoration-none'
            >
              <h6 className='py-2 fst-italic text-nowrap overflow-hidden ms-1'>Airbnb News Clone</h6>
              <div className='aspectRatioBox mb-3 left' style={{ backgroundImage: `url(${airbnb_news})` }}></div>
            </a>
            <div id='softwares'>
              <ul className='list-group list-unstyled list-group-horizontal justify-content-center flex-wrap'>
                <li>
                  <h6 className='mx-1 list-group-item rounded-2 p-1'>HTML</h6>
                </li>
                <li>
                  <h6 className='mx-1 list-group-item rounded-2 p-1'>CSS</h6>
                </li>
                <li>
                  <h6 className='mx-1 list-group-item rounded-2 p-1'>Bootstrap 4</h6>
                </li>
              </ul>
            </div>
            <p className='lh-sm text-center'>
              Static webpage that clones the Airbnb News web page. Used to practice transitioning from Bootstrap 3 to
              Bootstrap 4.
            </p>
          </div>
        </div>
        <div className='col-8 col-sm-7 col-lg-5'>
          <div className='project-content'>
            <a
              target='_blank'
              href='https://nate-jquery-shopping-cart.netlify.app/'
              className='text-light text-decoration-none'
            >
              <h6 className='py-2 fst-italic text-nowrap overflow-hidden ms-1'>Shopping Cart</h6>
              <div className='aspectRatioBox mb-3 left' style={{ backgroundImage: `url(${shopping_cart})` }}></div>
            </a>
            <div id='softwares'>
              <ul className='list-group list-unstyled list-group-horizontal justify-content-center flex-wrap'>
                <li>
                  <h6 className='mx-1 list-group-item rounded-2 p-1'>HTML</h6>
                </li>
                <li>
                  <h6 className='mx-1 list-group-item rounded-2 p-1'>CSS</h6>
                </li>
                <li>
                  <h6 className='mx-1 list-group-item rounded-2 p-1'>Bootstrap</h6>
                </li>
                <li>
                  <h6 className='mx-1 list-group-item rounded-2 p-1'>jQuery</h6>
                </li>
              </ul>
            </div>
            <p className='lh-sm text-center'>
              A simple shopping cart that will calculate the total price of a list of items. Users can add/delete items
              from cart, change the quantity of an item, and calculate the total price at any time. Used to practice
              using jQuery on the front-end of the web page.
            </p>
          </div>
        </div>
        <div className='col-8 col-sm-7 col-lg-5 aligns-self-start'>
          <div className='project-content'>
            <a target='_blank' href='https://nate-to-do-list.netlify.app/' className='text-light text-decoration-none'>
              <h6 className='py-2 fst-italic text-nowrap overflow-hidden ms-1'>To Do List</h6>
              <div
                className='aspectRatioBox mb-3 left'
                style={{ backgroundImage: `url(${to_do_list})`, backgroundPosition: 'center' }}
              ></div>
            </a>
            <div id='softwares'>
              <ul className='list-group list-unstyled list-group-horizontal justify-content-center flex-wrap'>
                <li>
                  <h6 className='mx-1 list-group-item rounded-2 p-1'>HTML</h6>
                </li>
                <li>
                  <h6 className='mx-1 list-group-item rounded-2 p-1'>CSS</h6>
                </li>
                <li>
                  <h6 className='mx-1 list-group-item rounded-2 p-1'>Bootstrap</h6>
                </li>
                <li>
                  <h6 className='mx-1 list-group-item rounded-2 p-1'>jQuery</h6>
                </li>
                <li>
                  <h6 className='mx-1 list-group-item rounded-2 p-1'>Ajax</h6>
                </li>
              </ul>
            </div>
            <p className='lh-sm text-center'>
              A to-do list web app that connects to the{' '}
              <a target='_blank' href='https://fewd-todolist-api.onrender.com/'>
                ATD-API
              </a>{' '}
              service. Users can add tasks, delete tasks, mark tasks as complete/active, and filter the completed/active
              tasks. Used to practice using jQuery and Ajax to make requests to and display responses from an API.{' '}
            </p>
          </div>
        </div>
        <div className='col-8 col-sm-7 col-lg-5 aligns-self-start'>
          <div className='project-content'>
            <a
              target='_blank'
              href='https://nate-10-second-math-game.netlify.app/'
              className='text-light text-decoration-none'
            >
              <h6 className='py-2 fst-italic text-nowrap overflow-hidden ms-1'>10 Second Math Game</h6>
              <div
                className='aspectRatioBox mb-3 left'
                style={{ backgroundImage: `url(${math_game})`, backgroundPosition: 'top' }}
              ></div>
            </a>
            <div id='softwares'>
              <ul className='list-group list-unstyled list-group-horizontal justify-content-center flex-wrap'>
                <li>
                  <h6 className='mx-1 list-group-item rounded-2 p-1'>HTML</h6>
                </li>
                <li>
                  <h6 className='mx-1 list-group-item rounded-2 p-1'>CSS</h6>
                </li>
                <li>
                  <h6 className='mx-1 list-group-item rounded-2 p-1'>Bootstrap</h6>
                </li>
                <li>
                  <h6 className='mx-1 list-group-item rounded-2 p-1'>jQuery</h6>
                </li>
              </ul>
            </div>
            <p className='lh-sm text-center'>
              A web page where the user has to input as many correct answers as possible to basic arithmetic equations
              within the time allowed. An additional second is added onto the timer anytime the user gets an answer
              correct. The user can choose which math operators the equations will use, and also how big the numbers in
              the equations can be.{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevProjects;
