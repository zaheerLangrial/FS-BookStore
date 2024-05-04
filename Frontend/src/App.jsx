import {BrowserRouter , Route , Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Course from './pages/Course';
import Signup from './pages/Signup';

 
function App() {

  return (
    <BrowserRouter>
    <div className=' dark:bg-slate-900 dark:text-white'>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course" element={<Course />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
