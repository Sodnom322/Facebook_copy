import HomePage from "./pages/Home/HomePage";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RootState } from "./redux/store";
import Register from "./pages/Register";

function App() {
  const { user, isFecthing, error } = useSelector(
    (state: RootState) => state.authSlice,
  );
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={user ? <HomePage /> : <Register />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/login" element={user ? <HomePage /> : <Login />} />
          <Route
            path="/register"
            element={user ? <HomePage /> : <Register />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
