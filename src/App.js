import Cookies from "js-cookie";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { BooksProvider, Footer } from "./components";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    if (Cookies.get("ACCESS")) {
      navigate("add-book");
    } else {
      navigate("/");
    }
  }, []);
  return (
    <BooksProvider>
      <div className="pt-[62px] relative">
        <Outlet />
        <Footer />
      </div>
    </BooksProvider>
  );
}

export default App;
