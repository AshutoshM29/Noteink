import "./App.css";
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { RequiresAuth } from "./components";
import {
  LandingPage,
  Signup,
  Login,
  Home,
  Label,
  Archive,
  Trash,
  Profile,
  NotFound,
  Logout,
} from "./pages";
import { useAuth, useAppTheme } from "./context";

function App() {
  const { isAuthorized } = useAuth();
  const { theme } = useAppTheme();

  return (
    <div className={`App ${theme}`}>
      { isAuthorized }
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/profile"
          element={
            <RequiresAuth>
              <Profile />
            </RequiresAuth>
          }
        />
        <Route
          path="/archive"
          element={
            <RequiresAuth>
              <Archive />
            </RequiresAuth>
          }
        />
        <Route
          path="/trash"
          element={
            <RequiresAuth>
              <Trash />
            </RequiresAuth>
          }
        />
        <Route
          path="/label"
          element={
            <RequiresAuth>
              <Label />
            </RequiresAuth>
          }
        />
        <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/mockman-test" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;