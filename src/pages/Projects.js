
import { Link, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

import ProjectsRowTemplate from './ProjectsRowTemplate';
import NavBar from './NavBar';
import Heading from './Heading';

const Projects = () => {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);

  const location = useLocation();


  const reactProjects = {
    0: {
      title: 'Currency Exchange Rate App',
      softwares: ['React', 'JSX', 'CSS', 'Bootstrap', 'AJAX'],
      image: require('../images/React/currency_converter.PNG'),
      urls: {
        page: 'https://nathanpeters8.github.io/Currency-Exchange-Rate-App/',
        github: 'https://github.com/nathanpeters8/Currency-Exchange-Rate-App',
      },
      description:
        'A fully responsive and interactive currency converter application. Can get conversion rate between two currencies, display a chart of historical rates between two currencies, and see a list of currency rates for a base currency.',
    },
    1: {
      title: 'Movie Finder App',
      softwares: ['React', 'JSX', 'AJAX'],
      image: require('../images/React/movie_finder.PNG'),
      urls: {
        page: 'https://nathanpeters8.github.io/React-Movie-Finder/',
        github: 'https://github.com/nathanpeters8/React-Movie-Finder',
      },
      description: 'Movie Finder application that displays list of movies from the OMDB API based on search results.',
    },
    2: {
      title: 'Stock Portfolio App',
      softwares: ['React', 'JSX'],
      image: require('../images/React/stock_portfolio.PNG'),
      urls: {
        page: 'https://nathanpeters8.github.io/React-Stock-Portfolio/',
        github: 'https://github.com/nathanpeters8/React-Stock-Portfolio',
      },
      description:
        "Simple stock portfolio tracking application. Users can add new stocks, delete stocks, and see the portfolio's value & gain/loss.",
    },
    3: {
      title: 'Stop Watch App',
      softwares: ['React', 'JSX'],
      image: require('../images/React/stop_watch.PNG'),
      urls: {
        page: 'https://nathanpeters8.github.io/React-Stop-Watch/',
        github: 'https://github.com/nathanpeters8/React-Stop-Watch',
      },
      description: 'Simple React app that simulates a stop watch using hooks, event handlers and intervals.',
    },
  };
  const rubyOnRailsProjects = {
    0: {
      title: 'Twitter Clone',
      softwares: ['Ruby on Rails', 'AWS S3', 'Mailgun'],
      image: require('../images/RubyOnRails/twitter_clone.png'),
      urls: {
        github: 'https://github.com/nathanpeters8/bewd-twitter-advanced',
      },
      description:
        'A backend API that mimics the functionality of Twitter. Users can create accounts, see a feed of tweets, post tweets with or without images, and delete tweets. This API also sends the user an email with Mailgun when they post a tweet.',
    },
    1: {
      title: 'To Do List w/ User Authentication',
      softwares: ['Ruby on Rails'],
      image: require('../images/RubyOnRails/bewd_todolist.png'),
      urls: {
        github: 'https://github.com/nathanpeters8/bewd-todolist-user-auth',
      },
      description:
        'A backend API that serves a to-do list application. Users can create accounts, log in, log out, and create, delete, and mark completed tasks.',
    },
  };
  const webDevProjects = {
    0: {
      title: '10 Second Math Game',
      softwares: ['HTML', 'CSS', 'Bootstrap 5', 'jQuery'],
      image: require('../images/WebDev/10-sec-math-game.png'),
      urls: {
        page: 'https://nate-10-second-math-game.netlify.app/',
      },
      description:
        'A web page where the user has to input as many correct answers as possible to basic arithmetic equations within the time allowed. An additional second is added onto the timer anytime the user gets an answer correct. The user can choose which math operators the equations will use, and also how big the numbers in the equations can be.',
    },
    1: {
      title: 'To Do List',
      softwares: ['HTML', 'CSS', 'Bootstrap 5', 'jQuery', 'AJAX'],
      image: require('../images/WebDev/to-do-list.png'),
      urls: {
        page: 'https://nate-to-do-list.netlify.app/',
      },
      description:
        'A to-do list web app that connects to the ATD-API service. Users can add tasks, delete tasks, mark tasks as complete/active, and filter the completed/active tasks. Used to practice using jQuery and Ajax to make requests to and display responses from an API. ',
    },
    2: {
      title: 'Shopping Cart',
      softwares: ['HTML', 'CSS', 'Bootstrap 5', 'jQuery'],
      image: require('../images/WebDev/shopping-cart.png'),
      urls: {
        page: 'https://nate-jquery-shopping-cart.netlify.app/',
      },
      description:
        'A simple shopping cart that will calculate the total price of a list of items. Users can add/delete items from cart, change the quantity of an item, and calculate the total price at any time. Used to practice using jQuery on the front-end of the web page.',
    },
    3: {
      title: 'Airbnb News Clone',
      softwares: ['HTML', 'CSS', 'Bootstrap 4'],
      image: require('../images/WebDev/airbnb-news.PNG'),
      urls: {
        page: 'https://nate-airbnb-news-clone.netlify.app/',
      },
      description:
        'Static webpage that clones the Airbnb News web page. Used to practice transitioning from Bootstrap 3 to Bootstrap 4.',
    },
    4: {
      title: 'Newsweek Homepage Clone',
      softwares: ['HTML', 'CSS', 'Bootstrap 3'],
      image: require('../images/WebDev/newsweek.png'),
      urls: {
        page: 'https://nate-newsweek-clone.netlify.app/',
      },
      description:
        "Static webpage that clones Newsweek's Homepage. Used to practice incorporating the Bootstrap 3 framework into a webpage.",
    },
    5: {
      title: 'Apple Homepage Clone',
      softwares: ['HTML', 'CSS'],
      image: require('../images/WebDev/apple.png'),
      urls: {
        page: 'https://nate-apple-clone.netlify.app/',
      },
      description: 'Simple React app that simulates a stop watch using hooks, event handlers and intervals.',
    },
  };
  const jsProjects = {
    0: {
      title: 'Blackjack',
      softwares: ['JavaScript'],
      image: require('../images/JavaScript/blackjack.PNG'),
      urls: {
        page: 'https://replit.com/@nathanpeters8/Black-Jack',
      },
      description: "This application simulates the casino game Blackjack. Play either one round by yourself without a dealer, or bet \"money\" and play against a dealer until you run out of money.",
    },
    1: {
      title: 'Rock Paper Scissors',
      softwares: ['JavaScript'],
      image: require('../images/JavaScript/rock_paper_scissors.PNG'),
      urls: {
        page: 'https://replit.com/@nathanpeters8/Rock-Paper-Scissors',
      },
      description:
        'This application simulates Rock, Paper, Scissors versus a bot. Play either one round or a best of three rounds match. ',
    },
  };
  const gameDevProjects = {
    0: {
      title: 'Avalanche Runner',
      softwares: ['Unity', 'C#', 'Blender'],
      image: require('../images/VideoGame/avalanche-runner-mainmenu.png'),
      urls: {
        game: 'https://nathanpeters8.github.io/AvalancheRunner_WebGL/',
        github: 'https://github.com/nathanpeters8/Avalanche-Runner-Build',
      },
      description:
        '3D snowboard-themed endless runner video game. Compete for the highest score by collecting coins and avoiding barriers as long as possible. Includes randomized environment and coin generation, as well as a leaderboard that displays the top 10 best scores.',
    },
    1: {
      title: 'Quest For Functions',
      softwares: ['Unity', 'C#', 'Aesprite'],
      image: require('../images/VideoGame/quest-for-functions.png'),
      urls: {
        game: 'https://nathanpeters8.github.io/QuestForFunctions_WebGL/',
        github: 'https://github.com/nathanpeters8/Quest-For-Functions-Build',
      },
      description:
        'Five person senior year capstone project. The game aims to teach the player fundamental concepts of programming. The player collects notes in different sections of the world with information about basic programming concepts and answers questions regarding the concepts.',
    },
    2: {
      title: 'VR Hot Dog Stand',
      softwares: ['Unity', 'C#', 'Blender', 'Oculus'],
      image: require('../images/VideoGame/hot_dog_stand.png'),
      urls: {
        game: 'https://nathanpeters8.github.io/HotDogStand_WebGL/',
        github: 'https://github.com/nathanpeters8/VR-Hot-Dog-Stand-Build',
      },
      description:
        "VR Hot Dog Stand Simulator. Objective is to prepare hot dogs to match a given customer's order. Orders are randomized between different variations of hot dogs including or not including ketchup and/or mustard. A scoreboard keeps track of the number of correct orders and wrong orders.",
    },
  };
  const dataScienceProjects = {
    0: {
      title: 'Airplane Crashes & Fatalities Analysis',
      softwares: ['Python', 'pandas', 'numpy', 'matplotlib', 'scipy'],
      image: require('../images/DataScience/airplane-crash.png'),
      urls: {
        github: 'https://github.com/nathanpeters8/Airplane-Crashes-Fatalities-From-1908-to-2009',
      },
      description:
        'Python module that takes airplane crash data from a CSV file, turns the data into dataframes using pandas, plots the data on a graph using matplotlib, and fits linear and nonlinear regression models to the graphs using scipy.',
    },
    1: {
      title: 'Book Recommender System',
      softwares: ['Python', 'pandas', 'numpy', 'sqlite3', 'random'],
      image: require('../images/DataScience/customer_recommended_books.png'),
      urls: {
        github: 'https://github.com/nathanpeters8/Book-Recommender-System',
      },
      description:
        "Takes a database with books and customer names, and recommends books based on the book and a customer's purchase history. Uses item-based collaborative filtering.",
    },
    2: {
      title: 'Classification of Handwritten Digits',
      softwares: ['Python', 'pandas', 'matplotlib', 'scikit-learn', 'scipy'],
      image: require('../images/DataScience/handwritten-digits.png'),
      urls: {
        github: 'https://github.com/nathanpeters8/Classification-of-Handwritten-Digits',
      },
      description:
        'Classifies 70,000 digitized handwritten digits from the MNIST dataset using a linear SVM classifier implemented with SGD learning (SGDClassifier) and a softmax regression classifier (LogisticRegression).',
    },
    3: {
      title: 'Similarities Between Text Files',
      softwares: ['Python', 'pandas', 'numpy', 'scikit-learn', 'nltk'],
      image: require('../images/DataScience/similar-text.png'),
      urls: {
        github: 'https://github.com/nathanpeters8/Similarities-Between-Text-Files',
      },
      description:
        'Creates a matrix of similarities between contents of text files using the cosine similarity formula.',
    },
  };

  const pageVariants = {
    visible: {opacity: 1, transition: {duration: 0.75}},
    hidden: {opacity: 0, transition: {duration: 0.75}},
  }

  const handlePageChange = (newPage) => {
    // moving right
    if(newPage > page) {
      console.log('right');
      setDirection(1);
    }
    //moving left
    else if(newPage < page) {
      console.log('left');
      setDirection(-1);
    }
    setPage(newPage);
  };

  return (
    <>
      <motion.div
        className='projects-background container-xxl rounded-3 px-2 px-md-0'
        id='projects'
        variants={pageVariants}
        initial='hidden'
        animate='visible'
        exit='hidden'
      >
        <div className='sm-background-image rounded-3'>
          <div className='sm-background-color'>
            <NavBar />
            <Heading />
          </div>
        </div>
        <h2 className='text-light fs-2 fw-bold d-flex justify-content-md-center mt-5'>Projects</h2>
        <hr className='mb-5 pb-4' />
        <div className='project-row-btns btn-group d-flex justify-content-center gap-2 mb-5'>
          <Link
            to='react'
            className={
              'btn btn-sm text-center overflow-hidden btn-outline-light rounded ' + (page === 0 ? 'active' : '')
            }
            onClick={() => handlePageChange(0)}
          >
            React.js
          </Link>
          <Link
            to='rubyonrails'
            className={
              'btn btn-sm text-center overflow-hidden btn-outline-light rounded ' + (page === 1 ? 'active' : '')
            }
            onClick={() => handlePageChange(1)}
          >
            Rails
          </Link>
          <Link
            to='webdev'
            className={
              'btn btn-sm text-center overflow-hidden btn-outline-light rounded ' + (page === 2 ? 'active' : '')
            }
            onClick={() => handlePageChange(2)}
          >
            HTML/CSS
          </Link>
          <Link
            to='javascript'
            className={
              'btn btn-sm text-center overflow-hidden btn-outline-light rounded ' + (page === 3 ? 'active' : '')
            }
            onClick={() => handlePageChange(3)}
          >
            JavaScript
          </Link>
          <Link
            to='gamedev'
            className={
              'btn btn-sm text-center overflow-hidden btn-outline-light rounded ' + (page === 4 ? 'active' : '')
            }
            onClick={() => handlePageChange(4)}
          >
            Game Dev
          </Link>
          <Link
            to='datascience'
            className={
              'btn btn-sm text-center overflow-hidden btn-outline-light rounded ' + (page === 5 ? 'active' : '')
            }
            onClick={() => handlePageChange(5)}
          >
            Data Science
          </Link>
        </div>
        <Routes location={location}>
          <Route
            path='react'
            element={
              <ProjectsRowTemplate projects={reactProjects} title='React.js Development' direction={direction} />
            }
          />
          <Route
            path='rubyonrails'
            element={
              <ProjectsRowTemplate projects={rubyOnRailsProjects} title='Ruby On Rails' direction={direction} />
            }
          />
          <Route
            path='webdev'
            element={
              <ProjectsRowTemplate projects={webDevProjects} title='HTML & CSS Development' direction={direction} />
            }
          />
          <Route
            path='javascript'
            element={<ProjectsRowTemplate projects={jsProjects} title='JavaScript Development' direction={direction} />}
          />
          <Route
            path='gamedev'
            element={<ProjectsRowTemplate projects={gameDevProjects} title='Game Development' direction={direction} />}
          />
          <Route
            path='datascience'
            element={
              <ProjectsRowTemplate
                projects={dataScienceProjects}
                title='Data Science Development'
                direction={direction}
              />
            }
          />
          <Route path='' element={<Navigate to='/projects/react' />} />
        </Routes>
        <footer>
          <a href='https://www.altcademy.com/' className='text-white d-flex pb-2 text-decoration-none'>
            Part of Altcademy's Full Stack Program
          </a>
        </footer>
      </motion.div>
    </>
  );
};

export default Projects;
