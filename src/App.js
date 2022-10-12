import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layouts/Main';
import Home from './components/Home/Home';
import Topics from './components/Topics/Topics';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import QuizDetails from './components/QuizDetails/QuizDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {
          path: '/',
          loader:()=> fetch('quiz.json'),
          element: <Home></Home>
        },
        {
          path: '/quiz/:quizId',
          loader: async({params})=>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element: <QuizDetails></QuizDetails>

        },
        {
          path: '/topics',
          element: <Topics></Topics>
        },
        {
          path: '/statistics',
          loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics
          
          ></Statistics>
        },
        {
          path: '/topics',
          loader:()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          
          element: <Topics></Topics>
        },

        {
          path: '/blog',
          element: <Blog></Blog>
        },
        
      ]
    },
    {
      path: '*',
      element: <div> please try. again page not found</div>

    }
   
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      
      
    </div>
  );
}

export default App;
