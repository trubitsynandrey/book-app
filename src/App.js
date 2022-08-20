import { Outlet } from "react-router-dom";
import { Footer } from "./components";

function App() {
  return (
    <div className="pt-[60px] relative">
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
