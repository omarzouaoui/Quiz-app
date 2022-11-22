import '../styles/App.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

/**import components*/
import Main from './Main';

/** react router*/
const router = createBrowserRouter([
  {
    path : "/",
    element : <div>Root Element</div>
  },
  {
    path : "/quiz",
    element : <div>Quiz Component</div>
  },
  {
    path : "/result",
    element : <div>Result Component</div>
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
