import stop_watch from '../images/React/stop_watch.PNG';
import stock_portfolio from '../images/React/stock_portfolio.PNG';
import movie_finder from '../images/React/movie_finder.PNG';
import currency_converter from '../images/React/currency_converter.PNG';
import apple from '../images/WebDev/apple.png';
import newsweek from '../images/WebDev/newsweek.png';
import to_do_list from '../images/WebDev/to-do-list.png';
import shopping_cart from '../images/WebDev/shopping-cart.png';
import airbnb_news from '../images/WebDev/airbnb-news.PNG';
import math_game from '../images/WebDev/10-sec-math-game.png';
import avalanche_runner from '../images/VideoGame/avalanche-runner-mainmenu.png';
import hot_dog from '../images/VideoGame/hot_dog_stand.png';
import quest_functions from '../images/VideoGame/quest-for-functions.png';
import blackjack from '../images/JavaScript/blackjack.PNG';
import rock_paper from '../images/JavaScript/rock_paper_scissors.PNG';
import airplane_crash from '../images/DataScience/airplane-crash.png';
import customer_books from '../images/DataScience/customer_recommended_books.png';
import written_digits from '../images/DataScience/handwritten-digits.png';
import similar_text from '../images/DataScience/similar-text.png';
import { faDigging } from '@fortawesome/free-solid-svg-icons';



const Projects = () => {
  return (
    <>
      <div className='projects-background container-xxl rounded-3 pt-5' id='projects'>
        <h2 className='text-light fs-2 fw-bold d-flex justify-content-md-center'>Projects</h2>
        <p className='small fst-italic text-center'>(click on image to go to URL or GitHub repo)</p>
        <hr className='mb-5 pb-4' />
        <div className='pt-2 pb-1 mb-4'>
          <h4 className='my-4 pb-2 pb-md-3 text-decoration-underline d-flex justify-content-md-center'>
            React.js Development
          </h4>
          <div className='row overflow-scroll overflow-y-hidden flex-nowrap mt-4 mb-5 flex-row-reverse'>
            <div className='col-8 col-sm-7 col-lg-5'>
              <div className='project-content'>
                <a
                  target='_blank'
                  href='https://nathanpeters8.github.io/React-Stop-Watch/'
                  className='text-light text-decoration-none'
                >
                  <h6 className='py-2 fst-italic text-nowrap overflow-hidden ms-1'>Stop Watch App</h6>
                  <div className='aspectRatioBox mb-3' style={{ backgroundImage: `url(${stop_watch})` }}></div>
                </a>
                <div id='softwares'>
                  <ul className='list-group list-unstyled list-group-horizontal justify-content-center flex-wrap'>
                    <li>
                      <h6 className='mx-1 list-group-item rounded-2 p-1'>React</h6>
                    </li>
                    <li>
                      <h6 className='mx-1 list-group-item rounded-2 p-1'>JSX</h6>
                    </li>
                  </ul>
                </div>
                <p className='lh-sm text-center'>
                  Simple React app that simulates a stop watch using hooks, event handlers and intervals.
                </p>
              </div>
            </div>
            <div className='col-8 col-sm-7 col-lg-5'>
              <div className='project-content'>
                <a
                  target='_blank'
                  href='https://nathanpeters8.github.io/React-Stock-Portfolio/'
                  className='text-light text-decoration-none'
                >
                  <h6 className='py-2 fst-italic text-nowrap overflow-hidden ms-1'>Stock Portfolio App</h6>
                  <div className='aspectRatioBox mb-3' style={{ backgroundImage: `url(${stock_portfolio})` }}></div>
                </a>
                <div id='softwares'>
                  <ul className='list-group list-unstyled list-group-horizontal justify-content-center flex-wrap'>
                    <li>
                      <h6 className='mx-1 list-group-item rounded-2 p-1'>React.js</h6>
                    </li>
                    <li>
                      <h6 className='mx-1 list-group-item rounded-2 p-1'>JSX</h6>
                    </li>
                  </ul>
                </div>
                <p className='lh-sm text-center'>
                  Simple stock portfolio tracking application. Users can add new stocks, delete stocks, and see the
                  portfolio's value & gain/loss
                </p>
              </div>
            </div>
            <div className='col-8 col-sm-7 col-lg-5'>
              <div className='project-content'>
                <a
                  target='_blank'
                  href='https://nathanpeters8.github.io/React-Movie-Finder/'
                  className='text-light text-decoration-none'
                >
                  <h6 className='py-2 fst-italic text-nowrap overflow-hidden ms-1'>Movie Finder App</h6>
                  <div className='aspectRatioBox mb-3 left' style={{ backgroundImage: `url(${movie_finder})` }}></div>
                </a>
                <div id='softwares'>
                  <ul className='list-group list-unstyled list-group-horizontal justify-content-center flex-wrap'>
                    <li>
                      <h6 className='mx-1 list-group-item rounded-2 p-1'>React.js</h6>
                    </li>
                    <li>
                      <h6 className='mx-1 list-group-item rounded-2 p-1'>JSX</h6>
                    </li>
                    <li>
                      <h6 className='mx-1 list-group-item rounded-2 p-1'>Ajax</h6>
                    </li>
                  </ul>
                </div>
                <p className='lh-sm text-center'>
                  Movie Finder application that displays list of movies from the OMDB API based on search results.
                </p>
              </div>
            </div>
            <div className='col-8 col-sm-7 col-lg-5'>
              <div className='project-content'>
                <a
                  target='_blank'
                  href='https://nathanpeters8.github.io/Currency-Exchange-Rate-App/'
                  className='text-light text-decoration-none'
                >
                  <h6 className='py-2 fst-italic text-nowrap overflow-hidden ms-1'>Currency Exchange Rate App</h6>
                  <div className='aspectRatioBox mb-3' style={{ backgroundImage: `url(${currency_converter})` }}></div>
                </a>
                <div id='softwares'>
                  <ul className='list-group list-unstyled list-group-horizontal justify-content-center flex-wrap'>
                    <li>
                      <h6 className='mx-1 list-group-item rounded-2 p-1'>React.js</h6>
                    </li>
                    <li>
                      <h6 className='mx-1 list-group-item rounded-2 p-1'>JSX</h6>
                    </li>
                    <li>
                      <h6 className='mx-1 list-group-item rounded-2 p-1'>CSS</h6>
                    </li>
                    <li>
                      <h6 className='mx-1 list-group-item rounded-2 p-1'>Bootstrap</h6>
                    </li>
                    <li>
                      <h6 className='mx-1 list-group-item rounded-2 p-1'>Ajax</h6>
                    </li>
                  </ul>
                </div>
                <p className='lh-sm text-center'>
                  A fully responsive and interactive currency converter application. Can get conversion rate between two
                  currencies, display a chart of historical rates between two currencies, and see a list of currency
                  rates for a base currency
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='pt-2 pb-1 mb-4'>
          <h4 className='my-4 pb-2 pb-md-3 text-decoration-underline d-flex justify-content-md-center'>
            Web Development
          </h4>
          <div className='row overflow-scroll overflow-y-hidden flex-nowrap mt-4 mb-5 flex-row-reverse'>
            <div className='col-8 col-sm-7 col-lg-5'>
              <div className='project-content'>
                <a
                  target='_blank'
                  href='https://nate-apple-clone.netlify.app/'
                  className='text-light text-decoration-none'
                >
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
                  Static webpage that clones Newsweek's Homepage. Used to practice incorporating the Bootstrap 3
                  framework into a webpage.
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
                  Static webpage that clones the Airbnb News web page. Used to practice transitioning from Bootstrap 3
                  to Bootstrap 4.
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
                  A simple shopping cart that will calculate the total price of a list of items. Users can add/delete
                  items from cart, change the quantity of an item, and calculate the total price at any time. Used to
                  practice using jQuery on the front-end of the web page.
                </p>
              </div>
            </div>
            <div className='col-8 col-sm-7 col-lg-5 aligns-self-start'>
              <div className='project-content'>
                <a
                  target='_blank'
                  href='https://nate-to-do-list.netlify.app/'
                  className='text-light text-decoration-none'
                >
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
                  service. Users can add tasks, delete tasks, mark tasks as complete/active, and filter the
                  completed/active tasks. Used to practice using jQuery and Ajax to make requests to and display
                  responses from an API.{' '}
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
                  A web page where the user has to input as many correct answers as possible to basic arithmetic
                  equations within the time allowed. An additional second is added onto the timer anytime the user gets
                  an answer correct. The user can choose which math operators the equations will use, and also how big
                  the numbers in the equations can be.{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
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
                  This application simulates Rock, Paper, Scissors versus a bot. Play either one round or a best of
                  three rounds match.{' '}
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
                  This application simulates the casino game Blackjack. Play either one round by yourself without a
                  dealer, or bet "money" and play against a dealer until you run out of money.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='pt-2 pb-1 mb-4'>
          <h4 className='my-4 pb-2 pb-md-3 text-decoration-underline d-flex justify-content-md-center'>
            Game Development
          </h4>
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
                  avoiding barriers as long as possible. Includes randomized environment and coin generation, as well as
                  a leaderboard that displays the top 10 best scores.{' '}
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
                  <div
                    className='aspectRatioBox mb-3 left'
                    style={{ backgroundImage: `url(${quest_functions})` }}
                  ></div>
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
                  VR Hot Dog Stand Simulator. Objective is to prepare hot dogs to match a given customer's order. Orders
                  are randomized between different variations of hot dogs including or not including ketchup and/or
                  mustard. A scoreboard keeps track of the number of correct orders and wrong orders.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='pt-2 pb-1'>
          <h4 className='my-4 pb-2 pb-md-3 text-decoration-underline d-flex justify-content-md-center'>Data Science</h4>
          <div className='row overflow-scroll overflow-y-hidden flex-nowrap mt-4 mb-5'>
            <div className='col-8 col-sm-7 col-lg-5'>
              <div className='project-content'>
                <a
                  target='_blank'
                  href='https://github.com/nathanpeters8/Airplane-Crashes-Fatalities-From-1908-to-2009'
                  className='text-light text-decoration-none'
                >
                  <h6 className='py-2 fst-italic text-nowrap overflow-hidden ms-1'>
                    Airplane Crashes & Fatalities Analysis
                  </h6>
                  <div className='aspectRatioBox mb-3' style={{ backgroundImage: `url(${airplane_crash})` }}></div>
                </a>
                <div id='softwares'>
                  <ul className='list-group list-unstyled list-group-horizontal justify-content-center flex-wrap'>
                    <li>
                      <h6 className='mx-1 list-group-item rounded-2 p-1'>Python</h6>
                    </li>
                    <li>
                      <h6 className='mx-1 list-group-item rounded-2 p-1'>pandas</h6>
                    </li>
                    <li>
                      <h6 className='mx-1 list-group-item rounded-2 p-1'>numpy</h6>
                    </li>
                    <li>
                      <h6 className='mx-1 list-group-item rounded-2 p-1'>matplotlib</h6>
                    </li>
                    <li>
                      <h6 className='mx-1 list-group-item rounded-2 p-1'>scipy</h6>
                    </li>
                  </ul>
                </div>
                <p className='lh-sm text-center'>
                  Python module that takes airplane crash data from a CSV file, turns the data into dataframes using
                  pandas, plots the data on a graph using matplotlib, and fits linear and nonlinear regression models to
                  the graphs using scipy.
                </p>
              </div>
            </div>
            <div className='col-8 col-sm-7 col-lg-5'>
              <div className='project-content'>
                <a
                  target='_blank'
                  href='https://github.com/nathanpeters8/Book-Recommender-System'
                  className='text-light text-decoration-none'
                >
                  <h6 className='py-2 fst-italic text-nowrap overflow-hidden ms-1'>Book Recommender System</h6>
                  <div className='aspectRatioBox mb-3 left' style={{ backgroundImage: `url(${customer_books})` }}></div>
                </a>
                <div id='softwares'>
                  <ul className='list-group list-unstyled list-group-horizontal justify-content-center flex-wrap'>
                    <li>
                      <h6 className='mx-1 list-group-item rounded-2 p-1'>Python</h6>
                    </li>
                    <li>
                      <h6 className='mx-1 list-group-item rounded-2 p-1'>pandas</h6>
                    </li>
                    <li>
                      <h6 className='mx-1 list-group-item rounded-2 p-1'>numpy</h6>
                    </li>
                    <li>
                      <h6 className='mx-1 list-group-item rounded-2 p-1'>sqlite3</h6>
                    </li>
                    <li>
                      <h6 className='mx-1 list-group-item rounded-2 p-1'>random</h6>
                    </li>
                  </ul>
                </div>
                <p className='lh-sm text-center'>
                  Takes a database with books and customer names, and recommends books based on the book and a
                  customer's purchase history. Uses item-based collaborative filtering.
                </p>
              </div>
            </div>
            <div className='col-8 col-sm-7 col-lg-5'>
              <div className='project-content'>
                <a
                  target='_blank'
                  href='https://github.com/nathanpeters8/Classification-of-Handwritten-Digits'
                  className='text-light text-decoration-none'
                >
                  <h6 className='py-2 fst-italic text-nowrap overflow-hidden ms-1'>
                    Classification of Handwritten Digits
                  </h6>
                  <div className='aspectRatioBox mb-3' style={{ backgroundImage: `url(${written_digits})` }}></div>
                </a>
                <div id='softwares'>
                  <ul className='list-group list-unstyled list-group-horizontal justify-content-center flex-wrap'>
                    <li>
                      <h6 className='mx-1 list-group-item rounded-2 p-1'>Python</h6>
                    </li>
                    <li>
                      <h6 className='mx-1 list-group-item rounded-2 p-1'>pandas</h6>
                    </li>
                    <li>
                      <h6 className='mx-1 list-group-item rounded-2 p-1'>matplotlib</h6>
                    </li>
                    <li>
                      <h6 className='mx-1 list-group-item rounded-2 p-1'>scikit-learn</h6>
                    </li>
                    <li>
                      <h6 className='mx-1 list-group-item rounded-2 p-1'>scipy</h6>
                    </li>
                  </ul>
                </div>
                <p className='lh-sm text-center'>
                  Classifies 70,000 digitized handwritten digits from the MNIST dataset using a linear SVM classifier
                  implemented with SGD learning (SGDClassifier) and a softmax regression classifier
                  (LogisticRegression).
                </p>
              </div>
            </div>
            <div className='col-8 col-sm-7 col-lg-5'>
              <div className='project-content'>
                <a
                  target='_blank'
                  href='https://github.com/nathanpeters8/Similarities-Between-Text-Files'
                  className='text-light text-decoration-none'
                >
                  <h6 className='py-2 fst-italic text-nowrap overflow-hidden ms-1'>Similarities Between Text Files</h6>
                  <div
                    className='aspectRatioBox mb-3 left'
                    style={{ backgroundImage: `url(${similar_text})` }}
                  ></div>
                </a>
                <div id='softwares'>
                  <ul className='list-group list-unstyled list-group-horizontal justify-content-center flex-wrap'>
                    <li>
                      <h6 className='mx-1 list-group-item rounded-2 p-1'>Python</h6>
                    </li>
                    <li>
                      <h6 className='mx-1 list-group-item rounded-2 p-1'>pandas</h6>
                    </li>
                    <li>
                      <h6 className='mx-1 list-group-item rounded-2 p-1'>numpy</h6>
                    </li>
                    <li>
                      <h6 className='mx-1 list-group-item rounded-2 p-1'>scikit-learn</h6>
                    </li>
                    <li>
                      <h6 className='mx-1 list-group-item rounded-2 p-1'>nltk</h6>
                    </li>
                  </ul>
                </div>
                <p className='lh-sm text-center'>
                  Creates a matrix of similarities between contents of text files using the cosine similarity formula.
                </p>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <a href='https://www.altcademy.com/' className='text-white d-flex pb-2 text-decoration-none'>
            Part of Altcademy's Full Stack Program
          </a>
        </footer>
      </div>
    </>
  );
}

export default Projects;