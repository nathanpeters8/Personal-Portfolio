import stop_watch from '../images/React/stop_watch.PNG';
import stock_portfolio from '../images/React/stock_portfolio.PNG';
import movie_finder from '../images/React/movie_finder.PNG';
import currency_converter from '../images/React/currency_converter.PNG';

import ProjectTemplate from './ProjectTemplate';

const ReactProjects = () => {
  const projects = {
    0: {
      title: 'Stop Watch App',
      softwares: ['React', 'JSX'],
      image: stop_watch,
      description: 'Simple React app that simulates a stop watch using hooks, event handlers and intervals.',
    },
    1: {
      title: 'Stock Portfolio App',
      softwares: ['React', 'JSX'],
      image: stock_portfolio,
      description:
        "Simple stock portfolio tracking application. Users can add new stocks, delete stocks, and see the portfolio's value & gain/loss.",
    },
    2: {
      title: 'Movie Finder App',
      softwares: ['React', 'JSX', 'AJAX'],
      image: movie_finder,
      description: 'Movie Finder application that displays list of movies from the OMDB API based on search results.',
    },
    3: {
      title: 'Currency Exchange Rate App',
      softwares: ['React', 'JSX', 'CSS', 'Bootstrap', 'AJAX'],
      image: currency_converter,
      description: 'A fully responsive and interactive currency converter application. Can get conversion rate between two currencies, display a chart of historical rates between two currencies, and see a list of currency rates for a base currency.',
    },
  }; 

  return (
    <div className='pt-2 pb-1 mb-4'>
      <h4 className='my-4 pb-2 pb-md-3 text-decoration-underline d-flex justify-content-md-center'>
        React.js Development
      </h4>
      <div className='row overflow-scroll overflow-y-hidden flex-nowrap mt-4 mb-5 flex-row-reverse'>
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
          });
        })()}
      </div>
    </div>
  );
};

export default ReactProjects;
