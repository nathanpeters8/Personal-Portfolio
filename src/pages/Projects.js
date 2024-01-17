import apple from '../images/WebDev/apple.png';
import newsweek from '../images/WebDev/newsweek.png';
import to_do_list from '../images/WebDev/to-do-list.png';
import shopping_cart from '../images/WebDev/shopping-cart.png';
import airbnb_news from '../images/WebDev/airbnb-news.PNG';
import math_game from '../images/WebDev/10-sec-math-game.png';

import ProjectsRowTemplate from './ProjectsRowTemplate';

import { Link, Routes, Route } from 'react-router-dom';

const Projects = () => {
  const reactProjects = {
    0: {
      title: 'Stop Watch App',
      softwares: ['React', 'JSX'],
      image: require('../images/React/stop_watch.PNG'),
      links: {
        page: 'https://nathanpeters8.github.io/React-Stop-Watch/',
        github: 'https://github.com/nathanpeters8/React-Stop-Watch',
      },
      description: 'Simple React app that simulates a stop watch using hooks, event handlers and intervals.',
    },
    1: {
      title: 'Stock Portfolio App',
      softwares: ['React', 'JSX'],
      image: require('../images/React/stock_portfolio.PNG'),
      links: {
        page: 'https://nathanpeters8.github.io/React-Stock-Portfolio/',
        github: 'https://github.com/nathanpeters8/React-Stock-Portfolio',
      },
      description:
        "Simple stock portfolio tracking application. Users can add new stocks, delete stocks, and see the portfolio's value & gain/loss.",
    },
    2: {
      title: 'Movie Finder App',
      softwares: ['React', 'JSX', 'AJAX'],
      image: require('../images/React/movie_finder.PNG'),
      links: {
        page: 'https://nathanpeters8.github.io/React-Movie-Finder/',
        github: 'https://github.com/nathanpeters8/React-Movie-Finder',
      },
      description: 'Movie Finder application that displays list of movies from the OMDB API based on search results.',
    },
    3: {
      title: 'Currency Exchange Rate App',
      softwares: ['React', 'JSX', 'CSS', 'Bootstrap', 'AJAX'],
      image: require('../images/React/currency_converter.PNG'),
      links: {
        page: 'https://nathanpeters8.github.io/Currency-Exchange-Rate-App/',
        github: 'https://github.com/nathanpeters8/Currency-Exchange-Rate-App',
      },
      description:
        'A fully responsive and interactive currency converter application. Can get conversion rate between two currencies, display a chart of historical rates between two currencies, and see a list of currency rates for a base currency.',
    },
  }; 
  const webDevProjects = {
    0: {
      title: 'Apple Homepage Clone',
      softwares: ['HTML', 'CSS'],
      image: require('../images/WebDev/apple.png'),
      links: {
        page: 'https://nate-apple-clone.netlify.app/',
      },
      description: 'Simple React app that simulates a stop watch using hooks, event handlers and intervals.',
    },
    1: {
      title: 'Newsweek Homepage Clone',
      softwares: ['HTML', 'CSS', 'Bootstrap 3'],
      image: require('../images/WebDev/newsweek.png'),
      links: {
        page: 'https://nate-newsweek-clone.netlify.app/',
      },
      description:
        "Static webpage that clones Newsweek's Homepage. Used to practice incorporating the Bootstrap 3 framework into a webpage.",
    },
    2: {
      title: 'Airbnb News Clone',
      softwares: ['HTML', 'CSS', 'Bootstrap 4'],
      image: require('../images/WebDev/airbnb-news.PNG'),
      links: {
        page: 'https://nate-airbnb-news-clone.netlify.app/',
      },
      description:
        'Static webpage that clones the Airbnb News web page. Used to practice transitioning from Bootstrap 3 to Bootstrap 4.',
    },
    3: {
      title: 'Shopping Cart',
      softwares: ['HTML', 'CSS', 'Bootstrap 5', 'jQuery'],
      image: require('../images/WebDev/shopping-cart.png'),
      links: {
        page: 'https://nate-jquery-shopping-cart.netlify.app/',
      },
      description:
        'A simple shopping cart that will calculate the total price of a list of items. Users can add/delete items from cart, change the quantity of an item, and calculate the total price at any time. Used to practice using jQuery on the front-end of the web page.',
    },
    4: {
      title: 'To Do List',
      softwares: ['HTML', 'CSS', 'Bootstrap 5', 'jQuery', 'AJAX'],
      image: require('../images/WebDev/to-do-list.png'),
      links: {
        page: 'https://nate-to-do-list.netlify.app/',
      },
      description:
        'A to-do list web app that connects to the ATD-API service. Users can add tasks, delete tasks, mark tasks as complete/active, and filter the completed/active tasks. Used to practice using jQuery and Ajax to make requests to and display responses from an API. ',
    },
    5: {
      title: '10 Second Math Game',
      softwares: ['HTML', 'CSS', 'Bootstrap 5', 'jQuery'],
      image: require('../images/WebDev/10-sec-math-game.png'),
      links: {
        page: 'https://nate-10-second-math-game.netlify.app/',
      },
      description:
        'A web page where the user has to input as many correct answers as possible to basic arithmetic equations within the time allowed. An additional second is added onto the timer anytime the user gets an answer correct. The user can choose which math operators the equations will use, and also how big the numbers in the equations can be.',
    },
  }; 

  return (
    <>
      <h2 className='text-light fs-2 fw-bold d-flex justify-content-md-center'>Projects</h2>
      <p className='small fst-italic text-center'>(click on image to go to URL or GitHub repo)</p>
      <hr className='mb-5 pb-4' />
      <div className='btn-group d-flex justify-content-center gap-2 mb-5'>
        <Link to='/' className='btn btn-sm text-nowrap overflow-hidden btn-light rounded active'>
          React
        </Link>
        <Link to='/webdev' className='btn btn-sm text-nowrap overflow-hidden btn-light rounded'>
          Web Dev
        </Link>
        <Link to='/javascript' className='btn btn-sm text-nowrap overflow-hidden btn-light rounded'>
          JavaScript
        </Link>
        <Link to='/gamedev' className='btn btn-sm text-nowrap overflow-hidden btn-light rounded'>
          Game Dev
        </Link>
        <Link to='/datascience' className='btn btn-sm text-nowrap overflow-hidden btn-light rounded'>
          Data Science
        </Link>
      </div>
      <Routes>
        <Route path='/' element={<ProjectsRowTemplate projects={reactProjects} title='React.js Development'/>} />
        <Route path='/webdev' element={<ProjectsRowTemplate projects={webDevProjects} title='HTML & CSS Development'/>} />
        {/* <Route path='/webdev' element={<WebDevProjects />} />
        <Route path='/javascript' element={<JSProjects />} />
        <Route path='/gamedev' element={<GameProjects />} />
        <Route path='/datascience' element={<DataSciProjects />} /> */}
      </Routes>
    
    </>
  );
}

export default Projects;