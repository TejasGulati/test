import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddStudent from './components/AddStudent';
import ListStudents from './components/ListStudents';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <button><a href="/add">ADD</a></button>
          <button><a href="/list">LIST</a></button>
        </nav>
        <Routes>
          <Route path="/add" element={<AddStudent />} />
          <Route path="/list" element={<ListStudents />} />
          <Route path="/" element={<AddStudent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
