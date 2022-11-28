import '../styles/App.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

/**import components*/
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';
import { CheckUserExist } from '../helper/helper';


/** react router*/
const router = createBrowserRouter([
  {
    path : "/",
    element : <CheckUserExist> <Main /> </CheckUserExist> 
  },
  {
    path : "/quiz",
    element : <CheckUserExist> <Quiz /> </CheckUserExist> 
  },
  {
    path : "/result",
    element : <Result />
  },
])

function App() {
  return (
    <>
    <RouterProvider router={ router }/>
    </>
  );
}

export default App;
