import stop_watch from '../images/React/stop_watch.PNG';
import stock_portfolio from '../images/React/stock_portfolio.PNG';
import movie_finder from '../images/React/movie_finder.PNG';
import currency_converter from '../images/React/currency_converter.PNG';

const ReactProjects = () => {
  return (
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
              currencies, display a chart of historical rates between two currencies, and see a list of currency rates
              for a base currency
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactProjects;
