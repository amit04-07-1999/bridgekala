import React from 'react'
import Page1 from './pages/page1'
import Page2 from './pages/page2'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page1 />,
  },
  {
    path: "/estimate",
    element: <Page2 />,
  },
]);

const App = () => {



  return (
    <div>
      <RouterProvider router={router} />
      {/* <Page1 /> */}
      {/* <Page2 /> */}
    </div>
  )
}

export default App