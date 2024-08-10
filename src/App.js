import "./App.css";
import './main.js'
import { createBrowserRouter, RouterProvider, Route , Outlet} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About'
import Service from './pages/Service'
import Menu from "./pages/Menu";
import Appli from "./pages/Appli";
import Contact from "./pages/Contact";


const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <About />
      <Service />
      <Menu />
      <Appli />
      <Contact />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/about",
        element:<About />
      }

    ]
  },

]);

function App() {
  return (
    <div className="App">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}


export default App;
