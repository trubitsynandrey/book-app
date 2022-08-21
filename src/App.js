import { matchPath, Outlet, useNavigate } from "react-router-dom";
import { Footer } from "./components";
import {useEffect} from 'react'
import Cookies from "js-cookie";

function App() {
  const navigate = useNavigate()
  useEffect(() => {
    // проверка на кукис
    // запрос с токеном?
    if (Cookies.get('ACCESS')) {
      navigate("add-book")
    } else {
      navigate("/")
    }
    
  }, [])
  return (
    <div className="pt-[60px] relative">
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
