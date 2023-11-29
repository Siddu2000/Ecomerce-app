import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Components/Footer/Footer";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
