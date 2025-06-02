import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layout/MainLayout.jsx';
import Errorpage from './pages/Errorpage.jsx';
import Home from './pages/Home.jsx';
import Quiz from './pages/Quiz.jsx';



function App() {
  const routes = createBrowserRouter([
      {
        path : "/",
        element: <MainLayout/>,
        errorElement: <Errorpage/>,
        children: [
          {
            index:true,
            element: <Home/>
          },
          {
            path: "/quiz/:title",
            element: <Quiz/>
          }
        ]
      }
  ])

  return <RouterProvider router={routes}/>
}

export default App
// https://nerdcave.com/tailwind-cheat-sheet
// https://umeshmk.github.io/Tailwindcss-cheatsheet/