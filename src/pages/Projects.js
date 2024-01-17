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
  const jsProjects = {
    0: {
      title: 'Rock Paper Scissors',
      softwares: ['JavaScript'],
      image: require('../images/JavaScript/rock_paper_scissors.PNG'),
      links: {
        page: 'https://replit.com/@nathanpeters8/Rock-Paper-Scissors',
      },
      description:
        'This application simulates Rock, Paper, Scissors versus a bot. Play either one round or a best of three rounds match. ',
    },
    1: {
      title: 'Blackjack',
      softwares: ['JavaScript'],
      image: require('../images/JavaScript/blackjack.PNG'),
      links: {
        page: 'https://replit.com/@nathanpeters8/Black-Jack',
      },
      description: "This application simulates the casino game Blackjack. Play either one round by yourself without a dealer, or bet \"money\" and play against a dealer until you run out of money.",
    },
  };
  const gameDevProjects = {
    0: {
      title: 'VR Hot Dog Stand',
      softwares: ['Unity', 'C#', 'Blender', 'Oculus'],
      image: require('../images/VideoGame/hot_dog_stand.png'),
      links: {
        page: '',
        github: 'https://github.com/nathanpeters8/VR-Hot-Dog-Stand-Build',
      },
      description:
        "VR Hot Dog Stand Simulator. Objective is to prepare hot dogs to match a given customer's order. Orders are randomized between different variations of hot dogs including or not including ketchup and/or mustard. A scoreboard keeps track of the number of correct orders and wrong orders.",
    },
    1: {
      title: 'Quest For Functions',
      softwares: ['Unity', 'C#', 'Aesprite'],
      image: require('../images/VideoGame/quest-for-functions.png'),
      links: {
        page: '',
        github: 'https://github.com/nathanpeters8/Quest-For-Functions-Build',
      },
      description:
        'Five person senior year capstone project. The game aims to teach the player fundamental concepts of programming. The player collects notes in different sections of the world with information about basic programming concepts and answers questions regarding the concepts.',
    },
    2: {
      title: 'Avalanche Runner',
      softwares: ['Unity', 'C#', 'Blender'],
      image: require('../images/VideoGame/avalanche-runner-mainmenu.png'),
      links: {
        page: '',
        github: 'https://github.com/nathanpeters8/Avalanche-Runner-Build',
      },
      description:
        '3D snowboard-themed endless runner video game. Compete for the highest score by collecting coins and avoiding barriers as long as possible. Includes randomized environment and coin generation, as well as a leaderboard that displays the top 10 best scores.',
    },
  };
  const dataScienceProjects = {
    0: {
      title: 'Similarities Between Text Files',
      softwares: ['Python', 'pandas', 'numpy', 'scikit-learn', 'nltk'],
      image: require('../images/DataScience/similar-text.png'),
      links: {
        page: '',
        github: 'https://github.com/nathanpeters8/Similarities-Between-Text-Files',
      },
      description:
        'Creates a matrix of similarities between contents of text files using the cosine similarity formula.',
    },
    1: {
      title: 'Classification of Handwritten Digits',
      softwares: ['Python', 'pandas', 'matplotlib', 'scikit-learn', 'scipy'],
      image: require('../images/DataScience/handwritten-digits.png'),
      links: {
        page: '',
        github: 'https://github.com/nathanpeters8/Classification-of-Handwritten-Digits',
      },
      description:
        'Classifies 70,000 digitized handwritten digits from the MNIST dataset using a linear SVM classifier implemented with SGD learning (SGDClassifier) and a softmax regression classifier (LogisticRegression).',
    },
    2: {
      title: 'Book Recommender System',
      softwares: ['Python', 'pandas', 'numpy', 'sqlite3', 'random'],
      image: require('../images/DataScience/customer_recommended_books.png'),
      links: {
        page: '',
        github: 'https://github.com/nathanpeters8/Book-Recommender-System',
      },
      description:
        "Takes a database with books and customer names, and recommends books based on the book and a customer's purchase history. Uses item-based collaborative filtering.",
    },
    3: {
      title: 'Airplane Crashes & Fatalities Analysis',
      softwares: ['Python', 'pandas', 'numpy', 'matplotlib', 'scipy'],
      image: require('../images/DataScience/airplane-crash.png'),
      links: {
        page: '',
        github: 'https://github.com/nathanpeters8/Airplane-Crashes-Fatalities-From-1908-to-2009',
      },
      description:
        'Python module that takes airplane crash data from a CSV file, turns the data into dataframes using pandas, plots the data on a graph using matplotlib, and fits linear and nonlinear regression models to the graphs using scipy.',
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
        <Route 
          path='/' 
          element={<ProjectsRowTemplate projects={reactProjects} 
          title='React.js Development' />} 
        />
        <Route
          path='/webdev'
          element={<ProjectsRowTemplate projects={webDevProjects} title='HTML & CSS Development' />}
        />
        <Route
          path='/javascript'
          element={<ProjectsRowTemplate projects={jsProjects} title='JavaScript Development' />}
        />
        <Route
          path='/gamedev'
          element={<ProjectsRowTemplate projects={gameDevProjects} title='Game Development' />}
        />
        <Route
          path='/datascience'
          element={<ProjectsRowTemplate projects={dataScienceProjects} title='Data Science Development' />}
        />
      </Routes>
    </>
  );
};

export default Projects;
