import { Outlet } from "react-router-dom";
import "../App.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FetchItem from "../components/fetchItem";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";

function App() {

  const fetchStatus=useSelector(store=>store.fetchStatus)


  return (
    <>
      <Header />
      <FetchItem/>
      {fetchStatus.currentlyFetch ? <LoadingSpinner/>:<Outlet/>}
      <Footer />
    </>
  );
}

export default App;
