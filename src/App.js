import './App.css';
import Footer from './components/public/Footer';
import Main from './components/public/Main';
import { Switch, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Navbar } from './components/public/Navbar';
import { Detail } from './components/public/Detail';
import { UserForm } from './components/public/UserForm';
import About from './components/public/About';

function App() {
  return (
    <div>

      {/* MAIN */}
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Main />} />
          <Route path={"/details/:id"} element={<Detail />} />
          <Route path={"/user-form"} element={<UserForm />} />
          <Route path={"/about"} element={<About />} />
        </Routes>
      </Router>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
