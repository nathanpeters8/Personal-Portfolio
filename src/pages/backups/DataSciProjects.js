import airplane_crash from '../images/DataScience/airplane-crash.png';
import customer_books from '../images/DataScience/customer_recommended_books.png';
import written_digits from '../images/DataScience/handwritten-digits.png';
import similar_text from '../images/DataScience/similar-text.png';

const DataSciProjects = () => {
  return (
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
              Python module that takes airplane crash data from a CSV file, turns the data into dataframes using pandas,
              plots the data on a graph using matplotlib, and fits linear and nonlinear regression models to the graphs
              using scipy.
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
              Takes a database with books and customer names, and recommends books based on the book and a customer's
              purchase history. Uses item-based collaborative filtering.
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
              <h6 className='py-2 fst-italic text-nowrap overflow-hidden ms-1'>Classification of Handwritten Digits</h6>
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
              implemented with SGD learning (SGDClassifier) and a softmax regression classifier (LogisticRegression).
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
              <div className='aspectRatioBox mb-3 left' style={{ backgroundImage: `url(${similar_text})` }}></div>
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
  );
};

export default DataSciProjects;
