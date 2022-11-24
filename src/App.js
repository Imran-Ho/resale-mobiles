import logo from './logo.svg';
import './App.css';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import { routers } from './Route/Route';

function App() {
  
  return (
    <div className="mx-10">
      <RouterProvider router={routers}>

      </RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
