import "./App.css";
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import {
  Archive,
  Home,
  Trash,
  Label,
  Logout,
  Login,
  Signup,
  LandingPage,
  Profile,
  NotFound,
} from "./pages";

function App() {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/label" element={<Label />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/mockman-test" element={<Mockman />} />
      </Routes>
  );
}

export default App;