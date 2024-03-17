import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Image from './components/Image'
import Main from './components/Main'
import RootLayout from './components/RootLayout';

function App() {
  let router=createBrowserRouter([
    {
     path:"",
     element:<RootLayout/>,
     children:[
      {
        path:"",
        element:<Main/>,
      },{
        path:"Image/:title",
        element:<Image/>,
        
      }
     ]
     }
     
    
    
  ])
  return (
  <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
