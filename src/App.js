import Cookies from "js-cookie";
import { useEffect } from 'react';
import { Outlet, useNavigate } from "react-router-dom";
import { Footer } from "./components";

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
    <div className="pt-[62px] relative">
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
