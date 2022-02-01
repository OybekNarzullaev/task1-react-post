import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import MainPages from "./pages/MainPages";

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  return (
    <div className="App">
      <Routes>
        <Route
          element={userInfo ? <MainPages /> : <Login />}
          path="/*"
          exact
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
