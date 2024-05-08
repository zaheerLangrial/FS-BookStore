import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Course from "./pages/Course";
import Signup from "./pages/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser , setAuthUser] = useAuth()
  return (
    <BrowserRouter>
      <div className=" dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={authUser ? <Course /> : <Navigate to={'/signup'} />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </BrowserRouter>
  );
}

export default App;
