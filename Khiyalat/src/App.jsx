import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landingpage from './Homepage/landingpage';
import About from './pages.jsx/about';
import Pricing from './pages.jsx/pricing';
import Developers from './pages.jsx/Developers';
import Features from './pages.jsx/features';
import Login from './siguppage/loginpage';
import Dashboard from './Dashboard.jsx/Dashobard';
import Signup from './siguppage/signuppage';
import Premium from './Dashboard.jsx/premium';
import Privacy from './pages.jsx/privacy';
import Blog from './pages.jsx/blog';
import Terms from './pages.jsx/terms';
import Cookie from './pages.jsx/cookie';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/features" element={<Features />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cookies" element={<Cookie />} />
      </Routes>
    </Router>
  )
}

export default App
