import "./App.css";
import "rsuite/dist/rsuite.min.css";

import { useState } from "react";

import Login from "./screen/Login";
import Home from "./screen/Home";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container">
      {isLogin ? <Home /> : <Login isLogin={isLogin} setIsLogin={setIsLogin} />}
    </div>
  );
}

export default App;
