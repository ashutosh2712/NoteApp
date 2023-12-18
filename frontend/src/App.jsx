import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import './App.css'
import Header from './components/Header'
import NotesListPage from './pages/NotesListPage'
function App() {

  return (
    <Router>
      <div className='App'>
        <Header/>
        <Routes>
          <Route path="/" exact Component={NotesListPage}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
