import './App.css'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home';
import  Login from './pages/Login';
import CreatePost  from './pages/CreatePost';
import { useState , createContext} from 'react';

export const UserContext = createContext();

function App() {
const [currentUser, setCurrentUser] = useState(null);

  return (
    <UserContext.Provider value ={[currentUser,setCurrentUser]}>
    <Router>
      <Header/>
      <Routes>
        <Route path = "/" element={<Home />} />
        <Route path = "/createpost" element={<CreatePost/>} />
        <Route path = "/login" element={<Login />} />
      </Routes>
    </Router>
    </UserContext.Provider>
  )
}

export default App
