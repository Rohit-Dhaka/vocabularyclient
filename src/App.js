
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Layout/Navbar';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import Home from './components/Layout/Home';
import Footer from './components/Layout/Footer';
import About from './components/Layout/About';
import Features from './components/Layout/Features';

import Homepage from './Pages/Homepage';
import DashboardLayout from './components/Layout/DashboardLayout';
import Dashboard from './components/Vocab/Dashboard';
import Addword from './components/Vocab/Addword';
import Vocabulary from './components/Vocab/Vocabulary';
import Practice from './components/Vocab/Practice';
import Profile from './components/Vocab/Profile';
import MainLayout from './MainLayout';

function App() {
  return (
<>
   
 
 
 <Routes>

  
  <Route element={<MainLayout />}>
    <Route path="/" element={<Homepage />} />
    <Route path="/about" element={<About />} />
    <Route path="/features" element={<Features />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
  </Route>

  
  <Route path="/dashboardlayout" element={<DashboardLayout />}>
    <Route index element={<Dashboard />} />
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="addword" element={<Addword />} />
    <Route path="vocabulary" element={<Vocabulary />} />
    <Route path="practice" element={<Practice />} />
    <Route path="profile" element={<Profile />} />
  </Route>

</Routes>

     

       
</>
  );
}

export default App;
