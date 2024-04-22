import './App.css';
import { BrowserRouter as Router, Routes} from 'react-router-dom';
import { Route } from 'react-router-dom';
import ReposListPage from './components/ReposListPage';
import ReposDetailPage from './components/ReposDetailPage';
import NotFound from './error/NotFound';


function App() {
  return (
      <Router>
    <div className="App">
    <ReposListPage />
      <div className="content">
        <Routes>
          <Route exact path="/" component={ReposListPage} />
          <Route path="/components/:id" component={ReposDetailPage} />
          <Route component={NotFound} />
          <Route path="/error" component={NotFound} />
        </Routes>

      </div>
  </div> 
  </Router>

  );
 }

export default App;
