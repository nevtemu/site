import { Outlet } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="grid grid-rows-mainPage h-full min-h-screen text-lightMain bg-lightBack dark:bg-darkBack dark:text-darkMain">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}