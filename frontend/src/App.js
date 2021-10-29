import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import StudentDashboard from './MyComponents/StudentDashboard';
import MentorDashboard from './MyComponents/MentorDashboard';

function App() {
  return (
    <Router>
      <Switch>
        
        <Route exact path='/mentordashboard'>
          <MentorDashboard />
        </Route>

        <Route exact path='/studentdashboard'>
          <StudentDashboard />
        </Route>

      </Switch>
    </Router>

  );
}

export default App;
